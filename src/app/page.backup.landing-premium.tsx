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
  --radius:24px;
}

*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
html,body{padding:0;margin:0;overflow-x:hidden;}
body{
  min-height:100vh;
  color:var(--text);
  font-family:Arial, Helvetica, sans-serif;
  background:
    radial-gradient(1100px 680px at 50% -120px, rgba(127,178,255,.22), transparent 62%),
    radial-gradient(900px 560px at 0% 12%, rgba(139,92,246,.18), transparent 58%),
    radial-gradient(760px 560px at 100% 20%, rgba(34,197,94,.08), transparent 56%),
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
  mask-image:linear-gradient(to bottom, rgba(0,0,0,.7), transparent 78%);
}
a{color:inherit;text-decoration:none;}
main{min-height:100vh;overflow:hidden;}
.container{width:min(1480px, calc(100% - 48px));margin:0 auto;}

.header{
  position:sticky;
  top:0;
  z-index:50;
  background:rgba(7,10,31,.78);
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
.brand{display:flex;align-items:center;gap:12px;font-weight:950;letter-spacing:.2px;}
.brandMark{
  width:42px;height:42px;border-radius:13px;display:grid;place-items:center;
  color:#fff;font-weight:950;background:linear-gradient(135deg,var(--brand1),var(--brand3));
  box-shadow:0 12px 30px rgba(79,70,229,.35);
}
.brandName{font-size:1.15rem;}
.nav{display:flex;align-items:center;gap:26px;flex-wrap:wrap;}
.nav a{color:var(--muted);font-weight:850;font-size:.95rem;transition:.18s ease;}
.nav a:hover{color:#fff;}
.headerCtas{display:flex;align-items:center;gap:12px;flex-wrap:wrap;}

.btn{
  display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:0 20px;
  border-radius:14px;border:1px solid transparent;font-weight:950;font-size:.95rem;cursor:pointer;
  transition:transform .16s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
}
.btn:hover{transform:translateY(-1px);}
.btnPrimary{color:#fff;background:linear-gradient(135deg,var(--success),#16a34a);box-shadow:0 16px 34px rgba(34,197,94,.24);}
.btnPrimary:hover{box-shadow:0 20px 42px rgba(34,197,94,.32);}
.btnGhost{color:#fff;background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.16);}
.btnGhost:hover{background:rgba(255,255,255,.1);}

.pill{
  display:inline-flex;align-items:center;padding:10px 16px;border-radius:999px;background:rgba(127,178,255,.1);
  border:1px solid rgba(127,178,255,.22);color:#dbe7ff;font-weight:950;font-size:.86rem;
}
.eyebrow{display:inline-block;color:#7FB2FF;text-transform:uppercase;letter-spacing:.16em;font-size:.72rem;font-weight:950;}
.sectionTitleLarge{font-size:clamp(2rem,3.8vw,3.4rem);line-height:1.02;letter-spacing:-.045em;margin:10px 0 14px;max-width:820px;}
.sectionLead,.p{color:var(--muted);line-height:1.72;font-size:1.04rem;}
.sectionLead{max-width:760px;}

/* HERO OBJETIVO */
.heroTarget{position:relative;min-height:auto;padding:42px 0 22px;overflow:hidden;}
.heroTarget::before{
  content:"";position:absolute;inset:0;background:
    radial-gradient(900px 520px at 70% 40%, rgba(79,70,229,.22), transparent 60%),
    radial-gradient(800px 520px at 18% 62%, rgba(37,99,235,.18), transparent 62%);
  pointer-events:none;
}
.heroDataGrid{position:absolute;inset:0;background-image:linear-gradient(rgba(127,178,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(127,178,255,.06) 1px,transparent 1px);background-size:64px 64px;opacity:.65;}
.heroWave{position:absolute;left:0;right:0;bottom:10%;height:240px;opacity:.28;background:radial-gradient(ellipse at 50% 100%, rgba(37,99,235,.36), transparent 64%);filter:blur(8px);pointer-events:none;}
.heroTargetGrid{position:relative;z-index:2;display:grid;grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr);gap:74px;align-items:center;}
.heroTargetCopy{max-width:720px;}
.heroTargetPill{margin-bottom:20px;text-transform:uppercase;letter-spacing:.04em;}
.heroTargetTitle{margin:0;font-size:clamp(3rem,4.7vw,4.65rem);line-height:1.03;letter-spacing:-.055em;font-weight:950;color:#f8fbff;}
.heroTargetTitle span{background:linear-gradient(135deg,#7FB2FF 0%,#7C5CFF 45%,#D946EF 100%);-webkit-background-clip:text;background-clip:text;color:transparent;}
.heroTargetSub{max-width:610px;margin:24px 0 0;color:#c7d2fe;line-height:1.72;font-size:1.03rem;}
.heroTargetActions{margin-top:30px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;}
.heroTargetPrimary{min-width:170px;}
.heroTargetGhost{min-width:260px;}
.heroTargetProof{margin-top:32px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;max-width:620px;}
.heroTargetProof>div{display:grid;grid-template-columns:44px 1fr;column-gap:12px;align-items:center;}
.heroProofIcon{width:40px;height:40px;border-radius:999px;display:grid;place-items:center;color:#7FB2FF;background:rgba(15,76,129,.18);border:1px solid rgba(127,178,255,.34);grid-row:span 2;}
.heroTargetProof strong{color:#fff;font-size:.98rem;}
.heroTargetProof small{color:#c7d2fe;line-height:1.35;}

/* DASHBOARD HERO PREMIUM COMPACTO */
.dashboardShellPremium{
  width:100%;
  max-width:980px !important;
  margin-left:auto;
  padding:28px !important;
  border-radius:32px !important;
  background:
    radial-gradient(circle at top right, rgba(91,77,255,.18), transparent 36%),
    linear-gradient(180deg, rgba(18,27,92,.96), rgba(9,15,52,.98)) !important;
  border:1.6px solid rgba(127,178,255,.28) !important;
  box-shadow:
    0 34px 100px rgba(0,0,0,.48),
    0 0 90px rgba(79,70,229,.18),
    inset 0 1px 0 rgba(255,255,255,.08) !important;
  overflow:hidden !important;
}

.dashboardHeaderPremium{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  margin-bottom:22px;
}

.dashboardBrand{
  display:flex;
  align-items:center;
  gap:14px;
}

.dashboardBrand strong{
  display:block;
  font-size:1.35rem;
  line-height:1.1;
  color:#fff;
}

.dashboardBrand small{
  display:block;
  margin-top:4px;
  color:#aebcff;
  font-size:.82rem;
  font-weight:700;
}

.dashboardLogo{
  width:46px !important;
  height:46px !important;
  border-radius:15px !important;
}

.dashboardLive{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:10px 14px;
  border-radius:999px;
  color:#bbf7d0;
  background:rgba(34,197,94,.11);
  border:1px solid rgba(34,197,94,.18);
  font-size:.82rem;
  font-weight:950;
  text-transform:uppercase;
}

.dashboardLive span{
  width:8px;
  height:8px;
  border-radius:999px;
  background:#22c55e;
  box-shadow:0 0 14px rgba(34,197,94,.72);
}

.dashboardKpisPremium{
  display:grid !important;
  grid-template-columns:repeat(4,minmax(0,1fr)) !important;
  gap:14px !important;
  margin-bottom:18px !important;
}

.dashboardKpiPremium{
  min-height:128px !important;
  padding:18px !important;
  border-radius:20px !important;
  background:linear-gradient(180deg,rgba(44,54,135,.72),rgba(24,31,91,.86)) !important;
  border:1px solid rgba(255,255,255,.10) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 16px 34px rgba(0,0,0,.18);
}

.dashboardKpiPremium span{
  display:block;
  min-height:30px;
  color:#c7d2fe;
  text-transform:uppercase;
  font-size:.78rem;
  font-weight:950;
  letter-spacing:.04em;
}

.dashboardKpiPremium strong{
  display:block;
  margin-top:8px;
  color:#fff;
  font-size:1.95rem;
  line-height:1;
}

.dashboardKpiPremium small{
  display:block;
  margin-top:10px;
  color:#c7d2fe;
  line-height:1.35;
  font-size:.82rem;
}

.dashboardKpiPremium .positive{
  color:#86efac !important;
}

.dashboardMainGridPremium{
  display:grid !important;
  grid-template-columns:1.12fr .88fr !important;
  gap:18px !important;
  margin-bottom:18px;
}

.dashboardPanel{
  padding:22px !important;
  border-radius:22px !important;
  background:linear-gradient(180deg,rgba(8,14,48,.58),rgba(7,12,42,.78)) !important;
  border:1px solid rgba(255,255,255,.09) !important;
  box-shadow:0 18px 44px rgba(0,0,0,.20);
}

.dashboardPanelHead{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px;
  margin-bottom:18px;
}

.dashboardPanelHead strong{
  color:#fff;
  font-size:1.02rem;
}

.dashboardPanelHead span{
  color:#7FB2FF;
  font-size:.82rem;
  font-weight:900;
}

.dashboardTrendPanel{
  min-height:300px !important;
}

.heroTrendChart{
  position:relative;
  height:238px;
  overflow:hidden;
  border-radius:18px;
  background:
    linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
  background-size:54px 54px;
}

.heroTrendChart svg{
  width:100%;
  height:100%;
  display:block;
}

.chartTotalBadge{
  position:absolute;
  right:18px;
  top:18px;
  padding:10px 12px;
  border-radius:14px;
  background:rgba(127,178,255,.16);
  border:1px solid rgba(127,178,255,.20);
  text-align:right;
}

.chartTotalBadge strong,
.chartTotalBadge span{
  display:block;
}

.chartTotalBadge strong{
  font-size:.95rem;
  color:#fff;
}

.chartTotalBadge span{
  color:#c7d2fe;
  font-size:.76rem;
}

.dashboardCategoryPanel{
  min-height:300px !important;
}

.dashboardCategoryBody{
  display:grid;
  grid-template-columns:160px minmax(0,1fr);
  gap:22px;
  align-items:center;
}

.dashboardDonut{
  width:158px;
  height:158px;
  border-radius:999px;
  position:relative;
  box-shadow:0 20px 50px rgba(79,139,255,.18);
}

.dashboardDonut::after{
  content:"";
  position:absolute;
  inset:40px;
  border-radius:999px;
  background:#090f34;
}

.dashboardDonutPremium{
  background:conic-gradient(
    #4F8BFF 0deg 162deg,
    #8B5CF6 162deg 270deg,
    #5EEAD4 270deg 324deg,
    rgba(255,255,255,.28) 324deg 360deg
  ) !important;
}

.dashboardLegendPremium{
  display:grid;
  gap:13px;
}

.dashboardLegendPremium div{
  display:grid;
  grid-template-columns:12px minmax(0,1fr) auto;
  gap:10px;
  align-items:center;
  color:#c7d2fe;
  font-size:.84rem;
  font-weight:850;
}

.dashboardLegendPremium i{
  width:12px;
  height:12px;
  border-radius:999px;
}

.dashboardLegendPremium strong{
  color:#fff;
}

.legendBlue{background:#4F8BFF;}
.legendPurple{background:#8B5CF6;}
.legendMint{background:#5EEAD4;}
.legendGray{background:rgba(255,255,255,.32);}

.dashboardRiskCompact{
  padding:20px 22px;
  border-radius:22px;
  background:linear-gradient(180deg,rgba(8,14,48,.54),rgba(7,12,42,.74));
  border:1px solid rgba(255,255,255,.09);
  margin-bottom:18px;
}

.riskCompactRows{
  display:grid;
  gap:10px;
}

.riskCompactRows div{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  gap:14px;
  align-items:center;
  padding:10px 0;
  border-bottom:1px solid rgba(255,255,255,.07);
}

.riskCompactRows div:last-child{
  border-bottom:0;
}

.riskCompactRows span{
  color:#eef2ff;
  font-weight:850;
}

.riskCompactRows b{
  min-width:88px;
  padding:8px 12px;
  border-radius:999px;
  text-align:center;
  font-size:.78rem;
  font-weight:950;
}

.riskDanger{
  background:rgba(239,68,68,.26);
  border:1px solid rgba(239,68,68,.24);
  color:#ffe4e6;
}

.riskWarning{
  background:rgba(245,158,11,.24);
  border:1px solid rgba(245,158,11,.26);
  color:#fff7ed;
}

.dashboardBotBarPremium{
  margin-top:0 !important;
  min-height:112px !important;
  padding:20px 24px !important;
  border-radius:24px !important;
  display:grid !important;
  grid-template-columns:170px minmax(0,1fr) auto !important;
  gap:22px !important;
  align-items:center !important;
  background:linear-gradient(135deg,rgba(14,165,233,.16),rgba(79,70,229,.24)) !important;
  border:1px solid rgba(34,211,238,.38) !important;
}

.dashboardBotLabel{
  padding-right:18px;
  border-right:1px solid rgba(255,255,255,.10);
}

.dashboardBotLabel span,
.dashboardBotLabel strong{
  display:block;
  text-transform:uppercase;
  color:#7FB2FF;
  font-size:.82rem;
  line-height:1.6;
  font-weight:950;
}

.dashboardBotBarPremium p{
  margin:0;
  color:#f8fbff;
  font-weight:850;
  line-height:1.5;
  font-size:1rem;
}

.dashboardBotActionsPremium{
  display:flex;
  gap:12px;
  align-items:center;
}

.dashboardBotActionsPremium span{
  width:54px !important;
  height:54px !important;
  border-radius:17px !important;
  display:grid !important;
  place-items:center !important;
  color:#fff;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.12);
}

.dashboardBotActionsPremium svg{
  width:30px;
  height:30px;
}

@media (max-width:1180px){
  .dashboardKpisPremium{
    grid-template-columns:repeat(2,minmax(0,1fr)) !important;
  }

  .dashboardMainGridPremium{
    grid-template-columns:1fr !important;
  }

  .dashboardBotBarPremium{
    grid-template-columns:1fr !important;
  }

  .dashboardBotLabel{
    border-right:0;
    padding-right:0;
  }
}

@media (max-width:720px){
  .dashboardShellPremium{
    padding:18px !important;
  }

  .dashboardHeaderPremium{
    align-items:flex-start;
    flex-direction:column;
  }

  .dashboardKpisPremium{
    grid-template-columns:1fr !important;
  }

  .dashboardCategoryBody{
    grid-template-columns:1fr;
  }

  .dashboardDonut{
    margin:0 auto;
  }
}

@media (max-width:720px){
  .dashboardFiltersBar,
  .dashboardKpisPro{
    grid-template-columns:1fr;
  }

  .dashboardActionsTop span{
    width:100%;
  }

  .dashboardCategoryBody{
    grid-template-columns:1fr;
  }

  .dashboardDonut{
    margin:0 auto;
  }

  .dashboardBotBarPro{
    grid-template-columns:1fr !important;
  }
}
/* secciones */
.section{padding:58px 0;}
.processSection{
  padding-top:24px !important;
  margin-top:0 !important;
}
.sectionAlt{padding-top:76px;}
/* BANDA DE SEÑALES PREMIUM */
.signalBand{
  padding:20px 0 10px;
}
.signalBandInner{
  padding:20px 0 4px;
}
.signalBandWrap{
  display:flex;
  flex-direction:column;
  gap:26px;
}

.signalBandGrid{
  display:grid;
  grid-template-columns:420px minmax(0,1fr);
  gap:18px;
  align-items:stretch;
}

.signalBandIntro{
  min-height:250px;
  padding:30px 30px 24px;
  border-radius:28px;
  background:linear-gradient(180deg, rgba(18,26,74,.58), rgba(12,18,58,.4));
  border:1px solid rgba(120,150,255,.14);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.04);
}

.signalBandBullet{
  margin-top:22px;
  display:flex;
  align-items:center;
  gap:10px;
  color:#c6d7ff;
  font-weight:800;
}

.bulletDot{
  width:10px;
  height:10px;
  border-radius:999px;
  background:#22c55e;
  box-shadow:0 0 0 6px rgba(34,197,94,.12), 0 0 18px rgba(34,197,94,.32);
}

.signalMetricsGrid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:14px;
}

.signalMetricCard{
  min-height:210px;
  padding:18px 18px 16px;
  border-radius:24px;
  background:linear-gradient(180deg, rgba(46,58,132,.78), rgba(35,44,108,.7));
  border:1px solid rgba(125,146,255,.18);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.05),
    0 18px 42px rgba(4,8,28,.24);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:14px;
}

.signalMetricTop{
  display:flex;
  flex-direction:column;
  gap:12px;
}

.signalMetricIcon{
  width:86px;
  height:86px;
  border-radius:24px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:10px;
  position:relative;
  overflow:visible;
  border:1px solid rgba(255,255,255,.14);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.16),
    0 0 0 1px rgba(255,255,255,.05),
    0 10px 30px rgba(0,0,0,.26);
}

.signalMetricIcon::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:inherit;
  background:linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.02));
}

.signalMetricIcon::after{
  content:"";
  position:absolute;
  inset:-14%;
  border-radius:inherit;
  filter:blur(18px);
  opacity:1;
  z-index:0;
}

.signalMetricIcon svg{
  position:relative;
  z-index:2;
  width:42px;
  height:42px;
  display:block;
  filter:
    drop-shadow(0 0 8px currentColor)
    drop-shadow(0 0 18px currentColor);
}

.signalMetricMeta{
  display:flex;
  flex-direction:column;
  gap:8px;
}

.signalMetricLabel{
  font-size:1.05rem;
  font-weight:900;
  color:#eaf1ff;
}

.signalMetricValue{
  font-size:2.1rem;
  line-height:1;
  letter-spacing:-.04em;
  color:#ffffff;
}

.signalMetricDelta{
  font-size:.98rem;
  font-weight:800;
}

.signalMetricDelta.positive{ color:#6cf3aa; }
.signalMetricDelta.negative{ color:#ff7d7d; }
.signalMetricDelta.violet{ color:#c48bff; }

.signalSparkline{
  height:28px;
  display:flex;
  align-items:flex-end;
  gap:8px;
}

.signalSparkline span{
  height:3px;
  border-radius:999px;
  display:block;
  opacity:.95;
}

.signalSparkline.green span{ background:linear-gradient(90deg,#22c55e,#8dd8ff); }
.signalSparkline.blue span{ background:linear-gradient(90deg,#3b82f6,#7dd3fc); }
.signalSparkline.red span{ background:linear-gradient(90deg,#ef4444,#fb7185); }
.signalSparkline.violet span{ background:linear-gradient(90deg,#8b5cf6,#d946ef); }

.sales .signalMetricIcon{
  color:#8DFFB5;
  background:linear-gradient(180deg,rgba(44,198,112,.28),rgba(23,77,57,.34));
  border-color:rgba(93,255,167,.30);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.14),
    0 0 0 1px rgba(93,255,167,.12),
    0 0 26px rgba(44,198,112,.26);
}
.sales .signalMetricIcon::after{ background:rgba(44,198,112,.45); }

.ticket .signalMetricIcon{
  color:#86C9FF;
  background:linear-gradient(180deg,rgba(59,130,246,.28),rgba(31,61,147,.34));
  border-color:rgba(127,194,255,.30);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.14),
    0 0 0 1px rgba(127,194,255,.12),
    0 0 26px rgba(59,130,246,.26);
}
.ticket .signalMetricIcon::after{ background:rgba(96,165,250,.45); }

.risk .signalMetricIcon{
  color:#FF8E8E;
  background:linear-gradient(180deg,rgba(239,68,68,.26),rgba(122,36,60,.34));
  border-color:rgba(255,138,138,.30);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.14),
    0 0 0 1px rgba(255,138,138,.12),
    0 0 26px rgba(239,68,68,.24);
}
.risk .signalMetricIcon::after{ background:rgba(239,68,68,.42); }

.dormant .signalMetricIcon{
  color:#D99AFF;
  background:linear-gradient(180deg,rgba(168,85,247,.28),rgba(96,52,170,.34));
  border-color:rgba(210,140,255,.30);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.14),
    0 0 0 1px rgba(210,140,255,.12),
    0 0 26px rgba(168,85,247,.26);
}
.dormant .signalMetricIcon::after{ background:rgba(168,85,247,.45); }

.intelligenceSection{position:relative;padding-top:56px;padding-bottom:48px;overflow:hidden;}
.intelligenceGrid{
  display:grid;
  grid-template-columns:.92fr 1.08fr;
  gap:28px;
  align-items:start;
}
.intelligencePanelPremium{
  position:relative;
  padding:28px;
  border-radius:34px;
  background:linear-gradient(180deg,rgba(8,14,52,.88),rgba(6,11,42,.96));
  border:1.2px solid rgba(82,169,255,.24);
  box-shadow:
    0 18px 60px rgba(0,0,0,.28),
    inset 0 0 0 1px rgba(255,255,255,.02),
    0 0 30px rgba(40,140,255,.12),
    0 0 48px rgba(108,92,255,.06);
  overflow:hidden;
}
.intelligencePanelPremium::before{
  content:"";
  position:absolute;
  inset:0;
  border-radius:inherit;
  padding:1.4px;
  background:linear-gradient(135deg,rgba(54,179,255,.9),rgba(99,102,241,.85),rgba(34,197,255,.8));
  -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;
  mask-composite:exclude;
  pointer-events:none;
  opacity: 1;
}
 .intelligencePanelPremium::after{
  content:"";
  position:absolute;
  inset:16px;
  border-radius:26px;
  border:1px solid rgba(255,255,255,.035);
  box-shadow:0 0 28px rgba(56,189,248,.06);
  pointer-events:none;
}
.intelligencePanelPremium > *{
  position:relative;
  z-index:1;
}   
.intelligenceSticky{
  position:sticky;
  top:120px;
  align-self:start;
  padding:18px 14px 18px 10px;
  border-radius:28px;
  border:1px solid rgba(82,169,255,.16);
  background:linear-gradient(180deg,rgba(18,26,88,.18),rgba(10,16,56,.08));
  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,.02),
    0 0 16px rgba(56,189,248,.04);
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
  background:linear-gradient(180deg,rgba(47,58,145,.74),rgba(22,27,77,.84));
  border:1.2px solid rgba(96,161,255,.22);
  box-shadow:
    0 22px 70px rgba(0,0,0,.22),
    inset 0 0 0 1px rgba(255,255,255,.02),
    0 0 16px rgba(40,140,255,.05);
  overflow:hidden;
}
.hoverLift{
  transition:
    transform .25s ease,
    box-shadow .25s ease,
    border-color .25s ease,
    filter .25s ease;
}
.hoverLift:hover{
  transform:translateY(-8px);
  border-color:rgba(82,169,255,.42);
  box-shadow:
    0 28px 90px rgba(0,0,0,.30),
    0 0 26px rgba(56,189,248,.12),
    0 0 46px rgba(99,102,241,.08),
    inset 0 0 0 1px rgba(255,255,255,.03);
  filter:saturate(1.05);
}
@media (max-width:1100px){
  .intelligencePanelPremium{
    padding:22px;
    border-radius:28px;
  }

  .intelligenceSticky{
    position:relative;
    top:auto;
  }
}

@media (max-width:720px){
  .intelligencePanelPremium{
    padding:18px;
    border-radius:24px;
  }

  .intelligenceSticky{
    padding:16px;
    border-radius:22px;
  }
    
}      
    
.dualFeatureGrid{display:grid;grid-template-columns:1.05fr .95fr;gap:18px;align-items:stretch;}.featureCardLarge,.featureQuoteCard{border-radius:26px;padding:28px;}.deliverablesList{margin-top:22px;display:grid;gap:14px;}.deliverableItem{display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.08);}.deliverableItem:last-child{border-bottom:none;}.checkDot{width:24px;height:24px;border-radius:999px;display:grid;place-items:center;flex:0 0 auto;background:rgba(34,197,94,.16);color:#dcfce7;font-size:.82rem;font-weight:950;}.featureQuoteCard{display:flex;flex-direction:column;justify-content:center;}.quoteBadge{display:inline-flex;width:max-content;padding:8px 12px;border-radius:999px;background:rgba(127,178,255,.12);border:1px solid rgba(127,178,255,.16);color:#dbeafe;font-size:.78rem;font-weight:950;text-transform:uppercase;letter-spacing:.05em;margin-bottom:14px;}.featureQuoteCard h3{margin:0 0 12px;font-size:2rem;line-height:1.02;letter-spacing:-.03em;}.featureQuoteCard p{color:var(--muted);line-height:1.7;}
.sectionHeadNarrow{max-width:760px;margin-bottom:28px;}.processFlow{display:grid;grid-template-columns:1fr 60px 1fr 60px 1fr;gap:0;align-items:center;}.processCard{padding:24px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);min-height:210px;}.processNumber{width:42px;height:42px;border-radius:14px;display:grid;place-items:center;font-weight:950;color:#fff;background:linear-gradient(135deg,var(--brand1),var(--brand3));margin-bottom:16px;}.processCard h3{margin:0 0 10px;}.processCard p{margin:0;color:var(--muted);line-height:1.7;}.processConnector{height:2px;background:linear-gradient(90deg,rgba(127,178,255,.2) 0%,rgba(139,92,246,.5) 100%);}
.pricingHero{margin-bottom:28px;}.pricingGridPremium{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;}.pricingCardPremium{padding:24px;border-radius:26px;}.featuredPricing{border-color:rgba(127,178,255,.25);box-shadow:0 24px 70px rgba(79,70,229,.22);}.pricingCardTop{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px;}.pricingCardTop h3{margin:0;}.featuredPill{padding:8px 10px;border-radius:999px;background:rgba(127,178,255,.12);border:1px solid rgba(127,178,255,.18);color:#dbeafe;font-size:.75rem;font-weight:950;text-transform:uppercase;}.pricingValue{display:flex;align-items:flex-end;gap:6px;margin-bottom:8px;}.pricingValue strong{font-size:3rem;line-height:1;letter-spacing:-.04em;}.pricingValue span,.pricingDescription,.pricingSetup,.pricingNotes{color:var(--muted);}.pricingDescription,.pricingSetup{margin:0 0 16px;line-height:1.6;}.pricingList{margin:0;padding-left:18px;color:#e5e7eb;}.pricingList li{margin:10px 0;}.pricingBtnFull{width:100%;margin-top:16px;}.pricingNotes{margin-top:18px;font-size:.94rem;line-height:1.6;}
.faq{display:grid;gap:14px;}.faqItem{padding:18px 20px;border-radius:18px;}.faqItem summary{cursor:pointer;font-weight:900;list-style:none;}.faqItem summary::-webkit-details-marker{display:none;}.faqItem .p{margin-top:12px;}.enterpriseFinalCta{position:relative;margin-top:34px;padding:36px;border-radius:32px;overflow:hidden;display:grid;grid-template-columns:1.2fr .8fr;gap:26px;align-items:center;background:linear-gradient(135deg,rgba(47,58,145,.88),rgba(21,27,77,.92));border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 100px rgba(0,0,0,.32);}.finalCtaContent h2{max-width:760px;margin:10px 0 14px;font-size:clamp(2rem,3.6vw,3.25rem);line-height:1.02;letter-spacing:-.045em;}.finalCtaContent p{max-width:680px;margin:0;color:var(--muted);line-height:1.7;font-size:1.03rem;}.finalCtaPanel{display:grid;gap:12px;}.finalCtaMetric{padding:18px;border-radius:20px;background:rgba(8,14,48,.36);border:1px solid rgba(255,255,255,.09);}.finalCtaMetric span{display:block;color:var(--muted);font-size:.78rem;font-weight:900;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;}.finalCtaMetric strong{display:block;font-size:1.55rem;}.finalCtaMetric small{display:block;margin-top:8px;color:var(--muted);}
.footer{padding:40px 0;border-top:1px solid var(--line);background:rgba(7,10,31,.4);}.footerGrid{display:grid;grid-template-columns:1.1fr .8fr .8fr;gap:20px;align-items:start;}.footerText{max-width:440px;margin:12px 0 0;color:var(--muted);line-height:1.65;}.footerColumn{display:flex;flex-direction:column;gap:10px;}.footerColumn h4{margin:0 0 6px;font-size:.9rem;text-transform:uppercase;letter-spacing:.12em;color:#fff;}.footerColumn a{color:var(--muted);font-weight:700;transition:color .2s ease,transform .2s ease;}.footerColumn a:hover{color:#fff;transform:translateX(3px);}.footerBottom{margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,.08);display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;color:var(--muted);font-size:.92rem;}

@media (max-width:1180px){
  .container{width:min(100% - 36px,1180px);} .headerInner{padding:14px 0;align-items:flex-start;flex-direction:column;} .nav,.headerCtas{width:100%;}
  .heroTarget{min-height:auto;} .heroTargetGrid{grid-template-columns:1fr;gap:38px;} .dashboardShell{max-width:100%;} .dashboardKpis{grid-template-columns:repeat(2,minmax(0,1fr));} .dashboardMainGrid{grid-template-columns:1fr;} .dashboardBotBar{grid-template-columns:1fr;} .dashboardBotLabel{border-right:0;padding-right:0;}
  .signalBandGrid,.intelligenceGrid,.metricRail,.dualFeatureGrid,.pricingGridPremium,.footerGrid{grid-template-columns:1fr;} .signalMetricsGrid{grid-template-columns:repeat(2,minmax(0,1fr));} .intelligenceSticky{position:relative;top:auto;min-height:auto;} .processFlow{grid-template-columns:1fr;gap:14px;} .processConnector{width:2px;height:34px;margin:0 auto;background:linear-gradient(180deg,rgba(127,178,255,.2),rgba(139,92,246,.5));} .signalCardPrimary,.signalCardWide{grid-row:auto;grid-column:auto;}
}
@media (max-width:720px){
  .container{width:100%;max-width:100%;padding-left:18px;padding-right:18px;} .headerCtas{flex-direction:column;align-items:stretch;} .nav{gap:12px;} .btn{width:100%;min-width:0;white-space:normal;text-align:center;}
  .heroTarget{padding:34px 0 26px;} .heroTargetTitle{font-size:clamp(2.3rem,10.5vw,3.1rem);} .heroTargetActions{display:grid;} .heroTargetProof{grid-template-columns:1fr;}
  .dashboardShell{padding:18px 16px;border-radius:22px;} .dashboardHeader{align-items:flex-start;} .dashboardKpis{grid-template-columns:1fr;} .dashboardCategoryBody{grid-template-columns:1fr;} .dashboardDonut{width:142px;height:142px;margin:0 auto;} .dashboardBotActions{width:100%;}.dashboardBotActions span{flex:1;}
  .signalMetricsGrid{grid-template-columns:1fr;} .signalMetricCard{min-height:auto;} .intelligenceCards{grid-template-columns:1fr;} .intelligenceCard{min-height:250px;} .enterpriseFinalCta{grid-template-columns:1fr;padding:24px;border-radius:24px;} .footerBottom{flex-direction:column;}
}
/* AJUSTE FINAL SIGNAL BAND - ANCHO + ICONOS */
.signalBandGrid{
  grid-template-columns:520px minmax(0,1fr) !important;
  gap:18px !important;
}

.signalBandIntro{
  min-height:240px !important;
  padding:32px 34px 26px !important;
  border-radius:28px !important;
}

.signalBandIntro .sectionTitleLarge{
  max-width:430px !important;
  font-size:clamp(2.4rem,3.2vw,3.6rem) !important;
  line-height:1.06 !important;
}

.signalMetricsGrid{
  grid-template-columns:repeat(4,minmax(0,1fr)) !important;
  gap:14px !important;
}

.signalMetricCard{
  min-height:205px !important;
  padding:20px 18px 16px !important;
  border-radius:24px !important;
}

.signalMetricTop{
  align-items:center !important;
  text-align:center !important;
  gap:12px !important;
}

.signalMetricIcon{
  width:96px !important;
  height:96px !important;
  border-radius:26px !important;
  margin:0 auto 12px !important;
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  overflow:visible !important;
  border:1px solid rgba(255,255,255,.13) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.10),
    0 0 10px rgba(255,255,255,.035) !important;
}

.signalMetricIcon::after{
  opacity:.35 !important;
  filter:blur(12px) !important;
}

.signalMetricIcon svg{
  width:50px !important;
  height:50px !important;
  display:block !important;
  filter:drop-shadow(0 0 4px currentColor) !important;
}

.sales .signalMetricIcon{
  color:#8DFFB5 !important;
  background:linear-gradient(180deg,rgba(44,198,112,.16),rgba(23,77,57,.22)) !important;
  border-color:rgba(93,255,167,.20) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.10),
    0 0 10px rgba(44,198,112,.10) !important;
}

.ticket .signalMetricIcon{
  color:#86C9FF !important;
  background:linear-gradient(180deg,rgba(59,130,246,.16),rgba(31,61,147,.22)) !important;
  border-color:rgba(127,194,255,.20) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.10),
    0 0 10px rgba(59,130,246,.10) !important;
}

.risk .signalMetricIcon{
  color:#FF8E8E !important;
  background:linear-gradient(180deg,rgba(239,68,68,.14),rgba(122,36,60,.20)) !important;
  border-color:rgba(255,138,138,.20) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.10),
    0 0 10px rgba(239,68,68,.09) !important;
}

.dormant .signalMetricIcon{
  color:#D99AFF !important;
  background:linear-gradient(180deg,rgba(168,85,247,.16),rgba(96,52,170,.22)) !important;
  border-color:rgba(210,140,255,.20) !important;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.10),
    0 0 10px rgba(168,85,247,.10) !important;
}

.signalMetricMeta{
  align-items:center !important;
}

.signalMetricLabel{
  font-size:1rem !important;
}

.signalMetricValue{
  font-size:1.9rem !important;
}

.signalMetricDelta{
  font-size:.9rem !important;
}

@media (max-width:1180px){
  .signalBandGrid{
    grid-template-columns:1fr !important;
  }

  .signalMetricsGrid{
    grid-template-columns:repeat(2,minmax(0,1fr)) !important;
  }

  .signalBandIntro .sectionTitleLarge{
    max-width:760px !important;
  }
}

@media (max-width:720px){
  .signalMetricsGrid{
    grid-template-columns:1fr !important;
  }

  .signalBandIntro{
    min-height:auto !important;
  }
}
.signalBandIntro .eyebrow{
  font-size:1.05rem !important;
  letter-spacing:.18em !important;
  line-height:1.45 !important;
  font-weight:950 !important;
}

.signalBand{
  padding-bottom:12px !important;
}

.intelligenceSection{
  padding-top:20 px !important;
}
.intelligenceSticky .eyebrow{
  font-size:1.05rem !important;
  letter-spacing:.18em !important;
  line-height:1.45 !important;
  font-weight:950 !important;
}
/* ICONOS PREMIUM BENEFICIOS */
.intelligenceCard .cardIcon{
  width:70px !important;
  height:70px !important;
  border-radius:999px !important;
  font-size:0 !important;
  display:grid !important;
  place-items:center !important;
  margin-bottom:22px !important;
  position:relative !important;
  overflow:visible !important;
  transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease !important;
}

.intelligenceCard .cardIcon svg{
  width:38px !important;
  height:38px !important;
  display:block !important;
  filter:drop-shadow(0 0 8px currentColor);
}

.intelligenceCard:hover .cardIcon{
  transform:scale(1.08) translateY(-2px) !important;
  box-shadow:
    0 0 0 1px rgba(255,255,255,.08) inset,
    0 0 28px rgba(127,178,255,.22),
    0 18px 42px rgba(0,0,0,.26) !important;
}

.intelligenceCard .cardIcon.green{
  color:#86efac !important;
  background:radial-gradient(circle at 40% 35%, rgba(34,197,94,.34), rgba(20,83,45,.20)) !important;
  border-color:rgba(34,197,94,.28) !important;
}

.intelligenceCard .cardIcon.blue{
  color:#7dd3fc !important;
  background:radial-gradient(circle at 40% 35%, rgba(59,130,246,.34), rgba(30,64,175,.20)) !important;
  border-color:rgba(59,130,246,.28) !important;
}

.intelligenceCard .cardIcon.purple{
  color:#c4b5fd !important;
  background:radial-gradient(circle at 40% 35%, rgba(139,92,246,.34), rgba(76,29,149,.20)) !important;
  border-color:rgba(139,92,246,.28) !important;
}
/* ICONOS INFERIORES BENEFICIOS */
.cardFooter{
  margin-top:auto;
  padding-top:18px;
  border-top:1px solid rgba(255,255,255,.10);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
}

.cardFooter span:first-child{
  color:var(--muted);
  font-size:1.02rem;
  line-height:1.45;
}

.cardFooterIcon{
  width:48px;
  height:48px;
  min-width:48px;
  min-height:48px;
  border-radius:16px;
  display:grid;
  place-items:center;
  border:1px solid rgba(255,255,255,.10);
  background:rgba(255,255,255,.03);
  transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease;
}

.cardFooterIcon svg{
  width:28px;
  height:28px;
  display:block;
  stroke:currentColor;
  stroke-width:1.9;
  stroke-linecap:round;
  stroke-linejoin:round;
  fill:none;
  transition:transform .25s ease;
}

.cardFooterIcon.green{
  color:#72f0a6;
}

.cardFooterIcon.blue{
  color:#b9c8ff;
}

.cardFooterIcon.purple{
  color:#c9c2ff;
}

.intelligenceCard:hover .cardFooterIcon{
  transform:translateY(-2px) scale(1.04);
  border-color:rgba(255,255,255,.16);
  background:rgba(255,255,255,.06);
  box-shadow:0 0 18px rgba(127,178,255,.18);
}

.intelligenceCard:hover .cardFooterIcon svg{
  transform:scale(1.05);
}

/* AJUSTE MÁS FINO TIPOGRAFÍA CARDS BENEFICIOS */
.intelligenceCard h3{
  font-size:1.08rem !important;
  line-height:1.22 !important;
  margin-bottom:10px !important;
}

.intelligenceCard p{
  font-size:.89rem !important;
  line-height:1.55 !important;
}

.intelligenceCard .cardFooter span:first-child{
  font-size:.9rem !important;
  line-height:1.35 !important;
}

.intelligenceCard .cardFooter strong{
  font-size:1rem !important;
}

.intelligenceCard .cardNumber{
  font-size:.95rem !important;
}
/* ICONO ROJO BENEFICIOS */
.intelligenceCard .cardIcon.red{
  color:#ff8a8a !important;
  background:radial-gradient(circle at 40% 35%, rgba(239,68,68,.34), rgba(127,29,29,.20)) !important;
  border-color:rgba(239,68,68,.30) !important;
  box-shadow:
    0 0 0 1px rgba(255,255,255,.08) inset,
    0 0 22px rgba(239,68,68,.20),
    0 18px 42px rgba(0,0,0,.22) !important;
}
/* AJUSTE MÁS FINO TIPOGRAFÍA CARDS BENEFICIOS */
.intelligenceCard h3{
  font-size:1.04rem !important;
  line-height:1.22 !important;
  margin-bottom:9px !important;
}

.intelligenceCard p{
  font-size:.86rem !important;
  line-height:1.52 !important;
}

.intelligenceCard .cardFooter span:first-child{
  font-size:.86rem !important;
  line-height:1.35 !important;
}
/* AJUSTE LÍNEA INTERNA CARDS BENEFICIOS */
.intelligenceCard .cardFooter{
  padding-top:9px !important;
  margin-top:auto !important;
}

.intelligenceCard p{
  margin-bottom:10px !important;
}
/* AJUSTE BLOQUE TU NEGOCIO EN NÚMEROS */
.metricRail > div:first-child .eyebrow{
  font-size:1.05rem !important;
  letter-spacing:.18em !important;
  line-height:1.45 !important;
  font-weight:950 !important;
}

.metricRail > div:first-child h3{
  font-size:clamp(2rem,3.8vw,3.4rem) !important;
  line-height:1.02 !important;
  letter-spacing:-.045em !important;
  margin:10px 0 14px !important;
  max-width:520px !important;
  color:#f8fbff !important;
}

.metricRail > div:first-child p{
  color:var(--muted) !important;
  line-height:1.72 !important;
  font-size:1.04rem !important;
  max-width:520px !important;
}
/* SIGNAL BAND PREMIUM - MOCKUP OBJETIVO */
.signalBand{
  padding:22px 0 34px !important;
}

.signalPanelPremium{
  position:relative;
  display:grid;
  grid-template-columns:360px minmax(0,1fr);
  gap:30px;
  align-items:center;
  padding:52px 46px;
  border-radius:34px;
  background:
    radial-gradient(900px 360px at 55% 30%, rgba(28,83,180,.14), transparent 62%),
    linear-gradient(180deg, rgba(4,12,34,.92), rgba(3,9,28,.96));
  border:1.6px solid rgba(67,137,255,.36);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.025) inset,
    0 0 52px rgba(34,103,255,.10);
  overflow:hidden;
}

.signalPanelPremium::before{
  content:"";
  position:absolute;
  inset:0;
  background-image:
    linear-gradient(rgba(92,143,255,.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(92,143,255,.055) 1px, transparent 1px);
  background-size:64px 64px;
  opacity:.35;
  pointer-events:none;
}

.signalPanelPremium::after{
  content:"";
  position:absolute;
  inset:0;
  border-radius:34px;
  pointer-events:none;
  box-shadow:
    inset 0 0 42px rgba(42,123,255,.10),
    inset 0 0 1px rgba(255,255,255,.06);
}

.signalIntroPremium{
  position:relative;
  z-index:2;
  display:grid;
  grid-template-columns:5px 1fr;
  gap:34px;
  align-items:center;
}

.signalAccentLine{
  width:4px;
  height:250px;
  border-radius:999px;
  background:linear-gradient(180deg,#66b7ff,#1f86ff);
  box-shadow:
    0 0 18px rgba(82,171,255,.75),
    0 0 38px rgba(82,171,255,.32);
}

.signalIntroPremium .eyebrow{
  color:#66b7ff !important;
  font-size:1.02rem !important;
  letter-spacing:.18em !important;
  line-height:1.45 !important;
  font-weight:950 !important;
}

.signalIntroPremium h2{
  margin:26px 0 26px;
  color:#f8fbff;
  font-size:clamp(2.4rem,3.25vw,3.45rem);
  line-height:1.05;
  letter-spacing:-.045em;
  font-weight:950;
}

.signalIntroPremium p{
  margin:0;
  max-width:360px;
  color:#cbd6f7;
  font-size:1.08rem;
  line-height:1.7;
}

.signalCardsPremium{
  position:relative;
  z-index:2;
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:18px;
}

.signalKpiCard{
  min-height:300px;
  padding:26px 24px 22px;
  border-radius:24px;
  background:
    radial-gradient(260px 160px at 20% 10%, rgba(255,255,255,.055), transparent 60%),
    linear-gradient(180deg, rgba(9,20,54,.88), rgba(5,12,34,.9));
  border:1px solid rgba(116,153,255,.18);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.055),
    0 22px 46px rgba(0,0,0,.22);
  display:flex;
  flex-direction:column;
  overflow:hidden;
  transition:transform .25s ease, border-color .25s ease, box-shadow .25s ease;
}

.signalKpiCard:hover{
  transform:translateY(-4px);
  border-color:rgba(127,178,255,.34);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.07),
    0 26px 58px rgba(0,0,0,.28),
    0 0 26px rgba(64,120,255,.16);
}

.signalKpiTop{
  display:flex;
  align-items:center;
  gap:14px;
  margin-bottom:30px;
}

.signalKpiTop span{
  color:#f4f7ff;
  font-size:1rem;
  font-weight:800;
}

.signalKpiIcon{
  width:64px;
  height:64px;
  min-width:64px;
  border-radius:999px;
  display:grid;
  place-items:center;
  border:1.7px solid currentColor;
  background:rgba(255,255,255,.03);
  box-shadow:
    inset 0 0 18px rgba(255,255,255,.04),
    0 0 22px currentColor;
}

.signalKpiIcon svg{
  width:34px;
  height:34px;
  display:block;
}

.signalKpiCard strong{
  display:block;
  color:#f8fbff;
  font-size:2.9rem;
  line-height:1;
  letter-spacing:-.055em;
  margin-bottom:16px;
}

.signalKpiCard small{
  display:block;
  font-size:1rem;
  line-height:1.4;
  font-weight:800;
}

.signalLineChart{
  margin-top:auto;
  width:100%;
  height:78px;
  overflow:visible;
}

.signalLineChart .chartArea{
  fill:currentColor;
  opacity:.14;
}

.signalLineChart .chartLine{
  stroke:currentColor;
  stroke-width:3;
  stroke-linecap:round;
  stroke-linejoin:round;
  filter:drop-shadow(0 0 7px currentColor);
}

.signalLineChart .chartDot{
  fill:currentColor;
  filter:drop-shadow(0 0 8px currentColor);
}

.kpiGreen{
  color:#22f286;
}

.kpiGreen small{
  color:#22f286;
}

.kpiBlue{
  color:#3f8cff;
}

.kpiBlue small{
  color:#35f09a;
}

.kpiRed{
  color:#ff4f4f;
}

.kpiRed small{
  color:#ff6868;
}

.kpiPurple{
  color:#b455ff;
}

.kpiPurple small{
  color:#dc8dff;
}

@media (max-width:1180px){
  .signalPanelPremium{
    grid-template-columns:1fr;
    padding:34px 24px;
  }

  .signalCardsPremium{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .signalIntroPremium{
    grid-template-columns:4px 1fr;
  }

  .signalAccentLine{
    height:180px;
  }
}

@media (max-width:720px){
  .signalPanelPremium{
    padding:26px 18px;
    border-radius:28px;
  }

  .signalCardsPremium{
    grid-template-columns:1fr;
  }

  .signalIntroPremium h2{
    font-size:2.3rem;
  }

  .signalKpiCard{
    min-height:260px;
  }
}
.processSection{
  padding-top:28px !important;
}

.processPanelPremium{
  position:relative;
  padding:40px 42px;
  border-radius:34px;
  background:
    radial-gradient(circle at top left, rgba(18,77,170,.16), transparent 26%),
    linear-gradient(180deg, rgba(8,14,52,.92), rgba(5,10,42,.96));
  border:1px solid rgba(80,160,255,.16);
  box-shadow:
    0 0 0 1px rgba(60,130,255,.14),
    0 18px 60px rgba(0,0,0,.32),
    inset 0 0 28px rgba(40,120,255,.06);
  overflow:hidden;
}

.processPanelPremium::before{
  content:"";
  position:absolute;
  inset:0;
  padding:1.5px;
  border-radius:34px;
  background:linear-gradient(
    135deg,
    rgba(69,181,255,.9),
    rgba(88,105,255,.65),
    rgba(0,212,255,.85)
  );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;
  mask-composite:exclude;
  pointer-events:none;
}

.processPanelPremium::after{
  content:"";
  position:absolute;
  inset:14px;
  border-radius:26px;
  border:1px solid rgba(255,255,255,.04);
  pointer-events:none;
}

.processPanelPremium .eyebrow{
  display:block;
  margin-bottom:12px;
}

.processPanelPremium .sectionTitleLarge{
  max-width:780px;
  margin-bottom:16px;
}

.processPanelPremium .sectionLead{
  max-width:760px;
  margin-bottom:34px;
}

.processFlow{
  display:grid;
  grid-template-columns:1fr auto 1fr auto 1fr;
  gap:0;
  align-items:center;
}

.processCard{
  position:relative;
  min-height:210px;
  padding:28px 26px 24px;
  border-radius:28px;
  background:linear-gradient(180deg, rgba(44,49,108,.72), rgba(26,30,82,.8));
  border:1px solid rgba(255,255,255,.08);
  box-shadow:0 14px 36px rgba(0,0,0,.18);
}

.processCard h3{
  margin:18px 0 12px;
  font-size:1.45rem;
  line-height:1.15;
}

.processCard p{
  margin:0;
  color:var(--muted);
  line-height:1.72;
  font-size:1.03rem;
}

.stepBadge{
  width:46px;
  height:46px;
  border-radius:16px;
  display:grid;
  place-items:center;
  font-weight:900;
  font-size:1.3rem;
  color:#fff;
  background:linear-gradient(180deg, #9ab2ff, #7c6cff);
  box-shadow:
    0 0 24px rgba(124,108,255,.28),
    inset 0 1px 0 rgba(255,255,255,.22);
}

.processConnector{
  width:44px;
  height:2px;
  margin:0 12px;
  border-radius:999px;
  background:linear-gradient(
    90deg,
    rgba(127,178,255,.16),
    rgba(127,178,255,.8),
    rgba(139,92,246,.5)
  );
  box-shadow:0 0 12px rgba(127,178,255,.28);
}

.processCard.hoverLift{
  transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}

.processCard.hoverLift:hover{
  transform:translateY(-8px) scale(1.01);
  border-color:rgba(106,182,255,.3);
  box-shadow:
    0 22px 46px rgba(0,0,0,.24),
    0 0 26px rgba(77,125,255,.16);
}
@media (max-width:1100px){
  .processPanelPremium{
    padding:30px 24px;
  }

  .processFlow{
    grid-template-columns:1fr;
    gap:14px;
  }

  .processConnector{
    width:2px;
    height:34px;
    margin:0 auto;
    background:linear-gradient(
      180deg,
      rgba(127,178,255,.2),
      rgba(139,92,246,.55)
    );
  }
}
/* COMO FUNCIONA PREMIUM */
.processSection{
  padding-top:28px !important;
}

.processPanelPremium{
  position:relative;
  padding:38px 42px 40px;
  border-radius:34px;
  background:
    radial-gradient(circle at top left, rgba(18,77,170,.16), transparent 26%),
    linear-gradient(180deg, rgba(8,14,52,.92), rgba(5,10,42,.96));
  border:1px solid rgba(80,160,255,.16);
  box-shadow:
    0 0 0 1px rgba(60,130,255,.14),
    0 18px 60px rgba(0,0,0,.32),
    inset 0 0 28px rgba(40,120,255,.06);
  overflow:hidden;
}

.processPanelPremium::before{
  content:"";
  position:absolute;
  inset:0;
  padding:1.5px;
  border-radius:34px;
  background:linear-gradient(
    135deg,
    rgba(69,181,255,.9),
    rgba(88,105,255,.65),
    rgba(0,212,255,.85)
  );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;
  mask-composite:exclude;
  pointer-events:none;
}

.processPanelPremium::after{
  content:"";
  position:absolute;
  inset:14px;
  border-radius:26px;
  border:1px solid rgba(255,255,255,.04);
  pointer-events:none;
}

.processPanelPremium > *{
  position:relative;
  z-index:1;
}

.processPanelPremium .sectionHeadNarrow{
  max-width:820px;
  margin-bottom:26px;
}

.processFlow{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto minmax(0,1fr) auto minmax(0,1fr);
  gap:18px;
  align-items:center;
  margin-top:24px;
}

.processCard{
  min-height:170px;
  padding:22px 24px;
  border-radius:26px;
  background:linear-gradient(180deg,rgba(44,49,108,.76),rgba(26,30,82,.86));
  border:1px solid rgba(255,255,255,.10);
  box-shadow:
    0 16px 40px rgba(0,0,0,.22),
    inset 0 1px 0 rgba(255,255,255,.05);
  display:grid;
  grid-template-columns:auto auto 1fr;
  column-gap:18px;
  align-items:center;
}

.stepBadge{
  width:44px;
  height:44px;
  border-radius:16px;
  display:grid;
  place-items:center;
  font-weight:900;
  font-size:1.35rem;
  color:#fff;
  background:linear-gradient(180deg,#9fb1ff,#7f68ff);
  box-shadow:
    0 10px 24px rgba(124,108,255,.28),
    inset 0 1px 0 rgba(255,255,255,.22);
}

.processIcon{
  width:84px;
  height:84px;
  border-radius:24px;
  display:grid;
  place-items:center;
  border:1px solid rgba(255,255,255,.10);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.06);
}

.processIcon svg{
  width:46px;
  height:46px;
  display:block;
}

.processIcon.upload{
  color:#7fb2ff;
  background:radial-gradient(circle at 50% 40%, rgba(127,178,255,.20), rgba(36,62,125,.20) 60%, rgba(23,32,82,.18) 100%);
  border-color:rgba(127,178,255,.22);
  box-shadow:0 0 22px rgba(127,178,255,.10), inset 0 0 24px rgba(127,178,255,.08);
}

.processIcon.validate{
  color:#58d4ff;
  background:radial-gradient(circle at 50% 40%, rgba(88,212,255,.18), rgba(48,95,163,.18) 60%, rgba(24,34,84,.18) 100%);
  border-color:rgba(88,212,255,.22);
  box-shadow:0 0 22px rgba(88,212,255,.10), inset 0 0 24px rgba(88,212,255,.08);
}

.processIcon.decide{
  color:#b05cff;
  background:radial-gradient(circle at 50% 40%, rgba(176,92,255,.18), rgba(90,58,168,.18) 60%, rgba(29,25,86,.18) 100%);
  border-color:rgba(176,92,255,.22);
  box-shadow:0 0 22px rgba(176,92,255,.10), inset 0 0 24px rgba(176,92,255,.08);
}

.processCopy{
  display:flex;
  flex-direction:column;
  justify-content:center;
  min-height:84px;
}

.processCopy h3{
  margin:0 0 10px;
  font-size:1.18rem;
  line-height:1.15;
}

.processCopy p{
  margin:0;
  color:var(--muted);
  line-height:1.55;
  font-size:.96rem;
  max-width:320px;
}

.processConnector{
  width:44px;
  display:grid;
  place-items:center;
  color:rgba(214,224,255,.92);
}

.processConnector svg{
  width:34px;
  height:34px;
  display:block;
  filter:drop-shadow(0 0 10px rgba(127,178,255,.18));
}

.processCard.hoverLift{
  transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}

.processCard.hoverLift:hover{
  transform:translateY(-6px);
  border-color:rgba(127,178,255,.24);
  box-shadow:
    0 24px 54px rgba(0,0,0,.28),
    0 0 24px rgba(79,70,229,.10),
    inset 0 1px 0 rgba(255,255,255,.06);
}

@media (max-width:1100px){
  .processPanelPremium{
    padding:30px 24px;
  }

  .processFlow{
    grid-template-columns:1fr;
    gap:14px;
  }

  .processConnector{
    width:2px;
    height:28px;
    margin:0 auto;
  }

  .processConnector svg{
    width:2px;
    height:28px;
    opacity:.35;
  }

  .processCard{
    grid-template-columns:auto auto 1fr;
  }
}

@media (max-width:720px){
  .processPanelPremium{
    padding:24px 18px;
    border-radius:28px;
  }

  .processCard{
    grid-template-columns:1fr;
    gap:16px;
  }

  .processIcon{
    width:76px;
    height:76px;
  }

  .processIcon svg{
    width:40px;
    height:40px;
  }
}  
.pricingSection{
  padding-top:28px !important;
} 
.pricingSection{
  padding-top:28px !important;
}

.pricingPanelPremium{
  position:relative;
  padding:38px 40px 34px;
  border-radius:34px;
  background:
    radial-gradient(circle at top left, rgba(20,82,190,.15), transparent 26%),
    linear-gradient(180deg, rgba(8,14,52,.94), rgba(5,10,42,.97));
  border:1px solid rgba(80,160,255,.16);
  box-shadow:
    0 0 0 1px rgba(60,130,255,.14),
    0 18px 60px rgba(0,0,0,.32),
    inset 0 0 28px rgba(40,120,255,.06);
  overflow:hidden;
}

.pricingPanelPremium::before{
  content:"";
  position:absolute;
  inset:0;
  padding:1.5px;
  border-radius:34px;
  background:linear-gradient(
    135deg,
    rgba(69,181,255,.9),
    rgba(88,105,255,.65),
    rgba(0,212,255,.85)
  );
  -webkit-mask:
    linear-gradient(#000 0 0) content-box,
    linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;
  mask-composite:exclude;
  pointer-events:none;
}

.pricingPanelPremium::after{
  content:"";
  position:absolute;
  inset:14px;
  border-radius:26px;
  border:1px solid rgba(255,255,255,.04);
  pointer-events:none;
}

.pricingPanelPremium > *{
  position:relative;
  z-index:1;
}

.pricingPanelPremium .sectionHeadNarrow{
  max-width:860px;
  margin-bottom:26px;
}

.pricingGridPremium{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:22px;
  align-items:stretch;
}

.priceCard{
  position:relative;
  min-height:430px;
  padding:28px 24px 24px;
  border-radius:28px;
  background:linear-gradient(180deg,rgba(40,49,120,.76),rgba(26,31,82,.84));
  border:1px solid rgba(255,255,255,.10);
  box-shadow:
    0 16px 44px rgba(0,0,0,.22),
    inset 0 1px 0 rgba(255,255,255,.05);
  transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  display:flex;
  flex-direction:column;
}

.priceCard:hover{
  transform:translateY(-8px);
  border-color:rgba(127,178,255,.30);
  box-shadow:
    0 24px 60px rgba(0,0,0,.28),
    0 0 26px rgba(79,70,229,.10),
    inset 0 1px 0 rgba(255,255,255,.06);
}

.priceCard.featured{
  background:
    radial-gradient(circle at top center, rgba(80,120,255,.10), transparent 48%),
    linear-gradient(180deg,rgba(22,26,92,.88),rgba(12,16,62,.96));
  border-color:rgba(127,178,255,.24);
  box-shadow:
    0 28px 90px rgba(61,44,141,.18),
    0 0 34px rgba(70,120,255,.10),
    inset 0 1px 0 rgba(255,255,255,.06);
}

.priceTopRow{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:12px;
}

.pricePlan{
  font-size:1.28rem;
  font-weight:800;
  color:#fff;
  margin-bottom:10px;
}

.priceBadge{
  padding:9px 14px;
  border-radius:999px;
  font-size:.86rem;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.04em;
  color:#fff;
  background:linear-gradient(180deg,rgba(72,102,189,.95),rgba(43,67,142,.9));
  border:1px solid rgba(127,178,255,.25);
  box-shadow:0 0 20px rgba(127,178,255,.08);
}

.priceAmount{
  display:flex;
  align-items:flex-end;
  gap:6px;
  margin:4px 0 8px;
}

.priceAmount strong{
  font-size:3.2rem;
  line-height:1;
  letter-spacing:-.04em;
}

.priceAmount span{
  font-size:1.05rem;
  color:#dbe3ff;
  margin-bottom:6px;
}

.priceIntro,
.priceSetup{
  margin:0 0 18px;
  color:var(--muted);
  line-height:1.6;
}

.priceList{
  list-style:none;
  margin:0;
  padding:0;
  display:grid;
  gap:12px;
}

.priceList li{
  position:relative;
  padding-left:18px;
  color:#eef2ff;
}

.priceList li::before{
  content:"";
  position:absolute;
  left:0;
  top:10px;
  width:8px;
  height:8px;
  border-radius:999px;
  background:#3bff9b;
  box-shadow:0 0 12px rgba(59,255,155,.45);
}

.priceBtn{
  margin-top:auto;
}

.pricingFootnote{
  margin-top:22px;
  color:var(--muted);
  font-size:.95rem;
  line-height:1.7;
}

.pricingFootnote p{
  margin:0 0 4px;
}

@media (max-width:1100px){
  .pricingPanelPremium{
    padding:30px 24px;
  }

  .pricingGridPremium{
    grid-template-columns:1fr;
  }

  .priceCard{
    min-height:auto;
  }
}

@media (max-width:720px){
  .pricingPanelPremium{
    padding:24px 18px;
    border-radius:28px;
  }

  .priceAmount strong{
    font-size:2.6rem;
  }
}
/* ICONOS PREMIUM PLANES */
.planHeader{
  display:flex !important;
  align-items:center !important;
  gap:18px !important;
  margin-bottom:18px !important;
}

.planHeader .pricePlan{
  margin:0 !important;
  font-size:1.65rem !important;
  line-height:1.1 !important;
  font-weight:900 !important;
}

.planIcon{
  width:82px;
  height:82px;
  min-width:82px;
  border-radius:28px;
  display:grid;
  place-items:center;
  position:relative;
  overflow:visible;
  border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.04);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.10),
    0 0 22px rgba(255,255,255,.04);
  transition:
    transform .25s ease,
    box-shadow .25s ease,
    border-color .25s ease;
}

.planIcon svg{
  width:46px;
  height:46px;
  display:block;
  filter:drop-shadow(0 0 8px currentColor);
}

.planIconBasic{
  color:#48f7a1;
  background:
    radial-gradient(circle at 45% 35%, rgba(34,197,94,.22), rgba(6,78,59,.16) 62%, rgba(5,10,42,.12));
  border-color:rgba(72,247,161,.28);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.10),
    0 0 26px rgba(34,197,94,.16);
}

.planIconUltra{
  color:#3f8cff;
  background:
    radial-gradient(circle at 45% 35%, rgba(59,130,246,.26), rgba(30,64,175,.18) 62%, rgba(5,10,42,.12));
  border-color:rgba(63,140,255,.34);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.12),
    0 0 32px rgba(59,130,246,.22);
}

.planIconPro{
  color:#a777ff;
  background:
    radial-gradient(circle at 45% 35%, rgba(139,92,246,.28), rgba(76,29,149,.20) 62%, rgba(5,10,42,.12));
  border-color:rgba(167,119,255,.34);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.12),
    0 0 30px rgba(139,92,246,.20);
}

.priceCard:hover .planIcon,
.pricingCardPremium:hover .planIcon{
  transform:translateY(-4px) scale(1.05);
  border-color:rgba(127,178,255,.38);
}
/* MISMO TAMAÑO DE TÍTULOS PRINCIPALES */
.intelligenceSticky .sectionTitleLarge,
.processPanelPremium .sectionTitleLarge,
.pricingPanelPremium .sectionTitleLarge,
#faq .sectionTitleLarge,
.enterpriseFinalCta h2{
  font-size:clamp(2.4rem,3.25vw,3.45rem) !important;
  line-height:1.05 !important;
  letter-spacing:-.045em !important;
  font-weight:950 !important;
  max-width:780px !important;
}  
/* MENOS AIRE ENTRE PRECIOS Y FAQ */
#precios.section{
  padding-bottom:28px !important;
}

#faq.section{
  padding-top:26px !important;
  margin-top:0 !important;
}

#faq .sectionHeadNarrow{
  margin-top:0 !important;
}

#faq .faq{
  margin-top:22px !important;
}
/* FAQ PREMIUM CON BORDE BRILLANTE */
.faqSectionTight{
  padding-top:18px !important;
}

.faqShellPremium{
  position:relative;
  padding:34px;
  border-radius:34px;
  background:
    radial-gradient(circle at top left, rgba(39,104,255,.12), transparent 28%),
    linear-gradient(180deg, rgba(8,16,58,.92), rgba(5,10,40,.98));
  border:1.5px solid rgba(55,190,255,.42);
  box-shadow:
    0 0 0 1px rgba(98,208,255,.08) inset,
    0 0 34px rgba(25,108,255,.18),
    0 0 90px rgba(0,36,125,.18);
  overflow:hidden;
}

.faqShellPremium::before{
  content:"";
  position:absolute;
  inset:10px;
  border-radius:26px;
  border:1px solid rgba(0,229,255,.12);
  pointer-events:none;
}

.faqShellPremium::after{
  content:"";
  position:absolute;
  left:-70px;
  bottom:-70px;
  width:240px;
  height:240px;
  border-radius:999px;
  background:radial-gradient(circle, rgba(0,174,255,.14), transparent 72%);
  filter:blur(10px);
  pointer-events:none;
}

.faqHeadPremium{
  position:relative;
  z-index:1;
  margin-bottom:24px;
}

.faqPremium{
  position:relative;
  z-index:1;
  display:grid;
  gap:16px;
  margin-top:24px;
}

.faqPremium .faqItem{
  position:relative;
  padding:0 22px;
  border-radius:20px;
  background:linear-gradient(180deg, rgba(36,44,110,.54), rgba(17,22,68,.62));
  border:1px solid rgba(255,255,255,.08);
  box-shadow:0 16px 40px rgba(0,0,0,.18);
  transition:
    transform .22s ease,
    border-color .22s ease,
    box-shadow .22s ease,
    background .22s ease;
  overflow:hidden;
}

.faqPremium .faqItem::before{
  content:"";
  position:absolute;
  left:0;
  top:16px;
  bottom:16px;
  width:3px;
  border-radius:999px;
  background:linear-gradient(180deg, #31c8ff 0%, #7b61ff 100%);
  opacity:0;
  transition:opacity .22s ease;
}

.faqPremium .faqItem:hover,
.faqPremium .faqItem[open]{
  transform:translateY(-2px);
  border-color:rgba(104,204,255,.28);
  box-shadow:0 22px 50px rgba(44,88,255,.14);
  background:linear-gradient(180deg, rgba(43,52,128,.64), rgba(19,24,78,.74));
}

.faqPremium .faqItem:hover::before,
.faqPremium .faqItem[open]::before{
  opacity:1;
}

.faqPremium .faqItem summary{
  list-style:none;
  cursor:pointer;
  padding:20px 32px 20px 0;
  font-size:1.08rem;
  font-weight:850;
  color:#f8fbff;
  position:relative;
}

.faqPremium .faqItem summary::-webkit-details-marker{
  display:none;
}

.faqPremium .faqItem summary::after{
  content:"+";
  position:absolute;
  right:0;
  top:50%;
  transform:translateY(-50%);
  width:28px;
  height:28px;
  border-radius:999px;
  display:grid;
  place-items:center;
  font-size:1rem;
  font-weight:900;
  color:#dbeafe;
  border:1px solid rgba(127,178,255,.24);
  background:rgba(255,255,255,.04);
  transition:transform .22s ease, background .22s ease, border-color .22s ease;
}

.faqPremium .faqItem[open] summary::after{
  content:"–";
  background:rgba(77,162,255,.16);
  border-color:rgba(77,162,255,.34);
}

.faqPremium .faqItem p{
  margin:0;
  padding:0 0 20px;
  color:var(--muted);
  line-height:1.78;
}

.enterpriseFinalCtaPremium{
  position:relative;
  z-index:1;
  margin-top:30px;
  border:1px solid rgba(64,196,255,.18);
  box-shadow:0 0 0 1px rgba(64,196,255,.06) inset;
}

@media (max-width: 900px){
  .faqShellPremium{
    padding:24px;
    border-radius:26px;
  }

  .faqPremium .faqItem{
    padding:0 18px;
  }
}
/* CTA FINAL MÁS VIVO */
.enterpriseFinalCtaVivid{
  position:relative;
  overflow:hidden;
  background:
    radial-gradient(circle at top left, rgba(111,170,255,.12), transparent 26%),
    radial-gradient(circle at bottom right, rgba(127,90,240,.14), transparent 28%),
    linear-gradient(180deg, rgba(47,56,140,.94), rgba(28,34,102,.96));
  border:1.4px solid rgba(255,255,255,.11);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.03) inset,
    0 26px 90px rgba(6,10,40,.28);
}

.enterpriseFinalCtaVivid::before{
  content:"";
  position:absolute;
  inset:0;
  background:
    linear-gradient(90deg, rgba(255,255,255,.035) 0%, transparent 24%, transparent 76%, rgba(255,255,255,.02) 100%);
  pointer-events:none;
}

.finalCtaGlowOrb{
  position:absolute;
  border-radius:999px;
  filter:blur(34px);
  pointer-events:none;
  opacity:.8;
}

.finalCtaGlowOrbA{
  width:220px;
  height:220px;
  left:-40px;
  bottom:-70px;
  background:radial-gradient(circle, rgba(30,255,171,.18), transparent 70%);
}

.finalCtaGlowOrbB{
  width:260px;
  height:260px;
  right:-60px;
  top:-80px;
  background:radial-gradient(circle, rgba(93,142,255,.16), transparent 72%);
}

.finalCtaMiniSignals{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:18px;
}

.finalCtaMiniSignals span{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding:8px 12px;
  border-radius:999px;
  font-size:.86rem;
  font-weight:800;
  color:#dbeafe;
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.08);
  box-shadow:0 8px 20px rgba(0,0,0,.12);
}

.finalCtaPanelVivid{
  display:grid;
  gap:12px;
}

.finalCtaMetricVivid{
  position:relative;
  overflow:hidden;
  min-height:138px;
  padding:24px 118px 24px 24px;
  border-radius:24px;
  background:linear-gradient(180deg, rgba(19,27,94,.88), rgba(18,24,80,.96));
  border:1px solid rgba(255,255,255,.10);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.03) inset,
    0 16px 34px rgba(0,0,0,.20);
  display:flex;
  flex-direction:column;
  justify-content:center;
}

.finalCtaMetricVivid:hover{
  transform:translateY(-4px);
  border-color:rgba(120,195,255,.24);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.03) inset,
    0 18px 45px rgba(50,88,255,.16);
}

.finalCtaMetricTop{
  display:block;
  margin-bottom:10px;
}

.finalCtaMetricTop > span:first-child{
  display:block;
  font-size:.88rem;
  font-weight:950;
  letter-spacing:.14em;
  text-transform:uppercase;
  color:#dbeafe;
  opacity:.96;
}


.finalCtaMetricIcon{
  position:absolute;
  right:18px;
  top:50%;
  transform:translateY(-50%);
  width:74px;
  height:74px;
  min-width:74px;
  border-radius:22px;
  display:grid;
  place-items:center;
  border:1px solid rgba(255,255,255,.14);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.03) inset,
    0 14px 34px rgba(0,0,0,.18);
  transition:
    transform .22s ease,
    box-shadow .22s ease,
    border-color .22s ease;
}

