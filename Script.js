const CONFIG = {
  ratesPerSqft: { basic: 0.35, standard: 0.55, premier: 0.85 },
  addons: { appliance_interior: 60, yard_tidy: 45, windows_interior: 35 },
  carpetPerRoom: 35,
  jobberBookingUrl: "https://example.com/jobber-booking-link",
  jobMinimum: 175
};
function currency(n){ return `$${n.toFixed(2)}`; }
function calcEstimate(){
  const sqft = parseFloat(document.getElementById('sqft').value || 0);
  const tier = document.getElementById('tier').value;
  if (!sqft || sqft < 200) { return { error: "Enter a valid square footage (200+)." }; }
  const baseRate = CONFIG.ratesPerSqft[tier] || 0;
  let subtotal = Math.max(CONFIG.jobMinimum, baseRate * sqft);
  const addonEls = document.querySelectorAll('.addon');
  const breakdown = [];
  breakdown.push(`Base (${tier} @ ${currency(baseRate)}/sqft × ${sqft} sqft): ${currency(Math.max(CONFIG.jobMinimum, baseRate*sqft))}`);
  addonEls.forEach(el => {
    if(el.checked){
      const key = el.dataset.key;
      if (key === 'carpet_shampoo') return;
      const val = CONFIG.addons[key] || 0;
      subtotal += val;
      const label = el.parentElement.textContent.trim();
      breakdown.push(`${label}: ${currency(val)}`);
    }
  });
  const rooms = parseInt(document.getElementById('carpetRooms').value || 0, 10);
  if (rooms > 0){
    const cost = rooms * CONFIG.carpetPerRoom;
    subtotal += cost;
    breakdown.push(`Carpet shampoo (${rooms} room${rooms>1?'s':''} @ ${currency(CONFIG.carpetPerRoom)}): ${currency(cost)}`);
  }
  return { sqft, tier, subtotal, breakdown };
}
function renderEstimate(){
  const res = calcEstimate();
  const out = document.getElementById('result');
  if (res.error){ out.textContent = res.error; return; }
  const lines = [
    `Estimated Total: ${currency(res.subtotal)}`,
    '',
    'Breakdown:',
    ...res.breakdown,
    '',
    'Note: This is an instant estimate. Final quote may vary after a brief walkthrough.'
  ];
  out.textContent = lines.join('\n');
}
function copySummary(){
  const res = calcEstimate();
  if (res.error) return;
  const lines = [
    `A&K Property Solutions - Instant Estimate`,
    `Tier: ${res.tier}`,
    `Square Footage: ${res.sqft}`,
    `Estimated Total: ${currency(res.subtotal)}`,
    `Breakdown:`,
    ...res.breakdown,
    '',
    'To book: visit our website and click Book a Job.'
  ];
  navigator.clipboard.writeText(lines.join('\n'));
  const btn = document.getElementById('copyBtn');
  btn.textContent = "Copied!";
  setTimeout(()=>btn.textContent="Copy Summary", 1500);
}
document.getElementById('calcBtn').addEventListener('click', renderEstimate);
document.getElementById('copyBtn').addEventListener('click', copySummary);
document.getElementById('year').textContent = new Date().getFullYear();
const jobberLink = document.getElementById('jobberLink');
if (CONFIG.jobberBookingUrl && CONFIG.jobberBookingUrl.startsWith('http')){
  jobberLink.href = CONFIG.jobberBookingUrl;
} else {
  jobberLink.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Add your Jobber public booking link in script.js (CONFIG.jobberBookingUrl)');
  });
}
