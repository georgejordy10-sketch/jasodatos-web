export const metadata = {
  title: "JasoDatos | Menos faltantes, menos sobrestock. Más caja.",
  description:
    "Micro-BI para bodegas y ferreterías. Convierte ventas e inventario en decisiones: rotación, productos dormidos, alertas de stock bajo y reportes listos para compartir.",
  openGraph: {
    title: "JasoDatos | Menos faltantes, menos sobrestock. Más caja.",
    description:
      "Sube tu CSV y obtén KPIs, rotación, alertas de stock bajo y reportes listos para compartir.",
    url: "https://jasodatos.com",
    siteName: "JasoDatos",
    type: "website",
  },
  robots: { index: true, follow: true },
};
function waLink() {
  const phone = "593997945350";
  const msg =
    "Hola JasoDatos 👋 Quiero una demo y conocer los planes. Tengo una bodega/ferretería y quiero controlar inventario + ventas.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
}
export default function Page() {
  const wa = waLink();
  return (
    <main>
      {" "}
      <style>{css}</style>{" "}
      <header className="header">
        {" "}
        <div className="container headerInner">
          {" "}
          <a className="brand" href="#inicio" aria-label="JasoDatos">
            {" "}
            <span className="brandMark">JD</span>{" "}
            <span className="brandName">JasoDatos</span>{" "}
          </a>{" "}
          <nav className="nav">
            {" "}
            <a href="#beneficios">Beneficios</a>{" "}
            <a href="#que-recibes">Qué recibes</a>{" "}
            <a href="#como-funciona">Cómo funciona</a>{" "}
            <a href="#precios">Precios</a> <a href="#faq">FAQ</a>{" "}
          </nav>{" "}
          <div className="headerCtas">
            {" "}
            <a
              className="btn btnGhost"
              href={wa}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              WhatsApp{" "}
            </a>{" "}
            <a className="btn btnPrimary" href="https://app.jasodatos.com/registro">
              {" "}
              Probar gratis{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      {/* HERO */}{" "}
      <section id="inicio" className="hero">
        {" "}
        <div className="container heroGrid">
          {" "}
          <div className="heroCopy">
            {" "}
            <p className="pill">
              Micro-BI para bodegas y ferreterías (Ecuador/LatAm)
            </p>{" "}
            <h1 className="h1">Menos faltantes, menos sobrestock. Más caja.</h1>{" "}
            <p className="sub">
              {" "}
              Sube tu CSV de ventas/inventario y en minutos tienes control real:
              rotación, productos dormidos, alertas de stock bajo y compras
              mejor priorizadas. Menos “a ojo”, más decisiones con data.{" "}
            </p>{" "}
            <div className="ctaRow">
              {" "}
              <a
                className="btn btnPrimary btnLg"
                href="https://app.jasodatos.com/registro"
              >
                {" "}
                Entrar al dashboard{" "}
              </a>{" "}
              <a
                className="btn btnGhost btnLg"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Agendar demo por WhatsApp{" "}
              </a>{" "}
            </div>{" "}
            <div className="trustRow">
              {" "}
              <div className="trustItem">
                {" "}
                <span className="dot" /> CSV estandarizado en español{" "}
              </div>{" "}
              <div className="trustItem">
                {" "}
                <span className="dot" /> Alertas de stock en riesgo{" "}
              </div>{" "}
              <div className="trustItem">
                {" "}
                <span className="dot" /> Reportes exportables (CSV/PDF){" "}
              </div>{" "}
            </div>{" "}
            <p className="microProof">
              {" "}
              Si hoy tu inventario se maneja “a ojo”… aquí lo conviertes en
              control.{" "}
            </p>{" "}
          </div>{" "}
          <div className="heroCard" aria-label="Vista previa">
            {" "}
            <div className="heroCardTop">
              {" "}
              <div className="badge">Vista previa</div>{" "}
              <div className="miniKpis">
                {" "}
                <div className="miniKpi">
                  {" "}
                  <div className="miniKpiLabel">Rotación</div>{" "}
                  <div className="miniKpiValue">Alta / Media / Baja</div>{" "}
                </div>{" "}
                <div className="miniKpi">
                  {" "}
                  <div className="miniKpiLabel">Stock en riesgo</div>{" "}
                  <div className="miniKpiValue">12 productos</div>{" "}
                </div>{" "}
                <div className="miniKpi">
                  {" "}
                  <div className="miniKpiLabel">Dormidos</div>{" "}
                  <div className="miniKpiValue">7 productos</div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="mock">
              {" "}
              <div className="mockBar" />{" "}
              <div className="mockGrid">
                {" "}
                <div className="mockTile" /> <div className="mockTile" />{" "}
                <div className="mockTileWide" />{" "}
              </div>{" "}
              <div className="mockNote">
                “No vendemos sistema: convertimos tu data en decisiones.”
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* BENEFICIOS */}{" "}
      <section id="beneficios" className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="sectionHead">
            {" "}
            <h2 className="h2">
              Beneficios que se sienten en caja (y en control)
            </h2>{" "}
            <p className="p">
              Diseñado para operaciones reales: reposición, compras y rotación.
            </p>{" "}
          </div>{" "}
          <div className="cards3">
            {" "}
            <div className="card">
              {" "}
              <h3 className="h3">Evita quiebres y pérdidas</h3>{" "}
              <p className="p">
                Detecta stock bajo antes de que te deje sin ventas. Menos “ya no
                hay”, más continuidad.
              </p>{" "}
            </div>{" "}
            <div className="card">
              {" "}
              <h3 className="h3">Decisiones en minutos</h3>{" "}
              <p className="p">
                De hojas sueltas a claridad: KPIs, rotación, productos top y
                alertas accionables.
              </p>{" "}
            </div>{" "}
            <div className="card">
              {" "}
              <h3 className="h3">Compras mejor priorizadas</h3>{" "}
              <p className="p">
                Menos dinero inmovilizado en productos dormidos. Más foco en lo
                que sí se mueve.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* QUÉ RECIBES */}{" "}
      <section id="que-recibes" className="section alt">
        {" "}
        <div className="container">
          {" "}
          <div className="sectionHead">
            {" "}
            <h2 className="h2">Lo que recibes (sin humo)</h2>{" "}
            <p className="p">
              Entregables claros para ejecutar, no solo “gráficas bonitas”.
            </p>{" "}
          </div>{" "}
          <div className="twoCols">
            {" "}
            <div className="card">
              {" "}
              <h3 className="h3">Incluye</h3>{" "}
              <ul className="list">
                {" "}
                <li>Tablero base (ventas + inventario)</li>{" "}
                <li>Top productos</li> <li>Productos dormidos / lentos</li>{" "}
                <li>Alerta de stock bajo</li>{" "}
                <li>Reporte semanal listo para compartir</li>{" "}
              </ul>{" "}
            </div>{" "}
            <div className="card">
              {" "}
              <h3 className="h3">En una frase</h3>{" "}
              <p className="p">
                No vendemos sistema: tomamos tu información y la convertimos en
                decisiones.
              </p>{" "}
              <div className="ctaRow" style={{ marginTop: 12 }}>
                {" "}
                <a className="btn btnPrimary" href="https://app.jasodatos.com/registro">
                  {" "}
                  Probar gratis{" "}
                </a>{" "}
                <a
                  className="btn btnGhost"
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Hablar por WhatsApp{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* CÓMO FUNCIONA */}{" "}
      <section id="como-funciona" className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="sectionHead">
            {" "}
            <h2 className="h2">Cómo funciona</h2>{" "}
            <p className="p">Tres pasos. Cero drama. Mucha claridad.</p>{" "}
          </div>{" "}
          <ol className="steps">
            {" "}
            <li className="step">
              {" "}
              <div className="stepNum">1</div>{" "}
              <div>
                {" "}
                <div className="stepTitle">
                  Descarga la plantilla (o usamos tu CSV actual)
                </div>{" "}
                <div className="p">
                  Estándar en español para que todo calce y se valide bien.
                </div>{" "}
              </div>{" "}
            </li>{" "}
            <li className="step">
              {" "}
              <div className="stepNum">2</div>{" "}
              <div>
                {" "}
                <div className="stepTitle">Sube tu CSV</div>{" "}
                <div className="p">
                  Validamos columnas y reglas. Si algo falla, te decimos
                  exactamente qué corregir.
                </div>{" "}
              </div>{" "}
            </li>{" "}
            <li className="step">
              {" "}
              <div className="stepNum">3</div>{" "}
              <div>
                {" "}
                <div className="stepTitle">Mira el dashboard y actúa</div>{" "}
                <div className="p">
                  KPIs, rotación, stock en riesgo y reporte listo para
                  compartir.
                </div>{" "}
              </div>{" "}
            </li>{" "}
          </ol>{" "}
        </div>{" "}
      </section>{" "}
      {/* PRECIOS */}{" "}
      <section id="precios" className="section alt">
        {" "}
        <div className="container">
          {" "}
          <div className="sectionHead">
            {" "}
            <h2 className="h2">Precios</h2>{" "}
            <p className="p">
              {" "}
              Planes simples, orientados a resultado.{" "}
              <span className="small">(USD + impuestos si aplican)</span>{" "}
            </p>{" "}
          </div>{" "}
          <div className="pricing">
            {" "}
            <div className="priceCard">
              {" "}
              <div className="priceTop">
                {" "}
                <div className="priceName">Autoservicio</div>{" "}
                <div className="priceValue">
                  {" "}
                  <span className="priceNum">$29</span>{" "}
                  <span className="pricePer">/mes</span>{" "}
                </div>{" "}
                <div className="priceDesc">
                  Para empezar rápido sin acompañamiento.
                </div>{" "}
              </div>{" "}
              <ul className="list">
                {" "}
                <li>Subida de CSV + validación</li>{" "}
                <li>KPIs base y tendencias</li> <li>Plantilla estándar</li>{" "}
                <li>Exportables CSV</li>{" "}
              </ul>{" "}
              <a
                className="btn btnPrimary w100"
                href="https://app.jasodatos.com/registro"
              >
                {" "}
                Probar gratis{" "}
              </a>{" "}
            </div>{" "}
            <div className="priceCard featured">
              {" "}
              <div className="ribbon">Recomendado</div>{" "}
              <div className="priceTop">
                {" "}
                <div className="priceName">Lanzamiento</div>{" "}
                <div className="priceValue">
                  {" "}
                  <span className="priceNum">$99</span>{" "}
                  <span className="pricePer">/mes</span>{" "}
                </div>{" "}
                <div className="priceDesc">
                  Setup: $149 · mínimo 3 meses
                </div>{" "}
              </div>{" "}
              <ul className="list">
                {" "}
                <li>1 sucursal</li> <li>Tablero base</li>{" "}
                <li>Stock bajo + productos lentos</li> <li>Reporte semanal</li>{" "}
                <li>1 reunión mensual</li>{" "}
              </ul>{" "}
              <a
                className="btn btnPrimary w100"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Empezar Lanzamiento{" "}
              </a>{" "}
            </div>{" "}
            <div className="priceCard">
              {" "}
              <div className="priceTop">
                {" "}
                <div className="priceName">Control</div>{" "}
                <div className="priceValue">
                  {" "}
                  <span className="priceNum">$129</span>{" "}
                  <span className="pricePer">/mes</span>{" "}
                </div>{" "}
                <div className="priceDesc">
                  Setup: $249 · mínimo 3 meses
                </div>{" "}
              </div>{" "}
              <ul className="list">
                {" "}
                <li>Todo lo de Lanzamiento</li> <li>Observaciones mensuales</li>{" "}
                <li>Soporte WhatsApp</li> <li>1 ajuste menor</li>{" "}
              </ul>{" "}
              <a
                className="btn btnGhost w100"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Hablar por WhatsApp{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <p className="footnote">
            {" "}
            Forma de pago: 50% del setup al inicio + 50% contra entrega de la
            primera versión funcional. Mensualidad por adelantado.{" "}
          </p>{" "}
          <p className="footnote">
            Cupos de lanzamiento: abrimos 3 este mes.
          </p>{" "}
        </div>{" "}
      </section>{" "}
      {/* FAQ */}{" "}
      <section id="faq" className="section">
        {" "}
        <div className="container">
          {" "}
          <div className="sectionHead">
            {" "}
            <h2 className="h2">Preguntas frecuentes</h2>{" "}
            <p className="p">
              Cerrando objeciones antes de que aparezcan.
            </p>{" "}
          </div>{" "}
          <div className="faq">
            {" "}
            <details className="faqItem">
              {" "}
              <summary>¿Qué necesito para empezar?</summary>{" "}
              <p className="p">
                Un CSV de ventas/inventario. Si tu formato es distinto, lo
                adaptamos en planes con setup.
              </p>{" "}
            </details>{" "}
            <details className="faqItem">
              {" "}
              <summary>¿Sirve para bodegas y ferreterías?</summary>{" "}
              <p className="p">
                Sí. El core es inventario + rotación + reposición: exactamente
                el dolor del día a día.
              </p>{" "}
            </details>{" "}
            <details className="faqItem">
              {" "}
              <summary>¿Puedo exportar reportes?</summary>{" "}
              <p className="p">
                Sí. Exportables en CSV y PDF (según plan y funcionalidades
                activas).
              </p>{" "}
            </details>{" "}
            <details className="faqItem">
              {" "}
              <summary>
                ¿Por qué mínimo 3 meses en planes con setup?
              </summary>{" "}
              <p className="p">
                Porque estabilizamos carga, validación y hábito de uso para que
                el resultado sea real, no “demo”.
              </p>{" "}
            </details>{" "}
          </div>{" "}
          <div className="finalCta">
            {" "}
            <div className="finalCtaTitle">
              ¿Listo para transformar datos en resultados?
            </div>{" "}
            <div className="ctaRow">
              {" "}
              <a
                className="btn btnPrimary btnLg"
                href="https://app.jasodatos.com/registro"
              >
                {" "}
                Probar gratis{" "}
              </a>{" "}
              <a
                className="btn btnGhost btnLg"
                href={wa}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Agendar demo por WhatsApp{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <footer className="footer">
        {" "}
        <div className="container footerGrid">
          {" "}
          <div>
            {" "}
            <div className="brand footerBrand">
              {" "}
              <span className="brandMark">JD</span>{" "}
              <span className="brandName">JasoDatos</span>{" "}
            </div>{" "}
            <p className="p muted">
              Micro-BI para bodegas y ferreterías. CSV → control → decisiones.
            </p>{" "}
            <p className="p muted">
              {" "}
              Soporte:{" "}
              <a href={wa} target="_blank" rel="noreferrer">
                {" "}
                WhatsApp +593 997 945 350{" "}
              </a>{" "}
            </p>{" "}
          </div>{" "}
          <div className="footerLinks">
            {" "}
            <a href="#beneficios">Beneficios</a> <a href="#precios">Precios</a>{" "}
            <a href="#faq">FAQ</a>{" "}
            <a href="https://app.jasodatos.com">Entrar</a>{" "}
          </div>{" "}
          <div className="footerLegal">
            {" "}
            <a href="/privacidad">Privacidad</a>{" "}
            <a href="/terminos">Términos</a>{" "}
            <span className="muted">
              © {new Date().getFullYear()} JasoDatos
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
    </main>
  );
}
const css = ` :root{ --bg:#0b1220; --text:#eaf0ff; --muted:#a9b6d8; --line:rgba(255,255,255,.10); --brand1:#14b8a6; --brand2:#2563eb; --brand3:#7c3aed; --shadow: 0 18px 50px rgba(0,0,0,.35); --radius:18px; --radius2:22px; --max:1100px; --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; } *{box-sizing:border-box} html,body{padding:0;margin:0;background:radial-gradient(1200px 700px at 50% -100px, rgba(37,99,235,.35), transparent 60%), radial-gradient(900px 600px at 10% 10%, rgba(20,184,166,.22), transparent 55%), var(--bg); color:var(--text); font-family:var(--font)} a{color:inherit;text-decoration:none} .container{max-width:var(--max); margin:0 auto; padding:0 20px} .header{position:sticky; top:0; z-index:50; backdrop-filter: blur(10px); background:rgba(11,18,32,.65); border-bottom:1px solid var(--line)} .headerInner{display:flex; align-items:center; justify-content:space-between; padding:14px 0; gap:14px} .brand{display:flex; align-items:center; gap:10px; font-weight:800} .brandMark{width:36px; height:36px; display:inline-flex; align-items:center; justify-content:center; border-radius:12px; background:linear-gradient(135deg,var(--brand1),var(--brand2),var(--brand3)); box-shadow: var(--shadow); font-weight:900} .brandName{letter-spacing:.2px} .nav{display:none; gap:16px; color:var(--muted); font-weight:600} .nav a{opacity:.9} .nav a:hover{opacity:1; color:var(--text)} .headerCtas{display:flex; gap:10px; align-items:center} .btn{display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:10px 14px; border-radius:14px; border:1px solid var(--line); background:rgba(255,255,255,.04); color:var(--text); font-weight:700; cursor:pointer} .btn:hover{transform: translateY(-1px); transition:.15s ease} .btnPrimary{border:none; background:linear-gradient(135deg,var(--brand2),var(--brand3));} .btnGhost{background:rgba(255,255,255,.06)} .btnLg{padding:12px 16px; border-radius:16px} .w100{width:100%} .hero{padding:56px 0 18px} .heroGrid{display:grid; gap:18px} .pill{display:inline-flex; align-items:center; gap:8px; padding:8px 12px; border-radius:999px; border:1px solid var(--line); background:rgba(255,255,255,.04); color:var(--muted); font-weight:700} .h1{font-size:40px; line-height:1.05; margin:14px 0 10px; letter-spacing:-.6px} .sub{color:var(--muted); font-size:16px; line-height:1.6; margin:0 0 16px} .ctaRow{display:flex; flex-wrap:wrap; gap:10px; margin:12px 0 14px} .trustRow{display:flex; flex-wrap:wrap; gap:10px; margin-top:10px} .trustItem{display:flex; align-items:center; gap:8px; color:var(--muted); font-weight:600} .dot{width:8px; height:8px; border-radius:50%; background:rgba(20,184,166,.95); box-shadow: 0 0 0 4px rgba(20,184,166,.15)} .microProof{margin-top:10px; color:rgba(255,255,255,.75); font-weight:700} .heroCard{border:1px solid var(--line); background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02)); border-radius:var(--radius2); padding:16px; box-shadow: var(--shadow)} .heroCardTop{display:flex; align-items:flex-start; justify-content:space-between; gap:12px} .badge{display:inline-flex; padding:6px 10px; border-radius:999px; background:rgba(255,255,255,.07); border:1px solid var(--line); color:var(--muted); font-weight:700} .miniKpis{display:grid; gap:10px} .miniKpi{padding:10px 12px; border:1px solid var(--line); border-radius:14px; background:rgba(0,0,0,.18)} .miniKpiLabel{color:var(--muted); font-weight:700; font-size:12px} .miniKpiValue{font-weight:900; margin-top:4px} .mock{margin-top:12px; border-radius:16px; background:rgba(0,0,0,.18); border:1px solid var(--line); padding:12px} .mockBar{height:10px; border-radius:999px; background:linear-gradient(90deg, rgba(20,184,166,.8), rgba(37,99,235,.8), rgba(124,58,237,.8))} .mockGrid{margin-top:10px; display:grid; grid-template-columns:1fr 1fr; gap:10px} .mockTile,.mockTileWide{height:72px; border-radius:14px; background:rgba(255,255,255,.06); border:1px solid var(--line)} .mockTileWide{grid-column: span 2; height:92px} .mockNote{margin-top:10px; color:var(--muted); font-weight:700} .section{padding:52px 0} .section.alt{background:radial-gradient(900px 500px at 90% 30%, rgba(124,58,237,.16), transparent 60%), rgba(255,255,255,.01); border-top:1px solid var(--line); border-bottom:1px solid var(--line)} .sectionHead{margin-bottom:18px} .h2{font-size:28px; margin:0 0 8px; letter-spacing:-.3px} .h3{font-size:18px; margin:0 0 8px} .p{color:var(--muted); line-height:1.65; margin:0} .small{opacity:.9} .cards3{display:grid; gap:12px} .twoCols{display:grid; gap:12px} .card{border:1px solid var(--line); background:rgba(255,255,255,.03); border-radius:var(--radius); padding:16px; box-shadow: 0 10px 30px rgba(0,0,0,.22)} .steps{list-style:none; padding:0; margin:0; display:grid; gap:12px} .step{display:flex; gap:12px; border:1px solid var(--line); background:rgba(255,255,255,.03); border-radius:var(--radius); padding:14px} .stepNum{width:34px; height:34px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-weight:900; background:rgba(37,99,235,.25); border:1px solid rgba(37,99,235,.35)} .stepTitle{font-weight:900; margin-bottom:4px} .pricing{display:grid; gap:12px; margin-top:12px} .priceCard{position:relative; border:1px solid var(--line); background:rgba(255,255,255,.03); border-radius:var(--radius2); padding:16px; box-shadow: 0 10px 30px rgba(0,0,0,.22)} .priceCard.featured{background:linear-gradient(180deg, rgba(37,99,235,.20), rgba(124,58,237,.10)); border-color:rgba(124,58,237,.35)} .ribbon{position:absolute; top:14px; right:14px; padding:6px 10px; border-radius:999px; background:rgba(255,255,255,.10); border:1px solid var(--line); font-weight:800; color:var(--text)} .priceTop{margin-bottom:10px} .priceName{font-weight:900; font-size:18px} .priceValue{display:flex; align-items:baseline; gap:6px; margin-top:6px} .priceNum{font-size:34px; font-weight:950; letter-spacing:-.5px} .pricePer{color:var(--muted); font-weight:800} .priceDesc{color:var(--muted); margin-top:6px} .list{margin:12px 0 14px; padding-left:18px; color:var(--muted); line-height:1.7} .footnote{margin-top:14px; color:var(--muted)} .faq{display:grid; gap:10px; margin-top:12px} .faqItem{border:1px solid var(--line); background:rgba(255,255,255,.03); border-radius:var(--radius); padding:12px} .faqItem summary{cursor:pointer; font-weight:900} .faqItem summary::marker{color:var(--muted)} .finalCta{margin-top:18px; border:1px solid var(--line); background:rgba(0,0,0,.20); border-radius:var(--radius2); padding:16px} .finalCtaTitle{font-weight:950; font-size:18px; margin-bottom:8px} .footer{padding:28px 0; border-top:1px solid var(--line); background:rgba(0,0,0,.18)} .footerGrid{display:grid; gap:14px} .footerLinks,.footerLegal{display:flex; flex-wrap:wrap; gap:12px; color:var(--muted); font-weight:700} .footerLinks a:hover,.footerLegal a:hover{color:var(--text)} .footerBrand{margin-bottom:10px} .muted{color:var(--muted)} @media (min-width: 900px){ .nav{display:flex} .heroGrid{grid-template-columns: 1.15fr .85fr; align-items:stretch} .cards3{grid-template-columns: repeat(3, 1fr)} .twoCols{grid-template-columns: 1fr 1fr} .pricing{grid-template-columns: repeat(3, 1fr)} .footerGrid{grid-template-columns: 1.2fr .9fr .9fr; align-items:start} .h1{font-size:48px} } `;