.finalCtaMetricVivid:hover .finalCtaMetricIcon{
  transform:translateY(-50%) scale(1.05);
}

.finalCtaMetricIcon svg{
  width:34px;
  height:34px;
  display:block;
}


.finalCtaMetricIcon.csv{
  color:#86efac;
  background:
    radial-gradient(circle at 35% 30%, rgba(255,255,255,.14), transparent 35%),
    radial-gradient(circle at center, rgba(34,197,94,.22), rgba(16,185,129,.10));
  border-color:rgba(52,211,153,.30);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.03) inset,
    0 0 26px rgba(52,211,153,.14),
    0 14px 34px rgba(0,0,0,.18);
}

.finalCtaMetricIcon.kpi{
  color:#93c5fd;
  background:
    radial-gradient(circle at 35% 30%, rgba(255,255,255,.14), transparent 35%),
    radial-gradient(circle at center, rgba(59,130,246,.22), rgba(96,165,250,.10));
  border-color:rgba(96,165,250,.30);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.03) inset,
    0 0 26px rgba(96,165,250,.14),
    0 14px 34px rgba(0,0,0,.18);
}

.finalCtaMetricIcon.pdf{
  color:#c4b5fd;
  background:
    radial-gradient(circle at 35% 30%, rgba(255,255,255,.14), transparent 35%),
    radial-gradient(circle at center, rgba(139,92,246,.22), rgba(168,85,247,.10));
  border-color:rgba(167,139,250,.30);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.03) inset,
    0 0 26px rgba(167,139,250,.14),
    0 14px 34px rgba(0,0,0,.18);
}
.finalCtaMetricVivid strong{
  display:block;
  margin:0 0 6px;
  font-size:2.2rem;
  line-height:1;
  font-weight:950;
  color:#ffffff;
}

