// Google Analytics 4 — 랜딩 방문·유입·CTA 측정.
// 앱(befluent 레포 public/assets/bf-ga.js)과 같은 측정 ID를 써서 랜딩→앱 이동을 한 사람으로 잇는다.
// 운영 도메인에서만 켠다. 미리보기(*.pages.dev)·localhost 는 데이터 오염 방지로 끈다.
const GA_ID = 'G-1XMLQVF26W'; // GA4 속성 BeFluent, 웹 스트림 BeFluent Web
const PROD_HOSTS = ['www.befluent.live'];
const TALLY_FORM_ID = 'lbV2aV';

const enabled =
  typeof window !== 'undefined' &&
  PROD_HOSTS.includes(window.location.hostname);

export function initAnalytics() {
  if (!enabled || window.__bfGaLoaded) return;
  window.__bfGaLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    linker: { domains: ['www.befluent.live', 'befluent.live', 'app.befluent.live'] },
  });

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  // 베타 대기자 Tally 폼 제출 = 전환(generate_lead). Tally iframe 이 postMessage 로 알려준다.
  window.addEventListener('message', (e) => {
    if (!/^https:\/\/([a-z0-9-]+\.)*tally\.so$/.test(e.origin)) return;
    let data = e.data;
    if (typeof data === 'string') {
      try { data = JSON.parse(data); } catch { return; }
    }
    if (data?.event !== 'Tally.FormSubmitted') return;
    window.gtag('event', 'generate_lead', {
      form_id: data.payload?.formId || TALLY_FORM_ID,
      form_name: 'beta_waitlist',
    });
  });
}

// CTA 클릭. cta_id 는 버튼마다 고정 이름, cta_location 은 화면 위치(nav/hero/final).
export function trackCta(ctaId, ctaLocation, ctaText) {
  if (!enabled || typeof window.gtag !== 'function') return;
  window.gtag('event', 'cta_click', {
    cta_id: ctaId,
    cta_location: ctaLocation,
    cta_text: ctaText,
  });
}
