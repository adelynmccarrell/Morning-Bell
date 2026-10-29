* {
  box-sizing: border-box;
}

:root {
  --brown-950: #1e120d;
  --brown-900: #2b1d18;
  --brown-800: #3f2e26;
  --brown-700: #5a3d2e;
  --brown-600: #7b5543;
  --brown-500: #a57258;
  --cream-100: #f8f5f1;
  --cream-200: #eee3d8;
  --neutral-300: #d7c8ba;
  --neutral-500: #7a6e65;
  --neutral-700: #4b413d;
  --shadow: rgba(31, 20, 16, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  background: var(--cream-100);
  color: var(--brown-900);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

p,
ul {
  margin-top: 0;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  background: rgba(248, 245, 241, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(43, 29, 24, 0.08);
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 78px;
  gap: 1.5rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  font-family: 'Libre Baskerville', serif;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brown-700), var(--brown-500));
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 8px 20px rgba(90, 61, 46, 0.25);
}

.brand strong,
.brand small {
  display: block;
}

.brand strong {
  font-size: 1rem;
  line-height: 1.2;
}

.brand small {
  font-size: 0.72rem;
  color: var(--neutral-700);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.15rem;
  font-weight: 700;
  color: var(--neutral-700);
}

.main-nav a {
  position: relative;
  padding: 0.4rem 0;
}

.main-nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;
  background: var(--brown-700);
  opacity: 0;
  transform: scaleX(0.7);
  transition: all 0.2s ease;
}

.main-nav a:hover::after,
.main-nav a.active::after {
  opacity: 1;
  transform: scaleX(1);
}

.hero {
  padding: 4rem 0 3rem;
  background: linear-gradient(180deg, rgba(196, 167, 149, 0.15), rgba(248, 245, 241, 0));
}

.hero-grid,
.landing-grid,
.two-column,
.visit-grid,
.story-section {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  align-items: center;
}

.eyebrow {
  margin-bottom: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--brown-600);
}

h1,
h2,
h3 {
  margin-top: 0;
  color: var(--brown-950);
  font-family: 'Libre Baskerville', serif;
  line-height: 1.2;
}

h1 {
  font-size: clamp(2.5rem, 5vw, 4.4rem);
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(1.9rem, 3vw, 3rem);
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.35rem;
}

.lead {
  font-size: 1.1rem;
  color: var(--neutral-700);
  max-width: 60ch;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  padding: 0.75rem 1.4rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 800;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button.primary {
  background: linear-gradient(135deg, var(--brown-800), var(--brown-600));
  color: white;
  box-shadow: 0 14px 30px rgba(62, 41, 31, 0.18);
}

.button.secondary {
  border-color: rgba(62, 41, 31, 0.2);
  background: rgba(255, 255, 255, 0.4);
  color: var(--brown-900);
}

.full-width {
  width: 100%;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.coffee-visual {
  position: relative;
  width: min(480px, 100%);
  height: 420px;
  border-radius: 32px;
  background: linear-gradient(145deg, #f2e9e1, #d9c3b1);
  box-shadow: 0 22px 45px rgba(64, 42, 31, 0.12);
  overflow: hidden;
  border: 1px solid rgba(62, 41, 31, 0.06);
}

.coffee-visual::before {
  content: '';
  position: absolute;
  inset: 28px 32px 120px;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.64), rgba(234, 215, 202, 0.3));
}

.cup {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 120px;
  border-radius: 0 0 32px 32px;
  background: linear-gradient(180deg, #fefcfb, #e3d3c5);
  border: 10px solid #d7bca3;
  border-top: 0;
  box-shadow: inset 0 0 0 6px rgba(255, 255, 255, 0.5);
}

.cup::before {
  content: '';
  position: absolute;
  top: -15px;
  left: 20px;
  right: 20px;
  height: 24px;
  border-radius: 50%;
  background: #f3e7dc;
  border: 10px solid #d7bca3;
  border-bottom: none;
}

.steam {
  position: absolute;
  bottom: 170px;
  width: 18px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255,255,255,0.5), rgba(170, 123, 99, 0.15));
  animation: steam-rise 3.4s ease-in-out infinite;
}

.steam-one { left: 42%; height: 120px; }
.steam-two { left: 50%; height: 150px; animation-delay: 0.6s; }
.steam-three { left: 58%; height: 120px; animation-delay: 1.2s; }

@keyframes steam-rise {
  0% { opacity: 0; transform: translateY(15px) scaleY(0.9); }
  35% { opacity: 0.8; }
  100% { opacity: 0; transform: translateY(-30px) scaleY(1.1); }
}

.section {
  padding: 4.5rem 0;
}

.muted-section {
  background: rgba(214, 189, 175, 0.12);
}

.section-heading {
  margin-bottom: 2rem;
}

.summary-grid,
.strategy-grid,
.ad-grid,
.three-column {
  display: grid;
  gap: 1.5rem;
}

.summary-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.info-card,
.strategy-card,
.feature-card,
.visit-card {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(62, 41, 31, 0.08);
  border-radius: 22px;
  box-shadow: 0 8px 24px var(--shadow);
  padding: 1.5rem;
}

.strategy-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.strategy-card ul {
  padding-left: 1rem;
  color: var(--neutral-700);
}