.finalCtaMetricVivid small{
  display:block;
  color:#cbd5e1;
  line-height:1.45;
  font-size:1rem;
}
.finalCtaMetricVivid{
  position:relative;
  overflow:hidden;
}

.finalCtaMetricVivid::after{
  content:"";
  position:absolute;
  inset:auto -20% -35% auto;
  width:120px;
  height:120px;
  border-radius:999px;
  filter:blur(26px);
  opacity:.22;
  pointer-events:none;
}

.finalCtaMetricVivid:nth-child(1)::after{
  background:radial-gradient(circle, rgba(52,211,153,.55), transparent 70%);
}

.finalCtaMetricVivid:nth-child(2)::after{
  background:radial-gradient(circle, rgba(96,165,250,.55), transparent 70%);
}

.finalCtaMetricVivid:nth-child(3)::after{
  background:radial-gradient(circle, rgba(167,139,250,.55), transparent 70%);
}
/* MISMO TAMAÑO EYEBROWS PRINCIPALES */
.processPanelPremium .eyebrow,
.pricingPanelPremium .eyebrow,
#faq .eyebrow{
  font-size:1.02rem !important;
  letter-spacing:.18em !important;
  line-height:1.45 !important;
  font-weight:950 !important;
  color:#66b7ff !important;
}
.finalCtaMetricIcon.pdfIconFixed{
  overflow:visible !important;
}

