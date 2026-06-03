export const metadata = {
  metadataBase: new URL("https://www.jasodatos.com"),
  title: "JasoDatos | Ventas e inventario en decisiones claras",
  description:
    "Sube tu archivo de ventas o inventario y JasoDatos te muestra qué vender, qué reponer y qué corregir en tu negocio.",
  openGraph: {
    title: "JasoDatos | Ventas e inventario en decisiones claras",
    description:
      "Sube tu archivo de ventas o inventario y JasoDatos te muestra qué vender, qué reponer y qué corregir en tu negocio.",
    url: "https://www.jasodatos.com",
    siteName: "JasoDatos",
    locale: "es_EC",
    type: "website",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
const css = `
:root{
  --principal:#2e0d4f;
  --secundario:#3d2c8d;
  --terceario:#283593;
  --dark:#060711;
  --dark2:#090a16;
  --panel:#0e1020;
  --panel2:#121529;
  --text:#f8fafc;
  --muted:#cbd5e1;
  --muted2:#aeb8d6;
  --purple:#7c3aed;
  --purpleSoft:#a78bfa;
  --blue:#7fb2ff;
  --green:#86efac;
  --line:rgba(255,255,255,.10);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
html,body{margin:0;padding:0;overflow-x:hidden}
body{
  color:var(--text);
  font-family:Arial, Helvetica, sans-serif;
  background:#070811;
}
a{text-decoration:none;color:inherit}
main{overflow:hidden}
.container{width:min(1320px,calc(100% - 56px));margin:0 auto}

/* NAV */
.siteNav{
  position:fixed;
  inset:0 0 auto 0;
  z-index:50;
  background:rgba(6,7,17,.86);
  backdrop-filter:blur(18px);
  border-bottom:1px solid rgba(255,255,255,.06);
}
.navInner{
  height:70px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
}
.logo{
  display:flex;
  align-items:center;
  gap:11px;
  font-weight:950;
  letter-spacing:.02em;
}
.logoBars{
  width:27px;
  height:23px;
  display:flex;
  align-items:flex-end;
  gap:4px;
}
.logoBars i{
  display:block;
  width:5px;
  border-radius:999px;
  background:linear-gradient(180deg,#a78bfa,#7c3aed);
  box-shadow:0 0 14px rgba(124,58,237,.62);
}
.logoBars i:nth-child(1){height:8px}
.logoBars i:nth-child(2){height:14px}
.logoBars i:nth-child(3){height:22px}
.navLinks{
  display:flex;
  align-items:center;
  gap:26px;
  color:#e5e7eb;
  font-size:.82rem;
  font-weight:800;
}
.navLinks a{opacity:.86;transition:.18s ease}
.navLinks a:hover{opacity:1;color:white}
.navActions{display:flex;align-items:center;gap:12px}
.modeDot{
  width:32px;height:32px;border-radius:999px;
  display:grid;place-items:center;
  color:#94a3b8;
  background:rgba(255,255,255,.055);
  border:1px solid rgba(255,255,255,.10);
}
.btn{
  min-height:42px;
  padding:0 18px;
  border-radius:7px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border:1px solid transparent;
  font-size:.86rem;
  font-weight:950;
  white-space:nowrap;
  transition:.18s ease;
}
.btn:hover{transform:translateY(-2px)}
.btnPrimary{
  color:#fff;
  background:linear-gradient(135deg,#7c3aed,#5b21b6);
  box-shadow:0 16px 36px rgba(124,58,237,.32);
}
.btnGhost{
  color:#fff;
  background:rgba(255,255,255,.035);
  border-color:rgba(255,255,255,.18);
}
.btnWhats{
  color:white;
  background:rgba(34,197,94,.10);
  border-color:rgba(34,197,94,.34);
}

/* HERO */
.hero{
  position:relative;
  min-height:700px;
  padding:112px 0 36px;
  overflow:hidden;
  background:
    radial-gradient(760px 360px at 78% 24%,rgba(61,44,141,.28),transparent 58%),
    radial-gradient(680px 330px at 17% 34%,rgba(46,13,79,.48),transparent 56%),
    linear-gradient(180deg,#060711 0%,#070812 55%,#080915 100%);
}
.hero::before{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(760px 300px at 76% 72%,rgba(124,58,237,.12),transparent 62%),
    linear-gradient(90deg,rgba(0,0,0,.50),transparent 28%,transparent 70%,rgba(0,0,0,.22));
  z-index:0;
  pointer-events:none;
}
.hero::after{
  content:"";
  position:absolute;
  inset:auto 0 0 0;
  height:42px;
  background:linear-gradient(
    180deg,
    transparent 0%,
    rgba(8,9,21,.02) 8%,
    rgba(8,9,21,.10) 20%,
    rgba(8,9,21,.28) 42%,
    rgba(8,9,21,.56) 72%,
    #080915 100%
  );
  z-index:2;
  pointer-events:none;
}


.heroGrid{
  position:relative;
  z-index:3;
  display:grid;
  grid-template-columns:.68fr 1.32fr;
  gap:56px;
  align-items:center;
}
.heroCopy{
  padding-top:10px;
}
.hero h1{
  margin:0;
  max-width:560px;
  font-size:clamp(3.2rem,5vw,4.85rem);
  line-height:1.08;
  letter-spacing:-.058em;
  font-weight:500;
}
.hero h1 strong{
  display:block;
  margin-top:2px;
  color:#8b5cf6;
  font-weight:500;
}
.heroLead{
  margin:24px 0 26px;
  max-width:500px;
  color:#f1f5f9;
  font-size:1.02rem;
  line-height:1.62;
  font-weight:500;
}
.heroActions{
  display:flex;
  align-items:center;
  gap:14px;
  flex-wrap:wrap;
}

/* DASHBOARD HERO */
.dashboard{
  position:relative;
  z-index:3;
  min-height:440px;
  display:grid;
  grid-template-columns:132px 1fr;
  overflow:hidden;
  border-radius:14px;
  border:1px solid rgba(124,58,237,.30);
  background:
    radial-gradient(480px 190px at 90% 0%,rgba(124,58,237,.12),transparent 62%),
    linear-gradient(180deg,rgba(14,16,32,.92),rgba(9,10,24,.95));
  box-shadow:
    0 32px 90px rgba(0,0,0,.48),
    0 0 62px rgba(124,58,237,.18);
}
@keyframes floatPanel{
  from{transform:translateY(0)}
  to{transform:translateY(-7px)}
}
.dashSide{
  padding:18px 12px;
  background:rgba(17,10,39,.88);
  border-right:1px solid rgba(255,255,255,.08);
}
.dashLogo{
  display:flex;
  align-items:center;
  gap:8px;
  font-size:.72rem;
  font-weight:950;
  margin-bottom:18px;
}
.dashNavItem{
  min-height:30px;
  padding:0 8px;
  border-radius:7px;
  display:flex;
  align-items:center;
  gap:7px;
  color:#aeb8d6;
  font-size:.66rem;
  font-weight:800;
  margin-bottom:7px;
}
.dashNavItem.active{
  color:white;
  background:linear-gradient(135deg,#4c1d95,#3d2c8d);
}
.dashMain{padding:18px}
.dashHeader{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:14px;
}
.dashHeader strong{font-size:.86rem}
.dateBadge{
  color:#aeb8d6;
  font-size:.66rem;
  font-weight:850;
  padding:7px 10px;
  border-radius:7px;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.08);
}
.kpiGrid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:10px;
  margin-bottom:12px;
}
.kpi{
  min-height:84px;
  padding:12px;
  border-radius:9px;
  background:rgba(17,20,37,.86);
  border:1px solid rgba(255,255,255,.065);
}
.kpi span{
  display:block;
  min-height:24px;
  color:#f0abfc;
  font-size:.64rem;
  font-weight:850;
  line-height:1.2;
  margin-bottom:7px;
}
.kpi:nth-child(2) span,.kpi:nth-child(4) span{color:#c4b5fd}
.kpi strong{
  display:block;
  font-size:1.28rem;
  letter-spacing:-.03em;
}
.kpi small{
  display:block;
  margin-top:6px;
  color:#86efac;
  font-size:.65rem;
  font-weight:750;
}
.dashBody{
  display:grid;
  grid-template-columns:1.2fr .8fr;
  gap:12px;
}
.panel{
  min-height:190px;
  padding:14px;
  border-radius:10px;
  background:rgba(17,20,37,.78);
  border:1px solid rgba(255,255,255,.065);
}
.panelHead{
  display:flex;
  justify-content:space-between;
  gap:10px;
  margin-bottom:10px;
  color:white;
  font-size:.72rem;
  font-weight:900;
}
.panelHead span{color:#aeb8d6}
.lineBox{
  height:140px;
  border-radius:8px;
  overflow:hidden;
  background:
    linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
  background-size:34px 34px;
}
.lineBox svg{width:100%;height:100%;display:block}
.drawLine{
  stroke-dasharray:520;
  stroke-dashoffset:520;
  animation:draw 2s ease forwards .42s;
}
@keyframes draw{to{stroke-dashoffset:0}}
.donutWrap{
  height:140px;
  display:grid;
  grid-template-columns:112px 1fr;
  gap:13px;
  align-items:center;
}
.donut{
  width:104px;
  height:104px;
  border-radius:999px;
  position:relative;
  background:conic-gradient(#2563eb 0 151deg,#7c3aed 151deg 245deg,#a78bfa 245deg 310deg,rgba(255,255,255,.22) 310deg 360deg);
}
.donut::after{
  content:"";
  position:absolute;
  inset:31px;
  border-radius:999px;
  background:#111425;
}
.legend{display:grid;gap:8px}
.legend div{
  display:grid;
  grid-template-columns:8px 1fr auto;
  gap:7px;
  align-items:center;
  color:#aeb8d6;
  font-size:.66rem;
  font-weight:800;
}
.legend i{width:8px;height:8px;border-radius:999px;background:#2563eb}
.legend div:nth-child(2) i{background:#7c3aed}
.legend div:nth-child(3) i{background:#a78bfa}
.legend div:nth-child(4) i{background:rgba(255,255,255,.30)}
.legend b{color:white}

/* SECCIONES */
.sectionKicker{
  margin:0 0 12px;
  color:#a78bfa;
  text-transform:uppercase;
  letter-spacing:.14em;
  font-size:.75rem;
  font-weight:950;
}
.sectionTitle{
  margin:0;
  font-size:clamp(2rem,3.4vw,3.2rem);
  line-height:1.08;
  letter-spacing:-.05em;
  font-weight:500;
}
.sectionLead{
  margin:18px 0 0;
  max-width:520px;
  color:#cbd5e1;
  line-height:1.68;
}
.decisions{
  position:relative;
  padding:104px 0 96px;
  background:
    radial-gradient(760px 360px at 82% 12%, rgba(124,58,237,.18), transparent 62%),
    radial-gradient(620px 300px at 16% 24%, rgba(61,44,141,.16), transparent 60%),
    linear-gradient(180deg, #080915 0%, #0b0c17 54%, #080915 100%);
  overflow:hidden;
}

.decisions::before{
  content:"";
  position:absolute;
  left:0;
  right:0;
  top:0;
  height:1px;
  background:linear-gradient(
    90deg,
    transparent,
    rgba(167,139,250,.42),
    transparent
  );
}

.decisions::after{
  content:"";
  position:absolute;
  inset:0;
  background-image:
    linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
  background-size:72px 72px;
  opacity:.26;
  pointer-events:none;
}

.decisionsGrid{
  position:relative;
  z-index:2;
  display:grid;
  grid-template-columns:.64fr 1.36fr;
  gap:52px;
  align-items:center;
}

.sectionKicker{
  margin:0 0 14px;
  color:#a78bfa;
  text-transform:uppercase;
  letter-spacing:.14em;
  font-size:.75rem;
  font-weight:950;
}

.sectionTitle{
  margin:0;
  font-size:clamp(2.15rem,3.4vw,3.45rem);
  line-height:1.04;
  letter-spacing:-.055em;
  font-weight:600;
}

.sectionLead{
  margin:22px 0 0;
  max-width:520px;
  color:#cbd5e1;
  line-height:1.72;
  font-size:1rem;
}

.textLink{
  display:inline-flex;
  align-items:center;
  gap:8px;
  margin-top:26px;
  color:#c4b5fd;
  font-weight:950;
  font-size:.9rem;
  transition:.18s ease;
}

.textLink:hover{
  color:#ffffff;
  transform:translateX(4px);
}

.cardGrid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:22px;
}

.actionCard{
  position:relative;
  min-height:320px;
  padding:38px 30px 34px;
  border-radius:24px;
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  justify-content:flex-start;
  background:
    radial-gradient(220px 120px at 50% 0%, rgba(124,58,237,.24), transparent 64%),
    linear-gradient(180deg, rgba(46,13,79,.72), rgba(17,20,37,.88));
  border:1px solid rgba(167,139,250,.20);
  box-shadow:
    0 20px 56px rgba(0,0,0,.25),
    inset 0 1px 0 rgba(255,255,255,.05);
  transition:.24s ease;
  overflow:hidden;
}

.actionCard:nth-child(2){animation-delay:.08s}
.actionCard:nth-child(3){animation-delay:.16s}
.actionCard:nth-child(4){animation-delay:.24s}

.actionCard::before{
  content:"";
  position:absolute;
  inset:0;
  background:linear-gradient(
    135deg,
    rgba(255,255,255,.08),
    transparent 34%,
    transparent 74%,
    rgba(127,178,255,.08)
  );
  opacity:.55;
  pointer-events:none;
}

.actionCard:hover{
  transform:translateY(-12px) scale(1.02);
  border-color:rgba(196,181,253,.58);
  box-shadow:
    0 34px 86px rgba(124,58,237,.26),
    0 0 0 1px rgba(167,139,250,.20),
    0 0 64px rgba(124,58,237,.18),
    inset 0 1px 0 rgba(255,255,255,.10);
}

.actionIcon{
  position:relative;
  z-index:1;
  width:96px;
  height:96px;
  display:grid;
  place-items:center;
  margin:0 auto 28px;
  border-radius:26px;
  color:#f5f3ff;
  background:
    radial-gradient(circle at 32% 24%, rgba(255,255,255,.24), transparent 24%),
    radial-gradient(circle at 50% 50%, rgba(139,92,246,.58), rgba(46,13,79,.96) 68%);
  border:1px solid rgba(196,181,253,.52);
  box-shadow:
    0 0 0 1px rgba(124,58,237,.20),
    0 0 34px rgba(124,58,237,.56),
    0 0 86px rgba(124,58,237,.22),
    inset 0 1px 0 rgba(255,255,255,.20);
}

.actionIcon svg{
  width:42px;
  height:42px;
  stroke-width:1.9;
  filter:drop-shadow(0 0 14px rgba(196,181,253,.68));
}

.actionCard h3{
  position:relative;
  z-index:1;
  margin:0 0 14px;
  font-size:1.25rem;
  line-height:1.2;
  font-weight:760;
  color:#ffffff;
  text-align:center;
}

.actionCard p{
  position:relative;
  z-index:1;
  margin:0;
  color:#dbe4ff;
  font-size:1rem;
  line-height:1.62;
  font-weight:430;
  text-align:center;
}

.cardLine{
  position:relative;
  z-index:1;
  width:54px;
  height:2px;
  background:linear-gradient(90deg, transparent, #a78bfa, transparent);
  margin:24px auto 0;
}

.purpose{
  position:relative;
  padding:96px 0;
  background:
    radial-gradient(760px 360px at 18% 50%, rgba(124,58,237,.16), transparent 64%),
    linear-gradient(180deg,#080915 0%,#070811 100%);
  overflow:hidden;
}
.purpose::before{
  content:"";
  position:absolute;
  inset:0;
  background-image:
    linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px);
  background-size:76px 76px;
  opacity:.55;
  pointer-events:none;
}
.purposeGrid{
  position:relative;
  z-index:2;
  display:grid;
  grid-template-columns:1.05fr .95fr;
  gap:44px;
  align-items:center;
}
.videoPanel{
  position:relative;
  min-height:430px;
  display:grid;
  place-items:center;
  overflow:hidden;
  border-radius:28px;
  background:
    radial-gradient(520px 230px at 52% 56%,rgba(124,58,237,.34),transparent 62%),
    linear-gradient(180deg,rgba(18,21,41,.94),rgba(8,9,21,.96));
  border:1px solid rgba(127,178,255,.18);
  box-shadow:
    0 34px 100px rgba(0,0,0,.38),
    0 0 0 1px rgba(124,58,237,.10) inset;
}
.videoPanel::before{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle,rgba(167,139,250,.58) 1px,transparent 1.7px),
    linear-gradient(180deg,transparent,rgba(124,58,237,.10));
  background-size:18px 18px,auto;
  opacity:.42;
  transform:perspective(760px) rotateX(60deg) translateY(42px) scale(1.18);
  transform-origin:center bottom;
}
.demoFrame{
  position:relative;
  z-index:2;
  width:min(86%,620px);
  min-height:252px;
  padding:28px;
  border-radius:24px;
  display:grid;
  align-content:center;
  justify-items:center;
  text-align:center;
  background:rgba(8,9,21,.58);
  border:1px solid rgba(167,139,250,.26);
  box-shadow:0 30px 90px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.08);
  backdrop-filter:blur(8px);
}
.demoBadge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  min-height:30px;
  padding:0 12px;
  margin-bottom:18px;
  border-radius:999px;
  color:#c4b5fd;
  background:rgba(124,58,237,.16);
  border:1px solid rgba(167,139,250,.22);
  font-size:.72rem;
  font-weight:950;
  text-transform:uppercase;
  letter-spacing:.12em;
}
.play{
  width:88px;height:88px;border-radius:999px;
  display:grid;place-items:center;
  margin-bottom:20px;
  background:linear-gradient(135deg,#8b5cf6,#5b21b6);
  box-shadow:0 24px 72px rgba(124,58,237,.45);
}
.play::before{
  content:"";
  border-left:22px solid white;
  border-top:14px solid transparent;
  border-bottom:14px solid transparent;
  margin-left:5px;
}
.demoFrame h3{margin:0 0 10px;font-size:1.45rem;letter-spacing:-.03em}
.demoFrame p{margin:0;max-width:440px;color:#dbe4ff;line-height:1.62;font-size:.94rem}
.demoVideo{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  border:0;
}
.purposeText{
  padding:10px 0;
}
.bullets{
  display:grid;
  gap:18px;
  margin-top:30px;
}
.bullet{display:grid;grid-template-columns:44px 1fr;gap:14px;align-items:start}
.bulletIcon{
  width:44px;height:44px;border-radius:999px;
  display:grid;place-items:center;
  color:#a78bfa;
  background:rgba(124,58,237,.12);
  border:1px solid rgba(167,139,250,.30);
}
.bullet strong{display:block;margin-bottom:5px;font-size:1rem}
.bullet span{display:block;color:#cbd5e1;font-size:.88rem;line-height:1.48}

.metrics{
  position:relative;
  padding:76px 0 86px;
  background:
    radial-gradient(820px 360px at 84% 24%, rgba(37,99,235,.13), transparent 62%),
    radial-gradient(700px 320px at 14% 32%, rgba(124,58,237,.16), transparent 60%),
    #0b0c17;
  border-top:1px solid rgba(255,255,255,.06);
  border-bottom:1px solid rgba(255,255,255,.06);
}
.metricsShell{
  display:grid;
  grid-template-columns:.72fr 1.28fr;
  gap:34px;
  align-items:flex-start;
  padding:34px;
  border-radius:30px;
  background:linear-gradient(180deg,rgba(15,18,37,.86),rgba(8,9,21,.84));
  border:1px solid rgba(127,178,255,.18);
  box-shadow:0 32px 96px rgba(0,0,0,.30), inset 0 1px 0 rgba(255,255,255,.05);
}
.metricsIntro{
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  padding:4px 12px 18px 0;
  border-right:1px solid rgba(255,255,255,.08);
}
.metricsTitle{
  margin:-14px 0 14px;
  color:#a78bfa;
  text-transform:uppercase;
  letter-spacing:.22em;
  font-size:.78rem;
  font-weight:950;
}
.metricsIntro h2{
  margin:0;
  max-width:420px;
  font-size:clamp(2.2rem,3.2vw,3.55rem);
  line-height:1.02;
  letter-spacing:-.055em;
}
.metricsIntro p{
  margin:22px 0 0;
  max-width:380px;
  color:#cbd5e1;
  line-height:1.68;
}
.metricsGrid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:22px;
}

.metric{
  position:relative;
  min-height:244px;
  padding:28px 24px 26px;
  border-radius:22px;
  background:linear-gradient(180deg,rgba(40,53,147,.50),rgba(17,20,37,.78));
  border:1px solid rgba(127,178,255,.16);
  overflow:hidden;
  display:flex;
  flex-direction:column;
}

.metric::before{
  content:"";
  position:absolute;
  inset:auto 0 0 0;
  height:72px;
  background:linear-gradient(180deg,transparent,rgba(124,58,237,.18));
}

.metric strong{
  position:relative;
  display:block;
  font-size:1.85rem;
  line-height:1.02;
  color:#fff;
  font-weight:820;
  margin:0 0 12px;
  letter-spacing:-.035em;
}

.metric span{
  position:relative;
  display:block;
  color:#e5e7eb;
  font-size:1.02rem;
  line-height:1.34;
  font-weight:700;
}

.metric small{
  position:relative;
  display:block;
  margin-top:14px;
  color:#86efac;
  font-size:.92rem;
  font-weight:760;
  line-height:1.36;
}

.metric:nth-child(3) small{color:#f87171}
.metric:nth-child(4) small{color:#f0abfc}

.benefits{
  padding:76px 0 88px;
  background:#080915;
}
.benefitShell{
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  gap:34px;
  align-items:stretch;
  padding:34px;
  border-radius:30px;
  background:
    radial-gradient(720px 280px at 72% 22%, rgba(124,58,237,.16), transparent 64%),
    linear-gradient(180deg,rgba(10,13,28,.92),rgba(8,9,21,.94));
  border:1px solid rgba(127,178,255,.16);
}
.benefitIntro{
  display:flex;
  flex-direction:column;
  justify-content:center;
  min-height:360px;
  padding:24px;
  border-radius:24px;
  background:rgba(12,14,28,.52);
  border:1px solid rgba(255,255,255,.06);
}
.benefitIntro h2{margin:0;font-size:clamp(2rem,3vw,3.15rem);line-height:1.06;letter-spacing:-.05em}
.benefitIntro p{margin:20px 0 0;color:#cbd5e1;line-height:1.68;max-width:540px}
.benefitGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.benefitCard{
  min-height:176px;
  padding:28px 26px;
  border-radius:24px;
  background:linear-gradient(180deg,rgba(40,53,147,.58),rgba(17,20,37,.76));
  border:1px solid rgba(167,139,250,.18);
  transition:.8s cubic-bezier(.13,.72,.08,1);
}
.benefitCard:hover{transform:translateY(-28px) scale(1.04);border-color:rgba(196,181,253,.72);box-shadow:0 42px 100px rgba(124,58,237,.30)}
.benefitNum{display:block;margin-bottom:16px;color:#c4b5fd;font-size:.78rem;font-weight:950;letter-spacing:.14em}
.benefitCard h3{margin:0 0 10px;font-size:1.08rem}
.benefitCard p{margin:0;color:#dbe4ff;font-size:.88rem;line-height:1.55}

.receive{
  padding:78px 0 90px;
  background:
    radial-gradient(780px 340px at 82% 18%, rgba(37,99,235,.12), transparent 60%),
    #070811;
}
.receivePanel{
  padding:34px;
  border-radius:30px;
  background:linear-gradient(180deg,rgba(15,18,37,.86),rgba(9,10,24,.90));
  border:1px solid rgba(127,178,255,.16);
}
.receiveHead{max-width:760px;margin-bottom:30px}
.receiveHead h2{margin:0;font-size:clamp(2rem,3.2vw,3.35rem);line-height:1.05;letter-spacing:-.05em}
.receiveHead p{margin:16px 0 0;color:#cbd5e1;line-height:1.66}
.receiveGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.receiveItem{
  display:flex;
  gap:14px;
  align-items:center;
  min-height:72px;
  padding:18px 20px;
  border-radius:18px;
  background:rgba(40,53,147,.28);
  border:1px solid rgba(255,255,255,.08);
  color:#e5e7eb;
  font-weight:850;
}
.check{
  width:28px;height:28px;border-radius:999px;
  display:grid;place-items:center;
  flex:0 0 auto;
  color:#86efac;
  background:rgba(34,197,94,.12);
  border:1px solid rgba(34,197,94,.24);
}

.howWorks{
  padding:84px 0 98px;
  background:linear-gradient(180deg,#080915,#0b0c17);
}
.howPanel{
  padding:34px;
  border-radius:30px;
  background:
    radial-gradient(700px 260px at 52% 84%, rgba(124,58,237,.14), transparent 62%),
    linear-gradient(180deg,rgba(15,18,37,.82),rgba(8,9,21,.90));
  border:1px solid rgba(127,178,255,.16);
}
.howHead{margin-bottom:34px;max-width:800px}
.howHead h2{margin:0;font-size:clamp(2.2rem,3.4vw,3.6rem);line-height:1.03;letter-spacing:-.055em}
.howHead p{margin:16px 0 0;color:#cbd5e1;line-height:1.62}
.stepGrid{display:grid;grid-template-columns:1fr 52px 1fr 52px 1fr;gap:18px;align-items:center}
.stepCard{
  min-height:190px;
  padding:28px;
  border-radius:24px;
  background:linear-gradient(180deg,rgba(40,53,147,.56),rgba(17,20,37,.78));
  border:1px solid rgba(167,139,250,.18);
}
.stepCard h3{margin:0 0 10px;font-size:1.12rem}
.stepCard p{margin:0;color:#dbe4ff;font-size:.9rem;line-height:1.58}
.stepNum{
  display:inline-grid;place-items:center;
  width:38px;height:38px;border-radius:12px;
  margin-bottom:18px;
  color:#fff;background:linear-gradient(135deg,#8b5cf6,#5b21b6);
  font-weight:950;
}
.stepArrow{font-size:2rem;color:#a78bfa;text-align:center;opacity:.72}

.solutions{
  padding:76px 0 92px;
  background:#070811;
}
.solutionsTitle{
  margin-bottom:24px;
  text-align:center;
  color:#a78bfa;
  text-transform:uppercase;
  letter-spacing:.14em;
  font-size:.74rem;
  font-weight:950;
}
.solutionGrid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:28px;
}

.solutionCard{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  min-height:320px;
  padding:46px 42px;
  border-radius:28px;
  background:linear-gradient(180deg,rgba(46,13,79,.44),rgba(17,20,37,.68));
  border:1px solid rgba(124,58,237,.18);
  transition:
    transform .8s cubic-bezier(.13,.72,.08,1),
    border-color .8s ease,
    box-shadow .8s ease,
    filter .8s ease;
}

.solutionCard:hover{
  transform:translateY(-16px) scale(1.025) !important;
  border-color:rgba(196,181,253,.72);
  box-shadow:0 42px 100px rgba(124,58,237,.30);
}

.solutionIcon{
  width:104px;
  height:104px;
  border-radius:30px;
  display:grid;
  place-items:center;
  margin:0 auto 34px;
  background:radial-gradient(circle,#7c3aed,#321a70);
  color:#fff;
  box-shadow:
    0 0 32px rgba(124,58,237,.34),
    inset 0 1px 0 rgba(255,255,255,.16);
}

.solutionIcon svg{
  width:50px;
  height:50px;
  stroke-width:1.9;
}

.solutionCard h3{
  margin:0 0 18px;
  font-size:1.55rem;
  line-height:1.18;
  font-weight:720;
  color:#c4b5fd;
}

.solutionCard p{
  margin:0;
  color:#dbe4ff;
  font-size:1.12rem;
  line-height:1.58;
  font-weight:430;
}

.solutionCard span{
  display:inline-flex;
  margin-top:26px;
  color:#a78bfa;
  font-weight:760;
  font-size:1rem;
}

.faq{
  padding:82px 0 94px;
  background:#080915;
}
.faqPanel{
  padding:34px;
  border-radius:30px;
  background:linear-gradient(180deg,rgba(15,18,37,.86),rgba(9,10,24,.90));
  border:1px solid rgba(127,178,255,.16);
}
.faqHead{margin-bottom:28px}
.faqHead h2{margin:0;font-size:clamp(2rem,3.2vw,3.35rem);line-height:1.05;letter-spacing:-.05em}
.faqHead p{margin:14px 0 0;color:#cbd5e1;line-height:1.6}
.faqList{display:grid;gap:14px}
.faqItem{
  padding:20px 22px;
  border-radius:18px;
  background:rgba(40,53,147,.24);
  border:1px solid rgba(255,255,255,.08);
}
.faqItem summary{
  cursor:pointer;
  list-style:none;
  display:flex;
  justify-content:space-between;
  gap:18px;
  font-weight:950;
  color:#fff;
}
.faqItem summary::-webkit-details-marker{display:none}
.faqItem summary::after{content:"+";color:#a78bfa;font-size:1.2rem}
.faqItem[open] summary::after{content:"–"}
.faqItem p{margin:14px 0 0;color:#cbd5e1;line-height:1.62;font-size:.9rem}



/* ================================
   REFINAMIENTO VISUAL SOLICITADO
   iconos premium, números protagonistas y hover más prolijo en FAQ
================================ */

/* Hero: conserva la entrada lateral, pero llega antes a su posición final */
.heroCopy.motion-left{
  transform:translate3d(-220px,0,0) scale(.96);
  transition-duration:2.75s !important;
}

.dashboard.motion-right{
  transform:translate3d(240px,0,0) scale(.95);
  transition-duration:2.95s !important;
}

.dashboard.motion-right.is-in-view{
  animation:dashboardFloatUltra 7.2s ease-in-out 3s infinite alternate !important;
}

@keyframes dashboardFloatUltra{
  0%{translate:0 0}
  100%{translate:0 -18px}
}

/* Iconos principales: más presencia, brillo y lectura premium */
.actionIcon,
.metricIcon,
.solutionIcon,
.bulletIcon{
  position:relative;
  isolation:isolate;
  overflow:hidden;
  color:#f5f3ff;
  background:
    radial-gradient(circle at 32% 24%, rgba(255,255,255,.22), transparent 24%),
    radial-gradient(circle at 50% 50%, rgba(139,92,246,.52), rgba(46,13,79,.96) 68%);
  border:1px solid rgba(196,181,253,.46);
  box-shadow:
    0 0 0 1px rgba(124,58,237,.20),
    0 0 28px rgba(124,58,237,.48),
    0 0 72px rgba(124,58,237,.18),
    inset 0 1px 0 rgba(255,255,255,.18);
}

.actionIcon::before,
.metricIcon::before,
.solutionIcon::before,
.bulletIcon::before{
  content:"";
  position:absolute;
  inset:8px;
  border-radius:inherit;
  background:linear-gradient(135deg, rgba(255,255,255,.20), transparent 42%, rgba(127,178,255,.18));
  opacity:.78;
  z-index:-1;
}

.actionIcon::after,
.metricIcon::after,
.solutionIcon::after,
.bulletIcon::after{
  content:"";
  position:absolute;
  inset:-34%;
  background:conic-gradient(from 180deg, transparent, rgba(167,139,250,.36), transparent, rgba(127,178,255,.28), transparent);
  opacity:.34;
  animation:iconHaloSpin 9s linear infinite;
  z-index:-2;
}

@keyframes iconHaloSpin{
  to{transform:rotate(360deg)}
}

.actionIcon{
  width:96px;
  height:96px;
  border-radius:26px;
  margin:0 auto 28px;
}

.actionIcon svg,
.metricIcon svg,
.solutionIcon svg,
.bulletIcon svg{
  width:34px;
  height:34px;
  stroke-width:1.9;
  filter:drop-shadow(0 0 12px rgba(196,181,253,.62));
}

.metricIcon svg{
  width:40px;
  height:40px;
  stroke-width:2;
  filter:drop-shadow(0 0 18px rgba(196,181,253,.78));
}

.bullet{grid-template-columns:56px 1fr;gap:16px}
.bulletIcon{
  width:56px;
  height:56px;
  border-radius:18px;
}
.bulletIcon svg{width:28px;height:28px}

.metricIcon{
  position:relative;
  z-index:1;
  width:86px;
  height:86px;
  display:grid;
  place-items:center;
  margin:0 auto 26px;
  border-radius:24px;
  color:#f5f3ff;
  box-shadow:
    0 0 0 1px rgba(124,58,237,.22),
    0 0 38px rgba(124,58,237,.56),
    0 0 92px rgba(124,58,237,.24),
    inset 0 1px 0 rgba(255,255,255,.20);
}

.metric:nth-child(1) .metricIcon{
  color:#86efac;
  background:
    radial-gradient(circle at 35% 28%, rgba(134,239,172,.34), rgba(13,95,62,.28) 42%, rgba(13,18,36,.92) 76%);
}

.metric:nth-child(2) .metricIcon{
  color:#93c5fd;
  background:
    radial-gradient(circle at 35% 28%, rgba(147,197,253,.34), rgba(37,99,235,.26) 42%, rgba(13,18,36,.92) 76%);
}

.metric:nth-child(3) .metricIcon{
  color:#fca5a5;
  background:
    radial-gradient(circle at 35% 28%, rgba(252,165,165,.34), rgba(239,68,68,.24) 42%, rgba(13,18,36,.92) 76%);
}

.metric:nth-child(4) .metricIcon{
  color:#f0abfc;
  background:
    radial-gradient(circle at 35% 28%, rgba(240,171,252,.34), rgba(168,85,247,.26) 42%, rgba(13,18,36,.92) 76%);
}

.solutionIcon{
  width:82px;
  height:82px;
  border-radius:24px;
}
.solutionIcon svg{width:38px;height:38px}

/* Beneficios: números más grandes, brillosos y protagonistas */
.benefitNum{
  display:block;
  margin-bottom:18px;
  font-size:3.25rem;
  line-height:.9;
  letter-spacing:-.08em;
  font-weight:950;
  color:transparent;
  background:linear-gradient(135deg,#ffffff 0%,#c4b5fd 28%,#8b5cf6 58%,#7fb2ff 100%);
  -webkit-background-clip:text;
  background-clip:text;
  text-shadow:
    0 0 24px rgba(139,92,246,.68),
    0 0 58px rgba(127,178,255,.32);
  filter:drop-shadow(0 0 18px rgba(124,58,237,.55));
}

.benefitCard:hover{
  transform:translateY(-16px) scale(1.025) !important;
}

/* Cómo funciona: número protagonista, sin cuadrado */
.stepNum{
  display:block;
  width:auto;
  height:auto;
  margin:0 0 22px;
  border-radius:0;
  color:transparent;
  background:linear-gradient(135deg,#ffffff 0%,#c4b5fd 30%,#8b5cf6 62%,#7fb2ff 100%);
  -webkit-background-clip:text;
  background-clip:text;
  font-size:4.4rem;
  line-height:.85;
  font-weight:950;
  letter-spacing:-.08em;
  text-shadow:
    0 0 22px rgba(139,92,246,.72),
    0 0 70px rgba(127,178,255,.30);
  box-shadow:none;
  filter:drop-shadow(0 0 18px rgba(124,58,237,.62));
}

.stepCard:hover{
  transform:translateY(-14px) scale(1.02) !important;
}

/* FAQ: hover más prolijo, sin levantarse demasiado */
.faqItem:hover,
.faqRow:hover{
  transform:none;
  box-shadow:none;
}

/* Refuerzo visual para soluciones y tarjetas principales sin exagerar desplazamiento */
.solutionCard:hover{
  transform:translateY(-16px) scale(1.025) !important;
}
.actionCard:hover{
  transform:translateY(-16px) scale(1.025) !important;
}
.metric:hover{
  transform:translateY(-14px) scale(1.02) !important;
}

@media (max-width:1120px){
  .purposeGrid,
  .metricsShell,
  .benefitShell,
  .stepGrid{
    grid-template-columns:1fr;
  }

.metricsIntro{
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  padding:0 12px 18px 0;
  border-right:1px solid rgba(255,255,255,.08);
}

  .metricsGrid,
  .solutionGrid{
    grid-template-columns:repeat(2,1fr);
  }

  .stepArrow{
    display:none;
  }
}
@media (max-width:760px){
  .videoPanel{min-height:320px;border-radius:22px}
  .demoFrame{width:90%;padding:22px;min-height:230px}
  .metricsShell,.benefitShell,.receivePanel,.howPanel,.faqPanel{padding:22px;border-radius:24px}
  .metricsGrid,.benefitGrid,.receiveGrid,.solutionGrid{grid-template-columns:1fr}
}

.pricing{
  padding:76px 0 92px;
  background:linear-gradient(180deg,#080915,#0b0c17);
}
.pricingHead{text-align:center;margin-bottom:26px}
.pricingGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}
.price{
  min-height:340px;
  padding:34px 30px;
  border-radius:22px;
  background:linear-gradient(180deg,rgba(17,20,37,.78),rgba(12,14,28,.86));
  border:1px solid rgba(255,255,255,.08);
}
.price.featured{
  border-color:#7c3aed;
  box-shadow:0 0 0 1px rgba(124,58,237,.26),0 20px 48px rgba(124,58,237,.13);
}
.price h3{margin:0 0 10px;font-size:1.08rem}
.amount{font-size:2.34rem;font-weight:950;letter-spacing:-.04em}
.amount small{font-size:.92rem;color:#cbd5e1}
.price p,.price li{color:#dbe4ff;font-size:.82rem;line-height:1.54}
.price ul{padding-left:18px;margin:18px 0 22px}
.helpBox{
  display:flex;
  flex-direction:column;
  justify-content:center;
  background:linear-gradient(145deg,#2e0d4f,#3d2c8d);
}

.bottomCta{
  padding:28px 0;
  background:linear-gradient(90deg,#211047,#3d2c8d);
  border-top:1px solid rgba(255,255,255,.08);
  border-bottom:1px solid rgba(255,255,255,.08);
}
.bottomGrid{
  display:grid;
  grid-template-columns:86px 1fr auto;
  gap:20px;
  align-items:center;
}
.cloud{
  width:64px;height:64px;border-radius:20px;
  display:grid;place-items:center;
  font-size:2rem;
  background:rgba(255,255,255,.07);
  border:1px solid rgba(255,255,255,.13);
}
.bottomGrid h2{margin:0 0 5px;font-size:1.48rem;letter-spacing:-.03em}
.bottomGrid p{margin:0;color:#e5e7eb}
.bottomActions{display:flex;gap:12px}

.footer{
  padding:30px 0 36px;
  background:#070811;
}
.footerGrid{
  display:grid;
  grid-template-columns:1.4fr .8fr .8fr .8fr;
  gap:34px;
}
.footer p,.footer a{
  display:block;
  margin:0 0 8px;
  color:#cbd5e1;
  font-size:.78rem;
  line-height:1.6;
}
.footer h4{margin:0 0 12px;font-size:.82rem}
.social{display:flex;gap:10px}
.social span{
  width:30px;height:30px;border-radius:999px;
  display:grid;place-items:center;
  background:rgba(255,255,255,.07);
  font-size:.78rem;
}

@keyframes fadeUp{
  from{opacity:0;transform:translateY(26px)}
  to{opacity:1;transform:translateY(0)}
}
@keyframes enterLeft{
  from{opacity:0;transform:translateX(-42px)}
  to{opacity:1;transform:translateX(0)}
}
@keyframes enterRight{
  from{opacity:0;transform:translateX(42px)}
  to{opacity:1;transform:translateX(0)}
}
.reveal{animation:fadeUp .72s ease both}

@media (max-width:1120px){
  .heroGrid,.decisionsGrid,.purpose,.pricingGrid,.bottomGrid{grid-template-columns:1fr}
  .dashboard{grid-template-columns:1fr}
  .dashSide{display:none}
  .cardGrid,.solutionGrid,.metricsGrid,.footerGrid{grid-template-columns:repeat(2,1fr)}
  .bottomActions{display:grid}
}
@media (max-width:760px){
  .container{width:100%;padding:0 18px}
  .navInner{height:auto;padding:14px 0;flex-direction:column;align-items:flex-start}
  .navLinks{display:none}
  .navActions{width:100%;display:grid;grid-template-columns:1fr}
  .modeDot{display:none}
  .hero{padding-top:112px}
  .hero h1{font-size:2.85rem}
  .kpiGrid,.dashBody,.cardGrid,.metricsGrid,.solutionGrid,.footerGrid,.donutWrap{grid-template-columns:1fr}
  .dashboard{min-height:auto}
  .purposeText{padding:42px 22px}
  .bottomGrid{gap:16px}
  .bottomActions,.heroActions{width:100%}
  .btn{width:100%}
}
.heroWaveImage{
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  height:330px;
  background-image:url("/images/jasodatos-wave-bg.png");
  background-repeat:no-repeat;
  background-size:120% auto;
  background-position:center bottom;
  opacity:.95;
  z-index:1;
  pointer-events:none;
}

.heroWaveImage::before{
  content:"";
  position:absolute;
  inset:0;
  background:
    linear-gradient(
      90deg,
      rgba(8,9,21,.72) 0%,
      rgba(8,9,21,.48) 26%,
      rgba(8,9,21,.18) 54%,
      rgba(8,9,21,.10) 100%
    ),
    linear-gradient(
      180deg,
      rgba(8,9,21,.20) 0%,
      rgba(8,9,21,.10) 36%,
      rgba(8,9,21,.30) 100%
    );
}

.heroWaveImage::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  height:70px;
  background:linear-gradient(
    180deg,
    rgba(8,9,21,0) 0%,
    rgba(8,9,21,.28) 42%,
    #080915 100%
  );
}
  /* ================================
   MOTION SYSTEM JASODATOS
   scroll-triggered, lento y ultra evidente
================================ */

.motion-fade,
.motion-up,
.motion-left,
.motion-right,
.motion-scale{
  opacity:0;
  will-change:opacity, transform, filter;
  transition-property:opacity, transform, filter;
  transition-timing-function:cubic-bezier(.13,.72,.08,1);
  filter:blur(10px);
}

.motion-fade{
  transition-duration:3.2s;
}

.motion-up{
  transform:translate3d(0,260px,0) scale(.88);
  transition-duration:4.6s;
}

.motion-left{
  transform:translate3d(-360px,0,0) scale(.90);
  transition-duration:5.2s;
}

.motion-right{
  transform:translate3d(360px,0,0) scale(.90);
  transition-duration:5.2s;
}

.motion-scale{
  transform:scale(.72);
  transition-duration:4.4s;
}

.motion-fade.is-in-view,
.motion-up.is-in-view,
.motion-left.is-in-view,
.motion-right.is-in-view,
.motion-scale.is-in-view{
  opacity:1;
  transform:translate3d(0,0,0) scale(1);
  filter:blur(0);
}

.motion-delay-1{transition-delay:.35s}
.motion-delay-2{transition-delay:.78s}
.motion-delay-3{transition-delay:1.18s}
.motion-delay-4{transition-delay:1.58s}

/* evita que animaciones antiguas compitan con el sistema por scroll */
.heroCopy.motion-left,
.dashboard.motion-right,
.actionCard.motion-up,
.solutionCard.motion-left,
.solutionCard.motion-up,
.solutionCard.motion-right,
.price.motion-up,
.metric.motion-up{
  animation:none !important;
}

/* dashboard: entrada lenta + flotación exagerada después de entrar */
.dashboard.motion-right{
  translate:0 0;
}

.dashboard.motion-right.is-in-view{
  animation:dashboardFloatUltra 6.8s ease-in-out 5.2s infinite alternate !important;
}

@keyframes dashboardFloatUltra{
  0%{translate:0 0}
  100%{translate:0 -34px}
}

/* onda: movimiento más notorio y lento */
.heroWaveImage{
  animation:waveBackgroundMoveUltra 28s ease-in-out infinite alternate;
  will-change:background-position, background-size, opacity;
}

@keyframes waveBackgroundMoveUltra{
  0%{
    background-position:center bottom;
    background-size:118% auto;
    opacity:.88;
  }
  45%{
    background-position:center calc(100% + 48px);
    background-size:134% auto;
    opacity:.99;
  }
  100%{
    background-position:center calc(100% + 86px);
    background-size:148% auto;
    opacity:.91;
  }
}

/* hover premium ultra visible */
.actionCard,
.solutionCard,
.price,
.metric,
.benefitCard,
.stepCard,
.receiveItem,
.faqItem{
  will-change:transform, border-color, box-shadow, background, filter;
  transition:
    transform .8s cubic-bezier(.13,.72,.08,1),
    border-color .8s ease,
    box-shadow .8s ease,
    background .8s ease,
    filter .8s ease;
}

.actionCard:hover,
.actionCard.motion-up:hover,
.solutionCard:hover,
.solutionCard.motion-left:hover,
.solutionCard.motion-up:hover,
.solutionCard.motion-right:hover,
.price:hover,
.price.motion-up:hover,
.benefitCard:hover,
.stepCard:hover,
.receiveItem:hover,
.faqItem:hover{
  transform:translateY(-34px) scale(1.065) !important;
  filter:saturate(1.25) brightness(1.12);
}

.actionCard:hover{
  border-color:rgba(196,181,253,.82);
  box-shadow:
    0 56px 120px rgba(124,58,237,.44),
    0 0 0 1px rgba(167,139,250,.30),
    0 0 80px rgba(124,58,237,.22),
    inset 0 1px 0 rgba(255,255,255,.18);
}

.solutionCard:hover{
  border-color:rgba(196,181,253,.76);
  box-shadow:
    0 48px 108px rgba(124,58,237,.36),
    0 0 0 1px rgba(167,139,250,.22),
    0 0 74px rgba(124,58,237,.20);
}

.price:hover{
  border-color:rgba(196,181,253,.68);
  box-shadow:
    0 48px 110px rgba(124,58,237,.32),
    0 0 0 1px rgba(167,139,250,.20),
    0 0 70px rgba(124,58,237,.18);
}

.benefitCard:hover,
.stepCard:hover,
.receiveItem:hover,
.faqItem:hover{
  border-color:rgba(196,181,253,.70);
  box-shadow:
    0 42px 100px rgba(124,58,237,.30),
    0 0 0 1px rgba(167,139,250,.18),
    0 0 64px rgba(124,58,237,.16);
}

/* el elemento se reinicia cuando sale del viewport para que vuelva a animar al regresar */
.motion-fade:not(.is-in-view),
.motion-up:not(.is-in-view),
.motion-left:not(.is-in-view),
.motion-right:not(.is-in-view),
.motion-scale:not(.is-in-view){
  pointer-events:none;
}

.motion-fade.is-in-view,
.motion-up.is-in-view,
.motion-left.is-in-view,
.motion-right.is-in-view,
.motion-scale.is-in-view{
  pointer-events:auto;
}

@media (prefers-reduced-motion: reduce){
  .motion-fade,
  .motion-up,
  .motion-left,
  .motion-right,
  .motion-scale,
  .dashboard.motion-right,
  .heroWaveImage{
    opacity:1 !important;
    transform:none !important;
    translate:0 0 !important;
    filter:none !important;
    transition:none !important;
    animation:none !important;
  }

  .actionCard,
  .solutionCard,
  .price,
  .metric,
  .benefitCard,
  .stepCard,
  .receiveItem,
  .faqItem{
    transition:none !important;
  }
  /* FAQ sin elevación al pasar el mouse */
.faqItem,
.faqRow,
.faqCard{
  transition:border-color .2s ease, background .2s ease;
}

.faqItem:hover,
.faqRow:hover,
.faqCard:hover{
  transform:none !important;
  box-shadow:none !important;
}
}





/* ================================
   RESPONSIVE FIX MOBILE/TABLET
   Reduce espacios vacíos causados por animaciones grandes
================================ */
@media (max-width: 900px){
  .container{
    width:100%;
    padding-left:20px;
    padding-right:20px;
  }

  .hero{
    min-height:auto;
    padding:104px 0 46px;
  }

  .heroGrid,
  .decisionsGrid,
  .purposeGrid,
  .metricsShell,
  .benefitShell,
  .pricingGrid,
  .bottomGrid{
    grid-template-columns:1fr !important;
  }

  .heroGrid{gap:32px}

  .hero h1{
    font-size:clamp(2.45rem,12vw,3.35rem);
    line-height:1.08;
    letter-spacing:-.055em;
  }

  .heroLead{
    font-size:.98rem;
    line-height:1.58;
    margin:20px 0 22px;
  }

  .heroActions{
    display:grid;
    grid-template-columns:1fr;
    gap:12px;
  }

  .dashboard{
    grid-template-columns:1fr;
    min-height:auto;
    border-radius:18px;
  }

  .dashSide{display:none}
  .dashMain{padding:18px}
  .dashHeader{align-items:flex-start;gap:12px}
  .kpiGrid,
  .dashBody,
  .donutWrap{
    grid-template-columns:1fr !important;
  }

  .panel{min-height:auto}
  .lineBox{height:130px}
  .donutWrap{height:auto}

  .heroWaveImage{
    height:280px;
    background-size:150% auto;
    opacity:.78;
    animation:none !important;
  }

  .decisions,
  .purpose,
  .metrics,
  .benefits,
  .receive,
  .howWorks,
  .solutions,
  .pricing,
  .faq{
    padding-top:58px !important;
    padding-bottom:64px !important;
  }

  .sectionTitle,
  .metricsIntro h2,
  .benefitIntro h2,
  .receiveHead h2,
  .howHead h2,
  .faqHead h2{
    font-size:clamp(2rem,9vw,2.7rem);
    line-height:1.08;
  }

  .cardGrid,
  .metricsGrid,
  .benefitGrid,
  .receiveGrid,
  .solutionGrid{
    grid-template-columns:1fr !important;
    gap:18px;
  }

  .actionCard,
  .metric,
  .benefitCard,
  .stepCard,
  .solutionCard,
  .price,
  .faqItem{
    min-height:auto;
  }

  .actionCard{padding:28px 24px}

  .purposeGrid{gap:28px}
  .videoPanel{
    min-height:320px;
    border-radius:22px;
  }

  .demoFrame{
    width:90%;
    min-height:230px;
    padding:22px;
  }

  .metricsShell,
  .benefitShell,
  .receivePanel,
  .howPanel,
  .faqPanel{
    padding:22px !important;
    border-radius:24px;
  }

  .metricsIntro{
    padding:0 0 22px;
    border-right:0;
    border-bottom:1px solid rgba(255,255,255,.08);
  }

  .benefitIntro{
    min-height:auto;
    padding:22px;
  }

  .stepGrid{
    grid-template-columns:1fr !important;
    gap:18px;
  }

  .stepArrow{display:none !important}

  .solutionCard{
    grid-template-columns:72px 1fr;
    width:100%;
  }

  .pricingGrid{
    max-width:520px;
    gap:22px;
  }

  .price{
    min-height:auto;
    padding:34px 26px;
    border-radius:24px;
  }

  .amount{font-size:3.1rem}

  .bottomGrid{text-align:left}

  .bottomActions,
  .navActions{
    display:grid;
    grid-template-columns:1fr;
    width:100%;
  }

  .footerGrid{grid-template-columns:1fr !important}

  /* Animación móvil: visible, pero sin dejar huecos gigantes */
  .motion-fade,
  .motion-up,
  .motion-left,
  .motion-right,
  .motion-scale{
    transition-duration:1.15s !important;
    filter:none !important;
  }

  .motion-up:not(.is-in-view){
    transform:translate3d(0,44px,0) scale(.98) !important;
  }

  .motion-left:not(.is-in-view){
    transform:translate3d(-44px,0,0) scale(.98) !important;
  }

  .motion-right:not(.is-in-view){
    transform:translate3d(44px,0,0) scale(.98) !important;
  }

  .motion-scale:not(.is-in-view){
    transform:scale(.96) !important;
  }

  .motion-delay-1{transition-delay:.06s !important}
  .motion-delay-2{transition-delay:.12s !important}
  .motion-delay-3{transition-delay:.18s !important}
  .motion-delay-4{transition-delay:.24s !important}

  .dashboard.motion-right.is-in-view{
    animation:none !important;
  }

  .actionCard:hover,
  .solutionCard:hover,
  .price:hover,
  .benefitCard:hover,
  .stepCard:hover,
  .receiveItem:hover,
  .metric:hover{
    transform:translateY(-6px) scale(1.01) !important;
  }

  /* FAQ mantiene entrada lateral, pero corta y sin hover */
  .faq .faqList .faqItem.motion-left:not(.is-in-view){
    transform:translate3d(-44px,0,0) !important;
  }

  .faq .faqList .faqItem.motion-right:not(.is-in-view){
    transform:translate3d(44px,0,0) !important;
  }

  .faq .faqList .faqItem.motion-left,
  .faq .faqList .faqItem.motion-right{
    transition-duration:1.15s !important;
  }
}

@media (max-width: 430px){
  .container{
    padding-left:16px;
    padding-right:16px;
  }

  .navInner{
    height:auto;
    padding:14px 0;
    flex-direction:column;
    align-items:flex-start;
  }

  .navLinks,
  .modeDot{display:none}

  .hero{padding-top:118px}
  .dashMain{padding:14px}
  .dateBadge{font-size:.62rem}
  .kpi{padding:14px}

  .sectionKicker,
  .metricsTitle,
  .solutionsTitle{
    letter-spacing:.12em;
  }

.solutionCard{
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
}

.solutionIcon{
  width:86px;
  height:86px;
  border-radius:24px;
  margin-bottom:26px;
}
.solutionIcon{
  width:82px;
  height:82px;
  border-radius:24px;
}

  .receiveItem{align-items:flex-start}
  .faqItem{padding:18px 18px}
}


/* ================================
   AJUSTE FINAL JASODATOS EN NÚMEROS
================================ */

.metrics .metricsIntro{
  padding-top:0 !important;
}

.metrics .metricsTitle{
  margin:-22px 0 12px !important;
  color:#8b5cf6 !important;
  text-transform:uppercase !important;
  letter-spacing:.24em !important;
  font-size:.78rem !important;
  font-weight:950 !important;
  text-shadow:
    0 0 18px rgba(139,92,246,.55),
    0 0 34px rgba(167,139,250,.22) !important;
}
/* ================================
   AJUSTE FINAL BENEFICIOS VISIBLES
================================ */

.benefits .sectionKicker{
  margin:-22px 0 14px !important;
  color:#8b5cf6 !important;
  text-transform:uppercase !important;
  letter-spacing:.24em !important;
  font-size:.78rem !important;
  font-weight:950 !important;
  text-shadow:
    0 0 18px rgba(139,92,246,.55),
    0 0 34px rgba(167,139,250,.22) !important;
}

.benefits .benefitIntro{
  justify-content:flex-start !important;
  padding-top:44px !important;
}    

/* ================================
   AJUSTE FINAL QUÉ RECIBES
================================ */

.receive .sectionKicker{
  margin:-22px 0 14px !important;
  color:#8b5cf6 !important;
  text-transform:uppercase !important;
  letter-spacing:.24em !important;
  font-size:.78rem !important;
  font-weight:950 !important;
  text-shadow:
    0 0 18px rgba(139,92,246,.55),
    0 0 34px rgba(167,139,250,.22) !important;
}

.receive .receiveHead{
  margin-bottom:32px !important;
}

.receive .receivePanel{
  padding-top:52px !important;
}

/* ================================
   AJUSTE FINAL CÓMO FUNCIONA
================================ */

.howWorks .sectionKicker{
  margin:-22px 0 14px !important;
  color:#8b5cf6 !important;
  text-transform:uppercase !important;
  letter-spacing:.24em !important;
  font-size:.78rem !important;
  font-weight:950 !important;
  text-shadow:
    0 0 18px rgba(139,92,246,.55),
    0 0 34px rgba(167,139,250,.22) !important;
}

.howWorks .howHead{
  margin-bottom:34px !important;
  padding-top:0 !important;
}

/* ================================
   AJUSTE FINAL NUESTRAS SOLUCIONES
================================ */

.solutions .solutionsTitle{
  margin:-22px 0 28px !important;
  color:#8b5cf6 !important;
  text-transform:uppercase !important;
  letter-spacing:.24em !important;
  font-size:.78rem !important;
  font-weight:950 !important;
  text-shadow:
    0 0 18px rgba(139,92,246,.55),
    0 0 34px rgba(167,139,250,.22) !important;
}


/* ================================
   AJUSTE FINAL PREGUNTAS FRECUENTES
================================ */

.faq .sectionKicker{
  margin:-22px 0 14px !important;
  color:#8b5cf6 !important;
  text-transform:uppercase !important;
  letter-spacing:.24em !important;
  font-size:.78rem !important;
  font-weight:950 !important;
  text-shadow:
    0 0 18px rgba(139,92,246,.55),
    0 0 34px rgba(167,139,250,.22) !important;
}

.faq .faqHead{
  margin-bottom:34px !important;
  padding-top:0 !important;
}

/* ================================
   CTA FINAL - ICONOS PREMIUM
================================ */

.bottomCta .cloud{
  width:72px !important;
  height:72px !important;
  border-radius:22px !important;
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  color:#8b5cf6 !important;
  background:
    radial-gradient(circle at 34% 26%, rgba(255,255,255,.12), transparent 24%),
    linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03)) !important;
  border:1px solid rgba(167,139,250,.34) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.10),
    0 0 0 1px rgba(124,58,237,.12),
    0 18px 40px rgba(46,13,79,.22),
    0 0 34px rgba(139,92,246,.22) !important;
}

.bottomCta .cloud svg{
  width:36px !important;
  height:36px !important;
  stroke-width:2.1 !important;
  filter:
    drop-shadow(0 0 8px rgba(139,92,246,.46))
    drop-shadow(0 0 18px rgba(139,92,246,.22));
}

.bottomCta .btn{
  gap:10px !important;
}

.bottomCta .btnIcon{
  width:22px;
  height:22px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  color:#ffffff;
}

.bottomCta .btnIcon svg{
  width:21px;
  height:21px;
  stroke-width:2.2;
  filter:drop-shadow(0 0 8px rgba(255,255,255,.20));
}

.bottomCta .whatsappIcon{
  color:#22c55e;
}

.bottomCta .whatsappIcon svg{
  filter:
    drop-shadow(0 0 8px rgba(34,197,94,.48))
    drop-shadow(0 0 16px rgba(34,197,94,.22));
}
   /* Ajuste final icono WhatsApp CTA */
.bottomCta .btnWhats{
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  gap:10px !important;
}

.bottomCta .btnIcon{
  width:22px !important;
  height:22px !important;
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  flex:0 0 22px !important;
}

.bottomCta .btnIcon svg{
  width:22px !important;
  height:22px !important;
  display:block !important;
}

.bottomCta .whatsappIcon{
  color:#22c55e !important;
}

.bottomCta .whatsappIcon svg{
  filter:
    drop-shadow(0 0 7px rgba(34,197,94,.55))
    drop-shadow(0 0 14px rgba(34,197,94,.25)) !important;
} 
/* ================================
   FOOTER LOGO JASODATOS
================================ */

.footerBrandLogo{
  display:inline-flex;
  align-items:center;
  margin-bottom:16px;
}

.footerBrandLogo img{
  width:220px;
  max-width:100%;
  height:auto;
  display:block;
  filter:
    drop-shadow(0 0 16px rgba(139,92,246,.24))
    drop-shadow(0 0 28px rgba(167,139,250,.14));
}

.footerTagline{
  max-width:360px;
  color:#e5e7eb !important;
  font-size:.92rem !important;
  line-height:1.65 !important;
  font-weight:700 !important;
}

/* ================================
   HEADER LOGO Y NAV PREMIUM
================================ */

.navBrandLogo{
  display:inline-flex;
  align-items:center;
  height:44px;
}

.navBrandLogo img{
  width:178px;
  max-width:100%;
  height:auto;
  display:block;
  filter:
    drop-shadow(0 0 12px rgba(139,92,246,.24))
    drop-shadow(0 0 22px rgba(167,139,250,.12));
}

/* ================================
   HEADER NAV MÁS DELGADO
================================ */

.siteNav .navLinks a{
  color:rgba(255,255,255,.86) !important;
  font-size:.86rem !important;
  font-weight:400 !important;
  letter-spacing:.015em !important;
  opacity:1 !important;
  text-shadow:none !important;
}

.siteNav .navLinks a:hover{
  color:#ffffff !important;
  font-weight:500 !important;
  text-shadow:
    0 0 10px rgba(167,139,250,.32),
    0 0 18px rgba(124,58,237,.18);
}

.siteNav .btnPrimary{
  font-weight:500 !important;
  letter-spacing:.01em !important;
  font-size:.86rem !important;
}

/* ================================
   FAQ - CLICK EN TODA LA FILA Y SIN BRILLO EXCESIVO
================================ */

.faq .faqItem{
  padding:0 !important;
  overflow:hidden !important;
  transform:none !important;
  box-shadow:none !important;
  transition:
    background .22s ease,
    border-color .22s ease !important;
}

.faq .faqItem summary{
  width:100% !important;
  min-height:66px !important;
  padding:20px 22px !important;
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:18px !important;
  cursor:pointer !important;
  user-select:none !important;
  outline:none !important;
}

.faq .faqItem p{
  padding:0 22px 20px !important;
  margin:0 !important;
}

/* elimina el efecto de foco/hover que parece parpadeo */
.faq .faqItem:hover,
.faq .faqItem:focus,
.faq .faqItem:focus-within,
.faq .faqItem[open],
.faq .faqItem[open]:hover{
  transform:none !important;
  filter:none !important;
  box-shadow:none !important;
  background:rgba(40,53,147,.24) !important;
  border-color:rgba(255,255,255,.08) !important;
}

.faq .faqItem summary:hover,
.faq .faqItem summary:focus,
.faq .faqItem summary:focus-visible{
  outline:none !important;
  box-shadow:none !important;
  background:transparent !important;
}

/* mantiene el + y - limpio */
.faq .faqItem summary::after{
  flex:0 0 auto !important;
  color:#a78bfa !important;
  font-size:1.2rem !important;
  line-height:1 !important;
}

/* evita que las animaciones generales vuelvan a levantar FAQ */
.faq .faqItem.motion-left:hover,
.faq .faqItem.motion-right:hover,
.faq .faqItem.motion-up:hover,
.faq .faqItem.motion-scale:hover{
  transform:none !important;
  box-shadow:none !important;
  filter:none !important;
}

/* ================================
   FIX: EVITAR BRILLO DE PRECIOS SOBRE FAQ
================================ */

.pricing{
  position:relative !important;
  overflow:hidden !important;
  z-index:1 !important;
}

.pricing::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  height:90px;
  pointer-events:none;
  background:linear-gradient(
    180deg,
    rgba(8,9,21,0) 0%,
    rgba(8,9,21,.72) 64%,
    #080915 100%
  );
  z-index:2;
}

.pricingGridFinal{
  position:relative !important;
  z-index:1 !important;
}

.faq{
  position:relative !important;
  z-index:3 !important;
  background:#080915 !important;
}

/* ================================
   DASHBOARD HERO - LOGO PREMIUM
================================ */

.dashboard{
  border:1px solid rgba(167,139,250,.42) !important;
  background:
    radial-gradient(680px 260px at 82% 0%, rgba(124,58,237,.22), transparent 62%),
    radial-gradient(520px 220px at 16% 18%, rgba(127,178,255,.10), transparent 58%),
    linear-gradient(180deg, rgba(15,18,37,.96), rgba(8,9,21,.98)) !important;
  box-shadow:
    0 42px 120px rgba(0,0,0,.58),
    0 0 0 1px rgba(255,255,255,.04) inset,
    0 0 90px rgba(124,58,237,.22),
    0 0 140px rgba(61,44,141,.18) !important;
}

.dashSide{
  background:
    radial-gradient(260px 180px at 50% 0%, rgba(124,58,237,.26), transparent 66%),
    linear-gradient(180deg, rgba(27,14,59,.96), rgba(11,9,28,.96)) !important;
  border-right:1px solid rgba(167,139,250,.18) !important;
}

.dashLogoPremium{
  display:flex;
  align-items:center;
  justify-content:flex-start;
  margin-bottom:22px;
  padding:2px 0 8px;
}

.dashLogoPremium img{
  width:116px;
  max-width:100%;
  height:auto;
  display:block;
  filter:
    drop-shadow(0 0 12px rgba(139,92,246,.34))
    drop-shadow(0 0 22px rgba(167,139,250,.18));
}

.dashNavItem{
  min-height:34px !important;
  border-radius:9px !important;
  color:rgba(226,232,240,.76) !important;
  font-weight:650 !important;
  letter-spacing:.01em !important;
  transition:
    background .22s ease,
    color .22s ease,
    transform .22s ease,
    box-shadow .22s ease !important;
}

.dashNavItem.active{
  color:#ffffff !important;
  background:
    linear-gradient(135deg, rgba(124,58,237,.96), rgba(61,44,141,.94)) !important;
  box-shadow:
    0 14px 32px rgba(124,58,237,.28),
    inset 0 1px 0 rgba(255,255,255,.14) !important;
}

.dashNavItem:not(.active):hover{
  color:#ffffff !important;
  background:rgba(167,139,250,.10) !important;
  transform:translateX(3px);
}

.dashHeader strong{
  font-size:1rem !important;
  letter-spacing:-.01em !important;
}

.dateBadge{
  background:rgba(255,255,255,.065) !important;
  border:1px solid rgba(167,139,250,.18) !important;
  color:#dbe4ff !important;
}

.kpi{
  background:
    radial-gradient(180px 90px at 50% 0%, rgba(124,58,237,.12), transparent 68%),
    rgba(17,20,37,.90) !important;
  border:1px solid rgba(167,139,250,.12) !important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.045);
}

.panel{
  background:
    radial-gradient(320px 140px at 50% 0%, rgba(124,58,237,.09), transparent 68%),
    rgba(17,20,37,.84) !important;
  border:1px solid rgba(167,139,250,.12) !important;
}

/* ================================
   DASHBOARD HERO - GRÁFICAS PREMIUM
================================ */

.dashboard .chartPanel,
.dashboard .donutPanel{
  min-height:214px !important;
  padding:18px 18px 16px !important;
  border-radius:16px !important;
  background:
    radial-gradient(320px 150px at 50% 0%, rgba(124,58,237,.12), transparent 70%),
    rgba(12,16,34,.88) !important;
  border:1px solid rgba(167,139,250,.16) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.04),
    0 18px 48px rgba(0,0,0,.28) !important;
}

.dashboard .panelHead{
  margin-bottom:12px !important;
  font-size:.76rem !important;
  font-weight:950 !important;
  letter-spacing:-.01em !important;
}

.dashboard .panelHead span{
  color:#b7c4e8 !important;
  font-weight:900 !important;
}

.premiumLineBox{
  height:152px !important;
  border-radius:12px !important;
  overflow:hidden !important;
  background:
    radial-gradient(320px 120px at 80% 10%, rgba(124,58,237,.12), transparent 72%),
    linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px) !important;
  background-size:auto, 42px 42px, 42px 42px !important;
}

.heroChart{
  width:100%;
  height:100%;
  display:block;
}

.chartGrid line{
  stroke:rgba(255,255,255,.055);
  stroke-width:1;
}

.chartLineGlow{
  fill:none;
  stroke:rgba(124,58,237,.62);
  stroke-width:8;
  stroke-linecap:round;
  stroke-linejoin:round;
  opacity:.92;
}

.chartLineMain{
  fill:none;
  stroke:url(#salesLineStroke);
  stroke-width:4.6;
  stroke-linecap:round;
  stroke-linejoin:round;
}

.chartDotOuter{
  fill:rgba(124,58,237,.26);
  stroke:rgba(167,139,250,.38);
  stroke-width:1;
}

.chartDotInner{
  fill:#c4b5fd;
  filter:drop-shadow(0 0 10px rgba(167,139,250,.75));
}

.premiumDonutWrap{
  height:152px !important;
  display:grid !important;
  grid-template-columns:132px 1fr !important;
  gap:16px !important;
  align-items:center !important;
}

.heroDonut{
  width:128px;
  height:128px;
  overflow:visible;
  filter:
    drop-shadow(0 0 18px rgba(124,58,237,.24))
    drop-shadow(0 0 34px rgba(37,99,235,.10));
}

.donutTrack{
  fill:none;
  stroke:rgba(255,255,255,.08);
  stroke-width:16;
}

.donutSeg{
  fill:none;
  stroke-width:16;
  stroke-linecap:butt;
  transform:rotate(-90deg);
  transform-origin:60px 60px;
}

.donutSeg1{
  stroke:#2563eb;
  stroke-dasharray:100 239;
  stroke-dashoffset:0;
}

.donutSeg2{
  stroke:#7c3aed;
  stroke-dasharray:62 277;
  stroke-dashoffset:-100;
}

.donutSeg3{
  stroke:#a78bfa;
  stroke-dasharray:43 296;
  stroke-dashoffset:-162;
}

.donutSeg4{
  stroke:rgba(255,255,255,.28);
  stroke-dasharray:34 305;
  stroke-dashoffset:-205;
}

.donutInner{
  fill:#0b1022;
  stroke:rgba(255,255,255,.05);
  stroke-width:1;
}

.premiumLegend{
  gap:10px !important;
}

.premiumLegend div{
  grid-template-columns:10px 1fr auto !important;
  gap:9px !important;
  font-size:.68rem !important;
  color:#cbd5e1 !important;
}

.premiumLegend i{
  width:10px !important;
  height:10px !important;
  box-shadow:0 0 12px currentColor;
}

.premiumLegend b{
  color:#ffffff !important;
  font-weight:950 !important;
}

@media (max-width:900px){
  .premiumDonutWrap{
    grid-template-columns:1fr !important;
    justify-items:center !important;
    height:auto !important;
  }

  .premiumLegend{
    width:100%;
  }
}

/* ================================
   DASHBOARD HERO - GRÁFICAS ULTRA
================================ */

.dashboard .dashBodyPremium{
  grid-template-columns:1.34fr .86fr !important;
  gap:16px !important;
}

.dashboard .chartPanelUltra,
.dashboard .donutPanelUltra{
  min-height:226px !important;
  padding:20px !important;
  border-radius:18px !important;
  background:
    radial-gradient(360px 180px at 55% 0%, rgba(124,58,237,.18), transparent 70%),
    linear-gradient(180deg, rgba(17,20,37,.94), rgba(10,14,30,.92)) !important;
  border:1px solid rgba(167,139,250,.22) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.06),
    0 22px 60px rgba(0,0,0,.34),
    0 0 42px rgba(124,58,237,.12) !important;
}

.dashboard .chartPanelUltra .panelHead,
.dashboard .donutPanelUltra .panelHead{
  font-size:.78rem !important;
  font-weight:950 !important;
  margin-bottom:12px !important;
}

.lineBoxUltra{
  height:160px !important;
  border-radius:14px !important;
  background:
    radial-gradient(320px 140px at 78% 12%, rgba(127,178,255,.16), transparent 74%),
    radial-gradient(260px 120px at 34% 28%, rgba(124,58,237,.16), transparent 72%),
    linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px) !important;
  background-size:auto, auto, 44px 44px, 44px 44px !important;
}

.heroChartUltra{
  width:100%;
  height:100%;
  display:block;
}

.ultraGrid line{
  stroke:rgba(255,255,255,.065);
  stroke-width:1;
}

.ultraLineGlow{
  fill:none;
  stroke:#8b5cf6;
  stroke-width:10;
  stroke-linecap:round;
  stroke-linejoin:round;
  opacity:.92;
}

.ultraLineMain{
  fill:none;
  stroke:url(#ultraLine);
  stroke-width:5.4;
  stroke-linecap:round;
  stroke-linejoin:round;
  filter:drop-shadow(0 0 10px rgba(167,139,250,.62));
}

.ultraDotOuter{
  fill:rgba(167,139,250,.20);
  stroke:rgba(196,181,253,.58);
  stroke-width:1.2;
}

.ultraDotInner{
  fill:#f5f3ff;
  filter:drop-shadow(0 0 12px rgba(167,139,250,.85));
}

.donutWrapUltra{
  height:160px !important;
  display:grid !important;
  grid-template-columns:138px 1fr !important;
  gap:16px !important;
  align-items:center !important;
}

.donutUltra{
  width:136px;
  height:136px;
  overflow:visible;
  filter:
    drop-shadow(0 0 20px rgba(124,58,237,.28))
    drop-shadow(0 0 34px rgba(37,99,235,.14));
}

.donutUltraTrack{
  fill:none;
  stroke:rgba(255,255,255,.075);
  stroke-width:18;
}

.donutUltraSeg{
  fill:none;
  stroke-width:18;
  stroke-linecap:round;
  transform:rotate(-90deg);
  transform-origin:65px 65px;
}

.donutUltraSeg1{
  stroke:#2563eb;
  stroke-dasharray:94 245;
  stroke-dashoffset:0;
}

.donutUltraSeg2{
  stroke:#7c3aed;
  stroke-dasharray:58 281;
  stroke-dashoffset:-104;
}

.donutUltraSeg3{
  stroke:#a78bfa;
  stroke-dasharray:38 301;
  stroke-dashoffset:-172;
}

.donutUltraSeg4{
  stroke:rgba(255,255,255,.34);
  stroke-dasharray:28 311;
  stroke-dashoffset:-220;
}

.donutUltraCenter{
  fill:#090d1d;
  stroke:rgba(255,255,255,.05);
  stroke-width:1;
}

.legendUltra{
  gap:11px !important;
}

.legendUltra div{
  grid-template-columns:10px 1fr auto !important;
  gap:9px !important;
  font-size:.69rem !important;
  color:#cbd5e1 !important;
}

.legendUltra i{
  width:10px !important;
  height:10px !important;
  box-shadow:0 0 14px currentColor;
}

.legendUltra b{
  color:#ffffff !important;
  font-weight:950 !important;
}

@media (max-width:900px){
  .dashboard .dashBodyPremium{
    grid-template-columns:1fr !important;
  }

  .donutWrapUltra{
    grid-template-columns:1fr !important;
    justify-items:center !important;
    height:auto !important;
  }

  .legendUltra{
    width:100%;
  }
}
 
/* ================================
   BLOQUE DASHBOARD REAL
================================ */

.realDashboardPanel{
  min-height:430px !important;
  padding:24px !important;
  place-items:center !important;
  background:
    radial-gradient(620px 260px at 50% 30%, rgba(124,58,237,.26), transparent 66%),
    linear-gradient(180deg, rgba(18,21,41,.96), rgba(8,9,21,.98)) !important;
  border:1px solid rgba(167,139,250,.24) !important;
  box-shadow:
    0 34px 100px rgba(0,0,0,.42),
    0 0 0 1px rgba(124,58,237,.12) inset,
    0 0 70px rgba(124,58,237,.18) !important;
}

.realDashboardFrame{
  position:relative;
  z-index:2;
  width:100%;
  border-radius:24px;
  overflow:hidden;
  background:rgba(8,9,21,.72);
  border:1px solid rgba(167,139,250,.28);
  box-shadow:
    0 28px 90px rgba(0,0,0,.40),
    0 0 42px rgba(124,58,237,.18),
    inset 0 1px 0 rgba(255,255,255,.08);
}

.realDashboardHeader{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  padding:14px 18px;
  background:
    linear-gradient(90deg, rgba(46,13,79,.88), rgba(61,44,141,.68));
  border-bottom:1px solid rgba(255,255,255,.10);
}

.realDashboardHeader span{
  color:#c4b5fd;
  text-transform:uppercase;
  letter-spacing:.18em;
  font-size:.68rem;
  font-weight:950;
}

.realDashboardHeader strong{
  color:#ffffff;
  font-size:.88rem;
  font-weight:850;
  text-align:right;
}

.realDashboardImage{
  display:block;
  width:100%;
  height:auto;
  object-fit:contain;
  object-position:center center;
  transform:none;
}

.realDashboardFrame:hover{
  transform:translateY(-8px) scale(1.012);
  border-color:rgba(196,181,253,.52);
  box-shadow:
    0 38px 110px rgba(0,0,0,.48),
    0 0 70px rgba(124,58,237,.28),
    inset 0 1px 0 rgba(255,255,255,.10);
}

@media (max-width:900px){
  .realDashboardPanel{
    min-height:auto !important;
    padding:16px !important;
  }

  .realDashboardHeader{
    align-items:flex-start;
    flex-direction:column;
    gap:8px;
  }

  .realDashboardHeader strong{
    text-align:left;
  }
}

/* ================================
   AJUSTE FINAL GRÁFICA HERO PREMIUM
================================ */

.dashboard .chartPanelUltra{
  background:
    radial-gradient(420px 180px at 72% 12%, rgba(124,58,237,.18), transparent 72%),
    linear-gradient(180deg, rgba(14,18,38,.98), rgba(8,11,25,.96)) !important;
  border:1px solid rgba(167,139,250,.18) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 22px 58px rgba(0,0,0,.36),
    0 0 54px rgba(124,58,237,.12) !important;
}

.lineBoxUltra{
  height:170px !important;
  border-radius:16px !important;
  padding:0 !important;
  overflow:hidden !important;
  background:
    radial-gradient(320px 120px at 76% 18%, rgba(127,178,255,.13), transparent 72%),
    linear-gradient(180deg, rgba(17,20,42,.88), rgba(8,11,25,.92)) !important;
}

.heroChartUltra{
  width:100%;
  height:100%;
  display:block;
}

.ultraGrid line{
  stroke:rgba(255,255,255,.07) !important;
  stroke-width:1 !important;
}

.axisLabels text{
  fill:rgba(203,213,225,.58);
  font-size:10px;
  font-weight:700;
}

.ultraLineGlow{
  fill:none;
  stroke:#8b5cf6;
  stroke-width:9;
  stroke-linecap:round;
  stroke-linejoin:round;
  opacity:.62;
}

.ultraLineMain{
  fill:none;
  stroke:url(#ultraLine);
  stroke-width:3.8;
  stroke-linecap:round;
  stroke-linejoin:round;
  filter:
    drop-shadow(0 0 7px rgba(167,139,250,.68))
    drop-shadow(0 0 16px rgba(124,58,237,.32));
}

.chartPoints circle{
  fill:#a78bfa;
  stroke:#dbeafe;
  stroke-width:1.4;
  filter:
    drop-shadow(0 0 7px rgba(167,139,250,.65))
    drop-shadow(0 0 14px rgba(124,58,237,.34));
}

.heroUploadBtn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  font-weight:600;
  letter-spacing:-0.01em;
}

.heroUploadBtn span{
  font-weight:600;
}

.heroUploadIcon{
  width:18px;
  height:18px;
  flex:0 0 18px;
  opacity:.98;
  filter:drop-shadow(0 0 10px rgba(167, 139, 250, .45));
  transform:translateY(1px);
}

/* ================================
   HERO BOTONES - AJUSTE FINAL
================================ */

.heroActions{
  display:flex !important;
  align-items:center !important;
  gap:14px !important;
  flex-wrap:wrap !important;
}

.heroUploadBtn{
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  gap:10px !important;
  font-weight:500 !important;
  letter-spacing:-.01em !important;
}

.heroUploadBtn span{
  font-weight:500 !important;
}

.heroUploadIcon{
  width:18px !important;
  height:18px !important;
  flex:0 0 18px !important;
  color:#ffffff !important;
  opacity:.96 !important;
  transform:translateY(1px);
  filter:
    drop-shadow(0 0 8px rgba(255,255,255,.28))
    drop-shadow(0 0 14px rgba(167,139,250,.26));
}

.heroHowBtn{
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  gap:9px !important;
  font-weight:500 !important;
  letter-spacing:-.01em !important;
}

.heroHowBtn span{
  font-weight:500 !important;
}

.heroArrow{
  display:inline-flex !important;
  transform:translateY(-1px);
  transition:transform .22s ease;
}

.heroHowBtn:hover .heroArrow{
  transform:translate(4px,-1px);
}

/* ================================
   PATCH FINAL DE LIMPIEZA CONTROLADA
   No elimina bloques anteriores; consolida lo que debe mandar.
================================ */

section{
  scroll-margin-top:86px;
}

.siteNav .navLinks a{
  font-weight:400 !important;
}

.siteNav .btnPrimary,
.heroUploadBtn,
.heroHowBtn,
.bottomCta .btn{
  font-weight:500 !important;
}

.heroUploadBtn span,
.heroHowBtn span{
  font-weight:500 !important;
}

.faq .faqItem,
.faq .faqItem:hover,
.faq .faqItem:focus,
.faq .faqItem:focus-within,
.faq .faqItem[open],
.faq .faqItem[open]:hover{
  transform:none !important;
  filter:none !important;
  box-shadow:none !important;
}

.faq .faqItem summary{
  cursor:pointer !important;
}

.realDashboardFrame,
.realDashboardFrame:hover{
  will-change:transform, border-color, box-shadow;
}

@media (max-width:900px){
  section{
    scroll-margin-top:104px;
  }

.realDashboardImage{
  max-height:none;
  object-fit:contain;
  object-position:center center;
}
  .dashboard .dashBodyPremium{
    grid-template-columns:1fr !important;
  }
}

/* ================================
   FAQ - ENTRADA LATERAL ALTERNADA
   Derecha / izquierda / derecha / izquierda
================================ */

.faq .faqList .faqItem.motion-right:not(.is-in-view){
  opacity:0 !important;
  transform:translate3d(180px,0,0) scale(.96) !important;
  filter:blur(10px) !important;
}

.faq .faqList .faqItem.motion-left:not(.is-in-view){
  opacity:0 !important;
  transform:translate3d(-180px,0,0) scale(.96) !important;
  filter:blur(10px) !important;
}

.faq .faqList .faqItem.motion-right.is-in-view,
.faq .faqList .faqItem.motion-left.is-in-view{
  opacity:1 !important;
  transform:translate3d(0,0,0) scale(1) !important;
  filter:blur(0) !important;
}

.faq .faqList .faqItem.motion-right,
.faq .faqList .faqItem.motion-left{
  transition:
    opacity 1.05s cubic-bezier(.13,.72,.08,1),
    transform 1.05s cubic-bezier(.13,.72,.08,1),
    filter 1.05s cubic-bezier(.13,.72,.08,1),
    background .22s ease,
    border-color .22s ease !important;
}

/* mantiene FAQ sin salto al hacer hover, pero no mata la animación */
.faq .faqList .faqItem.motion-right.is-in-view:hover,
.faq .faqList .faqItem.motion-left.is-in-view:hover{
  transform:translate3d(0,0,0) scale(1) !important;
  filter:none !important;
  box-shadow:none !important;
}

@media (max-width:900px){
  .faq .faqList .faqItem.motion-right:not(.is-in-view){
    transform:translate3d(48px,0,0) scale(.98) !important;
    filter:none !important;
  }

  .faq .faqList .faqItem.motion-left:not(.is-in-view){
    transform:translate3d(-48px,0,0) scale(.98) !important;
    filter:none !important;
  }
}


/* ================================
   FIX MOBILE EN MODO SITIO WEB / DESKTOP
   Para celulares que fuerzan viewport ancho
================================ */

@media (pointer: coarse){
  .container{
    width:100% !important;
    padding-left:18px !important;
    padding-right:18px !important;
  }

  .navInner{
    height:auto !important;
    padding:14px 0 !important;
    flex-direction:column !important;
    align-items:flex-start !important;
    gap:12px !important;
  }

  .navLinks{
    display:none !important;
  }

  .navActions{
    width:100% !important;
    display:grid !important;
    grid-template-columns:1fr !important;
  }

  .modeDot{
    display:none !important;
  }

  .pricing .container{
    width:100% !important;
    max-width:none !important;
    padding-left:18px !important;
    padding-right:18px !important;
  }

  .pricingGridFinal,
  .pricingGrid.pricingGridFinal,
  .pricingGridFinal.pricingSequence{
    display:grid !important;
    grid-template-columns:1fr !important;
    width:100% !important;
    max-width:560px !important;
    margin:0 auto !important;
    gap:22px !important;
    overflow:visible !important;
  }

  .pricingGridFinal > .pricePlan,
  .pricingGridFinal > .priceHelp{
    width:100% !important;
    max-width:100% !important;
    min-width:0 !important;
    min-height:auto !important;
    padding:34px 26px !important;
    border-radius:24px !important;
  }

  .pricing .amount{
    white-space:normal !important;
    flex-wrap:wrap !important;
    font-size:3.1rem !important;
  }

  .faq .container,
  .faqPanel{
    width:100% !important;
    max-width:100% !important;
  }
}

.dashboardDisclaimer{
  margin:14px 0 0;
  color:rgba(203,213,225,.72);
  font-size:.68rem;
  font-weight:700;
  text-align:right;
}

@media (max-width:900px){
  .dashboardDisclaimer{
    text-align:left;
    font-size:.72rem;
  }
}







/* ================================
   PRECIOS CONSOLIDADO FINAL
   Una sola fuente de verdad para layout, entrada, hover y legibilidad
================================ */

.pricing{
  position:relative !important;
  overflow:visible !important;
  padding:92px 0 104px !important;
  background:
    radial-gradient(760px 360px at 50% 12%, rgba(124,58,237,.14), transparent 64%),
    linear-gradient(180deg,#080915 0%,#0b0c17 100%) !important;
}

.pricing .container{
  width:min(1960px, 99vw) !important;
  max-width:1960px !important;
}

.pricingHead{
  text-align:center !important;
  margin-bottom:78px !important;
}

.pricingGridFinal,
.pricingGrid.pricingGridFinal,
.pricingGridFinal.pricingSequence{
  width:min(1760px, 96vw) !important;
  max-width:1760px !important;
  margin:0 auto !important;
  display:grid !important;
  grid-template-columns:1.08fr 1.18fr 1.08fr .90fr !important;
  gap:24px !important;
  align-items:stretch !important;
  overflow:visible !important;
}

.pricingGridFinal > .pricePlan,
.pricingGridFinal > .priceHelp{
  width:100% !important;
  min-width:0 !important;
  min-height:560px !important;
  padding:38px 40px 34px !important;
  border-radius:26px !important;
  overflow:visible !important;
}

.pricingSequence > .pricePlan,
.pricingSequence > .priceHelp{
  opacity:0 !important;
  transform:translate3d(0,96px,0) scale(.96) !important;
  filter:blur(10px) !important;
  pointer-events:none !important;
}

.pricingSequence.pricing-in-view > .pricePlan,
.pricingSequence.pricing-in-view > .priceHelp{
  opacity:1 !important;
  transform:translate3d(0,0,0) scale(1) !important;
  filter:blur(0) !important;
  pointer-events:auto !important;
}

/* Entrada: Crecimiento, Control, Inicio, Dudas */
.pricingSequence.pricing-in-view > article:nth-of-type(2){
  transition-delay:.08s !important;
}

.pricingSequence.pricing-in-view > article:nth-of-type(3){
  transition-delay:.30s !important;
}

.pricingSequence.pricing-in-view > article:nth-of-type(1){
  transition-delay:.52s !important;
}

.pricingSequence.pricing-in-view > .priceHelp{
  transition-delay:.74s !important;
}

/* Hover sin retardo al entrar con mouse */
.pricingSequence.pricing-in-view > .pricePlan:hover,
.pricingSequence.pricing-in-view > .priceHelp:hover,
.pricingSequence.pricing-in-view > article:nth-of-type(1):hover,
.pricingSequence.pricing-in-view > article:nth-of-type(2):hover,
.pricingSequence.pricing-in-view > article:nth-of-type(3):hover{
  transition-delay:0s !important;
}

.priceLight{
  color:#160c2f !important;
  background:
    radial-gradient(520px 220px at 50% -8%, rgba(124,58,237,.08), transparent 62%),
    linear-gradient(180deg,#ffffff 0%,#f8f5ff 100%) !important;
  border:1px solid rgba(46,13,79,.12) !important;
  box-shadow:
    0 34px 90px rgba(0,0,0,.18),
    inset 0 1px 0 rgba(255,255,255,.95) !important;
}

.priceFeatured{
  color:#ffffff !important;
  background:
    radial-gradient(540px 260px at 50% -12%, rgba(167,139,250,.28), transparent 62%),
    linear-gradient(180deg,#3b1672 0%,#302a91 100%) !important;
  border:1px solid rgba(196,181,253,.34) !important;
  box-shadow:
    0 42px 110px rgba(61,44,141,.42),
    0 0 0 1px rgba(255,255,255,.08) inset !important;
}

.planBadge{
  position:absolute;
  top:-18px;
  left:50%;
  transform:translateX(-50%);
  min-height:34px;
  padding:0 28px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  border-radius:999px;
  color:#2e0d4f;
  background:#ffc928;
  box-shadow:0 16px 34px rgba(255,201,40,.28);
  font-size:.78rem;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:.08em;
  white-space:nowrap;
  z-index:2;
}

.pricing .priceIcon,
.pricing .priceHelpIcon{
  position:relative !important;
  isolation:isolate !important;
  overflow:hidden !important;
  width:76px !important;
  height:76px !important;
  border-radius:22px !important;
  margin:0 auto 24px !important;
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  transition:
    transform .30s cubic-bezier(.13,.72,.08,1),
    box-shadow .30s ease,
    border-color .30s ease,
    filter .30s ease !important;
}

.pricing .priceIcon svg,
.pricing .priceHelpIcon svg{
  width:34px !important;
  height:34px !important;
  stroke-width:1.9 !important;
  filter:drop-shadow(0 0 12px rgba(139,92,246,.52));
}

.pricing .priceIcon::before,
.pricing .priceHelpIcon::before{
  content:"";
  position:absolute;
  inset:9px;
  border-radius:18px;
  background:linear-gradient(135deg, rgba(255,255,255,.26), transparent 42%, rgba(167,139,250,.20));
  opacity:.9;
  z-index:-1;
}

.pricing .priceIcon::after,
.pricing .priceHelpIcon::after{
  content:"";
  position:absolute;
  inset:-42%;
  border-radius:inherit;
  background:conic-gradient(from 180deg, transparent, rgba(167,139,250,.38), transparent, rgba(127,178,255,.30), transparent);
  opacity:.34;
  z-index:-2;
  animation:priceIconSpin 10s linear infinite;
}

@keyframes priceIconSpin{
  to{transform:rotate(360deg)}
}

.pricing .priceIconStart{
  color:#6d28d9 !important;
  background:
    radial-gradient(circle at 34% 26%, rgba(255,255,255,.96), transparent 20%),
    radial-gradient(circle at 50% 52%, rgba(167,139,250,.26), rgba(255,255,255,.86) 68%) !important;
  border:1px solid rgba(124,58,237,.20) !important;
  box-shadow:
    0 22px 52px rgba(46,13,79,.12),
    0 0 34px rgba(124,58,237,.20),
    inset 0 1px 0 rgba(255,255,255,.98) !important;
}

.pricing .priceIconGrowth{
  color:#ffffff !important;
  background:
    radial-gradient(circle at 34% 26%, rgba(255,255,255,.22), transparent 22%),
    radial-gradient(circle at 50% 52%, rgba(167,139,250,.40), rgba(46,13,79,.82) 68%) !important;
  border:1px solid rgba(255,255,255,.24) !important;
  box-shadow:
    0 0 0 1px rgba(255,255,255,.06),
    0 0 44px rgba(167,139,250,.34),
    inset 0 1px 0 rgba(255,255,255,.16) !important;
}

.pricing .priceIconControl{
  color:#3d2c8d !important;
  background:
    radial-gradient(circle at 34% 26%, rgba(255,255,255,.96), transparent 20%),
    radial-gradient(circle at 50% 52%, rgba(127,178,255,.22), rgba(255,255,255,.88) 68%) !important;
  border:1px solid rgba(61,44,141,.20) !important;
  box-shadow:
    0 22px 52px rgba(46,13,79,.12),
    0 0 34px rgba(127,178,255,.18),
    inset 0 1px 0 rgba(255,255,255,.98) !important;
}

.pricing .priceHelpIcon{
  color:#ffffff !important;
  background:
    radial-gradient(circle at 34% 26%, rgba(255,255,255,.18), transparent 20%),
    radial-gradient(circle at 50% 52%, rgba(34,197,94,.18), rgba(61,44,141,.92) 70%) !important;
  border:1px solid rgba(134,239,172,.26) !important;
  box-shadow:
    0 0 0 1px rgba(255,255,255,.08),
    0 0 46px rgba(134,239,172,.16),
    0 0 58px rgba(167,139,250,.20),
    inset 0 1px 0 rgba(255,255,255,.16) !important;
}

.pricing .pricePlan h3{
  margin:0 0 14px !important;
  color:inherit !important;
  font-size:1.55rem !important;
  line-height:1.12 !important;
  font-weight:680 !important;
  letter-spacing:.055em !important;
  text-transform:uppercase !important;
}

.pricing .pricePlan .amount{
  margin:0 0 16px !important;
  color:inherit !important;
  font-size:3.65rem !important;
  line-height:.95 !important;
  font-weight:740 !important;
  letter-spacing:-.055em !important;
}

.pricing .pricePlan .amount small{
  font-size:1.02rem !important;
  color:rgba(46,13,79,.82) !important;
  font-weight:520 !important;
  letter-spacing:0 !important;
}

.pricing .priceFeatured .amount small{
  color:rgba(255,255,255,.72) !important;
}

.pricing .pricePlan p{
  margin:0 0 22px !important;
  color:rgba(46,13,79,.74) !important;
  font-size:1rem !important;
  line-height:1.52 !important;
  font-weight:400 !important;
}

.pricing .priceFeatured p{
  color:rgba(255,255,255,.78) !important;
}

.pricing .priceDivider{
  height:1px;
  width:100%;
  margin:0 0 22px !important;
  background:rgba(46,13,79,.12);
}

.pricing .priceFeatured .priceDivider{
  background:rgba(255,255,255,.18);
}

.pricing .pricePlan ul{
  list-style:none !important;
  padding:0 !important;
  margin:0 0 26px !important;
  display:grid !important;
  gap:10px !important;
}

.pricing .pricePlan li{
  position:relative !important;
  padding-left:26px !important;
  color:#160c2f !important;
  font-size:.98rem !important;
  line-height:1.36 !important;
  font-weight:400 !important;
}

.pricing .pricePlan li::before{
  content:"✓";
  position:absolute;
  left:0;
  top:0;
  color:#2e0d4f;
  font-weight:760 !important;
}

.pricing .priceFeatured li{
  color:rgba(255,255,255,.88) !important;
}

.pricing .priceFeatured li::before{
  color:#86efac;
}

.pricing .priceHelp .btn{
  width:min(100%, 260px) !important;
  min-height:52px !important;
  margin:26px auto 0 !important;
  border-radius:10px;
  font-size:.98rem !important;
  font-weight:650 !important;
}

.pricing .priceLight .btnPrimary{
  color:#fff !important;
  background:linear-gradient(135deg,#2e0d4f,#3d2c8d) !important;
  box-shadow:0 18px 44px rgba(46,13,79,.18) !important;
}

.pricing .priceFeatured .btnPrimary{
  color:#2e0d4f !important;
  background:#fff !important;
  box-shadow:0 20px 48px rgba(0,0,0,.18) !important;
}

.priceHelp{
  display:flex !important;
  flex-direction:column !important;
  align-items:center !important;
  justify-content:center !important;
  text-align:center !important;
  color:#ffffff;
  background:
    radial-gradient(280px 180px at 50% 18%, rgba(167,139,250,.22), transparent 62%),
    linear-gradient(145deg,#2e0d4f 0%,#3d2c8d 100%) !important;
  border:1px solid rgba(196,181,253,.22) !important;
  box-shadow:0 36px 92px rgba(46,13,79,.36) !important;
}

.pricing .priceHelp h3{
  margin:0 0 16px;
  font-size:1.34rem !important;
  line-height:1.2 !important;
  font-weight:620 !important;
  letter-spacing:-.02em;
}

.pricing .priceHelp p{
  margin:0 0 26px;
  color:rgba(255,255,255,.80);
  font-size:1rem !important;
  line-height:1.55 !important;
  font-weight:400 !important;
}

.pricingGridFinal > .pricePlan:hover,
.pricingGridFinal > .priceHelp:hover,
.pricingSequence.pricing-in-view > .pricePlan:hover,
.pricingSequence.pricing-in-view > .priceHelp:hover{
  transform:translate3d(0,-18px,0) scale(1.035) !important;
  filter:saturate(1.18) brightness(1.08) !important;
  border-color:rgba(196,181,253,.88) !important;
  box-shadow:
    0 44px 108px rgba(124,58,237,.42),
    0 0 0 2px rgba(167,139,250,.28),
    0 0 86px rgba(124,58,237,.30),
    inset 0 1px 0 rgba(255,255,255,.18) !important;
  z-index:20 !important;
}

.pricingGridFinal > .priceFeatured:hover,
.pricingSequence.pricing-in-view > .priceFeatured:hover{
  transform:translate3d(0,-20px,0) scale(1.04) !important;
  box-shadow:
    0 54px 124px rgba(124,58,237,.50),
    0 0 0 2px rgba(255,255,255,.24),
    0 0 104px rgba(167,139,250,.38),
    inset 0 1px 0 rgba(255,255,255,.20) !important;
  z-index:24 !important;
}

.pricingGridFinal > .pricePlan:hover .priceIcon,
.pricingGridFinal > .priceHelp:hover .priceHelpIcon{
  transform:translate3d(0,-6px,0) scale(1.10) !important;
}

.pricingGridFinal > .pricePlan:hover .btn,
.pricingGridFinal > .priceHelp:hover .btn{
  transform:translate3d(0,-3px,0) !important;
}

.pricing::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  height:90px;
  pointer-events:none;
  background:linear-gradient(180deg, rgba(8,9,21,0) 0%, rgba(8,9,21,.72) 64%, #080915 100%);
  z-index:0;
}

.pricingGridFinal{
  position:relative !important;
  z-index:1 !important;
}

.faq{
  position:relative !important;
  z-index:3 !important;
  background:#080915 !important;
}

@media (min-width:901px) and (max-width:1180px){
  .pricingGridFinal,
  .pricingGrid.pricingGridFinal,
  .pricingGridFinal.pricingSequence{
    grid-template-columns:repeat(2, minmax(0, 1fr)) !important;
    max-width:860px !important;
  }

  .pricingGridFinal > .pricePlan,
  .pricingGridFinal > .priceHelp{
    min-height:auto !important;
  }
}

@media (max-width:900px){
  .pricing{
    overflow:hidden !important;
    padding:68px 0 82px !important;
  }

  .pricing .container{
    width:100% !important;
    max-width:none !important;
    padding-left:18px !important;
    padding-right:18px !important;
  }

  .pricingHead{
    margin-bottom:52px !important;
  }

  .pricingGridFinal,
  .pricingGrid.pricingGridFinal,
  .pricingGridFinal.pricingSequence{
    display:grid !important;
    grid-template-columns:1fr !important;
    width:100% !important;
    max-width:560px !important;
    margin:0 auto !important;
    gap:22px !important;
    overflow:visible !important;
  }

  .pricingGridFinal > .pricePlan,
  .pricingGridFinal > .priceHelp{
    width:100% !important;
    max-width:100% !important;
    min-width:0 !important;
    min-height:auto !important;
    padding:34px 26px !important;
    border-radius:24px !important;
  }

  .pricingSequence > .pricePlan,
  .pricingSequence > .priceHelp{
    transform:translate3d(0,44px,0) scale(.98) !important;
    filter:none !important;
  }

  .pricingSequence.pricing-in-view > article:nth-of-type(2){
    transition-delay:.05s !important;
  }

  .pricingSequence.pricing-in-view > article:nth-of-type(3){
    transition-delay:.16s !important;
  }

  .pricingSequence.pricing-in-view > article:nth-of-type(1){
    transition-delay:.27s !important;
  }

  .pricingSequence.pricing-in-view > .priceHelp{
    transition-delay:.38s !important;
  }

  .pricing .pricePlan h3{
    font-size:1.42rem !important;
    letter-spacing:.055em !important;
  }

  .pricing .pricePlan .amount{
    white-space:normal !important;
    flex-wrap:wrap !important;
    font-size:3.1rem !important;
  }

  .pricing .pricePlan .amount small{
    font-size:1rem !important;
  }

  .pricing .pricePlan p,
  .pricing .pricePlan li,
  .pricing .priceHelp p{
    font-size:.98rem !important;
    line-height:1.48 !important;
  }

.priceHelp{
  align-items:center !important;
  justify-content:center !important;
  text-align:center !important;
}

  .pricingGridFinal > .pricePlan:hover,
  .pricingGridFinal > .priceHelp:hover{
    transform:translateY(-6px) scale(1.01) !important;
  }
}

@media (max-width:430px){
  .pricing .container{
    padding-left:16px !important;
    padding-right:16px !important;
  }

  .pricingGridFinal,
  .pricingGrid.pricingGridFinal,
  .pricingGridFinal.pricingSequence{
    max-width:100% !important;
  }

  .pricingGridFinal > .pricePlan,
  .pricingGridFinal > .priceHelp{
    padding:30px 22px !important;
  }
}


/* ================================
   TIPOGRAFÍA GLOBAL FINAL
   Toda la landing con letra más grande, liviana y legible
================================ */

@media (min-width:901px) and (pointer:fine){
  body{
    font-size:18px !important;
  }

  .container{
    width:min(1360px, calc(100% - 64px)) !important;
  }

  .siteNav .navLinks a{
    font-size:.98rem !important;
    font-weight:430 !important;
    letter-spacing:.01em !important;
  }

  .siteNav .btnPrimary,
  .btn{
    font-size:1rem !important;
    font-weight:650 !important;
  }

  .hero h1{
    font-size:clamp(3.8rem,5.8vw,6.2rem) !important;
    line-height:.98 !important;
    font-weight:560 !important;
    letter-spacing:-.065em !important;
  }

  .hero h1 strong{
    font-weight:560 !important;
  }

  .heroLead{
    max-width:620px !important;
    font-size:1.28rem !important;
    line-height:1.62 !important;
    font-weight:430 !important;
  }

  .sectionKicker,
  .metricsTitle,
  .solutionsTitle{
    font-size:.9rem !important;
    font-weight:760 !important;
    letter-spacing:.18em !important;
  }

  .sectionTitle,
  .benefitIntro h2,
  .receiveHead h2,
  .howHead h2,
  .faqHead h2,
  .metricsIntro h2{
    font-size:clamp(2.75rem,4.2vw,4.7rem) !important;
    line-height:1.03 !important;
    font-weight:620 !important;
    letter-spacing:-.055em !important;
  }

  .sectionLead,
  .benefitIntro p,
  .receiveHead p,
  .howHead p,
  .faqHead p,
  .metricsIntro p{
    font-size:1.18rem !important;
    line-height:1.68 !important;
    font-weight:420 !important;
  }

  .textLink{
    font-size:1.08rem !important;
    font-weight:720 !important;
  }

  .actionCard h3,
  .benefitCard h3,
  .stepCard h3,
  .solutionCard h3,
  .bullet strong{
    font-size:1.32rem !important;
    line-height:1.28 !important;
    font-weight:680 !important;
  }

  .actionCard p,
  .benefitCard p,
  .stepCard p,
  .solutionCard p,
  .bullet span,
  .receiveItem,
  .faqItem p{
    font-size:1.08rem !important;
    line-height:1.62 !important;
    font-weight:420 !important;
  }

  .faqItem summary{
    font-size:1.14rem !important;
    line-height:1.32 !important;
    font-weight:680 !important;
  }

.metric strong{
  font-size:1.85rem !important;
  line-height:1.02 !important;
  font-weight:820 !important;
  letter-spacing:-.035em !important;
}

  .metric span{
    font-size:1.02rem !important;
    line-height:1.38 !important;
    font-weight:650 !important;
  }

  .metric small{
    font-size:.92rem !important;
    line-height:1.38 !important;
    font-weight:650 !important;
  }

  .dashboard .dashHeader strong{
    font-size:1.08rem !important;
  }

  .dashNavItem{
    font-size:.78rem !important;
  }

  .kpi span{
    font-size:.78rem !important;
  }

  .kpi strong{
    font-size:1.45rem !important;
  }

  .kpi small,
  .dateBadge,
  .dashboard .panelHead,
  .legendUltra div,
  .axisLabels text{
    font-size:.78rem !important;
  }

  .pricingHead{
    margin-bottom:86px !important;
  }

.pricingGridFinal,
.pricingGrid.pricingGridFinal,
.pricingGridFinal.pricingSequence{
  width:100% !important;
  max-width:1760px !important;
  grid-template-columns:1.12fr 1.22fr 1.12fr .96fr !important;
  gap:30px !important;
}

.pricingGridFinal > .pricePlan,
.pricingGridFinal > .priceHelp{
  min-height:560px !important;
  padding:38px 44px 34px !important;
}


  .pricing .pricePlan h3{
    font-size:1.62rem !important;
    line-height:1.16 !important;
    font-weight:680 !important;
    letter-spacing:.06em !important;
  }

  .pricing .pricePlan .amount{
    font-size:3.75rem !important;
    line-height:.96 !important;
    font-weight:760 !important;
  }

  .pricing .pricePlan .amount small{
    font-size:1.08rem !important;
    font-weight:560 !important;
  }

  .pricing .pricePlan p,
  .pricing .pricePlan li,
  .pricing .priceHelp p{
    font-size:1.06rem !important;
    line-height:1.5 !important;
    font-weight:420 !important;
  }

  .pricing .pricePlan ul{
    gap:10px !important;
  }

  .pricing .pricePlan .btn,
  .pricing .priceHelp .btn{
    font-size:1.02rem !important;
    font-weight:680 !important;
    min-height:50px !important;
  }

  .pricing .priceHelp h3{
    font-size:1.42rem !important;
    line-height:1.22 !important;
    font-weight:640 !important;
  }

  .bottomGrid h2{
    font-size:1.9rem !important;
    line-height:1.16 !important;
    font-weight:680 !important;
  }

  .bottomGrid p{
    font-size:1.08rem !important;
    line-height:1.55 !important;
    font-weight:420 !important;
  }

  .footer p,
  .footer a{
    font-size:.98rem !important;
    line-height:1.62 !important;
    font-weight:420 !important;
  }

  .footer h4{
    font-size:1rem !important;
    font-weight:700 !important;
  }

  .footerTagline{
    font-size:1.08rem !important;
    line-height:1.62 !important;
    font-weight:560 !important;
  }
}

@media (max-width:900px){
  body{
    font-size:17px !important;
  }

  .hero h1{
    font-size:clamp(3rem,12.5vw,4.35rem) !important;
    line-height:1 !important;
    font-weight:560 !important;
  }

  .heroLead{
    font-size:1.1rem !important;
    line-height:1.6 !important;
    font-weight:420 !important;
  }

  .sectionKicker,
  .metricsTitle,
  .solutionsTitle{
    font-size:.82rem !important;
    font-weight:760 !important;
  }

  .sectionTitle,
  .benefitIntro h2,
  .receiveHead h2,
  .howHead h2,
  .faqHead h2,
  .metricsIntro h2{
    font-size:clamp(2.25rem,9.5vw,3.35rem) !important;
    line-height:1.06 !important;
    font-weight:620 !important;
  }

  .sectionLead,
  .benefitIntro p,
  .receiveHead p,
  .howHead p,
  .faqHead p,
  .metricsIntro p,
  .actionCard p,
  .benefitCard p,
  .stepCard p,
  .solutionCard p,
  .bullet span,
  .receiveItem,
  .faqItem p{
    font-size:1.04rem !important;
    line-height:1.58 !important;
    font-weight:420 !important;
  }

  .actionCard h3,
  .benefitCard h3,
  .stepCard h3,
  .solutionCard h3,
  .bullet strong,
  .faqItem summary{
    font-size:1.18rem !important;
    line-height:1.3 !important;
    font-weight:680 !important;
  }

.metric strong{
  font-size:1.85rem !important;
}
  .metric span{
    font-size:1rem !important;
  }

  .pricing .pricePlan h3{
    font-size:1.52rem !important;
    font-weight:680 !important;
    letter-spacing:.055em !important;
  }

  .pricing .pricePlan .amount{
    font-size:3.35rem !important;
    font-weight:760 !important;
  }

  .pricing .pricePlan p,
  .pricing .pricePlan li,
  .pricing .priceHelp p{
    font-size:1.04rem !important;
    line-height:1.52 !important;
    font-weight:420 !important;
  }

  .pricing .pricePlan .btn,
  .pricing .priceHelp .btn,
  .btn{
    font-size:1rem !important;
    font-weight:680 !important;
  }

  .footer p,
  .footer a{
    font-size:.96rem !important;
  }
}

`;

function waLink() {
  const phone = "593997945350";
  const msg =
    "Hola JasoDatos. Quiero una demo para analizar ventas, inventario y stock.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}

function BarsIcon() {
  return (
    <span className="logoBars" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}
const motionScript = `
(() => {
  const motionSelector = [
    '.motion-fade',
    '.motion-up',
    '.motion-left',
    '.motion-right',
    '.motion-scale'
  ].join(',');

  const getMotionItems = () => Array.from(document.querySelectorAll(motionSelector));

  const resetElementsOutsideViewport = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const items = getMotionItems();

    items.forEach((el) => {
      const rect = el.getBoundingClientRect();

      const isFarAbove = rect.bottom < -120;
      const isFarBelow = rect.top > viewportHeight + 120;

      if (isFarAbove || isFarBelow) {
        el.classList.remove('is-in-view');
      }
    });

    const pricingSequence = document.querySelector('.pricingSequence');

    if (pricingSequence) {
      const rect = pricingSequence.getBoundingClientRect();

      const isFarAbove = rect.bottom < -160;
      const isFarBelow = rect.top > viewportHeight + 160;

      if (isFarAbove || isFarBelow) {
        pricingSequence.classList.remove('pricing-in-view');
      }
    }
  };

  const runMotion = () => {
    const items = getMotionItems();
    const pricingSequence = document.querySelector('.pricingSequence');

    if (!items.length && !pricingSequence) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-in-view'));
      if (pricingSequence) pricingSequence.classList.add('pricing-in-view');
      return;
    }

    const isCompact = window.matchMedia('(max-width: 900px)').matches;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-in-view');
      });
    }, {
      threshold: isCompact ? 0.08 : 0.14,
      rootMargin: isCompact ? '0px 0px -8% 0px' : '0px 0px -18% 0px'
    });

    items.forEach((el) => {
      if (!el.closest('.pricingSequence')) {
        observer.observe(el);
      }
    });

    if (pricingSequence) {
      const pricingObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          pricingSequence.classList.add('pricing-in-view');
        });
      }, {
        threshold: isCompact ? 0.10 : 0.18,
        rootMargin: isCompact ? '0px 0px -8% 0px' : '0px 0px -24% 0px'
      });

      pricingObserver.observe(pricingSequence);
    }

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        resetElementsOutsideViewport();
        ticking = false;
      });
    }, { passive: true });

    window.addEventListener('resize', resetElementsOutsideViewport, { passive: true });
  };

  const startMotion = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        window.setTimeout(runMotion, 120);
      });
    });
  };

  if (document.readyState === 'complete') {
    startMotion();
  } else {
    window.addEventListener('load', startMotion, { once: true });
  }
})();
`;
export default function Home() {
  const wa = waLink();

  return (
    <main>
      <style>{css}</style>

      <header className="siteNav">
        <div className="container navInner">
<a className="navBrandLogo" href="#inicio" aria-label="JasoDatos">
  <img
    src="/images/jasodatos-logo-negativo-transparente.png"
    alt="JasoDatos"
  />
</a>

          <nav className="navLinks" aria-label="Navegación principal">
            <a href="#soluciones">Soluciones</a>
            <a href="#precios">Precios</a>
            <a href="#funciona">Cómo funciona</a>
            <a href="#recursos">Recursos</a>
            <a href={wa} target="_blank" rel="noreferrer">Contacto</a>
          </nav>

          <div className="navActions">
<a className="btn btnPrimary" href="https://app.jasodatos.com/registro">
  Probar con mi archivo
</a>
            <span className="modeDot">◐</span>
          </div>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="heroWaveImage" aria-hidden="true" />

        <div className="container heroGrid">
          <div className="heroCopy motion-left">
            <h1>
              Convierte ventas e inventario en
              <strong>decisiones claras.</strong>
            </h1>

<p className="heroLead">
  Sube tu archivo de ventas o inventario y JasoDatos te muestra, en minutos,
  qué productos se venden más, cuáles están en riesgo y qué acciones debes tomar primero.
</p>

<div className="heroActions">
  <a className="btn btnPrimary heroUploadBtn" href="https://app.jasodatos.com/registro">
    <span>Probar con mi archivo</span>

    <svg
      className="heroUploadIcon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 18.5H6.5C4.01472 18.5 2 16.4853 2 14C2 11.6722 3.76769 9.75719 6.03426 9.52398C6.65515 6.93014 8.98742 5 11.75 5C14.5126 5 16.8448 6.93014 17.4657 9.52398C19.7323 9.75719 21.5 11.6722 21.5 14C21.5 16.4853 19.4853 18.5 17 18.5H16.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20V11.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 14.75L12 11.5L15.25 14.75"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>

  <a className="btn btnGhost heroHowBtn" href="#funciona">
    <span>Ver cómo funciona</span>
    <span className="heroArrow" aria-hidden="true">→</span>
  </a>
</div>
          </div>

          <div className="dashboard motion-right motion-delay-1">
            <aside className="dashSide">
<div className="dashLogoPremium">
  <img
    src="/images/jasodatos-logo-negativo-transparente.png"
    alt="JasoDatos"
  />
</div>
              <div className="dashNavItem active">▣ Resumen</div>
              <div className="dashNavItem">◷ Ventas</div>
              <div className="dashNavItem">▤ Inventario</div>
              <div className="dashNavItem">△ Stock crítico</div>
              <div className="dashNavItem">◇ Productos</div>
              <div className="dashNavItem">✦ Acciones</div>
              <div className="dashNavItem">☷ Reportes</div>
            </aside>

            <section className="dashMain">
              <div className="dashHeader">
                <strong>Resumen general</strong>
                <span className="dateBadge">01 May - 31 May 2026</span>
              </div>

              <div className="kpiGrid">
                <article className="kpi">
                  <span>Ventas totales</span>
                  <strong>$12,430</strong>
                  <small>+18.6% vs abr</small>
                </article>
                <article className="kpi">
                  <span>Productos vendidos</span>
                  <strong>1,248</strong>
                  <small>+12.4% vs abr</small>
                </article>
                <article className="kpi">
                  <span>Stock crítico</span>
                  <strong>23</strong>
                  <small>+8 vs abr</small>
                </article>
                <article className="kpi">
                  <span>Acciones sugeridas</span>
                  <strong>9</strong>
                  <small>+3 vs abr</small>
                </article>
              </div>
             <div className="dashBody dashBodyPremium">
  <article className="panel chartPanelUltra">
    <div className="panelHead">
      Ventas por día <span>últimos 30 días</span>
    </div>
         <div className="lineBox lineBoxUltra">
  <svg className="heroChartUltra" viewBox="0 0 560 230" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="ultraArea" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="rgba(124,58,237,.48)" />
        <stop offset="48%" stopColor="rgba(124,58,237,.18)" />
        <stop offset="100%" stopColor="rgba(8,9,21,.02)" />
      </linearGradient>

      <linearGradient id="ultraLine" x1="0" y1="0" x2="560" y2="0">
        <stop offset="0%" stopColor="#7fb2ff" />
        <stop offset="48%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#c4b5fd" />
      </linearGradient>

      <filter id="ultraGlow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g className="ultraGrid">
      <line x1="54" y1="38" x2="548" y2="38" />
      <line x1="54" y1="82" x2="548" y2="82" />
      <line x1="54" y1="126" x2="548" y2="126" />
      <line x1="54" y1="170" x2="548" y2="170" />

      <line x1="112" y1="28" x2="112" y2="186" />
      <line x1="190" y1="28" x2="190" y2="186" />
      <line x1="268" y1="28" x2="268" y2="186" />
      <line x1="346" y1="28" x2="346" y2="186" />
      <line x1="424" y1="28" x2="424" y2="186" />
      <line x1="502" y1="28" x2="502" y2="186" />
    </g>

    <g className="axisLabels">
      <text x="20" y="174">$0</text>
      <text x="14" y="130">$5K</text>
      <text x="10" y="86">$10K</text>
      <text x="10" y="42">$15K</text>

      <text x="56" y="213">1 May</text>
      <text x="170" y="213">8 May</text>
      <text x="280" y="213">15 May</text>
      <text x="394" y="213">22 May</text>
      <text x="500" y="213">31 May</text>
    </g>

    <path
      d="M54 152 C80 118 96 92 122 112 C146 130 156 112 178 86 C202 58 224 92 244 76 C268 56 284 132 314 92 C336 62 354 84 376 58 C402 26 420 104 448 82 C474 60 486 126 512 92 C532 68 544 54 552 44 L552 186 L54 186 Z"
      fill="url(#ultraArea)"
    />

    <path
      d="M54 152 C80 118 96 92 122 112 C146 130 156 112 178 86 C202 58 224 92 244 76 C268 56 284 132 314 92 C336 62 354 84 376 58 C402 26 420 104 448 82 C474 60 486 126 512 92 C532 68 544 54 552 44"
      className="ultraLineGlow"
      filter="url(#ultraGlow)"
    />

    <path
      d="M54 152 C80 118 96 92 122 112 C146 130 156 112 178 86 C202 58 224 92 244 76 C268 56 284 132 314 92 C336 62 354 84 376 58 C402 26 420 104 448 82 C474 60 486 126 512 92 C532 68 544 54 552 44"
      className="ultraLineMain"
    />

    <g className="chartPoints">
      <circle cx="54" cy="152" r="4" />
      <circle cx="122" cy="112" r="4" />
      <circle cx="178" cy="86" r="4" />
      <circle cx="244" cy="76" r="4" />
      <circle cx="314" cy="92" r="4" />
      <circle cx="376" cy="58" r="4" />
      <circle cx="448" cy="82" r="4" />
      <circle cx="512" cy="92" r="4" />
      <circle cx="552" cy="44" r="5.5" />
    </g>
  </svg>
</div>
  </article>

  <article className="panel donutPanelUltra">
    <div className="panelHead">
      Ventas por categoría <span>participación</span>
    </div>

    <div className="donutWrap donutWrapUltra">
      <svg viewBox="0 0 130 130" className="donutUltra" aria-hidden="true">
        <circle cx="65" cy="65" r="39" className="donutUltraTrack" />
        <circle cx="65" cy="65" r="39" className="donutUltraSeg donutUltraSeg1" />
        <circle cx="65" cy="65" r="39" className="donutUltraSeg donutUltraSeg2" />
        <circle cx="65" cy="65" r="39" className="donutUltraSeg donutUltraSeg3" />
        <circle cx="65" cy="65" r="39" className="donutUltraSeg donutUltraSeg4" />
        <circle cx="65" cy="65" r="21" className="donutUltraCenter" />
      </svg>

      <div className="legend legendUltra">
        <div><i /><span>Abarrotes</span><b>42%</b></div>
        <div><i /><span>Bebidas</span><b>26%</b></div>
        <div><i /><span>Lácteos</span><b>18%</b></div>
        <div><i /><span>Limpieza</span><b>14%</b></div>
      </div>
    </div>
  </article>
</div>
<p className="dashboardDisclaimer">
  Datos de ejemplo. Tu tablero mostrará tu información real.
</p>
            </section>
          </div>
        </div>
      </section>

      <section id="soluciones" className="decisions">
        <div className="container decisionsGrid reveal">
          <div>
<p className="sectionKicker motion-fade">Todo lo que tu negocio necesita</p>
<h2 className="sectionTitle motion-up motion-delay-1">
  Detecta qué vender, qué reponer y qué corregir antes de perder dinero.
</h2>
<p className="sectionLead motion-fade motion-delay-2">
  JasoDatos convierte tus archivos de ventas e inventario en señales claras para priorizar productos, compras y alertas comerciales.
</p>
            <a className="textLink motion-left motion-delay-3" href="#recursos">Conoce nuestras soluciones →</a>
          </div>

          <div className="cardGrid">
            <article className="actionCard motion-up motion-delay-1">
              <div className="actionIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 19V9" stroke="currentColor" strokeLinecap="round" />
                  <path d="M10 19V5" stroke="currentColor" strokeLinecap="round" />
                  <path d="M16 19V12" stroke="currentColor" strokeLinecap="round" />
                  <path d="M3.5 19.5H20.5" stroke="currentColor" strokeLinecap="round" />
                  <path d="M5 8.5L10 5L16 11.5L20 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Qué vender</h3>
              <p>Identifica tus productos más vendidos y los que pueden generar más ingresos.</p>
              <div className="cardLine" />
            </article>

            <article className="actionCard motion-up motion-delay-2">
              <div className="actionIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 5H6.2L8.1 15.2H18.4L20.2 8.2H7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.2 19.2H9.25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M17.2 19.2H17.25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M10 11.2H17.6" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Qué reponer</h3>
              <p>Detecta productos con stock bajo para reponer antes de perder ventas.</p>
              <div className="cardLine" />
            </article>

            <article className="actionCard motion-up motion-delay-3">
              <div className="actionIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 4L21 19H3L12 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 9V13" stroke="currentColor" strokeLinecap="round" />
                  <path d="M12 16.6H12.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Qué corregir</h3>
              <p>Encuentra productos lentos, exceso de stock y señales que requieren atención.</p>
              <div className="cardLine" />
            </article>

            <article className="actionCard motion-up motion-delay-4">
              <div className="actionIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M8 6H20" stroke="currentColor" strokeLinecap="round" />
                  <path d="M8 12H20" stroke="currentColor" strokeLinecap="round" />
                  <path d="M8 18H20" stroke="currentColor" strokeLinecap="round" />
                  <path d="M4 6L4.5 6.5L6 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 12L4.5 12.5L6 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 18L4.5 18.5L6 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Qué revisar</h3>
              <p>Revisa alertas comerciales y acciones recomendadas para decidir primero lo importante.</p>
              <div className="cardLine" />
            </article>
          </div>
        </div>
      </section>

      <section id="funciona" className="purpose">
        <div className="container purposeGrid">
<div className="videoPanel realDashboardPanel motion-left">
  <div className="realDashboardFrame motion-scale motion-delay-1">
    <div className="realDashboardHeader">
      <span>Dashboard real</span>
      <strong>Convierte tus datos en decisiones.</strong>
    </div>

    <img
      src="/images/dashboard-real-jasodatos.png"
      alt="Dashboard real de JasoDatos con ventas, productos, stock y canales"
      className="realDashboardImage"
    />
  </div>
</div>

          <div className="purposeText">
<p className="sectionKicker motion-fade">Nuestro propósito</p>
<h2 className="sectionTitle motion-up motion-delay-1">
  Que tus datos de ventas e inventario te digan qué hacer.
</h2>
<p className="sectionLead motion-fade motion-delay-2">
  JasoDatos está pensado para negocios que trabajan con archivos dispersos y necesitan convertirlos en señales simples: qué vender, qué reponer, qué corregir y qué revisar primero.
</p>

            <div className="bullets">
              <div className="bullet motion-right motion-delay-1">
                <span className="bulletIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 10L12 4L20 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 10V20H18V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 20V14H15V20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                <div>
                  <strong>Entendemos tu negocio</strong>
                  <span>Pensado para bodegas, ferreterías, distribuidores y negocios comerciales que trabajan con inventario.</span>
                </div>
              </div>

              <div className="bullet motion-right motion-delay-2">
                <span className="bulletIcon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none">
  <path d="M4 19V5" stroke="currentColor" strokeLinecap="round" />
  <path d="M4 19H20" stroke="currentColor" strokeLinecap="round" />
  <path d="M7 15.5V12" stroke="currentColor" strokeLinecap="round" />
  <path d="M11 15.5V8.5" stroke="currentColor" strokeLinecap="round" />
  <path d="M15 15.5V10.5" stroke="currentColor" strokeLinecap="round" />
  <path d="M19 15.5V7" stroke="currentColor" strokeLinecap="round" />
  <path d="M7 11.5L11 8.5L15 10.5L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
</svg>
                  </span>
                <div>
                  <strong>Análisis inteligente</strong>
                  <span>Detecta productos vendidos, stock bajo, productos lentos y oportunidades de mejora.</span>
                </div>
              </div>

              <div className="bullet motion-right motion-delay-3">
                <span className="bulletIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 12.5L9.2 16.6L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 3.5L19.5 7.5V12C19.5 16.4 16.6 19.6 12 20.5C7.4 19.6 4.5 16.4 4.5 12V7.5L12 3.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                <div>
                  <strong>Decisiones que impactan</strong>
                  <span>Ahorra tiempo, evita pérdidas y enfoca tus compras en lo que realmente se mueve.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section id="indicadores" className="metrics">
  <div className="container metricsShell">
    <div className="metricsIntro motion-left">
      <p className="metricsTitle">JasoDatos en números</p>
      <h2>Indicadores simples para decidir mejor.</h2>
      <p>
        Visualiza señales comerciales clave como ventas recientes, venta promedio por compra,
        productos en riesgo y productos lentos.
      </p>
    </div>

          <div className="metricsGrid">
            <div className="metric motion-up motion-delay-1">
              <div className="metricIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 3V21" stroke="currentColor" strokeLinecap="round"/><path d="M16.5 7.5C15.6 6.5 14.3 6 12.8 6H10.8C9.25 6 8 7 8 8.3C8 9.45 8.95 10.35 10.35 10.58L13.7 11.1C15.1 11.35 16.1 12.25 16.1 13.45C16.1 14.7 14.85 15.8 13.3 15.8H11.1C9.6 15.8 8.3 15.25 7.5 14.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <strong>$12.480</strong>
              <span>Ventas 30 días</span>
              <small>+18% vs. período anterior</small>
            </div>
            <div className="metric motion-up motion-delay-2">
              <div className="metricIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M7 5H17C18.1 5 19 5.9 19 7V17C19 18.1 18.1 19 17 19H7C5.9 19 5 18.1 5 17V7C5 5.9 5.9 5 7 5Z" stroke="currentColor"/><path d="M8 10H16" stroke="currentColor" strokeLinecap="round"/><path d="M8 14H13" stroke="currentColor" strokeLinecap="round"/></svg>
              </div>
              <strong>$23,40</strong>
              <span>Venta promedio por compra</span>
              <small>+7% vs. período anterior</small>
            </div>
            <div className="metric motion-up motion-delay-3">
              <div className="metricIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 4L21 19H3L12 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 9V13" stroke="currentColor" strokeLinecap="round"/><path d="M12 16.4H12.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
              </div>
              <strong>7</strong>
              <span>Productos en riesgo</span>
              <small>-2 vs. período anterior</small>
            </div>
            <div className="metric motion-up motion-delay-4">
              <div className="metricIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M19 14.8A7.5 7.5 0 0 1 9.2 5C6.4 6.1 4.5 8.8 4.5 12C4.5 16.1 7.9 19.5 12 19.5C15.2 19.5 17.9 17.6 19 14.8Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <strong>14</strong>
              <span>Productos lentos</span>
              <small>+3 vs. período anterior</small>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container benefitShell">
          <div className="benefitIntro motion-left">
            <p className="sectionKicker">Beneficios visibles</p>
            <h2>Control comercial sin perderte entre hojas de cálculo.</h2>
            <p>
JasoDatos traduce tus archivos en señales claras para vender mejor,
reponer a tiempo y reducir productos lentos sin complicarte con herramientas pesadas.
            </p>
          </div>

          <div className="benefitGrid">
            <article className="benefitCard motion-up motion-delay-1">
              <span className="benefitNum">01</span>
              <h3>Evita quiebres y pérdidas</h3>
              <p>Detecta productos con bajo stock antes de que pierdas ventas.</p>
            </article>
            <article className="benefitCard motion-up motion-delay-2">
              <span className="benefitNum">02</span>
              <h3>Decide en minutos</h3>
              <p>Reduce la revisión manual y enfócate en productos, alertas y oportunidades.</p>
            </article>
            <article className="benefitCard motion-up motion-delay-3">
              <span className="benefitNum">03</span>
              <h3>Compra con más criterio</h3>
              <p>Reduce dinero inmovilizado y refuerza lo que realmente se mueve.</p>
            </article>
            <article className="benefitCard motion-up motion-delay-4">
              <span className="benefitNum">04</span>
              <h3>Comparte y alinea</h3>
              <p>Reportes claros para revisar con tu equipo y tomar decisiones alineadas.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="receive">
        <div className="container receivePanel">
          <div className="receiveHead motion-left">
<p className="sectionKicker">Qué recibes</p>
<h2>Un tablero claro para decidir qué hacer primero.</h2>
<p>
  JasoDatos te entrega una lectura comercial simple para revisar ventas,
  inventario, productos lentos y alertas de stock.
</p>
          </div>

          <div className="receiveGrid">
<div className="receiveItem motion-left motion-delay-1"><span className="check">✓</span>Tablero de ventas e inventario listo para revisar.</div>
<div className="receiveItem motion-right motion-delay-2"><span className="check">✓</span>Productos más vendidos, productos lentos y alertas de stock bajo.</div>
<div className="receiveItem motion-left motion-delay-3"><span className="check">✓</span>Reporte claro para compartir con tu equipo.</div>
<div className="receiveItem motion-right motion-delay-4"><span className="check">✓</span>Lectura simple para decidir qué vender, reponer o corregir primero.</div>
          </div>
        </div>
      </section>

      <section className="howWorks">
        <div className="container howPanel">
          <div className="howHead motion-left">
<p className="sectionKicker">Cómo funciona</p>
<h2>De tu archivo comercial a un tablero claro en pocos pasos.</h2>
<p>
  No necesitas sistemas complejos. Sube tu archivo, revisa la validación
  y usa el tablero para decidir qué vender, reponer o corregir.
</p>
          </div>

          <div className="stepGrid">
            <article className="stepCard motion-left motion-delay-1">
              <span className="stepNum">1</span>
<h3>Sube tu archivo</h3>
<p>Carga tu archivo de ventas o inventario en CSV o Excel.</p>
            </article>
            <div className="stepArrow motion-fade motion-delay-2">→</div>
            <article className="stepCard motion-up motion-delay-2">
              <span className="stepNum">2</span>
<h3>JasoDatos ordena la información</h3>
<p>Reconoce columnas, valida datos clave y prepara el análisis comercial.</p>
            </article>
            <div className="stepArrow motion-fade motion-delay-3">→</div>
            <article className="stepCard motion-right motion-delay-3">
              <span className="stepNum">3</span>
<h3>Decide con el tablero</h3>
<p>Revisa ventas, stock en riesgo, productos lentos y acciones recomendadas.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="recursos" className="solutions">
        <div className="container reveal">
          <div className="solutionsTitle">Nuestras soluciones</div>

          <div className="solutionGrid">
            <article className="solutionCard motion-left motion-delay-1">
              <div className="solutionIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M4 19V5" stroke="currentColor" strokeLinecap="round"/><path d="M4 19H20" stroke="currentColor" strokeLinecap="round"/><path d="M7 15L11 11L14 13.5L19 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 18V15" stroke="currentColor" strokeLinecap="round"/><path d="M12 18V12" stroke="currentColor" strokeLinecap="round"/><path d="M17 18V10" stroke="currentColor" strokeLinecap="round"/></svg>
              </div>
              <div>
<h3>Análisis de ventas</h3>
<p>Identifica qué productos venden más, cuándo se mueven mejor y dónde están tus oportunidades.</p>
                <span>Disponible en JasoDatos →</span>
              </div>
            </article>

            <article className="solutionCard motion-up motion-delay-2">
              <div className="solutionIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 3.5L20 7.8V16.2L12 20.5L4 16.2V7.8L12 3.5Z" stroke="currentColor" strokeLinejoin="round"/><path d="M4.8 8L12 12L19.2 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12V20" stroke="currentColor" strokeLinecap="round"/></svg>
              </div>
              <div>
<h3>Control de inventario</h3>
<p>Revisa existencias, productos acumulados y niveles de stock para comprar con más criterio.</p>
                <span>Disponible en JasoDatos →</span>
              </div>
            </article>

            <article className="solutionCard motion-up motion-delay-3">
              <div className="solutionIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M6 5H18V19H6V5Z" stroke="currentColor" strokeLinejoin="round"/><path d="M9 9H15" stroke="currentColor" strokeLinecap="round"/><path d="M9 12H15" stroke="currentColor" strokeLinecap="round"/><path d="M9 15H13" stroke="currentColor" strokeLinecap="round"/><path d="M18 5L21 8" stroke="currentColor" strokeLinecap="round"/></svg>
              </div>
              <div>
<h3>Stock crítico</h3>
<p>Detecta productos con bajo stock antes de perder ventas por falta de inventario.</p>
                <span>Disponible en JasoDatos →</span>
              </div>
            </article>

            <article className="solutionCard motion-right motion-delay-4">
              <div className="solutionIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" stroke="currentColor" strokeLinejoin="round"/><path d="M18 15L18.8 17.2L21 18L18.8 18.8L18 21L17.2 18.8L15 18L17.2 17.2L18 15Z" stroke="currentColor" strokeLinejoin="round"/></svg>
              </div>
              <div>
<h3>Acciones recomendadas</h3>
<p>Recibe acciones simples para reponer, revisar productos lentos y priorizar decisiones.</p>
                <span>Disponible en JasoDatos →</span>
              </div>
            </article>
          </div>
        </div>
      </section>

<section id="precios" className="pricing">
  <div className="container">
    <div className="pricingHead">
      <p className="sectionKicker motion-fade">Planes para cada etapa de tu negocio</p>
    </div>

    <div className="pricingGrid pricingGridFinal pricingSequence">
      <article className="price pricePlan priceLight motion-up motion-delay-3">
        <div className="priceIcon priceIconStart" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12.4 3.2C15.8 4.1 18.4 6.8 19.2 10.2L14.4 15L9 9.6L12.4 3.2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 9.6L6.6 10.1C5.5 10.3 4.7 11.1 4.3 12.1L3.5 14.2L8.1 13.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.4 15L13.6 19.6L15.7 18.8C16.7 18.4 17.5 17.6 17.7 16.5L18.2 14.1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.2 14.8L6.6 17.4" stroke="currentColor" strokeLinecap="round" />
            <path d="M7.4 19.2L4.8 21.8" stroke="currentColor" strokeLinecap="round" />
            <path d="M14.5 7.6H14.51" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <h3>Plan Inicio</h3>
        <div className="amount">$29 <small>/mes</small></div>

        <p>
          Deja de manejar tu negocio a ciegas. En minutos sabes qué vendiste, qué tienes y qué se está quedando dormido.
        </p>

        <div className="priceDivider" />

        <ul>
          <li>Carga de archivo CSV o Excel</li>
          <li>Dashboard de ventas e inventario</li>
          <li>KPIs: ventas, unidades, producto estrella</li>
          <li>Alertas básicas de stock bajo</li>
          <li>Exportación CSV y Excel</li>
          <li>1 sucursal o local</li>
          <li>JasoAlix no incluido</li>
          <li>Sin acciones recomendadas</li>
        </ul>

        <a className="btn btnPrimary" href="https://app.jasodatos.com/registro">
          Empezar con Inicio
        </a>
      </article>

      <article className="price pricePlan priceFeatured motion-up motion-delay-1">
        <span className="planBadge">Más usado</span>

        <div className="priceIcon priceIconGrowth" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M4 18.5H20" stroke="currentColor" strokeLinecap="round" />
            <path d="M5 16L10 11L13.5 14.5L20 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.4 8H20V12.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 20.5V16" stroke="currentColor" strokeLinecap="round" />
            <path d="M12 20.5V13.5" stroke="currentColor" strokeLinecap="round" />
            <path d="M17.5 20.5V10.5" stroke="currentColor" strokeLinecap="round" />
          </svg>
        </div>

        <h3>Plan Crecimiento</h3>
        <div className="amount">$89 <small>/mes</small></div>

        <p>
          Recibe acciones claras para vender mejor, reponer a tiempo y detectar productos con dinero atrapado.
        </p>

        <div className="priceDivider" />

        <ul>
          <li>Todo lo del plan Inicio</li>
          <li>Acciones priorizadas: qué hacer primero hoy</li>
          <li>Alertas completas: stock crítico y productos lentos</li>
          <li>Comparativo de productos por ventas y margen</li>
          <li>Análisis por canales: tienda, WhatsApp, web</li>
          <li>JasoAlix: resumen comercial semanal</li>
          <li>Exportación PDF lista para compartir</li>
          <li>1 reunión mensual de seguimiento</li>
        </ul>

        <a className="btn btnPrimary" href="https://app.jasodatos.com/registro">
          Empezar ahora
        </a>
      </article>

      <article className="price pricePlan priceLight motion-up motion-delay-2">
        <div className="priceIcon priceIconControl" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 3.5L19.5 7.4V12C19.5 16.5 16.6 19.7 12 20.7C7.4 19.7 4.5 16.5 4.5 12V7.4L12 3.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.4 12.2L10.8 14.6L15.8 9.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 7.8H16" stroke="currentColor" strokeLinecap="round" opacity=".55" />
            <path d="M9.2 17H14.8" stroke="currentColor" strokeLinecap="round" opacity=".55" />
          </svg>
        </div>

        <h3>Plan Control</h3>
        <div className="amount"><small>desde</small> $149</div>

        <p>
          Maneja todas tus sucursales desde un solo lugar. Cada mes revisas qué mejoró, qué empeoró y qué decisiones tomar para vender mejor.
        </p>

        <div className="priceDivider" />

        <ul>
          <li>Todo lo del plan Crecimiento</li>
          <li>Hasta 3 sucursales con comparativo entre locales</li>
          <li>JasoAlix: resumen comercial semanal, mensajes listos para proveedores y equipo</li>
          <li>Informe mensual en PDF con comparativa</li>
          <li>Revisión mensual de resultados incluida</li>
          <li>Soporte WhatsApp prioritario</li>
          <li>1 ajuste mensual de reglas comerciales</li>
          <li>Configuración inicial incluida</li>
        </ul>

        <a className="btn btnPrimary" href={wa} target="_blank" rel="noreferrer">
          Hablar por WhatsApp
        </a>
      </article>

      <aside className="priceHelp motion-up motion-delay-4">
        <div className="priceHelpIcon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 13V11C5 7.1 8.1 4 12 4C15.9 4 19 7.1 19 11V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 13.5C5 12.7 5.7 12 6.5 12H8V17H6.5C5.7 17 5 16.3 5 15.5V13.5Z" stroke="currentColor" strokeLinejoin="round" />
            <path d="M16 12H17.5C18.3 12 19 12.7 19 13.5V15.5C19 16.3 18.3 17 17.5 17H16V12Z" stroke="currentColor" strokeLinejoin="round" />
            <path d="M19 16.5C18.5 19.1 16.5 20.5 13.6 20.5H12" stroke="currentColor" strokeLinecap="round" />
            <path d="M10 20.5H12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M9.2 10.2C10 9.4 11 9 12 9C13.1 9 14.1 9.4 14.8 10.2" stroke="currentColor" strokeLinecap="round" opacity=".65" />
          </svg>
        </div>

        <h3>¿Tienes dudas?</h3>

        <p>
          Te ayudamos a elegir el plan según tu volumen de ventas, número de sucursales y nivel de acompañamiento que necesitas.
        </p>

        <a className="btn btnWhats" href={wa} target="_blank" rel="noreferrer">
          Hablar por WhatsApp
        </a>
      </aside>
    </div>
  </div>
</section>
      <section className="faq">
        <div className="container faqPanel">
          <div className="faqHead motion-left">
            <p className="sectionKicker">Preguntas frecuentes</p>
            <h2>Antes de empezar.</h2>
            <p>Respuestas rápidas para validar si JasoDatos encaja con tu operación.</p>
          </div>

          <div className="faqList">
            <details className="faqItem motion-right motion-delay-1">
              <summary>¿Qué necesito para empezar?</summary>
              <p>Solo necesitas un archivo CSV o Excel con ventas, inventario, productos o stock. Si el archivo tiene columnas claras, JasoDatos podrá ayudarte a revisar la información con mayor precisión.</p>
            </details>

            <details className="faqItem motion-left motion-delay-2">
              <summary>¿Debo tener un formato especial?</summary>
              <p>No necesariamente. Puedes trabajar con un archivo comercial común. JasoDatos te ayuda a relacionar las columnas principales antes de mostrar el tablero.</p>
            </details>

            <details className="faqItem motion-right motion-delay-3">
              <summary>¿Sirve para bodegas, ferreterías y distribuidores?</summary>
              <p>Sí. Está pensado para negocios comerciales que manejan productos, ventas, inventario, stock y reposición.</p>
            </details>

            <details className="faqItem motion-left motion-delay-4">
              <summary>¿Puedo exportar reportes?</summary>
              <p>Sí. Puedes generar reportes para revisar resultados, compartir información y tomar decisiones con tu equipo.</p>
            </details>

            <details className="faqItem motion-right motion-delay-2">
              <summary>¿JasoDatos reemplaza Excel?</summary>
              <p>No lo reemplaza, JasoDatos usa tus archivos de Excel o CSV como punto de partida y los convierte en información más clara para tomar decisiones comerciales.</p>
            </details>
          </div>
        </div>
      </section>


<section className="bottomCta">
  <div className="container bottomGrid">
    <div className="cloud" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M8 17.5H7.2C4.9 17.5 3 15.7 3 13.5C3 11.5 4.5 9.8 6.5 9.5C7.2 6.6 9.6 4.5 12.5 4.5C15.7 4.5 18.3 6.9 18.8 10C20.6 10.3 22 11.8 22 13.7C22 15.8 20.3 17.5 18.1 17.5H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19.5V11.5" stroke="currentColor" strokeLinecap="round" />
        <path d="M8.8 14.7L12 11.5L15.2 14.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>

    <div>
      <h2>Empieza hoy a tomar mejores decisiones con tus datos reales.</h2>
      <p>Sube tu archivo y recibe una lectura clara de ventas, inventario y productos que requieren atención.</p>
    </div>

    <div className="bottomActions">
      <a className="btn btnPrimary" href="https://app.jasodatos.com/registro">
        Probar con mi archivo
        <span className="btnIcon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M8 17.5H7.2C4.9 17.5 3 15.7 3 13.5C3 11.5 4.5 9.8 6.5 9.5C7.2 6.6 9.6 4.5 12.5 4.5C15.7 4.5 18.3 6.9 18.8 10C20.6 10.3 22 11.8 22 13.7C22 15.8 20.3 17.5 18.1 17.5H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19.5V11.5" stroke="currentColor" strokeLinecap="round" />
            <path d="M8.8 14.7L12 11.5L15.2 14.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>

      <a className="btn btnWhats" href={wa} target="_blank" rel="noreferrer">
        Hablar por WhatsApp
<span className="btnIcon whatsappIcon" aria-hidden="true">
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M6.6 18.2L4.5 19L5.2 16.9C4.4 15.6 4 14.1 4 12.5C4 8.1 7.6 4.5 12 4.5C16.4 4.5 20 8.1 20 12.5C20 16.9 16.4 20.5 12 20.5C10 20.5 8.1 19.7 6.6 18.2Z"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.2 9.4C9.5 12.2 11.7 14.4 14.5 14.8"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
    <path
      d="M9.2 9.4L10.3 8.8L11.2 10.5L10.5 11.2"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.4 13.7L14.1 13L15.8 13.9L15.2 15"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</span>
      </a>
    </div>
  </div>
</section>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
<a className="footerBrandLogo" href="#inicio" aria-label="JasoDatos">
  <img
    src="/images/jasodatos-logo-negativo-transparente.png"
    alt="JasoDatos"
  />
</a>

<p className="footerTagline">
  Convierte tus datos en decisiones.
</p>
          </div>

          <div>
            <h4>Enlaces</h4>
            <a href="#soluciones">Soluciones</a>
            <a href="#funciona">Cómo funciona</a>
            <a href="#recursos">Recursos</a>
            <a href="#precios">Precios</a>
          </div>

          <div>
            <h4>Legal</h4>
            <a href="/terminos">Términos y condiciones</a>
            <a href="/privacidad">Política de privacidad</a>
          </div>

          <div>
            <h4>Síguenos</h4>
            <div className="social">
              <span>f</span>
              <span>ig</span>
              <span>yt</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: motionScript }} />
    </main>
  );
}

