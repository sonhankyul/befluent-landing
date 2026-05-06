import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Check, Mic, Briefcase, Globe, Volume2, Clock } from 'lucide-react';

export default function App() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [activeSituation, setActiveSituation] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [daysLeft, setDaysLeft] = useState(180);
  const [isMobile, setIsMobile] = useState(false);
  const [showBetaModal, setShowBetaModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysLeft(prev => {
        const sequence = [180, 90, 30, 7, 3, 1];
        const idx = sequence.indexOf(prev);
        return sequence[(idx + 1) % sequence.length];
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    {
      cat: '효과',
      q: '진짜 D-Day까지 결과가 나오나요?',
      a: '결과 기준이 명확한 것만 약속합니다. ✅ 오픽 IH 도달, 면접 시뮬레이션 정답률, 음소 정확도는 측정 가능하니까 약속합니다. ❌ "외국계 입사 합격"은 영어 외 변수가 많아 약속하지 않습니다. ❌ "원어민 같은 발음"은 신경가소성 한계로 약속 못합니다. 솔직하게 말씀드립니다.'
    },
    {
      cat: '효과',
      q: '매일 시킨 거 다 했는데 결과 미달이면?',
      a: '자동 환불됩니다. 사용자가 출석 90%+ 충족하고 모든 모듈 완료한 경우에만 해당됩니다. 조건과 절차는 가입 시 계약서 형태로 명시됩니다.'
    },
    {
      cat: '효과',
      q: 'D-Day가 너무 가까운데 (1주일 미만) 가능한가요?',
      a: '솔직하게 둘로 나눠 말씀드립니다.\n\n❌ 1주일 안에 영어 실력을 늘려드리진 못합니다. 그건 거짓말이에요.\n\n✅ 1주일 안에 그 면접/발표/미팅 한 번을 잘 보게는 도와드릴 수 있어요.\n\n비상 모듈(D-7, D-3, D-1)은 다음을 약속합니다:\n· 그 자리에서 자주 나오는 질문/시나리오 마스터\n· 핵심 답변 자동화 수준 암기\n· 즉흥 답변 시뮬레이션 5회+\n· 발음 약점 2~3개만 집중\n\n대신 이렇게는 못 합니다:\n· 1주 후에도 영어가 늘어 있을 거라는 보장\n· 다른 자리에서 같은 효과\n· 원어민 수준 도달\n\n이거 솔직히 말씀드리고, 그 자리만큼은 책임집니다. 환불 정책: 시뮬레이션 정답률 80%+ 미달 시 50% 환불.'
    },
    {
      cat: '효과',
      q: '인도/아랍 클라이언트 영어 진짜 알아들을 수 있게 만들어주나요?',
      a: '비즈니스 영어 모듈 + 인도/아랍 accent 듣기 트랙에서 다룹니다. 솔직히 말씀드리면 — non-native accent 청취는 가장 어려운 영역입니다. 8주 모듈로 "이전보다 50%+ 잘 들림" 수준은 약속하지만, "100% 알아들음"은 약속 못합니다.'
    },
    {
      cat: '효과',
      q: 'AI가 진짜 강사처럼 코칭할 수 있나요?',
      a: '모든 면에서는 아닙니다. AI가 잘하는 것: 음소별 정확도 1초 측정, 매일 학습 이력 기억, 24시간 옆에 있음. AI가 못하는 것: 사람의 따뜻함, 인생 조언. 따뜻한 위로가 필요하면 사람 강사를, 체계적 학습이 필요하면 우리를 추천합니다.'
    },
    {
      cat: '효과',
      q: 'ELSA, Speak랑 뭐가 달라요?',
      a: 'ELSA, Speak는 발음 채점이 핵심입니다. 점수를 보여주죠. BeFluent는 "D-Day까지 무엇을 할지 정해주는 코치"가 핵심입니다. 비유하면 — ELSA/Speak = 체중계, BeFluent = 퍼스널 트레이너. 체중계만으론 다이어트가 안 되죠.'
    },
    {
      cat: '시간',
      q: '시간이 정말 1~2일밖에 없는데 정말 도움 되나요?',
      a: '솔직히, 사용자 만족도가 갈리는 영역입니다.\n\n도움 되는 케이스: 자주 나오는 질문에 답변 패턴 만들기, 자기소개 등 정해진 텍스트 자동화, 발음 1~2개 음소만 잡아내기, 면접 직전 호흡/긴장 관리.\n\n도움 안 되는 케이스: 갑자기 듣기 능력 향상, 새로운 표현 자유 구사, 처음 보는 질문에 즉흥 답변.\n\n24시간 모듈 환불 정책: 미사용 시 100% 환불, 사용 시작 후 환불 불가.'
    },
    {
      cat: '시간',
      q: '매일 60~90분 진짜 할 수 있나요?',
      a: '솔직히, 50% 이상의 사용자가 첫 4주에 페이스 못 맞춥니다. 인정하는 부분입니다. 그래서: 5분 단위로 분산 가능, 주 1회 미스 허용, 매일 알람과 동기부여 메시지, 못 따라가면 코스 자동 연장 옵션.'
    },
    {
      cat: '가격',
      q: '학원 대비 왜 이렇게 싼가요?',
      a: 'AI가 일을 합니다. 사람 강사 인건비가 없어요. 다만 사람 강사가 주는 따뜻함도 없습니다. 트레이드오프입니다.'
    },
    {
      cat: '가격',
      q: '베타 기간 중 가입하면 무엇이 다른가요?',
      a: '베타 가입자는 평생 50% 할인 적용 예정입니다. 또한 우리가 가장 신경 써서 케어하는 첫 사용자 그룹입니다. 대신 부탁드리는 것: 사용 후기 작성, 1:1 인터뷰, 친구 추천.'
    },
    {
      cat: '사용',
      q: '"그 자리만 책임진다"는 게 정확히 무슨 뜻이에요?',
      a: '정확히 — 우리는 그 자리에서 "영어 때문에 망하지 않게" 만들어드립니다. 합격 보장이 아닙니다.\n\n예시:\n- 면접 → 영어 답변이 막히지 않도록 (합격은 영어 외 변수)\n- 발표 → 발음/유창성에서 무너지지 않도록 (내용은 사용자 책임)\n- 미팅 → 핵심 표현 막히지 않도록 (논점은 사용자 책임)'
    },
    {
      cat: '사용',
      q: '환불 신청은 어떻게 하나요?',
      a: '신청할 필요 없습니다. 자동 측정 후 자동 환불입니다. 사용자가 의무(출석 + 모듈 완료) 충족하고 결과 미달이면 시스템이 자동 환불 처리합니다.'
    },
  ];

  const modules = [
    { icon: Mic, name: '오픽 IH/AL', dur: '4주', daily: '60분' },
    { icon: Briefcase, name: '영어 면접', dur: '2~4주', daily: '30~90분' },
    { icon: Globe, name: '비즈니스 영어', dur: '8주', daily: '60분' },
    { icon: Volume2, name: '발음 마스터', dur: '4주', daily: '15분' },
  ];

  const packages = [
    { name: '외국계 합격 풀 코스', items: '오픽 + 면접 + 비즈니스 영어', dur: '6개월' },
    { name: '해외 이직 단기', items: '오픽 + 면접', dur: '6주' },
    { name: '입사 후 적응', items: '비즈니스 + accent', dur: '8주' },
  ];

  const PADDING_X = isMobile ? 24 : 48;

  return (
    <div style={{ fontFamily: "'Pretendard', 'Geist', system-ui, sans-serif", backgroundColor: '#F5F5F5', color: '#0D0D0D', minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{`
      
        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-lime {
          0%, 100% { box-shadow: 0 0 0 0 rgba(232, 255, 71, 0.5); }
          50% { box-shadow: 0 0 0 12px rgba(232, 255, 71, 0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes blink-dday {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .stagger-1 { animation: fadeUp 0.8s ease 0.1s both; }
        .stagger-2 { animation: fadeUp 0.8s ease 0.3s both; }
        .stagger-3 { animation: fadeUp 0.8s ease 0.5s both; }
        .stagger-4 { animation: fadeUp 0.8s ease 0.7s both; }

        .grain::before {
          content: ''; position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.06; pointer-events: none;
        }

        .lime-underline {
          background-image: linear-gradient(transparent 60%, #E8FF47 60%);
          background-size: 100% 100%; background-repeat: no-repeat;
        }

        .module-card { transition: all 200ms ease; }
        .module-card:hover { transform: translateY(-4px); }

        .accordion-content { max-height: 0; overflow: hidden; transition: max-height 400ms ease; }
        .accordion-content.open { max-height: 1500px; }

        button { font-family: inherit; cursor: pointer; }
        .ticker { display: flex; animation: marquee 40s linear infinite; white-space: nowrap; }

        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(13, 13, 13, 0.6);
          backdrop-filter: blur(8px);
          z-index: 100;
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
        }
        .modal-content {
          background: #FFFFFF; border-radius: 16px;
          max-width: 600px; width: 100%;
          max-height: 90vh; overflow-y: auto;
          padding: 32px;
        }

        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .stack-mobile { grid-template-columns: 1fr !important; }
          .stack-mobile-2 { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* === NAV === */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: scrollY > 50 ? 'rgba(245, 245, 245, 0.85)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(12px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid rgba(13,13,13,0.08)' : 'none',
        transition: 'all 300ms ease',
        padding: `${isMobile ? 16 : 20}px ${PADDING_X}px`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: isMobile ? 28 : 32, height: isMobile ? 28 : 32, backgroundColor: '#0D0D0D', borderRadius: 6,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#E8FF47', fontWeight: 800, fontSize: isMobile ? 16 : 18
          }}>b</div>
          <span style={{ fontWeight: 700, fontSize: isMobile ? 15 : 17, letterSpacing: '-0.02em' }}>BeFluent</span>
          <span className="hide-mobile" style={{ fontSize: 11, color: '#888', marginLeft: 6, padding: '2px 8px', backgroundColor: 'rgba(13,13,13,0.06)', borderRadius: 4 }}>BETA</span>
        </div>
        <div style={{ display: 'flex', gap: isMobile ? 0 : 32, alignItems: 'center' }}>
          <a className="hide-mobile" href="#modules" style={{ fontSize: 14, color: '#0D0D0D', textDecoration: 'none', fontWeight: 500 }}>모듈</a>
          <a className="hide-mobile" href="#how" style={{ fontSize: 14, color: '#0D0D0D', textDecoration: 'none', fontWeight: 500 }}>How</a>
          <a className="hide-mobile" href="#faq" style={{ fontSize: 14, color: '#0D0D0D', textDecoration: 'none', fontWeight: 500 }}>FAQ</a>
          <button
            onClick={() => setShowBetaModal(true)}
            style={{
              backgroundColor: '#0D0D0D', color: '#E8FF47',
              border: 'none', padding: isMobile ? '8px 14px' : '10px 20px', borderRadius: 6,
              fontWeight: 600, fontSize: isMobile ? 13 : 14
            }}>
            5분 진단
          </button>
        </div>
      </nav>

      {/* === HERO === */}
      <section style={{
        position: 'relative', minHeight: isMobile ? 'auto' : '100vh',
        padding: `${isMobile ? '120px' : '160px'} ${PADDING_X}px ${isMobile ? '80px' : '120px'}`,
        overflow: 'hidden'
      }} className="grain">
        <div className="hide-mobile" style={{
          position: 'absolute', top: 140, right: 48,
          display: 'flex', alignItems: 'center', gap: 12,
          fontSize: 12, color: '#888', fontWeight: 500, letterSpacing: '0.05em'
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#E8FF47', animation: 'blink-dday 1.5s infinite' }} />
          <span>D-{daysLeft} COUNTING</span>
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="stagger-1" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 16px', backgroundColor: 'rgba(13,13,13,0.06)',
            borderRadius: 100, fontSize: 13, fontWeight: 500, marginBottom: 32
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#0D0D0D' }} />
            영어가 도구인 사람들을 위한 코스
          </div>

          <h1 className="serif stagger-2" style={{
            fontSize: isMobile ? 'clamp(40px, 11vw, 56px)' : 'clamp(48px, 7vw, 96px)',
            fontWeight: 900,  // ⭐ 이 줄 추가
            fontFamily: "'Fraunces', 'Pretendard', system-ui, sans-serif",  // ⭐ 추가
            lineHeight: 1.05, fontWeight: 900, letterSpacing: '-0.04em',
            marginBottom: isMobile ? 24 : 40, maxWidth: '15ch'
          }}>
            오픽 D-30.<br/>
            면접 D-7.<br/>
            발령 <span className="lime-underline">D-180.</span>
          </h1>

          <p className="stagger-3" style={{
            fontSize: isMobile ? 'clamp(17px, 4.5vw, 22px)' : 'clamp(20px, 2.4vw, 28px)',
            lineHeight: 1.4, fontWeight: 400,
            maxWidth: '32ch', marginBottom: isMobile ? 32 : 48
          }}>
            시간이 충분하면 실력을,<br/>
            시간이 부족하면 그 자리만큼은.<br/>
            <strong>AI 코치가 책임집니다.</strong>
          </p>

          <div className="stagger-4" style={{
            display: 'flex', gap: 12, marginBottom: isMobile ? 40 : 64,
            flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row'
          }}>
            <button
              onClick={() => setShowBetaModal(true)}
              style={{
                backgroundColor: '#0D0D0D', color: '#E8FF47',
                border: 'none', padding: isMobile ? '18px 28px' : '20px 36px', borderRadius: 8,
                fontWeight: 600, fontSize: isMobile ? 16 : 17,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                animation: 'pulse-lime 2s infinite',
                width: isMobile ? '100%' : 'auto'
              }}>
              5분 무료 진단 받기 <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setShowBetaModal(true)}
              style={{
                backgroundColor: 'transparent', color: '#0D0D0D',
                border: '2px solid #0D0D0D', padding: isMobile ? '16px 26px' : '18px 34px', borderRadius: 8,
                fontWeight: 600, fontSize: isMobile ? 16 : 17,
                width: isMobile ? '100%' : 'auto'
              }}>
              베타 대기자 등록
            </button>
          </div>

          <div className="stagger-4" style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: isMobile ? 14 : 15, color: '#444' }}>
            {['시간이 충분하면 실력 향상, 부족하면 그 자리 한 번은 책임',
              '매일 코치가 정해주는 메뉴, 그대로만 하시면 됩니다',
              '약속한 범위는 반드시 지킵니다. 못하면 환불.'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Check size={16} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 4 }} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TICKER === */}
      <section style={{
        backgroundColor: '#0D0D0D', color: '#E8FF47',
        padding: `${isMobile ? 24 : 32}px 0`, overflow: 'hidden',
      }}>
        <div className="ticker">
          {Array(8).fill(null).map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 20 : 32, paddingRight: isMobile ? 20 : 32 }}>
              {['오픽', '외국계 면접', '비즈니스 영어', '해외 발령', '이민 영어', '인도/아랍 accent'].map(t => (
                <React.Fragment key={t}>
                  <span className="serif" style={{ fontSize: isMobile ? 22 : 32, fontWeight: 800 }}>{t}</span>
                  <span style={{ opacity: 0.4 }}>×</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* === PROBLEM === */}
      <section style={{ padding: `${isMobile ? 80 : 160}px ${PADDING_X}px`, backgroundColor: '#F5F5F5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#888', letterSpacing: '0.1em', marginBottom: 24 }}>
            01 · THE PROBLEM
          </div>
          <h2 className="serif" style={{
            fontSize: isMobile ? 'clamp(32px, 8vw, 44px)' : 'clamp(40px, 5vw, 72px)',
            lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.03em',
            marginBottom: isMobile ? 40 : 64, maxWidth: '20ch'
          }}>
            영어가 인생의 다음 단계를<br/>막고 있나요?
          </h2>

          <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: isMobile ? 32 : 60, marginBottom: isMobile ? 48 : 80 }}>
            <div>
              <p style={{ fontSize: isMobile ? 16 : 18, lineHeight: 1.7, color: '#333', marginBottom: 24 }}>
                학원에 다녀봤습니다. 한 달 30만원, 결국 시간 못 맞춰 빠지고, 모두에게 같은 진도였어요.
              </p>
              <p style={{ fontSize: isMobile ? 16 : 18, lineHeight: 1.7, color: '#333', marginBottom: 24 }}>
                영어 앱 깔아봤습니다. 메뉴는 많은데 오늘 뭘 해야 할지 매번 헷갈려 결국 안 켭니다.
              </p>
              <p style={{ fontSize: isMobile ? 16 : 18, lineHeight: 1.7, color: '#333' }}>
                화상 회화도 해봤습니다. 25분 동안 무슨 얘기를 할지 부담이고, 끝나면 뭘 배웠는지 모릅니다.
              </p>
            </div>
            <div>
              <p style={{ fontSize: isMobile ? 16 : 18, lineHeight: 1.7, color: '#333', marginBottom: 24 }}>
                오픽 인강 듣고, 면접 영어는 따로 학원에서, 비즈니스 영어는 또 다른 데서.
              </p>
              <p className="serif" style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, lineHeight: 1.3, color: '#0D0D0D' }}>
                머리가 터집니다.
              </p>
            </div>
          </div>

          <div style={{
            padding: isMobile ? '40px 28px' : '64px 48px',
            backgroundColor: '#0D0D0D', color: '#F5F5F5',
            borderRadius: 16, position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ fontSize: 13, color: '#E8FF47', fontWeight: 600, letterSpacing: '0.1em', marginBottom: 16 }}>
              REAL PROBLEM
            </div>
            <h3 className="serif" style={{
              fontSize: isMobile ? 'clamp(24px, 6vw, 32px)' : 'clamp(32px, 3.5vw, 48px)',
              lineHeight: 1.25, fontWeight: 700, marginBottom: isMobile ? 24 : 32, maxWidth: '24ch'
            }}>
              영어 공부가 어려운 게 아닙니다.<br/>
              <span style={{ color: '#E8FF47' }}>목적이 있는데 길이 안 보이는 것</span>이 어렵습니다.
            </h3>
            <ul className="stack-mobile" style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, fontSize: isMobile ? 14 : 16, color: '#ccc' }}>
              <li>오픽 1달 안에 IH/AL 만들어야 하는데 → 어디서 시작?</li>
              <li>다음 주 외국계 면접인데 → 무엇을 준비?</li>
              <li>6개월 후 외국계 입사인데 → 그 전까지 뭘 어떻게?</li>
              <li>미국 발령났는데 → 가서 미팅을 못한다 어쩌지?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === SOLUTION === */}
      <section style={{ padding: `${isMobile ? 80 : 160}px ${PADDING_X}px`, backgroundColor: '#FAFAFA' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#888', letterSpacing: '0.1em', marginBottom: 24 }}>
            02 · THE SOLUTION
          </div>
          <h2 className="serif" style={{
            fontSize: isMobile ? 'clamp(32px, 8vw, 44px)' : 'clamp(40px, 5vw, 72px)',
            lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.03em',
            marginBottom: 32, maxWidth: '20ch'
          }}>
            BeFluent는 <span className="lime-underline">D-Day가 있는 사람</span>을 위한 코스입니다.
          </h2>
          <p style={{ fontSize: isMobile ? 18 : 22, lineHeight: 1.5, color: '#333', marginBottom: isMobile ? 48 : 80, maxWidth: '32ch' }}>
            오늘 무엇을 할지 코치가 정합니다.<br/>
            당신은 시킨 거만 하세요.
          </p>

          <div style={{
            backgroundColor: '#FFFFFF', borderRadius: 16,
            padding: isMobile ? 24 : 40, boxShadow: '0 20px 60px rgba(13,13,13,0.08)',
            marginBottom: isMobile ? 48 : 80, border: '1px solid rgba(13,13,13,0.06)'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: 16, marginBottom: 32
            }}>
              <div>
                <div style={{ fontSize: 12, color: '#888', fontWeight: 600, letterSpacing: '0.05em', marginBottom: 4 }}>오늘의 학습</div>
                <div className="serif" style={{ fontSize: isMobile ? 24 : 28, fontWeight: 700 }}>Day 47 / 180</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', backgroundColor: '#E8FF47', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>
                <Clock size={14} />
                남은 시간 · 45분
              </div>
            </div>

            {[
              { n: 1, title: '어제 약점 워밍업', sub: "'r' 발음 + 과거형 시제", time: '10분', done: true },
              { n: 2, title: '오픽 빈출 표현', sub: '"Describe your job" 시나리오 5개', time: '15분', done: true },
              { n: 3, title: '즉흥 답변 훈련', sub: 'AI 면접관 질문 → 1분 답변 → 즉시 평가', time: '15분', active: true },
              { n: 4, title: '마무리 리뷰', sub: '오늘 약점 / 내일 예고', time: '5분' },
            ].map(s => (
              <div key={s.n} style={{
                display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 20,
                padding: isMobile ? 16 : 20, marginBottom: 8,
                backgroundColor: s.active ? '#0D0D0D' : '#FAFAFA',
                color: s.active ? '#F5F5F5' : '#0D0D0D',
                borderRadius: 12,
                opacity: s.done ? 0.5 : 1
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  backgroundColor: s.active ? '#E8FF47' : (s.done ? '#0D0D0D' : 'rgba(13,13,13,0.08)'),
                  color: s.active ? '#0D0D0D' : (s.done ? '#E8FF47' : '#0D0D0D'),
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 14, flexShrink: 0
                }}>
                  {s.done ? <Check size={16} /> : s.n}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: isMobile ? 14 : 16, marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: isMobile ? 12 : 13, opacity: 0.7, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: isMobile ? 'normal' : 'nowrap' }}>{s.sub}</div>
                </div>
                <div style={{ fontSize: isMobile ? 12 : 13, opacity: 0.6, flexShrink: 0 }}>{s.time}</div>
              </div>
            ))}

            <div style={{
              marginTop: 32, padding: 20,
              backgroundColor: '#FFFAE0',
              borderRadius: 12, borderLeft: '3px solid #E8FF47',
              fontSize: 14, color: '#444', lineHeight: 1.6
            }}>
              <div style={{ fontWeight: 700, color: '#0D0D0D', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#0D0D0D' }} />
                코치 메시지
              </div>
              "발음 정확도 72% → 81%. 페이스 좋습니다.<br/>다음 주는 인도식 발음 듣기 시작합시다."
            </div>
          </div>

          <h3 className="serif" style={{ fontSize: isMobile ? 24 : 32, fontWeight: 700, marginBottom: 32 }}>
            무엇이 다른가
          </h3>
          <div style={{ borderTop: '2px solid #0D0D0D', borderBottom: '2px solid #0D0D0D' }}>
            {[
              ['학원: 모두에게 같은 진도', '당신 상태에서 D-Day까지'],
              ['앱: "5분이면 OK" 거짓말', 'D-Day 보고 정직히 시간 알려줌'],
              ['화상회화: 그날 즉흥 대화', '목표 기반 체계적 코스'],
              ['결과 모름', '데이터로 매주 증명'],
              ['책임 없음', '결과 미달 시 환불'],
            ].map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: isMobile ? '1fr 30px 1fr' : '1fr 60px 1fr',
                padding: isMobile ? '16px 0' : '24px 0',
                borderTop: i > 0 ? '1px solid rgba(13,13,13,0.1)' : 'none',
                alignItems: 'center', gap: isMobile ? 8 : 16
              }}>
                <div style={{ fontSize: isMobile ? 13 : 18, color: '#888', textDecoration: 'line-through', textDecorationColor: 'rgba(13,13,13,0.3)' }}>{row[0]}</div>
                <div style={{ textAlign: 'center' }}>
                  <ArrowRight size={isMobile ? 16 : 20} strokeWidth={3} />
                </div>
                <div style={{ fontSize: isMobile ? 14 : 18, fontWeight: 600 }}>{row[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === MODULES === */}
      <section id="modules" style={{ padding: `${isMobile ? 80 : 160}px ${PADDING_X}px`, backgroundColor: '#0D0D0D', color: '#F5F5F5' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#E8FF47', letterSpacing: '0.1em', marginBottom: 24 }}>
            03 · MODULES
          </div>
          <h2 className="serif" style={{
            fontSize: isMobile ? 'clamp(32px, 8vw, 44px)' : 'clamp(40px, 5vw, 72px)',
            lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.03em',
            marginBottom: isMobile ? 48 : 64
          }}>
            필요한 것만,<br/>
            <span style={{ color: '#E8FF47' }}>또는 통째로.</span>
          </h2>

          {/* Single Modules */}
          <div style={{ marginBottom: isMobile ? 60 : 80 }}>
            <h3 className="serif" style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 13, color: '#E8FF47', letterSpacing: '0.1em' }}>SINGLE</span>
              단독 모듈
            </h3>
            <div className="stack-mobile-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
              {modules.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div key={i} className="module-card" style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 12, padding: isMobile ? 22 : 26
                  }}>
                    <Icon size={24} strokeWidth={1.5} style={{ marginBottom: 16, color: '#E8FF47' }} />
                    <div className="serif" style={{ fontSize: isMobile ? 18 : 20, fontWeight: 700, marginBottom: 12 }}>{m.name}</div>
                    <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#aaa' }}>
                      <span>📅 {m.dur}</span>
                      <span>⏱️ {m.daily}/일</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Combined Packages - 모두 동등하게 */}
          <div>
            <h3 className="serif" style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 13, color: '#E8FF47', letterSpacing: '0.1em' }}>BUNDLE</span>
              결합 패키지
            </h3>
            <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {packages.map((p, i) => (
                <div key={i} className="module-card" style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#F5F5F5',
                  borderRadius: 12, padding: isMobile ? 22 : 26
                }}>
                  <div className="serif" style={{ fontSize: isMobile ? 18 : 20, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: '#aaa', marginBottom: 16, lineHeight: 1.5 }}>
                    {p.items}
                  </div>
                  <div style={{ fontSize: 12, color: '#888', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    📅 {p.dur}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ marginTop: 48, fontSize: 13, color: '#888', textAlign: 'center' }}>
            정확한 가격과 일정은 베타 검증 후 확정됩니다. 베타 사용자는 평생 50% 할인 적용 예정.
          </p>
        </div>
      </section>

      {/* === HOW IT WORKS === */}
      <section id="how" style={{ padding: `${isMobile ? 80 : 160}px ${PADDING_X}px`, backgroundColor: '#F5F5F5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#888', letterSpacing: '0.1em', marginBottom: 24 }}>
            04 · HOW IT WORKS
          </div>
          <h2 className="serif" style={{
            fontSize: isMobile ? 'clamp(32px, 8vw, 44px)' : 'clamp(40px, 5vw, 72px)',
            lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.03em',
            marginBottom: isMobile ? 48 : 80
          }}>
            이렇게 진행됩니다.
          </h2>

          {[
            { n: '01', title: '진단', dur: '5~10분', desc: '미리 짜인 문장을 소리 내어 읽고, 짧은 문답을 합니다. 발음 정확도, 발화 속도, 문법, 어휘, 즉흥 발화 능력을 측정합니다.', outcome: '당신의 영어 약점 리포트' },
            { n: '02', title: '목표 입력', dur: '1분', desc: '무엇을 위해 / 언제까지 / 하루 얼마나 가능한지 알려주세요.', outcome: '오픽 / 면접 / 외국계 / 발령 / 이민 / D-Day / 30~120분' },
            { n: '03', title: '코치의 정직한 답', dur: '즉시', desc: '코치가 진단 + 목표를 보고 답합니다. 시간 충분하면 "실력 향상", 부족하면 "그 자리만큼은" — 가능한 길을 솔직히 제안합니다.', outcome: '"D-180이면 풀 코스로 실력 향상" 또는 "D-7이면 비상 모듈로 그 자리만큼은 책임"' },
            { n: '04', title: '매일 코스 + 매주 점검', dur: 'D-Day까지', desc: '매일 화면에 그날 메뉴가 뜸. 순서대로 클릭, 시킨 거만 하기. 매주 일요일 점검 + 다음 주 조정. D-Day에 결과 미달이면 환불.', outcome: 'D-Day까지 자동 진행' },
          ].map((step, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '60px 1fr' : '120px 1fr 1fr',
              gap: isMobile ? 20 : 40,
              padding: isMobile ? '32px 0' : '48px 0',
              borderTop: '1px solid rgba(13,13,13,0.1)'
            }}>
              <div className="serif" style={{ fontSize: isMobile ? 36 : 64, fontWeight: 800, lineHeight: 1, color: '#0D0D0D' }}>{step.n}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
                  <h3 className="serif" style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700 }}>{step.title}</h3>
                  <span style={{ fontSize: 13, color: '#888', fontWeight: 600 }}>{step.dur}</span>
                </div>
                <p style={{ fontSize: isMobile ? 14 : 16, lineHeight: 1.7, color: '#444', marginBottom: isMobile ? 16 : 0 }}>{step.desc}</p>
                {isMobile && (
                  <div style={{ backgroundColor: '#0D0D0D', color: '#E8FF47', padding: 16, borderRadius: 8, fontSize: 13, fontFamily: 'monospace', lineHeight: 1.6, marginTop: 12 }}>
                    <div style={{ fontSize: 10, opacity: 0.6, marginBottom: 6, letterSpacing: '0.1em' }}>OUTPUT</div>
                    {step.outcome}
                  </div>
                )}
              </div>
              {!isMobile && (
                <div style={{
                  backgroundColor: '#0D0D0D', color: '#E8FF47',
                  padding: 24, borderRadius: 8,
                  fontSize: 14, fontFamily: 'monospace', lineHeight: 1.6,
                  alignSelf: 'start'
                }}>
                  <div style={{ fontSize: 11, opacity: 0.6, marginBottom: 8, letterSpacing: '0.1em' }}>OUTPUT</div>
                  {step.outcome}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* === FOUNDER === */}
      <section style={{ padding: `${isMobile ? 80 : 160}px ${PADDING_X}px`, backgroundColor: '#0D0D0D', color: '#F5F5F5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#E8FF47', letterSpacing: '0.1em', marginBottom: 24 }}>
            05 · FOUNDER STORY
          </div>
          <h2 className="serif" style={{
            fontSize: isMobile ? 'clamp(28px, 7vw, 40px)' : 'clamp(36px, 4.5vw, 60px)',
            lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.03em',
            marginBottom: 48
          }}>
            창업자도<br/>같은 길을 걸었습니다.
          </h2>

          <div style={{ fontSize: isMobile ? 16 : 17, lineHeight: 1.8, color: '#ccc' }}>
            <p style={{ marginBottom: 24 }}>
              영어 때문에 외국계 회사 가는 걸 포기할까 고민하는 사람이 한국에 수만 명 있습니다.
              저도 그 중 한 사람이었습니다.
            </p>
            <p style={{ marginBottom: 24 }}>
              회화는 됩니다. 문법도 머리로는 압니다. 그런데 미팅에서 클라이언트가 <em style={{ color: '#E8FF47', fontStyle: 'normal', fontWeight: 600 }}>"What's your timeline?"</em> 물어보는 순간 입이 안 떨어집니다.
            </p>
            <p style={{ marginBottom: 24 }}>
              특히 인도/아랍 클라이언트의 영어는 알아듣기조차 어려웠습니다.
            </p>
            <p style={{ marginBottom: 24 }}>
              학원도 가봤고, 앱도 깔아봤고, 화상 회화도 해봤습니다.
              <strong style={{ color: '#F5F5F5' }}> 각각 따로따로, 한 달에 100만원씩 쓰면서요.</strong>
            </p>
            <p style={{
              marginTop: 40, padding: '24px 0',
              borderTop: '1px solid rgba(232, 255, 71, 0.3)',
              borderBottom: '1px solid rgba(232, 255, 71, 0.3)',
              fontSize: isMobile ? 18 : 22, color: '#E8FF47', fontWeight: 600,
              fontFamily: 'Fraunces, serif', lineHeight: 1.4
            }}>
              한 사람이 옆에서 "당신 상태에서 외국계 가려면 이 순서로 이렇게 하세요" 짜주고,<br/>
              매일 시킬 거 챙겨주고, 결과 책임지는 시스템.
            </p>
            <p style={{ marginTop: 28 }}>
              이런 게 없었습니다. 비싸지 않게.<br/>
              그래서 만들기 시작했습니다.
            </p>
            <div style={{ marginTop: 40, fontSize: 13, color: '#888' }}>
              — BeFluent 창업자
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section id="faq" style={{ padding: `${isMobile ? 80 : 160}px ${PADDING_X}px`, backgroundColor: '#FAFAFA' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#888', letterSpacing: '0.1em', marginBottom: 24 }}>
            06 · FAQ
          </div>
          <h2 className="serif" style={{
            fontSize: isMobile ? 'clamp(32px, 8vw, 44px)' : 'clamp(40px, 5vw, 72px)',
            lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.03em',
            marginBottom: isMobile ? 40 : 64
          }}>
            답하기 어려운<br/>질문들.
          </h2>

          <div>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                borderTop: '1px solid rgba(13,13,13,0.1)',
                ...(i === faqs.length - 1 ? { borderBottom: '1px solid rgba(13,13,13,0.1)' } : {})
              }}>
                <button
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                  style={{
                    width: '100%', padding: isMobile ? '20px 0' : '28px 0',
                    backgroundColor: 'transparent', border: 'none',
                    display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                    textAlign: 'left', gap: 16
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 8 : 16, flex: 1 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                      padding: '4px 8px', backgroundColor: '#0D0D0D', color: '#E8FF47',
                      borderRadius: 4, flexShrink: 0
                    }}>{faq.cat}</span>
                    <span style={{ fontSize: isMobile ? 15 : 17, fontWeight: 600 }}>{faq.q}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    style={{
                      flexShrink: 0,
                      marginTop: 4,
                      transform: activeFAQ === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms ease'
                    }}
                  />
                </button>
                <div className={`accordion-content ${activeFAQ === i ? 'open' : ''}`}>
                  <p style={{
                    fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: '#444',
                    paddingBottom: isMobile ? 20 : 28,
                    paddingLeft: isMobile ? 0 : 76,
                    paddingRight: isMobile ? 0 : 32,
                    whiteSpace: 'pre-line'
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section style={{
        padding: `${isMobile ? 80 : 160}px ${PADDING_X}px`,
        backgroundColor: '#E8FF47',
        position: 'relative', overflow: 'hidden'
      }} className="grain">
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 className="serif" style={{
            fontSize: isMobile ? 'clamp(36px, 9vw, 52px)' : 'clamp(48px, 7vw, 96px)',
            lineHeight: 1.05, fontWeight: 900, letterSpacing: '-0.04em',
            marginBottom: 32
          }}>
            시간이 없는 게 아닙니다.<br/>
            <span style={{ fontStyle: 'italic' }}>길이 안 보였던 겁니다.</span>
          </h2>
          <p style={{ fontSize: isMobile ? 18 : 22, lineHeight: 1.5, marginBottom: isMobile ? 40 : 64, maxWidth: '32ch', margin: `0 auto ${isMobile ? 40 : 64}px` }}>
            5분이면 알 수 있어요.<br/>
            당신의 D-Day까지, 무엇을 어떻게 해야 하는지.
          </p>

          <div style={{
            display: 'flex', gap: 16, justifyContent: 'center',
            flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row',
            marginBottom: 32, maxWidth: isMobile ? 320 : 'auto', margin: '0 auto 32px'
          }}>
            <button
              onClick={() => setShowBetaModal(true)}
              style={{
                backgroundColor: '#0D0D0D', color: '#E8FF47',
                border: 'none', padding: isMobile ? '20px 36px' : '24px 48px', borderRadius: 8,
                fontWeight: 700, fontSize: isMobile ? 16 : 18,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12
              }}>
              5분 무료 진단 받기 <ArrowRight size={22} />
            </button>
            <button
              onClick={() => setShowBetaModal(true)}
              style={{
                backgroundColor: 'transparent', color: '#0D0D0D',
                border: '2px solid #0D0D0D', padding: isMobile ? '18px 34px' : '22px 46px', borderRadius: 8,
                fontWeight: 700, fontSize: isMobile ? 16 : 18
              }}>
              베타 대기자 등록
            </button>
          </div>

          <p style={{ fontSize: 13, color: 'rgba(13,13,13,0.6)' }}>
            가입만으로 약점 리포트 즉시 제공. · 베타 평생 50% 할인.
          </p>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer style={{ padding: `${isMobile ? 60 : 80}px ${PADDING_X}px 40px`, backgroundColor: '#0D0D0D', color: '#888' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <div style={{
                  width: 32, height: 32, backgroundColor: '#E8FF47', borderRadius: 6,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#0D0D0D', fontWeight: 800, fontSize: 18
                }}>b</div>
                <span style={{ fontWeight: 700, fontSize: 18, color: '#F5F5F5' }}>BeFluent</span>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: '40ch' }}>
                D-Day가 있는 사람들을 위한 AI 영어 코치. 시간이 충분하면 실력을, 부족하면 그 자리만큼은. 약속한 만큼 책임집니다.
              </p>
              <div style={{ marginTop: 32, fontSize: 13 }}>
                <div style={{ marginBottom: 12, color: '#E8FF47', fontWeight: 600, letterSpacing: '0.05em' }}>OUR PROMISES</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['정직', '개인화', '데이터', '존중', '책임', '협상'].map(p => (
                    <span key={p} style={{
                      padding: '4px 10px', border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 100, fontSize: 12
                    }}>{p}</span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#F5F5F5', fontWeight: 600, marginBottom: 16, letterSpacing: '0.1em' }}>PRODUCT</div>
              <ul style={{ listStyle: 'none', fontSize: 13, lineHeight: 2.2 }}>
                <li>오픽/면접</li>
                <li>비즈니스 영어</li>
                <li>풀 코스</li>
              </ul>
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#F5F5F5', fontWeight: 600, marginBottom: 16, letterSpacing: '0.1em' }}>COMPANY</div>
              <ul style={{ listStyle: 'none', fontSize: 13, lineHeight: 2.2 }}>
                <li>창업자 이야기</li>
                <li>방법론</li>
                <li>FAQ</li>
                <li>베타 등록</li>
              </ul>
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#F5F5F5', fontWeight: 600, marginBottom: 16, letterSpacing: '0.1em' }}>CONTACT</div>
              <ul style={{ listStyle: 'none', fontSize: 13, lineHeight: 2.2 }}>
                <li>1:1 상담</li>
                <li>이메일</li>
                <li>카카오톡</li>
              </ul>
            </div>
          </div>
          <div style={{
            paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontSize: 12, flexWrap: 'wrap', gap: 12
          }}>
            <span>© 2026 BeFluent. All rights reserved.</span>
            <span style={{ color: '#E8FF47' }}>· Beta v0.1 · 거절하지 않습니다</span>
          </div>
        </div>
      </footer>

      {/* === BETA MODAL === */}  
      {showBetaModal && (
        <div className="modal-overlay" onClick={() => setShowBetaModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 className="serif" style={{ fontSize: 24, fontWeight: 700 }}>베타 대기자 등록</h3>
              <button
                onClick={() => setShowBetaModal(false)}
                style={{ background: 'transparent', border: 'none', fontSize: 24, color: '#888', cursor: 'pointer' }}
              >×</button>
            </div>

            <p style={{ fontSize: 14, color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
              정식 출시 시 우선 안내 + 평생 50% 할인.
            </p>

            <iframe
              src="https://tally.so/embed/lbV2aV?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="BeFluent 베타 대기자"
              style={{ borderRadius: 12, border: 'none' }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