.finalCtaMetricIcon.pdfIconFixed svg{
  width:42px !important;
  height:42px !important;
  overflow:visible !important;
}
/* QUÉ RECIBES PREMIUM */
.deliverablesSection{
  padding-top:28px !important;
  padding-bottom:28px !important;
}

.deliverablesPanelPremium{
  position:relative;
  padding:38px 40px;
  border-radius:34px;
  background:
    radial-gradient(circle at top left, rgba(39,104,255,.12), transparent 28%),
    linear-gradient(180deg, rgba(8,16,58,.92), rgba(5,10,40,.98));
  border:1.5px solid rgba(55,190,255,.36);
  box-shadow:
    0 0 0 1px rgba(98,208,255,.08) inset,
    0 0 34px rgba(25,108,255,.14),
    0 18px 60px rgba(0,0,0,.26);
  overflow:hidden;
}

.deliverablesPanelPremium::before{
  content:"";
  position:absolute;
  inset:12px;
  border-radius:26px;
  border:1px solid rgba(0,229,255,.10);
  pointer-events:none;
}

.deliverablesPanelPremium > *{
  position:relative;
  z-index:1;
}

.deliverablesGrid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:16px;
  margin-top:26px;
}

.deliverableItem{
  display:flex;
  align-items:flex-start;
  gap:14px;
  padding:18px 20px;
  border-radius:20px;
  background:linear-gradient(180deg, rgba(36,44,110,.54), rgba(17,22,68,.62));
  border:1px solid rgba(255,255,255,.08);
  box-shadow:0 16px 40px rgba(0,0,0,.16);
  transition:transform .22s ease, border-color .22s ease, box-shadow .22s ease;
}

