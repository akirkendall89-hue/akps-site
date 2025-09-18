:root{
  /* Brand in navy + clean light UI */
  --navy:#0d2240;      /* primary accent (matches logo) */
  --navy-2:#173057;    /* darker hover */
  --ink:#0c1116;       /* headings/body on light bg */
  --muted:#6b7280;     /* subdued text */
  --bg:#ffffff;        /* page background */
  --card:#f7f8fb;      /* card background */
  --border:#e6e9ef;    /* subtle borders */
}

*{box-sizing:border-box}
html,body{
  margin:0; padding:0;
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  background:var(--bg); color:var(--ink);
}
.container{max-width:1100px;margin:0 auto;padding:0 20px}

/* Header */
.header{
  display:flex;align-items:center;justify-content:space-between;
  padding:14px 0;border-bottom:1px solid var(--border);
  position:sticky;top:0;background:rgba(255,255,255,.9);backdrop-filter:blur(8px);z-index:10
}
.brand{display:flex;gap:12px;align-items:center;text-decoration:none;color:inherit}
.brand-mark{height:44px;width:auto;display:block}
.brand-text h1{font-size:1.05rem;margin:0}
.brand-text p{margin:2px 0 0 0;color:var(--muted);font-size:.92rem}
nav a{color:var(--navy);text-decoration:none;margin-left:18px;font-weight:600;opacity:.9}
nav a:hover{opacity:1;color:var(--navy-2)}

/* Hero */
.hero{display:grid;grid-template-columns:1.2fr .8fr;gap:28px;align-items:center;padding:38px 0}
.hero-bullets{margin:14px 0 0 0;padding-left:18px;color:var(--muted)}
.hero-card{
  background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px;
  display:grid;grid-template-columns:repeat(3,1fr);gap:12px;text-align:center
}
.kpi-num{display:block;font-weight:700;color:var(--navy);font-size:1.1rem}
.kpi-label{display:block;color:var(--muted);font-size:.85rem}

/* Sections */
.section{padding:44px 0;border-top:1px solid var(--border)}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px}
.muted{color:var(--muted)}
.small{font-size:.9rem}

/* Tiers */
.tiers{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:12px}
.tier{background:#fff;border:1px solid var(--border);border-radius:12px;padding:18px}
.tier.featured{border-color:var(--navy)}

/* Quote form */
.quote-form{background:#fff;border:1px solid var(--border);border-radius:12px;padding:18px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
label span{display:block;margin-bottom:6px;color:var(--muted);font-size:.95rem}
input,select{
  width:100%;padding:12px;border-radius:10px;border:1px solid var(--border);
  background:#fff;color:var(--ink)
}
.addons{margin-top:14px;border:1px dashed var(--border);border-radius:10px;padding:12px}
.addons label{margin-right:14px;display:inline-flex;gap:6px;align-items:center;margin-bottom:8px}
.inline-input{width:110px;margin-left:6px}
.result{margin-top:14px;background:#fafbfe;border:1px solid var(--border);border-radius:10px;padding:14px;white-space:pre-wrap}

/* Buttons */
.btn{padding:12px 16px;border-radius:10px;border:1px solid var(--border);text-decoration:none;display:inline-block}
.btn.primary{background:var(--navy);border-color:var(--navy);color:#fff}
.btn.primary:hover{background:var(--navy-2);border-color:var(--navy-2)}
.btn.ghost{background:transparent;color:var(--navy);border-color:var(--navy)}
.btn.ghost:hover{background:#eef3ff}

/* Footer */
.footer{padding:24px 0;border-top:1px solid var(--border);margin-top:28px;color:var(--muted)}

/* Responsive */
@media (max-width:900px){
  .hero{grid-template-columns:1fr}
  .cards,.tiers,.grid{grid-template-columns:1fr}
  nav a{margin-left:12px}
}