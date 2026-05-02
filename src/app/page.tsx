export const metadata = {
  title: "JasoDatos | Datos claros para vender, reponer y controlar mejor",
  description:
    "JasoDatos convierte archivos de ventas e inventario en dashboards simples, alertas de stock y reportes listos para tomar decisiones comerciales.",
  openGraph: {
    title: "JasoDatos | Deja de adivinar y decide con datos",
    description:
      "Sube tu CSV y obtén KPIs, stock en riesgo, productos dormidos y reportes listos para compartir.",
    url: "https://jasodatos.com",
    siteName: "JasoDatos",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const css = `
:root{
  --bg:#070A1F;
  --bg2:#120A3D;
  --surface:rgba(31,39,103,.72);
  --surface2:rgba(42,52,134,.82);
  --surface3:rgba(255,255,255,.06);
  --text:#F8FAFC;
  --muted:#C7D2FE;
  --soft:#E0E7FF;
  --line:rgba(255,255,255,.13);
  --brand1:#7FB2FF;
  --brand2:#4F46E5;
  --brand3:#8B5CF6;
  --success:#22C55E;
  --danger:#EF4444;
  --warning:#F59E0B;
  --shadow:0 28px 90px rgba(0,0,0,.35);
  --radius:24px;
  --radius2:32px;
}

*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
html,body{padding:0;margin:0;}
body{
  min-height:100vh;
  color:var(--text);
  font-family:Arial, Helvetica, sans-serif;
  background:
    radial-gradient(1100px 680px at 50% -120px, rgba(127,178,255,.32), transparent 62%),
    radial-gradient(900px 560px at 0% 12%, rgba(139,92,246,.22), transparent 58%),
    radial-gradient(760px 560px at 100% 20%, rgba(34,197,94,.12), transparent 56%),
    linear-gradient(135deg,var(--bg),var(--bg2));
}
body::before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  background-image:
    linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
  background-size:56px 56px;
  mask-image:linear-gradient(to bottom, rgba(0,0,0,.62), transparent 72%);
}
a{color:inherit;text-decoration:none;}
main{min-height:100vh;overflow-x:hidden;}
.container{width:min(1180px, calc(100% - 40px));margin:0 auto;}

.header{
  position:sticky;
  top:0;
  z-index:50;
  background:rgba(7,10,31,.72);
  backdrop-filter:blur(18px);
  border-bottom:1px solid var(--line);
}
.headerInner{
  min-height:76px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
}
.brand{
  display:flex;
  align-items:center;
  gap:12px;
  font-weight:900;
  letter-spacing:.2px;
}
.brandMark{
  width:40px;
  height:40px;
  border-radius:13px;
  display:grid;
  place-items:center;
  color:#fff;
  font-weight:950;
  background:linear-gradient(135deg,var(--brand1),var(--brand3));
  box-shadow:0 12px 30px rgba(79,70,229,.35);
}
.brandName{font-size:1.1rem;}
.nav{
  display:flex;
  align-items:center;
  gap:20px;
  flex-wrap:wrap;
}
.nav a{
  color:var(--muted);
  font-weight:750;
  font-size:.95rem;
  transition:.18s ease;
}
.nav a:hover{color:#fff;}
.headerCtas{display:flex;align-items:center;gap:12px;flex-wrap:wrap;}

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-height:46px;
  padding:0 18px;
  border-radius:14px;
  border:1px solid transparent;
  font-weight:900;
  font-size:.95rem;
  cursor:pointer;
  transition:transform .16s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
}
.btn:hover{transform:translateY(-1px);}
.btnPrimary{
  color:#fff;
  background:linear-gradient(135deg,var(--success), #16a34a);
  box-shadow:0 16px 34px rgba(34,197,94,.24);
}
.btnPrimary:hover{box-shadow:0 20px 42px rgba(34,197,94,.32);}
.btnGhost{
  color:#fff;
  background:rgba(255,255,255,.06);
  border-color:rgba(255,255,255,.16);
}
.btnGhost:hover{background:rgba(255,255,255,.1);}

.pill{
  display:inline-flex;
  align-items:center;
  padding:10px 14px;
  border-radius:999px;
  background:rgba(127,178,255,.1);
  border:1px solid rgba(127,178,255,.22);
  color:#dbe7ff;
  font-weight:850;
  font-size:.92rem;
}
.eyebrow{
  display:inline-block;
  color:#7FB2FF;
  text-transform:uppercase;
  letter-spacing:.16em;
  font-size:.72rem;
  font-weight:950;
}
.h1{
  margin:18px 0;
  font-size:clamp(2.7rem,5vw,5rem);
  line-height:.98;
  letter-spacing:-.05em;
  max-width:720px;
}
.h2{
  margin:0 0 12px;
  font-size:clamp(1.7rem,3vw,2.55rem);
  line-height:1.08;
  letter-spacing:-.03em;
}
.h3{margin:0 0 10px;font-size:1.18rem;line-height:1.2;}
.p,.sub,.sectionLead{color:var(--muted);line-height:1.72;font-size:1.04rem;}
.sub{max-width:700px;font-size:1.08rem;}
.sectionTitleLarge{
  font-size:clamp(2rem,3.8vw,3.4rem);
  line-height:1.02;
  letter-spacing:-.045em;
  margin:10px 0 14px;
  max-width:820px;
}
.sectionLead{max-width:760px;}
.muted{color:var(--muted);}
.small{font-size:.92rem;color:var(--muted);}

.hero{padding:78px 0 38px;}
.heroGrid{
  display:grid;
  grid-template-columns:1.02fr .98fr;
  gap:48px;
  align-items:center;
}
.ctaRow{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:28px;}
.heroMiniProof{margin-top:22px;display:flex;gap:12px;flex-wrap:wrap;}
.heroMiniProofItem{
  display:flex;
  align-items:center;
  gap:10px;
  padding:12px 14px;
  border-radius:16px;
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.1);
  color:#eef2ff;
  font-weight:800;
  font-size:.93rem;
}
.dot{
  width:10px;
  height:10px;
  border-radius:999px;
  background:linear-gradient(135deg,var(--success), #4ade80);
  box-shadow:0 0 0 6px rgba(34,197,94,.13);
  flex:0 0 auto;
}
.heroTrust{margin-top:24px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;}
.heroTrustItem{
  padding:16px 18px;
  border-radius:18px;
  background:linear-gradient(180deg,rgba(39,47,112,.55),rgba(26,31,82,.55));
  border:1px solid rgba(255,255,255,.09);
  box-shadow:0 12px 30px rgba(0,0,0,.18);
}
.heroTrustValue{font-size:1rem;font-weight:950;color:#fff;text-transform:lowercase;margin-bottom:4px;}
.heroTrustLabel{color:var(--muted);font-size:.9rem;}
.heroVisual{position:relative;}
.productShowcase{position:relative;min-height:650px;display:flex;align-items:center;justify-content:center;}
.showcaseGlow{
  position:absolute;
  inset:10% 12%;
  background:
    radial-gradient(circle at 30% 30%, rgba(127,178,255,.34), transparent 35%),
    radial-gradient(circle at 70% 65%, rgba(139,92,246,.30), transparent 38%);
  filter:blur(40px);
  opacity:.9;
}
.mainMockup{
  position:relative;
  z-index:2;
  width:min(100%,560px);
  padding:22px;
  border-radius:28px;
  background:linear-gradient(180deg,rgba(47,58,145,.92),rgba(28,34,92,.95));
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 26px 90px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.08);
}
.mockupTopBar{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:18px;}
.mockupBrand{display:flex;align-items:center;gap:10px;font-weight:850;}
.smallMark{width:34px;height:34px;border-radius:10px;font-size:.92rem;}
.mockupStatus{
  padding:8px 12px;
  border-radius:999px;
  background:rgba(34,197,94,.14);
  border:1px solid rgba(34,197,94,.22);
  color:#d1fae5;
  font-size:.82rem;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.04em;
}
.mockupStats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-bottom:16px;}
.mockupStatCard{padding:16px;border-radius:18px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);}
.mockupStatLabel{display:block;color:var(--muted);font-size:.82rem;text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px;}
.mockupStatCard strong{display:block;font-size:1.6rem;line-height:1;margin-bottom:6px;}
.mockupStatCard small{color:var(--muted);font-size:.82rem;}
.mockupPanel{margin-top:10px;padding:18px;border-radius:20px;background:rgba(8,14,48,.34);border:1px solid rgba(255,255,255,.08);}
.mockupPanelHeader{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px;font-weight:850;}
.panelLink{color:#c7d2fe;font-size:.9rem;}
.riskRow{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.08);}
.riskRow:last-child{border-bottom:none;padding-bottom:0;}
.riskBadge{padding:8px 12px;border-radius:999px;font-size:.82rem;font-weight:900;text-transform:lowercase;}
.riskBadge.danger{color:#ffe4e6;background:rgba(239,68,68,.18);border:1px solid rgba(239,68,68,.22);}
.riskBadge.warning{color:#fff7ed;background:rgba(245,158,11,.18);border:1px solid rgba(245,158,11,.22);}
.mockupInsight{margin-top:16px;padding:16px 18px;border-radius:18px;background:linear-gradient(135deg,rgba(34,197,94,.18),rgba(79,70,229,.16));border:1px solid rgba(255,255,255,.08);}
.mockupInsightTitle{font-weight:950;margin-bottom:8px;text-transform:uppercase;font-size:.82rem;letter-spacing:.05em;color:#d1fae5;}
.mockupInsight p{margin:0;color:#eef2ff;line-height:1.55;font-size:.95rem;}
.floatingCard{
  position:absolute;
  z-index:3;
  width:220px;
  padding:16px;
  border-radius:18px;
  background:rgba(16,20,57,.9);
  border:1px solid rgba(255,255,255,.11);
  box-shadow:0 16px 40px rgba(0,0,0,.28);
}
.floatingCard strong{display:block;margin:6px 0;font-size:1rem;line-height:1.2;}
.floatingCard small{color:var(--muted);line-height:1.45;}
.floatingCardA{top:38px;right:-14px;transform:rotate(2deg);}
.floatingCardB{left:-10px;bottom:40px;transform:rotate(-2deg);}
.floatingLabel{
  display:inline-flex;
  align-items:center;
  padding:6px 10px;
  border-radius:999px;
  background:rgba(127,178,255,.14);
  border:1px solid rgba(127,178,255,.2);
  color:#dbeafe;
  font-size:.76rem;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.04em;
}
.floatingLabel.green{background:rgba(34,197,94,.14);border-color:rgba(34,197,94,.2);color:#dcfce7;}

.section{padding:58px 0;}
.sectionAlt{padding-top:76px;}
.signalBand{padding:24px 0 12px;}
.signalBandInner{padding:22px 0 4px;}
.signalBandHeader{margin-bottom:24px;}
.signalGrid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:18px;}
.signalCard{
  background:linear-gradient(180deg,rgba(40,49,120,.78),rgba(26,31,82,.78));
  border:1px solid rgba(255,255,255,.08);
  border-radius:24px;
  padding:20px;
  box-shadow:0 16px 48px rgba(0,0,0,.18);
}
.signalCardPrimary{grid-row:span 2;}
.signalCardWide{grid-column:span 2;}
.signalCardTop{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px;}
.signalChip{display:inline-flex;align-items:center;padding:6px 10px;border-radius:999px;font-size:.74rem;font-weight:950;text-transform:uppercase;letter-spacing:.04em;}
.signalChip.good{background:rgba(34,197,94,.15);color:#dcfce7;border:1px solid rgba(34,197,94,.18);}
.signalChip.warn{background:rgba(245,158,11,.15);color:#fef3c7;border:1px solid rgba(245,158,11,.18);}
.signalChip.blue{background:rgba(127,178,255,.14);color:#dbeafe;border:1px solid rgba(127,178,255,.18);}
.signalChip.purple{background:rgba(139,92,246,.16);color:#ede9fe;border:1px solid rgba(139,92,246,.18);}
.signalMeta{color:var(--muted);font-size:.82rem;}
.signalBigNumber{font-size:2.8rem;line-height:1;font-weight:950;margin:8px 0 14px;}
.signalMiniNumber{font-size:1.7rem;line-height:1;font-weight:950;margin:8px 0 12px;}
.signalBar{height:10px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden;margin-bottom:14px;}
.signalBar span{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#22c55e 0%,#7FB2FF 100%);}
.signalText{color:var(--muted);line-height:1.65;margin:0;}
.signalTitle{margin:8px 0 14px;font-size:1.45rem;line-height:1.15;}
.signalActions{display:flex;gap:10px;flex-wrap:wrap;}
.miniTag{padding:8px 10px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);color:#e2e8f0;font-size:.78rem;font-weight:900;text-transform:uppercase;}

.enterpriseGrid{display:grid;grid-template-columns:1.06fr .94fr;gap:28px;align-items:center;}
.enterprisePoints{margin-top:24px;display:grid;gap:14px;}
.enterprisePoint{display:flex;gap:16px;padding:18px;border-radius:20px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);}
.enterprisePointNumber{width:42px;height:42px;border-radius:14px;display:grid;place-items:center;font-weight:950;color:#fff;background:linear-gradient(135deg,var(--brand1),var(--brand3));flex:0 0 auto;}
.enterprisePoint h3{margin:0 0 6px;}
.enterprisePoint p{margin:0;color:var(--muted);line-height:1.65;}
.analysisPanel{padding:22px;border-radius:28px;background:linear-gradient(180deg,rgba(43,54,138,.86),rgba(25,31,86,.92));border:1px solid rgba(255,255,255,.08);box-shadow:0 22px 60px rgba(0,0,0,.22);}
.analysisPanelHeader{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;font-weight:850;}
.analysisHeaderTag{padding:8px 10px;border-radius:999px;background:rgba(34,197,94,.15);color:#dcfce7;font-size:.78rem;font-weight:950;}
.analysisMetric{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.08);}
.analysisMetric:last-child{border-bottom:none;}
.analysisMetric strong{display:block;margin-bottom:4px;}
.analysisMetric small{color:var(--muted);}
.analysisBars{display:flex;flex-direction:column;gap:8px;width:180px;}
.analysisBars span{display:block;height:10px;border-radius:999px;background:linear-gradient(90deg,#7FB2FF 0%,#8B5CF6 100%);}
.analysisStatus{padding:10px 12px;border-radius:999px;font-size:.82rem;font-weight:950;white-space:nowrap;}
.analysisStatus.good{background:rgba(34,197,94,.16);color:#dcfce7;}
.analysisStatus.warn{background:rgba(245,158,11,.16);color:#fef3c7;}
.analysisStatus.danger{background:rgba(239,68,68,.16);color:#fee2e2;}

.dualFeatureGrid{display:grid;grid-template-columns:1.05fr .95fr;gap:18px;align-items:stretch;}
.featureCardLarge,.featureQuoteCard{background:linear-gradient(180deg,rgba(40,49,120,.78),rgba(26,31,82,.78));border:1px solid rgba(255,255,255,.08);border-radius:26px;padding:28px;}
.deliverablesList{margin-top:22px;display:grid;gap:14px;}
.deliverableItem{display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.08);}
.deliverableItem:last-child{border-bottom:none;}
.checkDot{width:24px;height:24px;border-radius:999px;display:grid;place-items:center;flex:0 0 auto;background:rgba(34,197,94,.16);color:#dcfce7;font-size:.82rem;font-weight:950;}
.featureQuoteCard{display:flex;flex-direction:column;justify-content:center;}
.quoteBadge{display:inline-flex;width:max-content;padding:8px 12px;border-radius:999px;background:rgba(127,178,255,.12);border:1px solid rgba(127,178,255,.16);color:#dbeafe;font-size:.78rem;font-weight:950;text-transform:uppercase;letter-spacing:.05em;margin-bottom:14px;}
.featureQuoteCard h3{margin:0 0 12px;font-size:2rem;line-height:1.02;letter-spacing:-.03em;}
.featureQuoteCard p{color:var(--muted);line-height:1.7;}

.sectionHeadNarrow{max-width:760px;margin-bottom:28px;}
.processFlow{display:grid;grid-template-columns:1fr 60px 1fr 60px 1fr;gap:0;align-items:center;}
.processCard{padding:24px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);min-height:210px;}
.processNumber{width:42px;height:42px;border-radius:14px;display:grid;place-items:center;font-weight:950;color:#fff;background:linear-gradient(135deg,var(--brand1),var(--brand3));margin-bottom:16px;}
.processCard h3{margin:0 0 10px;}
.processCard p{margin:0;color:var(--muted);line-height:1.7;}
.processConnector{height:2px;background:linear-gradient(90deg,rgba(127,178,255,.2) 0%,rgba(139,92,246,.5) 100%);}

.pricingHero{margin-bottom:28px;}
.pricingGridPremium{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;}
.pricingCardPremium{padding:24px;border-radius:26px;background:linear-gradient(180deg,rgba(40,49,120,.82),rgba(26,31,82,.82));border:1px solid rgba(255,255,255,.08);box-shadow:0 18px 50px rgba(0,0,0,.18);}
.featuredPricing{border-color:rgba(127,178,255,.25);box-shadow:0 24px 70px rgba(79,70,229,.22);}
.pricingCardTop{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px;}
.pricingCardTop h3{margin:0;}
.featuredPill{padding:8px 10px;border-radius:999px;background:rgba(127,178,255,.12);border:1px solid rgba(127,178,255,.18);color:#dbeafe;font-size:.75rem;font-weight:950;text-transform:uppercase;}
.pricingValue{display:flex;align-items:flex-end;gap:6px;margin-bottom:8px;}
.pricingValue strong{font-size:3rem;line-height:1;letter-spacing:-.04em;}
.pricingValue span{color:var(--muted);margin-bottom:6px;}
.pricingDescription,.pricingSetup{color:var(--muted);margin:0 0 16px;line-height:1.6;}
.pricingList{margin:0;padding-left:18px;color:#e5e7eb;}
.pricingList li{margin:10px 0;}
.pricingBtnFull{width:100%;margin-top:16px;}
.pricingNotes{margin-top:18px;color:var(--muted);font-size:.94rem;line-height:1.6;}

.faq{display:grid;gap:14px;}
.faqItem{padding:18px 20px;border-radius:18px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);}
.faqItem summary{cursor:pointer;font-weight:900;list-style:none;}
.faqItem summary::-webkit-details-marker{display:none;}
.faqItem .p{margin-top:12px;}
.finalCta{margin-top:28px;padding:28px;border-radius:var(--radius);background:linear-gradient(135deg,rgba(34,197,94,.14),rgba(79,70,229,.16));border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;}
.finalCtaTitle{font-size:1.35rem;font-weight:950;letter-spacing:-.02em;}
.footer{padding:40px 0;border-top:1px solid var(--line);background:rgba(7,10,31,.4);}
.footerGrid{display:grid;grid-template-columns:1.1fr .8fr .8fr;gap:20px;align-items:start;}
.footerBrand{margin-bottom:12px;}
.footerLinks,.footerLegal{display:flex;flex-wrap:wrap;gap:14px;align-items:center;color:var(--muted);font-weight:850;}
.footerLinks a:hover,.footerLegal a:hover{color:#fff;}

@media (max-width:1100px){
  .headerInner{padding:14px 0;align-items:flex-start;flex-direction:column;}
  .nav,.headerCtas{width:100%;}
  .heroGrid,.signalGrid,.enterpriseGrid,.dualFeatureGrid,.pricingGridPremium,.footerGrid{grid-template-columns:1fr;}
  .signalCardPrimary,.signalCardWide{grid-row:auto;grid-column:auto;}
  .productShowcase{min-height:auto;padding-top:20px;}
  .floatingCardA,.floatingCardB{position:static;transform:none;width:100%;margin-top:14px;}
  .processFlow{grid-template-columns:1fr;gap:14px;}
  .processConnector{width:2px;height:34px;margin:0 auto;background:linear-gradient(180deg,rgba(127,178,255,.2) 0%,rgba(139,92,246,.5) 100%);}
}
@media (max-width:720px){
  .container{width:min(100% - 24px,1180px);}
  .hero{padding:44px 0 24px;}
  .h1{font-size:2.6rem;}
  .sectionTitleLarge{font-size:2.15rem;}
  .btn{width:100%;}
  .ctaRow{align-items:stretch;}
  .heroTrust,.mockupStats{grid-template-columns:1fr;}
  .mainMockup{padding:18px;border-radius:24px;}
  .headerCtas{flex-direction:column;align-items:stretch;}
  .nav{gap:12px;}
  .featureQuoteCard h3{font-size:1.55rem;}
  .analysisMetric{flex-direction:column;align-items:flex-start;}
  .analysisBars{width:100%;}
}
.intelligenceSection{
  position:relative;
  padding-top:56px;
  padding-bottom:48px;
  overflow:hidden;
}
.intelligenceSection::before{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 18% 25%, rgba(127,178,255,.16), transparent 28%),
    radial-gradient(circle at 86% 40%, rgba(139,92,246,.18), transparent 32%);
  pointer-events:none;
}

.intelligenceGrid{
  position:relative;
  display:grid;
  grid-template-columns:.9fr 1.35fr;
  gap:34px;
  align-items:start;
}

.intelligenceSticky{
  position:sticky;
  top:110px;
  min-height:420px;
}

.textLink{
  display:inline-flex;
  margin-top:18px;
  color:#7FB2FF;
  font-weight:900;
  letter-spacing:.02em;
}

.verticalSignal{
  margin-top:38px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:10px;
}

.signalDot{
  width:13px;
  height:13px;
  border-radius:999px;
  background:rgba(255,255,255,.22);
  border:1px solid rgba(255,255,255,.22);
}

.signalDot.active{
  background:#22c55e;
  box-shadow:0 0 0 8px rgba(34,197,94,.12);
}

.signalLine{
  width:2px;
  height:34px;
  margin-left:5px;
  background:linear-gradient(180deg, rgba(127,178,255,.45), rgba(139,92,246,.12));
}

.intelligenceCards{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:22px;
}

.intelligenceCard{
  position:relative;
  min-height:280px;
  padding:26px;
  border-radius:28px;
  background:
    linear-gradient(180deg, rgba(47,58,145,.72), rgba(22,27,77,.82));
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 22px 70px rgba(0,0,0,.24);
  overflow:hidden;
}

.intelligenceCard::before{
  content:"";
  position:absolute;
  inset:-1px;
  background:linear-gradient(135deg, rgba(127,178,255,.22), transparent 35%, rgba(139,92,246,.18));
  opacity:.42;
  pointer-events:none;
}

.hoverLift{
  transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}

.hoverLift:hover{
  transform:translateY(-8px);
  border-color:rgba(127,178,255,.34);
  box-shadow:0 30px 90px rgba(79,70,229,.28);
}

.cardIcon{
  position:relative;
  width:58px;
  height:58px;
  border-radius:20px;
  display:grid;
  place-items:center;
  color:#dcfce7;
  background:rgba(34,197,94,.15);
  border:1px solid rgba(34,197,94,.22);
  font-size:1.35rem;
  font-weight:900;
  margin-bottom:22px;
}

.cardIcon.blue{
  color:#dbeafe;
  background:rgba(127,178,255,.15);
  border-color:rgba(127,178,255,.24);
}

.cardIcon.green{
  color:#dcfce7;
  background:rgba(34,197,94,.15);
  border-color:rgba(34,197,94,.24);
}

.cardIcon.purple{
  color:#ede9fe;
  background:rgba(139,92,246,.16);
  border-color:rgba(139,92,246,.24);
}

.cardNumber{
  position:absolute;
  top:30px;
  right:28px;
  color:#fff;
  font-weight:900;
  opacity:.9;
}

.intelligenceCard h3{
  position:relative;
  margin:0 0 12px;
  font-size:1.25rem;
  line-height:1.18;
}

.intelligenceCard p{
  position:relative;
  margin:0;
  color:var(--muted);
  line-height:1.72;
}

.cardFooter{
  position:absolute;
  left:26px;
  right:26px;
  bottom:22px;
  padding-top:18px;
  border-top:1px solid rgba(255,255,255,.09);
  display:flex;
  justify-content:space-between;
  gap:12px;
  color:var(--muted);
  font-size:.92rem;
}

.cardFooter strong{
  color:#86efac;
}

.metricRail{
  position:relative;
  margin-top:36px;
  display:grid;
  grid-template-columns:1.15fr repeat(4, minmax(0,1fr));
  gap:18px;
  align-items:stretch;
}

.metricRail h3{
  margin:8px 0 8px;
  font-size:1.75rem;
  line-height:1.1;
  letter-spacing:-.03em;
}

.metricRail p{
  margin:0;
  color:var(--muted);
}

.metricRailCard{
  padding:20px;
  border-radius:22px;
  background:
    linear-gradient(180deg, rgba(40,49,120,.78), rgba(26,31,82,.82));
  border:1px solid rgba(255,255,255,.1);
  box-shadow:0 18px 50px rgba(0,0,0,.2);
}

.metricRailCard span{
  display:block;
  color:var(--muted);
  margin-bottom:8px;
  font-weight:800;
}

.metricRailCard strong{
  display:block;
  font-size:1.9rem;
  line-height:1;
  letter-spacing:-.04em;
}

.metricRailCard small{
  display:block;
  margin-top:10px;
  color:#86efac;
}

.metricRailCard.danger small{
  color:#fca5a5;
}

.metricRailCard.purple small{
  color:#d8b4fe;
}

@media (max-width:1100px){
  .intelligenceGrid,
  .metricRail{
    grid-template-columns:1fr;
  }

  .intelligenceSticky{
    position:relative;
    top:auto;
    min-height:auto;
  }

  .verticalSignal{
    display:none;
  }
}

@media (max-width:720px){
  .intelligenceCards{
    grid-template-columns:1fr;
  }

  .intelligenceCard{
    min-height:250px;
  }
}
.intelligenceSection{
  position:relative;
  padding-top:84px;
  padding-bottom:70px;
  overflow:hidden;
}

.intelligenceSection::before{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 18% 25%, rgba(127,178,255,.16), transparent 28%),
    radial-gradient(circle at 86% 40%, rgba(139,92,246,.18), transparent 32%);
  pointer-events:none;
}

.intelligenceGrid{
  position:relative;
  display:grid;
  grid-template-columns:.9fr 1.35fr;
  gap:34px;
  align-items:start;
}

.intelligenceSticky{
  position:sticky;
  top:110px;
  min-height:420px;
}

.textLink{
  display:inline-flex;
  margin-top:18px;
  color:#7FB2FF;
  font-weight:900;
  letter-spacing:.02em;
}

.verticalSignal{
  margin-top:38px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:10px;
}

.signalDot{
  width:13px;
  height:13px;
  border-radius:999px;
  background:rgba(255,255,255,.22);
  border:1px solid rgba(255,255,255,.22);
}

.signalDot.active{
  background:#22c55e;
  box-shadow:0 0 0 8px rgba(34,197,94,.12);
}

.signalLine{
  width:2px;
  height:34px;
  margin-left:5px;
  background:linear-gradient(180deg, rgba(127,178,255,.45), rgba(139,92,246,.12));
}

.intelligenceCards{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:22px;
}

.intelligenceCard{
  position:relative;
  min-height:280px;
  padding:26px;
  border-radius:28px;
  background:
    linear-gradient(180deg, rgba(47,58,145,.72), rgba(22,27,77,.82));
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 22px 70px rgba(0,0,0,.24);
  overflow:hidden;
}

.intelligenceCard::before{
  content:"";
  position:absolute;
  inset:-1px;
  background:linear-gradient(135deg, rgba(127,178,255,.22), transparent 35%, rgba(139,92,246,.18));
  opacity:.42;
  pointer-events:none;
}

.hoverLift{
  transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}

.hoverLift:hover{
  transform:translateY(-8px);
  border-color:rgba(127,178,255,.34);
  box-shadow:0 30px 90px rgba(79,70,229,.28);
}

.cardIcon{
  position:relative;
  width:58px;
  height:58px;
  border-radius:20px;
  display:grid;
  place-items:center;
  color:#dcfce7;
  background:rgba(34,197,94,.15);
  border:1px solid rgba(34,197,94,.22);
  font-size:1.35rem;
  font-weight:900;
  margin-bottom:22px;
}

.cardIcon.blue{
  color:#dbeafe;
  background:rgba(127,178,255,.15);
  border-color:rgba(127,178,255,.24);
}

.cardIcon.green{
  color:#dcfce7;
  background:rgba(34,197,94,.15);
  border-color:rgba(34,197,94,.24);
}

.cardIcon.purple{
  color:#ede9fe;
  background:rgba(139,92,246,.16);
  border-color:rgba(139,92,246,.24);
}

.cardNumber{
  position:absolute;
  top:30px;
  right:28px;
  color:#fff;
  font-weight:900;
  opacity:.9;
}

.intelligenceCard h3{
  position:relative;
  margin:0 0 12px;
  font-size:1.25rem;
  line-height:1.18;
}

.intelligenceCard p{
  position:relative;
  margin:0;
  color:var(--muted);
  line-height:1.72;
}

.cardFooter{
  position:absolute;
  left:26px;
  right:26px;
  bottom:22px;
  padding-top:18px;
  border-top:1px solid rgba(255,255,255,.09);
  display:flex;
  justify-content:space-between;
  gap:12px;
  color:var(--muted);
  font-size:.92rem;
}

.cardFooter strong{
  color:#86efac;
}

.metricRail{
  position:relative;
  margin-top:36px;
  display:grid;
  grid-template-columns:1.15fr repeat(4, minmax(0,1fr));
  gap:18px;
  align-items:stretch;
}

.metricRail h3{
  margin:8px 0 8px;
  font-size:1.75rem;
  line-height:1.1;
  letter-spacing:-.03em;
}

.metricRail p{
  margin:0;
  color:var(--muted);
}

.metricRailCard{
  padding:20px;
  border-radius:22px;
  background:
    linear-gradient(180deg, rgba(40,49,120,.78), rgba(26,31,82,.82));
  border:1px solid rgba(255,255,255,.1);
  box-shadow:0 18px 50px rgba(0,0,0,.2);
}

.metricRailCard span{
  display:block;
  color:var(--muted);
  margin-bottom:8px;
  font-weight:800;
}

.metricRailCard strong{
  display:block;
  font-size:1.9rem;
  line-height:1;
  letter-spacing:-.04em;
}

.metricRailCard small{
  display:block;
  margin-top:10px;
  color:#86efac;
}

.metricRailCard.danger small{
  color:#fca5a5;
}

.metricRailCard.purple small{
  color:#d8b4fe;
}

@media (max-width:1100px){
  .intelligenceGrid,
  .metricRail{
    grid-template-columns:1fr;
  }

  .intelligenceSticky{
    position:relative;
    top:auto;
    min-height:auto;
  }

  .verticalSignal{
    display:none;
  }
}

@media (max-width:720px){
  .intelligenceCards{
    grid-template-columns:1fr;
  }

  .intelligenceCard{
    min-height:250px;
  }
}
.hero{
  position:relative;
  isolation:isolate;
  overflow:hidden;
}

.heroDataGrid{
  position:absolute;
  inset:0;
  z-index:-3;
  background-image:
    linear-gradient(rgba(127,178,255,.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(127,178,255,.08) 1px, transparent 1px);
  background-size:54px 54px;
  mask-image:linear-gradient(to bottom, rgba(0,0,0,.95), transparent 92%);
  opacity:.5;
}

.heroOrb{
  position:absolute;
  z-index:-2;
  width:420px;
  height:420px;
  border-radius:999px;
  filter:blur(54px);
  opacity:.55;
  animation:floatOrb 8s ease-in-out infinite alternate;
}

.heroOrbA{
  top:80px;
  right:8%;
  background:rgba(127,178,255,.36);
}

.heroOrbB{
  left:4%;
  bottom:4%;
  background:rgba(139,92,246,.28);
  animation-delay:1.5s;
}

@keyframes floatOrb{
  from{
    transform:translate3d(0,0,0) scale(1);
  }
  to{
    transform:translate3d(18px,-22px,0) scale(1.08);
  }
}

.productShowcase{
  perspective:1200px;
}

.mainMockup{
  transform:rotateX(2deg) rotateY(-4deg);
  transition:transform .35s ease, box-shadow .35s ease;
}

.mainMockup:hover{
  transform:rotateX(0deg) rotateY(0deg) translateY(-6px);
  box-shadow:
    0 34px 110px rgba(0,0,0,.46),
    0 0 0 1px rgba(127,178,255,.16),
    inset 0 1px 0 rgba(255,255,255,.1);
}

.trendPanel{
  margin:0 0 16px;
  padding:18px;
  border-radius:20px;
  background:rgba(8,14,48,.34);
  border:1px solid rgba(255,255,255,.08);
}

.trendPanelTop{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  margin-bottom:14px;
  color:#eaf0ff;
  font-weight:800;
}

.trendPanelTop strong{
  color:#86efac;
  font-size:1.15rem;
  letter-spacing:-.02em;
}
.trendChartLine{
  padding:14px 14px 10px;
  border-radius:18px;
  background:linear-gradient(180deg, rgba(127,178,255,.06), rgba(139,92,246,.04));
  border:1px solid rgba(255,255,255,.06);
}

.trendSvg{
  width:100%;
  height:180px;
  display:block;
}

.trendAxis{
  stroke:rgba(255,255,255,.14);
  stroke-width:1.5;
}

.trendGuide{
  stroke:rgba(255,255,255,.08);
  stroke-width:1;
  stroke-dasharray:4 6;
}

.trendPoint{
  fill:#7FB2FF;
  stroke:#0f153d;
  stroke-width:3;
}

.trendPointActive{
  fill:#86efac;
  filter:drop-shadow(0 0 8px rgba(134,239,172,.35));
}

.trendXAxis{
  display:flex;
  justify-content:space-between;
  gap:8px;
  margin-top:8px;
  padding:0 2px;
  color:var(--muted);
  font-size:.82rem;
  font-weight:700;
}

.floatingCard{
  animation:floatCard 5.5s ease-in-out infinite alternate;
}

.floatingCardB{
  animation-delay:1.2s;
}

@keyframes floatCard{
  from{
    transform:translateY(0) rotate(-1.5deg);
  }
  to{
    transform:translateY(-10px) rotate(1deg);
  }
}

.btnPrimary{
  position:relative;
  overflow:hidden;
}

.btnPrimary::after{
  content:"";
  position:absolute;
  inset:-40% -80%;
  background:linear-gradient(90deg, transparent, rgba(255,255,255,.28), transparent);
  transform:translateX(-60%);
  transition:transform .6s ease;
}

.btnPrimary:hover::after{
  transform:translateX(60%);
}

@media (max-width:720px){
  .heroOrb{
    width:280px;
    height:280px;
  }

  .mainMockup{
    transform:none;
  }

  .trendChart{
    height:96px;
  }
}
`;

function waLink() {
  const phone = "593997945350";
  const msg =
    "Hola JasoDatos. Quiero una demo y conocer los planes. Tengo una bodega/ferretería y quiero controlar inventario y ventas.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

export default function Page() {
  const wa = waLink();

  return (
    <main>
      <style>{css}</style>

      <header className="header">
        <div className="container headerInner">
          <a className="brand" href="#inicio" aria-label="JasoDatos">
            <span className="brandMark">JD</span>
            <span className="brandName">JasoDatos</span>
          </a>

          <nav className="nav" aria-label="Navegación principal">
            <a href="#beneficios">Beneficios</a>
            <a href="#que-recibes">Qué recibes</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#precios">Precios</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="headerCtas">
            <a className="btn btnGhost" href={wa} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btnPrimary" href="https://app.jasodatos.com/registro">
              Probar gratis
            </a>
          </div>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="heroDataGrid" />
        <div className="heroOrb heroOrbA" />
        <div className="heroOrb heroOrbB" />
        <div className="container heroGrid">
          <div>
            <p className="pill">Inventario, ventas y stock en una sola vista</p>

            <h1 className="h1">
              Deja de adivinar:
              <br />
              mira qué vender,
              <br />
              qué reponer y
              <br />
              qué corregir.
            </h1>

            <p className="sub">
              Sube tu archivo de ventas o inventario y JasoDatos te muestra, en minutos, qué productos se venden más, cuáles están en riesgo, qué stock se está quedando y dónde puedes tomar mejores decisiones.
            </p>

            <div className="ctaRow">
              <a className="btn btnPrimary" href="https://app.jasodatos.com/registro">
                Probar gratis
              </a>
              <a className="btn btnGhost" href={wa} target="_blank" rel="noreferrer">
                Agendar demo por WhatsApp
              </a>
            </div>

            <div className="heroMiniProof">
              <div className="heroMiniProofItem">
                <span className="dot" />
                <span>Carga CSV en minutos</span>
              </div>
              <div className="heroMiniProofItem">
                <span className="dot" />
                <span>Alertas de stock en riesgo</span>
              </div>
              <div className="heroMiniProofItem">
                <span className="dot" />
                <span>Reportes listos para compartir</span>
              </div>
            </div>

            <div className="heroTrust">
              <div className="heroTrustItem">
                <div className="heroTrustValue">+ claridad</div>
                <div className="heroTrustLabel">menos revisión manual</div>
              </div>
              <div className="heroTrustItem">
                <div className="heroTrustValue">acciones</div>
                <div className="heroTrustLabel">ventas, stock y compras</div>
              </div>
              <div className="heroTrustItem">
                <div className="heroTrustValue">rápido</div>
                <div className="heroTrustLabel">sin vivir en Excel</div>
              </div>
            </div>
          </div>

          <div className="heroVisual">
            <div className="productShowcase">
              <div className="showcaseGlow" />

              <div className="mainMockup">
                <div className="mockupTopBar">
                  <div className="mockupBrand">
                    <span className="brandMark smallMark">JD</span>
                    <span>Dashboard comercial</span>
                  </div>
                  <span className="mockupStatus">en vivo</span>
                </div>

                <div className="mockupStats">
                  <div className="mockupStatCard">
                    <span className="mockupStatLabel">ventas</span>
                    <strong>$12.480</strong>
                    <small>últimos 30 días</small>
                  </div>
                  <div className="mockupStatCard">
                    <span className="mockupStatLabel">stock crítico</span>
                    <strong>7</strong>
                    <small>productos</small>
                  </div>
                  <div className="mockupStatCard">
                    <span className="mockupStatLabel">productos lentos</span>
                    <strong>14</strong>
                    <small>para revisar</small>
                  </div>
                </div>
                <div className="trendPanel">
  <div className="trendPanelTop">
    <span>Tendencia de ventas</span>
    <strong>+18%</strong>
  </div>

  <div className="trendChartLine">
    <svg viewBox="0 0 520 180" className="trendSvg" aria-hidden="true">
      <defs>
        <linearGradient id="trendStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7FB2FF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>

        <linearGradient id="trendFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(127,178,255,.28)" />
          <stop offset="100%" stopColor="rgba(139,92,246,.02)" />
        </linearGradient>
      </defs>

      <line x1="28" y1="150" x2="500" y2="150" className="trendAxis" />
      <line x1="28" y1="110" x2="500" y2="110" className="trendGuide" />
      <line x1="28" y1="70" x2="500" y2="70" className="trendGuide" />
      <line x1="28" y1="30" x2="500" y2="30" className="trendGuide" />

      <path
        d="M 28 150 L 28 116 C 62 108, 96 92, 120 98 C 154 104, 188 132, 212 118 C 246 98, 278 66, 304 74 C 336 84, 366 108, 396 92 C 426 76, 454 50, 500 58 L 500 150 Z"
        fill="url(#trendFill)"
      />

      <path
        d="M 28 116 C 62 108, 96 92, 120 98 C 154 104, 188 132, 212 118 C 246 98, 278 66, 304 74 C 336 84, 366 108, 396 92 C 426 76, 454 50, 500 58"
        fill="none"
        stroke="url(#trendStroke)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <circle cx="120" cy="98" r="5" className="trendPoint" />
      <circle cx="212" cy="118" r="5" className="trendPoint" />
      <circle cx="304" cy="74" r="5" className="trendPoint" />
      <circle cx="396" cy="92" r="5" className="trendPoint" />
      <circle cx="500" cy="58" r="6" className="trendPoint trendPointActive" />
    </svg>

    <div className="trendXAxis">
      <span>sem 1</span>
      <span>sem 2</span>
      <span>sem 3</span>
      <span>sem 4</span>
      <span>hoy</span>
    </div>
  </div>
</div>
                <div className="mockupPanel">
                  <div className="mockupPanelHeader">
                    <span>stock en riesgo</span>
                    <span className="panelLink">ver detalle</span>
                  </div>
                  <div className="riskRow">
                    <span>Energy Drink 473ml</span>
                    <span className="riskBadge danger">crítico</span>
                  </div>
                  <div className="riskRow">
                    <span>Ron Añejo 750ml</span>
                    <span className="riskBadge warning">en riesgo</span>
                  </div>
                  <div className="riskRow">
                    <span>Whisky Escocés 750ml</span>
                    <span className="riskBadge warning">en riesgo</span>
                  </div>
                </div>

                <div className="mockupInsight">
                  <div className="mockupInsightTitle">JasoBot sugiere</div>
                  <p>
                    Activa una salida comercial para productos lentos y revisa reposición en los ítems críticos.
                  </p>
                </div>
              </div>

              <div className="floatingCard floatingCardA">
                <span className="floatingLabel">alerta</span>
                <strong>stock bajo detectado</strong>
                <small>7 productos por debajo del mínimo</small>
              </div>

              <div className="floatingCard floatingCardB">
                <span className="floatingLabel green">oportunidad</span>
                <strong>productos dormidos</strong>
                <small>prioriza promociones y libera caja</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signalBand">
        <div className="container">
          <div className="signalBandInner">
            <div className="signalBandHeader">
              <span className="eyebrow">señales que detecta JasoDatos</span>
              <h2 className="sectionTitleLarge">
                Una plataforma que convierte tu archivo en señales accionables.
              </h2>
              <p className="sectionLead">
                No solo ordena datos: te ayuda a detectar productos lentos, stock en riesgo, oportunidades comerciales y focos de reposición.
              </p>
            </div>

            <div className="signalGrid">
              <div className="signalCard signalCardPrimary">
                <div className="signalCardTop">
                  <span className="signalChip good">ventas</span>
                  <span className="signalMeta">últimos 30 días</span>
                </div>
                <div className="signalBigNumber">$12.480</div>
                <div className="signalBar"><span style={{ width: "76%" }} /></div>
                <p className="signalText">
                  Tendencia estable con mejor oportunidad en tienda física y categorías de alta rotación.
                </p>
              </div>

              <div className="signalCard">
                <div className="signalCardTop">
                  <span className="signalChip warn">stock</span>
                  <span className="signalMeta">riesgo detectado</span>
                </div>
                <div className="signalMiniNumber">7 productos</div>
                <p className="signalText">
                  Productos por debajo del umbral configurado. Prioridad de revisión inmediata.
                </p>
              </div>

              <div className="signalCard">
                <div className="signalCardTop">
                  <span className="signalChip blue">dormidos</span>
                  <span className="signalMeta">baja rotación</span>
                </div>
                <div className="signalMiniNumber">14 ítems</div>
                <p className="signalText">
                  Inventario inmovilizado que puede requerir promoción, liquidación o reorden comercial.
                </p>
              </div>

              <div className="signalCard signalCardWide">
                <div className="signalCardTop">
                  <span className="signalChip purple">JasoBot</span>
                  <span className="signalMeta">recomendación</span>
                </div>
                <h3 className="signalTitle">
                  “Activa una salida comercial para productos lentos y refuerza reposición en ítems críticos.”
                </h3>
                <div className="signalActions">
                  <span className="miniTag">WhatsApp</span>
                  <span className="miniTag">PDF</span>
                  <span className="miniTag">alerta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
             <section id="beneficios" className="section intelligenceSection">
        <div className="container intelligenceGrid">
          <div className="intelligenceSticky">
            <span className="eyebrow">beneficios visibles</span>

            <h2 className="sectionTitleLarge">
              Control comercial sin perderte entre hojas de cálculo.
            </h2>

            <p className="sectionLead">
              JasoDatos traduce tus archivos en señales claras para vender mejor,
              reponer a tiempo y reducir productos dormidos sin complicarte con
              herramientas pesadas.
            </p>

            <a className="textLink" href="#que-recibes">
              Explorar beneficios ↓
            </a>

            <div className="verticalSignal">
              <span className="signalDot active" />
              <span className="signalLine" />
              <span className="signalDot" />
              <span className="signalLine" />
              <span className="signalDot" />
              <span className="signalLine" />
              <span className="signalDot" />
            </div>
          </div>

          <div className="intelligenceCards">
            <article className="intelligenceCard hoverLift">
              <div className="cardIcon">↗</div>
              <div className="cardNumber">01</div>
              <h3>Evita quiebres y pérdidas</h3>
              <p>
                Detecta stock bajo antes de que te deje sin ventas y actúa con
                más anticipación.
              </p>
              <div className="cardFooter">
                <span>Menos quiebres</span>
                <strong>+ control</strong>
              </div>
            </article>

            <article className="intelligenceCard hoverLift">
              <div className="cardIcon blue">⚡</div>
              <div className="cardNumber">02</div>
              <h3>Decide en minutos</h3>
              <p>
                Menos revisión manual. Más foco en KPIs, productos top, lentos y
                oportunidades.
              </p>
              <div className="cardFooter">
                <span>Tiempo de análisis</span>
                <strong>-80%</strong>
              </div>
            </article>

            <article className="intelligenceCard hoverLift">
              <div className="cardIcon green">✓</div>
              <div className="cardNumber">03</div>
              <h3>Compra con más criterio</h3>
              <p>
                Menos dinero inmovilizado y más claridad sobre qué se mueve y qué
                conviene reforzar.
              </p>
              <div className="cardFooter">
                <span>Mejor rotación</span>
                <strong>↑</strong>
              </div>
            </article>

            <article className="intelligenceCard hoverLift">
              <div className="cardIcon purple">◎</div>
              <div className="cardNumber">04</div>
              <h3>Comparte y alinea</h3>
              <p>
                Reportes listos para revisar con tu equipo, conversar decisiones
                y reducir fricción operativa.
              </p>
              <div className="cardFooter">
                <span>Equipo alineado</span>
                <strong>PDF</strong>
              </div>
            </article>
          </div>
        </div>

        <div className="container metricRail">
          <div>
            <span className="eyebrow">tu negocio, en números</span>
            <h3>Señales que sí ayudan a decidir.</h3>
            <p>Datos actualizados automáticamente desde tu archivo comercial.</p>
          </div>

          <div className="metricRailCard">
            <span>Ventas 30 días</span>
            <strong>$12.480</strong>
            <small>+18% vs. periodo anterior</small>
          </div>

          <div className="metricRailCard">
            <span>Ticket promedio</span>
            <strong>$23,40</strong>
            <small>+7% vs. periodo anterior</small>
          </div>

          <div className="metricRailCard danger">
            <span>Productos en riesgo</span>
            <strong>7</strong>
            <small>-2 vs. periodo anterior</small>
          </div>

          <div className="metricRailCard purple">
            <span>Productos dormidos</span>
            <strong>14</strong>
            <small>+3 vs. periodo anterior</small>
          </div>
        </div>
      </section>
      <section id="que-recibes" className="section sectionAlt">
        <div className="container dualFeatureGrid">
          <div className="featureCardLarge">
            <span className="eyebrow">qué recibes</span>
            <h2 className="sectionTitleLarge">Una vista ejecutiva para saber qué hacer después.</h2>
            <p className="sectionLead">Entregables claros para ejecutar, no solo dashboards bonitos.</p>
            <div className="deliverablesList">
              <div className="deliverableItem"><span className="checkDot">✓</span><span>tablero base de ventas e inventario</span></div>
              <div className="deliverableItem"><span className="checkDot">✓</span><span>top productos, lentos y alertas de stock bajo</span></div>
              <div className="deliverableItem"><span className="checkDot">✓</span><span>reporte listo para compartir y revisar con tu equipo</span></div>
              <div className="deliverableItem"><span className="checkDot">✓</span><span>lectura simple para decidir qué vender, reponer o corregir</span></div>
            </div>
          </div>

          <div className="featureQuoteCard">
            <div className="quoteBadge">en una frase</div>
            <h3>“No vendemos sistema: tomamos tu información y la convertimos en decisiones.”</h3>
            <p>Ideal para negocios que ya tienen ventas e inventario en archivos, pero necesitan convertirlos en control diario.</p>
            <div className="ctaRow">
              <a className="btn btnPrimary" href="https://app.jasodatos.com/registro">Probar gratis</a>
              <a className="btn btnGhost" href={wa} target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="section processSection">
        <div className="container">
          <div className="sectionHeadNarrow">
            <span className="eyebrow">cómo funciona</span>
            <h2 className="sectionTitleLarge">Tres pasos para pasar de archivo a decisión.</h2>
            <p className="sectionLead">Sin implementación pesada. Sin complicarte con herramientas complejas.</p>
          </div>
          <div className="processFlow">
            <div className="processCard">
              <div className="processNumber">1</div>
              <h3>Carga tu archivo</h3>
              <p>Usa tu CSV actual o una plantilla estándar para ventas e inventario.</p>
            </div>
            <div className="processConnector" />
            <div className="processCard">
              <div className="processNumber">2</div>
              <h3>Validamos columnas</h3>
              <p>JasoDatos detecta campos, revisa reglas y te dice qué corregir si algo no calza.</p>
            </div>
            <div className="processConnector" />
            <div className="processCard">
              <div className="processNumber">3</div>
              <h3>Decide con el dashboard</h3>
              <p>Mira KPIs, stock en riesgo, productos dormidos y oportunidades comerciales.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="precios" className="section pricingSection">
        <div className="container">
          <div className="pricingHero">
            <span className="eyebrow">planes</span>
            <h2 className="sectionTitleLarge">Precios simples para empezar sin vueltas.</h2>
            <p className="sectionLead">USD + impuestos si aplican. Elige según el nivel de acompañamiento que necesitas.</p>
          </div>
          <div className="pricingGridPremium">
            <div className="pricingCardPremium">
              <div className="pricingCardTop"><h3>Autoservicio</h3></div>
              <div className="pricingValue"><strong>$29</strong><span>/mes</span></div>
              <p className="pricingDescription">Para empezar rápido por cuenta propia.</p>
              <ul className="pricingList">
                <li>Subida de CSV + validación</li>
                <li>KPIs base y tendencias</li>
                <li>Plantilla estándar</li>
                <li>Exportables CSV</li>
              </ul>
              <a className="btn btnPrimary pricingBtnFull" href="https://app.jasodatos.com/registro">Probar gratis</a>
            </div>

            <div className="pricingCardPremium featuredPricing">
              <div className="pricingCardTop"><h3>Lanzamiento</h3><span className="featuredPill">más elegido</span></div>
              <div className="pricingValue"><strong>$89</strong><span>/mes</span></div>
              <p className="pricingSetup">Setup: $149 · mínimo 3 meses</p>
              <ul className="pricingList">
                <li>1 sucursal</li>
                <li>Tablero base</li>
                <li>Stock bajo + productos lentos</li>
                <li>Reporte semanal</li>
                <li>1 reunión mensual</li>
              </ul>
              <a className="btn btnPrimary pricingBtnFull" href={wa} target="_blank" rel="noreferrer">Empezar Lanzamiento</a>
            </div>

            <div className="pricingCardPremium">
              <div className="pricingCardTop"><h3>Control</h3></div>
              <div className="pricingValue"><strong>$149</strong><span>/mes</span></div>
              <p className="pricingSetup">Setup: $249 · mínimo 3 meses</p>
              <ul className="pricingList">
                <li>Todo lo de Lanzamiento</li>
                <li>Observaciones mensuales</li>
                <li>Soporte WhatsApp</li>
                <li>1 ajuste menor</li>
              </ul>
              <a className="btn btnGhost pricingBtnFull" href={wa} target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
            </div>
          </div>
          <div className="pricingNotes">
            <p>Forma de pago: 50% del setup al inicio + 50% contra entrega de la primera versión funcional. Mensualidad por adelantado.</p>
            <p>Cupos de lanzamiento: abrimos 3 este mes.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <div className="sectionHeadNarrow">
            <span className="eyebrow">preguntas frecuentes</span>
            <h2 className="sectionTitleLarge">Antes de empezar.</h2>
            <p className="sectionLead">Respuestas rápidas para validar si JasoDatos encaja con tu operación.</p>
          </div>
          <div className="faq">
            <details className="faqItem">
              <summary>¿Qué necesito para empezar?</summary>
              <p className="p">Un archivo CSV o Excel con ventas, productos, cantidades, precios o stock. Si no lo tienes ordenado, puedes empezar con una plantilla base.</p>
            </details>
            <details className="faqItem">
              <summary>¿Sirve para bodegas y ferreterías?</summary>
              <p className="p">Sí. El core es inventario, rotación y reposición: exactamente el dolor del día a día en negocios comerciales.</p>
            </details>
            <details className="faqItem">
              <summary>¿Puedo exportar reportes?</summary>
              <p className="p">Sí. Puedes trabajar con reportes exportables según plan y funcionalidades activas.</p>
            </details>
            <details className="faqItem">
              <summary>¿Por qué mínimo 3 meses en planes con setup?</summary>
              <p className="p">Porque estabilizamos carga, validación y hábito de uso para que el resultado sea real, no una demo bonita que nadie usa.</p>
            </details>
          </div>
          <div className="finalCta">
            <div className="finalCtaTitle">¿Listo para transformar datos en resultados?</div>
            <div className="ctaRow">
              <a className="btn btnPrimary" href="https://app.jasodatos.com/registro">Probar gratis</a>
              <a className="btn btnGhost" href={wa} target="_blank" rel="noreferrer">Agendar demo por WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <div className="brand footerBrand">
              <span className="brandMark">JD</span>
              <span className="brandName">JasoDatos</span>
            </div>
            <p className="p muted">Micro-BI para bodegas y ferreterías. CSV → control → decisiones.</p>
            <p className="p muted">
              Soporte: <a href={wa} target="_blank" rel="noreferrer">WhatsApp +593 997 945 350</a>
            </p>
          </div>
          <div className="footerLinks">
            <a href="#beneficios">Beneficios</a>
            <a href="#precios">Precios</a>
            <a href="#faq">FAQ</a>
            <a href="https://app.jasodatos.com">Entrar</a>
          </div>
          <div className="footerLegal">
            <a href="/privacidad">Privacidad</a>
            <a href="/terminos">Términos</a>
            <span className="muted">© {new Date().getFullYear()} JasoDatos</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