.deliverableItem:hover{
  transform:translateY(-3px);
  border-color:rgba(104,204,255,.28);
  box-shadow:0 22px 50px rgba(44,88,255,.14);
}

.deliverableDot{
  width:28px;
  height:28px;
  min-width:28px;
  border-radius:999px;
  display:grid;
  place-items:center;
  color:#86efac;
  background:rgba(34,197,94,.14);
  border:1px solid rgba(34,197,94,.24);
  box-shadow:0 0 14px rgba(34,197,94,.18);
  font-weight:900;
}

.deliverableItem p{
  margin:0;
  color:#eaf0ff;
  line-height:1.6;
}

@media (max-width:720px){
  .deliverablesPanelPremium{
    padding:24px 18px;
    border-radius:28px;
  }

  .deliverablesGrid{
    grid-template-columns:1fr;
  }
}
/* SOLO BAJAR ALTURA DE TENDENCIA Y CATEGORÍA */
.dashboardTrendPanel,
.dashboardCategoryPanel{
  min-height:230px !important;
  padding-top:18px !important;
  padding-bottom:16px !important;
}

.heroTrendChart{
  height:170px !important;
}
/* SOLO BAJAR ALTURA DE STOCK EN RIESGO */
.dashboardRiskCompact{
  padding-top:10px !important;
  padding-bottom:08px !important;
  margin-bottom:10px !important;
}