.two-column {
  gap: 3rem;
}

.stats-panel {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.stat-box {
  background: linear-gradient(180deg, rgba(91, 61, 46, 0.1), rgba(255,255,255,0.5));
  border-radius: 22px;
  padding: 1.5rem 1rem;
  text-align: center;
  border: 1px solid rgba(62, 41, 31, 0.06);
}

.stat-box strong {
  display: block;
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  color: var(--brown-900);
}

.stat-box span {
  color: var(--neutral-700);
  font-weight: 700;
}

.center-copy {
  text-align: center;
  max-width: 780px;
  margin: 0 auto;
}

.page-banner {
  padding: 4.5rem 0 2rem;
  background: linear-gradient(135deg, var(--brown-900), var(--brown-700));
  color: #fff;
}

.narrow-copy {
  max-width: 760px;
}

.dark-banner h1,
.dark-banner .eyebrow {
  color: white;
}

.editorial-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 2rem;
  align-items: center;
}

.ad-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.ad-card {
  display: block;
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(62,41,31,0.08);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(63, 46, 38, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.ad-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(63, 46, 38, 0.12);
}

.ad-art {
  min-height: 220px;
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.92);
  font-size: 0.8rem;
}

.art-one { background: linear-gradient(135deg, #5a3d2e, #a57258); }
.art-two { background: linear-gradient(135deg, #2d201c, #7b5543); }
.art-three { background: linear-gradient(135deg, #a86f48, #d7b08a); color: rgba(29, 20, 17, 0.88); }
.art-four { background: linear-gradient(135deg, #54433c, #bb8c6d); }

.ad-copy {
  padding: 1.4rem 1.3rem 1.6rem;
}

.ad-tag {
  display: inline-flex;
  margin-bottom: 0.8rem;
  background: rgba(90, 61, 46, 0.08);
  color: var(--brown-700);
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.landing-hero {
  background: linear-gradient(135deg, rgba(90, 61, 46, 0.08), rgba(207, 182, 166, 0.18));
  padding: 4.5rem 0;
}

.landing-copy .lead {
  max-width: 50ch;
}

.mini-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  display: grid;
  gap: 0.45rem;
  color: var(--neutral-700);
  font-weight: 700;
}

.mini-list li::before {
  content: '•';
  color: var(--brown-700);
  margin-right: 0.7rem;
}

.offer-card {
  background: linear-gradient(180deg, #f2e7df, #efe9e3);
  border-radius: 28px;
  padding: 2rem;
  box-shadow: 0 24px 48px rgba(62, 41, 31, 0.12);
  border: 1px solid rgba(62, 41, 31, 0.06);
}

.offer-label {
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--brown-700);
}

.offer-card h2 {
  margin-bottom: 0.3rem;
}

.offer-details {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 1.4rem 0 1.6rem;
  color: var(--neutral-700);
  font-weight: 700;
}

.three-column {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.story-section {
  gap: 2rem;
}

.mini-visual {
  background: linear-gradient(135deg, rgba(91, 61, 46, 0.13), rgba(255,255,255,0.5));
  min-height: 280px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(62, 41, 31, 0.08);
}

.mini-window {
  width: min(80%, 300px);
  height: 180px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(214, 189, 175, 0.8));
  box-shadow: inset 0 0 0 1px rgba(62, 41, 31, 0.08);
  position: relative;
}

.mini-window::before,
.mini-window::after {
  content: '';
  position: absolute;
  background: rgba(90, 61, 46, 0.7);
}

.mini-window::before {
  width: 85%;
  height: 10px;
  left: 7.5%;
  top: 40px;
  border-radius: 999px;
}

.mini-window::after {
  width: 18px;
  height: 18px;
  bottom: 26px;
  left: calc(50% - 9px);
  border-radius: 50%;
}

.stats-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  background: white;
  border-radius: 24px;
  border: 1px solid rgba(62,41,31,0.08);
  padding: 1.25rem;
}

.stats-strip div {
  text-align: center;
  padding: 0.8rem;
}

.stats-strip strong {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 1.1rem;
}

.stats-strip span {
  color: var(--neutral-700);
}

.visit-section {
  padding-bottom: 5rem;
}

.visit-grid {
  align-items: stretch;
}

.visit-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(238,227,216,0.82));
}

.site-footer {
  background: var(--brown-950);
  color: rgba(255,255,255,0.82);
  padding: 1.6rem 0;
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.96rem;
}

@media (max-width: 860px) {
  .summary-grid,
  .strategy-grid,
  .ad-grid,
  .three-column,
  .stats-panel,
  .hero-grid,
  .landing-grid,
  .two-column,
  .visit-grid,
  .story-section,
  .stats-strip,
  .editorial-grid {
    grid-template-columns: 1fr;
  }

  .nav-wrap,
  .main-nav,
  .footer-wrap {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-wrap {
    padding: 1rem 0;
  }

  .main-nav {
    gap: 0.75rem;
  }

  .hero {
    padding-top: 3rem;
  }
}

@media (max-width: 560px) {
  .container {
    width: min(100% - 1rem, 1120px);
  }

  .button,
  .actions {
    width: 100%;
  }

  .actions {
    flex-direction: column;
  }

  .site-header {
    position: static;
  }
}