.dashboardRiskCompact .dashboardPanelHead{
  margin-bottom:8px !important;
}

.riskCompactRows{
  gap:2px !important;
}

.riskCompactRows div{
  padding:6px 0 !important;
}

.riskCompactRows b{
  padding:2px 6px !important;
}
/* MENOS AIRE ENTRE SEÑALES Y BENEFICIOS */
.signalBand{
  padding-bottom:8px !important;
}

.intelligenceSection{
  padding-top:10px !important;
}
/* AIRE UNIFICADO ENTRE SECCIONES PRINCIPALES */
.deliverablesSection,
.processSection,
.pricingSection,
.faqSectionTight{
  padding-top:14px !important;
  padding-bottom:14px !important;
}

/* reduce aire interno arriba de cada panel premium */
.deliverablesPanelPremium,
.processPanelPremium,
.pricingPanelPremium,
.faqShellPremium{
  margin-top:0 !important;
}

/* mismo espacio entre título y contenido interno */
.deliverablesPanelPremium .sectionHeadNarrow,
.processPanelPremium .sectionHeadNarrow,
.pricingPanelPremium .sectionHeadNarrow,
.faqShellPremium .sectionHeadNarrow{
  margin-bottom:24px !important;
}

/* ajuste específico del FAQ para que no se abra demasiado */
#faq.section{
  padding-top:14px !important;
  padding-bottom:14px !important;
}

/* ajuste específico entre precios y FAQ */
#precios.section{
  padding-bottom:14px !important;
}

#faq.section{
  padding-top:14px !important;
}
/* AJUSTE FINO: MENOS AIRE EN QUÉ RECIBES */
.deliverablesSection{
  padding-top:6px !important;
  padding-bottom:10px !important;
  margin-top:-8px !important;
}

.deliverablesPanelPremium{
  padding-top:28px !important;
  padding-bottom:28px !important;
}

.deliverablesPanelPremium .sectionHeadNarrow{
  margin-bottom:18px !important;
}

.deliverablesGrid{
  margin-top:18px !important;
}
/* AIRE EXTERNO UNIFICADO ENTRE CONTENEDORES PRINCIPALES */
:root{
  --jaso-section-gap:48px;
}

/* Quitamos solo el aire externo variable de cada sección */
.signalBand,
.intelligenceSection,
.deliverablesSection,
.processSection,
.pricingSection,
.faqSectionTight{
  padding-top:0 !important;
  padding-bottom:0 !important;
  margin-top:0 !important;
  margin-bottom:0 !important;
}

/* Aplicamos el mismo aire entre todos los contenedores */
.signalBand + .intelligenceSection,
.intelligenceSection + .deliverablesSection,
.deliverablesSection + .processSection,
.processSection + .pricingSection,
.pricingSection + .faqSectionTight{
  margin-top:var(--jaso-section-gap) !important;
}
/* WHATSAPP REAL EN JASOBOT */
.dashboardBotActionsPremium .waAction svg{
  width:34px !important;
  height:34px !important;
  display:block !important;
}

.dashboardBotActionsPremium .waAction{
  color:#ffffff !important;
}                                   
`;

function waLink() {
  const phone = "593997945350";
  const msg =
    "Hola JasoDatos. Quiero una demo y conocer los planes. Tengo un negocio y quiero controlar inventario y ventas.";
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
            <a href="#faq">Pregunta Frecuentes</a>
          </nav>

          <div className="headerCtas">
            <a className="btn btnGhost" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="btn btnPrimary" href="https://app.jasodatos.com/registro">Probar gratis</a>
          </div>
        </div>
      </header>

      <section id="inicio" className="heroTarget">
        <div className="heroDataGrid" />
        <div className="heroWave" />
        <div className="container heroTargetGrid">
          <div className="heroTargetCopy">
            <p className="pill heroTargetPill">Inventario, ventas y stock en una sola vista</p>
            <h1 className="heroTargetTitle">
              Deja de adivinar:<br />mira qué <span>vender</span>,<br />qué <span>reponer</span> y<br />qué <span>corregir</span>.
            </h1>
            <p className="heroTargetSub">
              Sube tu archivo de ventas o inventario y JasoDatos te muestra, en minutos, qué productos se venden más, cuáles están en riesgo, qué stock se está quedando y dónde puedes tomar mejores decisiones.
            </p>
            <div className="heroTargetActions">
              <a className="btn btnPrimary heroTargetPrimary" href="https://app.jasodatos.com/registro">Probar gratis →</a>
              <a className="btn btnGhost heroTargetGhost" href={wa} target="_blank" rel="noreferrer">Agendar demo por WhatsApp</a>
            </div>
            <div className="heroTargetProof">
              <div><span className="heroProofIcon">✣</span><strong>+ claridad</strong><small>menos revisión manual</small></div>
              <div><span className="heroProofIcon">◈</span><strong>acciones</strong><small>ventas, stock y compras</small></div>
              <div><span className="heroProofIcon">↻</span><strong>rápido</strong><small>sin vivir en Excel</small></div>
            </div>
          </div>

          <div className="heroTargetVisual">
           <div className="dashboardShell dashboardShellPremium">
  <div className="dashboardHeaderPremium">
    <div className="dashboardBrand">
      <span className="brandMark dashboardLogo">JD</span>
      <div>
        <strong>Dashboard comercial</strong>
        <small>Ventas, stock e inventario en una sola vista</small>
      </div>
    </div>

    <span className="dashboardLive">
      <span />
      EN VIVO
    </span>
  </div>

  <div className="dashboardKpis dashboardKpisPremium">
    <div className="dashboardKpi dashboardKpiPremium">
      <span>Ventas 30 días</span>
      <strong>$12.480</strong>
      <small className="positive">+18% vs. período anterior</small>
    </div>

    <div className="dashboardKpi dashboardKpiPremium">
      <span>Stock crítico</span>
      <strong>7</strong>
      <small>productos</small>
    </div>

    <div className="dashboardKpi dashboardKpiPremium">
      <span>Productos lentos</span>
      <strong>14</strong>
      <small>para revisar</small>
    </div>

    <div className="dashboardKpi dashboardKpiPremium">
      <span>Oportunidades</span>
      <strong>9</strong>
      <small>detectadas</small>
    </div>
  </div>

  <div className="dashboardMainGrid dashboardMainGridPremium">
    <div className="dashboardPanel dashboardTrendPanel">
      <div className="dashboardPanelHead">
        <strong>Tendencia de ventas</strong>
        <span>últimos 30 días</span>
      </div>

      <div className="heroTrendChart">
        <svg viewBox="0 0 520 250" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="heroTrendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7FB2FF" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.04" />
            </linearGradient>
          </defs>

          <path
            d="M18 185C54 176 74 168 108 160C146 151 160 116 198 122C238 128 248 166 288 151C326 137 336 100 374 106C414 112 428 158 466 139C492 126 505 108 512 98V230H18V185Z"
            fill="url(#heroTrendFill)"
          />

          <path
            d="M18 185C54 176 74 168 108 160C146 151 160 116 198 122C238 128 248 166 288 151C326 137 336 100 374 106C414 112 428 158 466 139C492 126 505 108 512 98"
            stroke="#7FB2FF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M18 200C60 190 88 178 128 180C168 182 184 145 224 154C262 162 278 184 314 169C354 152 368 134 406 142C444 150 458 176 500 160"
            stroke="rgba(255,255,255,.34)"
            strokeWidth="4"
            strokeDasharray="8 10"
            strokeLinecap="round"
          />

          <circle cx="512" cy="98" r="7" fill="#7FB2FF" />
        </svg>

        <div className="chartTotalBadge">
          <strong>$12.480</strong>
          <span>Total</span>
        </div>
      </div>
    </div>

    <div className="dashboardPanel dashboardCategoryPanel">
      <div className="dashboardPanelHead">
        <strong>Ventas por categoría</strong>
        <span>Ver detalle →</span>
      </div>

      <div className="dashboardCategoryBody">
        <div className="dashboardDonut dashboardDonutPremium" />

        <div className="dashboardLegend dashboardLegendPremium">
          <div><i className="legendBlue" /><span>Bebidas</span><strong>45%</strong></div>
          <div><i className="legendPurple" /><span>Licores</span><strong>30%</strong></div>
          <div><i className="legendMint" /><span>Abarrotes</span><strong>15%</strong></div>
          <div><i className="legendGray" /><span>Otros</span><strong>10%</strong></div>
        </div>
      </div>
    </div>
  </div>

  <div className="dashboardRiskCompact">
    <div className="dashboardPanelHead">
      <strong>Stock en riesgo</strong>
      <span>regla: mínimo 20 unidades</span>
    </div>

    <div className="riskCompactRows">
      <div>
        <span>Energy Drink 473ml</span>
        <b className="riskDanger">Crítico</b>
      </div>
      <div>
        <span>Ron Añejo 750ml</span>
        <b className="riskWarning">En riesgo</b>
      </div>
      <div>
        <span>Whisky Escocés 750ml</span>
        <b className="riskWarning">En riesgo</b>
      </div>
    </div>
  </div>

  <div className="dashboardBotBar dashboardBotBarPremium">
    <div className="dashboardBotLabel">
      <span>JasoBot</span>
      <strong>Recomendación</strong>
    </div>

    <p>
      “Activa una salida comercial para productos lentos y refuerza reposición en ítems críticos.”
    </p>

    <div className="dashboardBotActions dashboardBotActionsPremium">
     <span className="waAction" aria-label="WhatsApp" title="WhatsApp">
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path
      fill="currentColor"
      d="M16.04 3.2C9.04 3.2 3.35 8.78 3.35 15.65c0 2.2.59 4.34 1.7 6.23L3.2 28.8l7.1-1.82a12.9 12.9 0 0 0 5.74 1.35c7 0 12.69-5.58 12.69-12.45S23.04 3.2 16.04 3.2Zm0 22.96c-1.9 0-3.76-.5-5.39-1.45l-.39-.23-4.21 1.08 1.12-4.05-.26-.42a10.18 10.18 0 0 1-1.55-5.44c0-5.67 4.79-10.29 10.68-10.29s10.68 4.62 10.68 10.29-4.79 10.51-10.68 10.51Zm5.86-7.71c-.32-.16-1.9-.92-2.2-1.03-.3-.11-.52-.16-.74.16-.22.31-.85 1.03-1.04 1.24-.19.21-.38.24-.7.08-.32-.16-1.35-.49-2.57-1.55-.95-.84-1.59-1.88-1.78-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.74-1.74-1.01-2.38-.27-.64-.54-.55-.74-.56h-.63c-.21 0-.55.08-.84.39-.29.31-1.1 1.06-1.1 2.59s1.13 3.01 1.29 3.22c.16.21 2.23 3.35 5.41 4.69.76.32 1.35.51 1.81.65.76.24 1.45.21 2 .13.61-.09 1.9-.76 2.17-1.5.27-.74.27-1.37.19-1.5-.08-.13-.29-.21-.61-.37Z"
    />
  </svg>
</span>
      <span aria-label="PDF" title="PDF" className="pdfAction">
        <small />
        <strong>PDF</strong>
      </span>

      <span aria-label="Alerta" title="Alerta">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4C9.79086 4 8 5.79086 8 8V9.2C8 10.1 7.7 10.9 7.2 11.6L6.1 13.1C5.4 14 5 15.1 5 16.2V17H19V16.2C19 15.1 18.6 14 17.9 13.1L16.8 11.6C16.3 10.9 16 10.1 16 9.2V8C16 5.79086 14.2091 4 12 4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 19C10.4 20 11.1 20.5 12 20.5C12.9 20.5 13.6 20 14 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </div>
  </div>
</div>
          </div>
        </div>
      </section>
            <section className="section signalBand">
        <div className="container">
          <div className="signalPanelPremium">
            <div className="signalIntroPremium">
              <div className="signalAccentLine" />

              <div>
                <span className="eyebrow">Tu negocio, en números</span>

                <h2>
                  Señales que sí
                  <br />
                  ayudan a decidir.
                </h2>

                <p>
                  Datos actualizados automáticamente
                  <br />
                  desde tu archivo comercial.
                </p>
              </div>
            </div>

            <div className="signalCardsPremium">
              <article className="signalKpiCard kpiGreen">
                <div className="signalKpiTop">
                  <div className="signalKpiIcon">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 3V21"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                      />
                      <path
                        d="M16.5 7.5C15.7 6.5 14.4 6 12.9 6H10.8C9.25 6 8 7.03 8 8.3C8 9.44 8.95 10.36 10.35 10.58L13.75 11.12C15.15 11.34 16.1 12.26 16.1 13.4C16.1 14.67 14.85 15.7 13.3 15.7H11.1C9.6 15.7 8.3 15.2 7.5 14.2"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <span>Ventas 30 días</span>
                </div>

                <strong>$12.480</strong>
                <small>+18% vs. período anterior</small>

                <svg className="signalLineChart" viewBox="0 0 220 72" fill="none" aria-hidden="true">
                  <path
                    className="chartArea"
                    d="M6 58C18 48 27 51 37 55C50 60 58 42 72 40C88 38 94 56 108 51C121 46 122 35 139 38C154 41 158 29 173 31C190 33 194 17 214 15V72H6V58Z"
                  />
                  <path
                    className="chartLine"
                    d="M6 58C18 48 27 51 37 55C50 60 58 42 72 40C88 38 94 56 108 51C121 46 122 35 139 38C154 41 158 29 173 31C190 33 194 17 214 15"
                  />
                  <circle className="chartDot" cx="214" cy="15" r="5" />
                </svg>
              </article>

              <article className="signalKpiCard kpiBlue">
                <div className="signalKpiTop">
                  <div className="signalKpiIcon">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M9 5H15L18 8V16L15 19H9L6 16V8L9 5Z"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.5 12H14.5"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <span>Ticket promedio</span>
                </div>

                <strong>$23,40</strong>
                <small>+7% vs. período anterior</small>

                <svg className="signalLineChart" viewBox="0 0 220 72" fill="none" aria-hidden="true">
                  <path
                    className="chartArea"
                    d="M6 58C19 61 24 59 34 48C45 36 57 52 69 50C82 48 84 37 98 39C114 41 115 55 130 51C144 47 143 31 158 29C172 27 176 18 190 21C201 24 207 15 214 14V72H6V58Z"
                  />
                  <path
                    className="chartLine"
                    d="M6 58C19 61 24 59 34 48C45 36 57 52 69 50C82 48 84 37 98 39C114 41 115 55 130 51C144 47 143 31 158 29C172 27 176 18 190 21C201 24 207 15 214 14"
                  />
                  <circle className="chartDot" cx="214" cy="14" r="5" />
                </svg>
              </article>

              <article className="signalKpiCard kpiRed">
                <div className="signalKpiTop">
                  <div className="signalKpiIcon">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 4L21 19H3L12 4Z"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 9V13"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 16H12.01"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <span>Productos en riesgo</span>
                </div>

                <strong>7</strong>
                <small>-2 vs. período anterior</small>

                <svg className="signalLineChart" viewBox="0 0 220 72" fill="none" aria-hidden="true">
                  <path
                    className="chartArea"
                    d="M6 18C22 18 20 31 34 32C48 33 45 39 60 38C75 37 75 55 90 56C105 57 103 44 118 45C134 46 132 57 148 55C164 53 163 42 178 48C194 54 199 52 214 62V72H6V18Z"
                  />
                  <path
                    className="chartLine"
                    d="M6 18C22 18 20 31 34 32C48 33 45 39 60 38C75 37 75 55 90 56C105 57 103 44 118 45C134 46 132 57 148 55C164 53 163 42 178 48C194 54 199 52 214 62"
                  />
                  <circle className="chartDot" cx="214" cy="62" r="5" />
                </svg>
              </article>

              <article className="signalKpiCard kpiPurple">
                <div className="signalKpiTop">
                  <div className="signalKpiIcon">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M19.5 13.2C18.9 17 15.6 19.9 11.7 19.9C7.35 19.9 3.8 16.35 3.8 12C3.8 8.1 6.65 4.85 10.35 4.25C9.25 5.35 8.6 6.85 8.6 8.5C8.6 12.3 11.7 15.4 15.5 15.4C17.05 15.4 18.45 14.9 19.5 13.2Z"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <span>Productos dormidos</span>
                </div>

                <strong>14</strong>
                <small>+3 vs. período anterior</small>

                <svg className="signalLineChart" viewBox="0 0 220 72" fill="none" aria-hidden="true">
                  <path
                    className="chartArea"
                    d="M6 54C20 45 28 52 40 58C54 65 57 48 70 47C85 46 85 36 100 37C116 38 116 51 131 48C146 45 146 31 161 33C176 35 177 43 191 32C202 23 208 20 214 18V72H6V54Z"
                  />
                  <path
                    className="chartLine"
                    d="M6 54C20 45 28 52 40 58C54 65 57 48 70 47C85 46 85 36 100 37C116 38 116 51 131 48C146 45 146 31 161 33C176 35 177 43 191 32C202 23 208 20 214 18"
                  />
                  <circle className="chartDot" cx="214" cy="18" r="5" />
                </svg>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section id="beneficios" className="section intelligenceSection">
        <div className="container intelligenceGrid intelligencePanelPremium">
          <div className="intelligenceSticky"><span className="eyebrow">beneficios visibles</span><h2 className="sectionTitleLarge">Control comercial sin perderte entre hojas de cálculo.</h2><p className="sectionLead">JasoDatos traduce tus archivos en señales claras para vender mejor, reponer a tiempo y reducir productos dormidos sin complicarte con herramientas pesadas.</p><a className="textLink" href="#que-recibes">Explorar beneficios ↓</a></div>
         <div className="intelligenceCards">
        <article className="intelligenceCard hoverLift">
  <div className="cardIcon red">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.2L18.4 5.7V11.1C18.4 15.2 15.8 18.2 12 19.8C8.2 18.2 5.6 15.2 5.6 11.1V5.7L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.1V11.9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M12 14.9H12.01"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  </div>

  <div className="cardNumber">01</div>

  <h3>Evita quiebres y pérdidas</h3>
  <p>
    Detecta stock bajo antes de que te deje sin ventas y actúa con más
    anticipación.
  </p>

  <div className="cardFooter">
    <span>Menos quiebres, más ventas</span>
    <span className="cardFooterIcon green" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 16L10 10L14 14L20 8" />
        <path d="M15 8H20V13" />
      </svg>
    </span>
  </div>
</article>

  <article className="intelligenceCard hoverLift">
    <div className="cardIcon blue">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M13.2 2.8L5.8 13.1H11L9.8 21.2L18.2 10.2H12.8L13.2 2.8Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="cardNumber">02</div>
    <h3>Decide en minutos</h3>
    <p>
      Menos revisión manual. Más foco en KPIs, productos top, lentos y
      oportunidades.
    </p>
    <div className="cardFooter">
  <span>-80% tiempo en análisis</span>
  <span className="cardFooterIcon blue" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 18V14" />
      <path d="M11 18V10" />
      <path d="M17 18V6" />
      <path d="M3 18H21" />
    </svg>
  </span>
</div>
  </article>

  <article className="intelligenceCard hoverLift">
    <div className="cardIcon green">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 5H6.2L8.1 15.2C8.25 16 8.95 16.6 9.77 16.6H17.2C18 16.6 18.7 16.05 18.9 15.27L20.2 9H7.1"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="20" r="1.4" fill="currentColor" />
        <circle cx="17.2" cy="20" r="1.4" fill="currentColor" />
      </svg>
    </div>
    <div className="cardNumber">03</div>
    <h3>Compra con más criterio</h3>
    <p>
      Menos dinero inmovilizado y más claridad sobre qué se mueve y qué conviene
      reforzar.
    </p>
<div className="cardFooter">
  <span>Mejor rotación de inventario</span>
  <span className="cardFooterIcon green" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 16L10 10L14 14L20 8" />
      <path d="M15 8H20V13" />
    </svg>
  </span>
</div>
  </article>

  <article className="intelligenceCard hoverLift">
    <div className="cardIcon green">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9.5 11.2C11.16 11.2 12.5 9.86 12.5 8.2C12.5 6.54 11.16 5.2 9.5 5.2C7.84 5.2 6.5 6.54 6.5 8.2C6.5 9.86 7.84 11.2 9.5 11.2Z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.8 18.8C5.35 15.95 7.1 14.4 9.5 14.4C11.9 14.4 13.65 15.95 14.2 18.8"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path
          d="M15.1 11C16.55 11 17.7 9.85 17.7 8.4C17.7 6.95 16.55 5.8 15.1 5.8"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path
          d="M16.2 14.6C18 15 19.1 16.4 19.5 18.8"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <div className="cardNumber">04</div>
    <h3>Comparte y alinea</h3>
    <p>
      Reportes listos para revisar con tu equipo, conversar decisiones y reducir
      fricción operativa.
    </p>
     <div className="cardFooter">
  <span>Equipos más sincronizados</span>
  <span className="cardFooterIcon purple" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M9 11C10.6569 11 12 9.65685 12 8C12 6.34315 10.6569 5 9 5C7.34315 5 6 6.34315 6 8C6 9.65685 7.34315 11 9 11Z" />
      <path d="M4.5 18C5 15.8 6.7 14.5 9 14.5C11.3 14.5 13 15.8 13.5 18" />
      <path d="M16.5 10.5C17.8807 10.5 19 9.38071 19 8C19 6.61929 17.8807 5.5 16.5 5.5" />
      <path d="M16 14.5C17.9 14.8 19.2 16 19.5 18" />
    </svg>
  </span>
</div>
  </article>
</div>
        </div>
</section>
      <section id="que-recibes" className="section deliverablesSection">
        <div className="container">
          <div className="deliverablesPanelPremium">
            <div className="sectionHeadNarrow">
              <span className="eyebrow">qué recibes</span>

              <h2 className="sectionTitleLarge">
                Una vista ejecutiva para saber qué hacer después.
              </h2>

              <p className="sectionLead">
                Entregables claros para ejecutar, no solo dashboards bonitos.
              </p>
            </div>

            <div className="deliverablesGrid">
              <article className="deliverableItem">
                <span className="deliverableDot">✓</span>
                <p>Tablero base de ventas e inventario.</p>
              </article>

              <article className="deliverableItem">
                <span className="deliverableDot">✓</span>
                <p>Top productos, productos lentos y alertas de stock bajo.</p>
              </article>

              <article className="deliverableItem">
                <span className="deliverableDot">✓</span>
                <p>Reporte listo para compartir y revisar con tu equipo.</p>
              </article>

              <article className="deliverableItem">
                <span className="deliverableDot">✓</span>
                <p>Lectura simple para decidir qué vender, reponer o corregir.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section id="como-funciona" className="section processSection">
        <div className="container">
          <div className="processPanelPremium">
            <div className="sectionHeadNarrow">
              <span className="eyebrow">cómo funciona</span>

              <h2 className="sectionTitleLarge">
                Tres pasos para pasar de archivo a decisión.
              </h2>

              <p className="sectionLead">
                Sin implementación pesada. Sin complicarte con herramientas complejas.
              </p>
            </div>

            <div className="processFlow">
              <article className="processCard hoverLift">
                <div className="stepBadge">1</div>

                <div className="processIcon upload" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 17H6.8C4.7 17 3 15.3 3 13.2C3 11.3 4.4 9.7 6.2 9.4C6.7 6.9 8.9 5 11.5 5C14.3 5 16.7 7.1 17 9.9C19.3 10.1 21 11.9 21 14.2C21 16.6 19.1 18.5 16.7 18.5H15"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 20V11"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.8 14.2L12 11L15.2 14.2"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="processCopy">
                  <h3>Carga tu archivo</h3>
                  <p>
                    Usa tu CSV ó Excel actual o una plantilla estándar para ventas e inventario.
                  </p>
                </div>
              </article>

              <div className="processConnector" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12H20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 6L20 12L14 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <article className="processCard hoverLift">
                <div className="stepBadge">2</div>

                <div className="processIcon validate" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="4"
                      y="3"
                      width="16"
                      height="18"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M8 8.5L9.5 10L12 7.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 14.5L9.5 16L12 13.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5 9H17"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.5 15H17"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="processCopy">
                  <h3>Validamos columnas</h3>
                  <p>
                    JasoDatos detecta campos, revisa reglas y te dice qué corregir si algo no calza.
                  </p>
                </div>
              </article>

              <div className="processConnector" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12H20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 6L20 12L14 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <article className="processCard hoverLift">
                <div className="stepBadge">3</div>

                <div className="processIcon decide" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 18V12"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 18V8"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                    <path
                      d="M19 18V4"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3.5 18H20.5"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="processCopy">
                  <h3>Decide con el dashboard</h3>
                  <p>
                    Mira KPIs, stock en riesgo, productos dormidos y oportunidades comerciales.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section id="precios" className="section pricingSection">
  <div className="container">
    <div className="pricingPanelPremium">
      <div className="sectionHeadNarrow">
        <span className="eyebrow">planes</span>
        <h2 className="sectionTitleLarge">
          Precios simples para empezar sin vueltas.
        </h2>
        <p className="sectionLead">
          USD + impuestos si aplican. Elige según el nivel de acompañamiento que necesitas.
        </p>
      </div>

      <div className="pricingGridPremium">
        <article className="priceCard">
          <div className="planHeader">
  <div className="planIcon planIconBasic" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M14.5 4.5C17.2 3.4 19.8 3.8 19.8 3.8C19.8 3.8 20.2 6.4 19.1 9.1C18.1 11.7 15.8 14.2 13.2 15.6L8.4 10.8C9.8 8.2 11.9 5.6 14.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.4 10.8L5.2 11.7L4 16L8.3 14.8L13.2 15.6"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8 8.1H15.81"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M6.8 17.2L4.7 19.3"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  </div>

  <div className="pricePlan">Básico</div>
</div>
          <div className="priceAmount">
            <strong>$29</strong><span>/mes</span>
          </div>
          <p className="priceIntro">Para empezar rápido por cuenta propia.</p>

          <ul className="priceList">
            <li>Subida de  ó Excel + validación</li>
            <li>KPIs base y tendencias</li>
            <li>Plantilla estándar</li>
            <li>Exportables CSV/Excel</li>
          </ul>

          <a className="btn btnPrimary priceBtn" href="https://app.jasodatos.com/registro">
            Probar gratis
          </a>
        </article>

        <article className="priceCard featured">
          <div className="priceTopRow">
            <div className="planHeader planHeaderFeatured">
  <div className="planIcon planIconUltra" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M13.2 2.8L5.8 13.1H11L9.8 21.2L18.2 10.2H12.8L13.2 2.8Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>

  <div className="pricePlan">Ultra</div>
</div>
            <span className="priceBadge">más elegido</span>
          </div>

          <div className="priceAmount">
            <strong>$89</strong><span>/mes</span>
          </div>

          <p className="priceSetup">Setup: $149 · mínimo 3 meses</p>

          <ul className="priceList">
            <li>1 sucursal</li>
            <li>Tablero base</li>
            <li>Stock bajo + productos lentos</li>
            <li>Reporte semanal</li>
            <li>1 reunión mensual</li>
          </ul>

          <a className="btn btnPrimary priceBtn" href="https://app.jasodatos.com/registro">
            Empezar Lanzamiento
          </a>
        </article>

        <article className="priceCard">
          <div className="planHeader">
  <div className="planIcon planIconPro" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.5L19 6.5V11.5C19 15.9 16.2 19.2 12 20.5C7.8 19.2 5 15.9 5 11.5V6.5L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.2L13.1 10.4L15.5 10.8L13.75 12.5L14.2 14.9L12 13.75L9.8 14.9L10.25 12.5L8.5 10.8L10.9 10.4L12 8.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>

  <div className="pricePlan">Pro</div>
</div>
          <div className="priceAmount">
            <strong>$149</strong><span>/mes</span>
          </div>

          <p className="priceSetup">Setup: $249 · mínimo 3 meses</p>

          <ul className="priceList">
            <li>Todo lo de Lanzamiento</li>
            <li>Observaciones mensuales</li>
            <li>Soporte WhatsApp</li>
            <li>1 ajuste menor</li>
          </ul>

          <a className="btn btnGhost priceBtn" href={wa} target="_blank" rel="noreferrer">
            Hablar por WhatsApp
          </a>
        </article>
      </div>

      <div className="pricingFootnote">
        <p>Plan Pro forma de pago: 50% del setup al inicio + 50% contra entrega de la primera versión funcional. Mensualidad por adelantado.</p>
        <p>Cupos de lanzamiento: abrimos 3 este mes.</p>
      </div>
    </div>
  </div>
</section>
<section id="faq" className="section faqSectionTight">
  <div className="container">
    <div className="faqShellPremium">
      <div className="sectionHeadNarrow faqHeadPremium">
        <span className="eyebrow">preguntas frecuentes</span>
        <h2 className="sectionTitleLarge">Antes de empezar.</h2>
        <p className="sectionLead">
          Respuestas rápidas para validar si JasoDatos encaja con tu operación.
        </p>
      </div>

      <div className="faq faqPremium">
        <details className="faqItem">
          <summary>¿Qué necesito para empezar?</summary>
          <p className="p">
            Un archivo CSV ó Excel con ventas, productos, cantidades, precios o
            stock. Si no lo tienes ordenado, puedes empezar con una plantilla base.
          </p>
        </details>

        <details className="faqItem">
          <summary>¿Sirve para bodegas y ferreterías?</summary>
          <p className="p">
            Sí. El core es inventario, rotación y reposición: exactamente el dolor
            del día a día en negocios comerciales.
          </p>
        </details>

        <details className="faqItem">
          <summary>¿Puedo exportar reportes?</summary>
          <p className="p">
            Sí. Puedes trabajar con reportes exportables según plan y
            funcionalidades activas.
          </p>
        </details>

        <details className="faqItem">
          <summary>¿Por qué mínimo 3 meses en planes con setup?</summary>
          <p className="p">
            Porque estabilizamos carga, validación y hábito de uso para que el
            resultado sea real, no una demo bonita que nadie usa.
          </p>
        </details>
      </div>
      <div className="enterpriseFinalCta enterpriseFinalCtaPremium enterpriseFinalCtaVivid">
  <div className="finalCtaGlowOrb finalCtaGlowOrbA" />
  <div className="finalCtaGlowOrb finalCtaGlowOrbB" />

  <div className="finalCtaContent">
    <span className="eyebrow">empieza con datos reales</span>

    <h2>Convierte tu próximo archivo de ventas en una decisión clara.</h2>

    <p>
      Prueba JasoDatos con tu propio CSV ó Excel y valida, el dashboard te ayudará a
      detectar stock bajo, productos lentos y oportunidades de venta en menos
      tiempo.
    </p>

    <div className="heroTargetActions">
      <a className="btn btnPrimary" href="https://app.jasodatos.com/registro">
        Crear prueba gratis
      </a>

      <a
        className="btn btnGhost"
        href={wa}
        target="_blank"
        rel="noreferrer"
      >
        Hablar por WhatsApp
      </a>
    </div>

    <div className="finalCtaMiniSignals">
      <span>rápido</span>
      <span>visual</span>
      <span>exportable</span>
    </div>
  </div>
<div className="finalCtaPanel finalCtaPanelVivid">
  <div className="finalCtaMetric finalCtaMetricVivid">
    <div className="finalCtaMetricTop">
      <span>archivo</span>

      <span className="finalCtaMetricIcon csv" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M8 3.5H14L19 8.5V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 7 19V5A1.5 1.5 0 0 1 8 3.5Z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 3.5V8.5H19"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12H16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M10 15.5H14.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </div>

    <strong>CSV / Excel</strong>
    <small>ventas e inventario</small>
  </div>

  <div className="finalCtaMetric finalCtaMetricVivid">
    <div className="finalCtaMetricTop">
      <span>salida</span>

      <span className="finalCtaMetricIcon kpi" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M5 18V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 18V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 18V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M3.5 18.5H20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </span>
    </div>

    <strong>KPIs</strong>
    <small>stock, ventas y rotación</small>
  </div>

  <div className="finalCtaMetric finalCtaMetricVivid">
    <div className="finalCtaMetricTop">
      <span>acción</span>

     <span className="finalCtaMetricIcon pdf pdfIconFixed" aria-hidden="true">
  <svg viewBox="0 0 64 64" fill="none">
    <path
      d="M22 10H38L48 20V50C48 52.2091 46.2091 54 44 54H22C19.7909 54 18 52.2091 18 50V14C18 11.7909 19.7909 10 22 10Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path
      d="M38 10V20H48"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <rect
      x="21"
      y="33"
      width="24"
      height="11"
      rx="5.5"
      fill="currentColor"
      opacity="0.18"
    />
    <text
      x="33"
      y="40.5"
      textAnchor="middle"
      fill="currentColor"
      fontSize="8"
      fontWeight="900"
      fontFamily="Inter, Arial, sans-serif"
      letterSpacing="0.6"
    >
      PDF
    </text>
  </svg>
</span>
    </div>

    <strong>PDF</strong>
    <small>reporte para compartir</small>
  </div>
</div>
</div>
    </div>
  </div>
</section>
      <footer className="footer enterpriseFooter"><div className="container footerGrid"><div><div className="brand footerBrand"><span className="brandMark">JD</span><span className="brandName">JasoDatos</span></div><p className="footerText">Plataforma comercial ligera para convertir ventas, inventario y stock en señales claras de decisión.</p><p className="footerText">Pensado para bodegas, ferreterías y negocios que necesitan vender, reponer y controlar mejor.</p></div><div className="footerColumn"><h4>Producto</h4><a href="#beneficios">Beneficios</a><a href="#que-recibes">Qué recibes</a><a href="#como-funciona">Cómo funciona</a><a href="#precios">Precios</a></div><div className="footerColumn"><h4>Acceso</h4><a href="https://app.jasodatos.com/registro">Crear prueba gratis</a><a href="https://app.jasodatos.com">Entrar a la app</a><a href={wa} target="_blank" rel="noreferrer">WhatsApp +593 997 945 350</a><a href="/privacidad">Privacidad</a><a href="/terminos">Términos</a></div></div><div className="container footerBottom"><span>© {new Date().getFullYear()} JasoDatos</span><span>Transformamos datos en resultados.</span></div></footer>
    </main>
  );
}
