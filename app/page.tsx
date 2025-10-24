'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeDiagram, setActiveDiagram] = useState('overview');
  const [autoPlay, setAutoPlay] = useState(true);

  const diagrams = ['overview', 'hardware', 'connectivity', 'monitoring', 'integration'];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveDiagram((current) => {
        const currentIndex = diagrams.indexOf(current);
        const nextIndex = (currentIndex + 1) % diagrams.length;
        return diagrams[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleManualSelect = (diagramId: string) => {
    setActiveDiagram(diagramId);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #3d2817 0%, #2d1b0e 50%, #1a0f08 100%)',
      color: '#e0e0e0',
      minHeight: '100vh'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; overflow-x: hidden; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .animate-on-scroll { animation: fadeInUp 0.6s ease-out forwards; }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

        <header style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          marginBottom: '40px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h1 style={{
            fontSize: '3.5em',
            background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            fontWeight: 800,
            textShadow: '0 4px 20px rgba(0, 152, 255, 0.25), 0 8px 40px rgba(0, 152, 255, 0.15)'
          }}>
            ⚡ 1 econergy Platform
          </h1>
          <p style={{ fontSize: '1.3em', color: '#FFB74D', marginBottom: '30px' }}>
            Économie Circulaire Éco Locale • IoT Smart Energy • Orange Pi / Jetson Nano • LoRa / IPFS
          </p>
          <p style={{ fontSize: '1em', color: '#888', marginBottom: '30px' }}>
            Hardware Open Source • Connectivité Décentralisée • Analytics IA • Autonomie Territoriale • COSMIC EU
          </p>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
            {['♻️ Économie Circulaire', '🏠 Autonomie Locale', '📡 LoRa + IPFS', '📊 Analytics IA', '🇪🇺 COSMIC EU'].map((badge, idx) => (
              <span key={idx} style={{
                padding: '8px 16px',
                background: 'rgba(255, 152, 0, 0.2)',
                border: '1px solid rgba(255, 152, 0, 0.4)',
                borderRadius: '20px',
                fontSize: '0.9em',
                color: '#FF9800',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 152, 0, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(255, 152, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 152, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >{badge}</span>
            ))}
          </div>
        </header>

        <section style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '20px',
          padding: '40px 30px',
          marginBottom: '40px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h2 style={{ color: '#FF9800', fontSize: '2em', marginBottom: '20px', borderBottom: '2px solid rgba(255, 152, 0, 0.3)', paddingBottom: '10px' }}>
            📊 Architecture IoT Interactive
          </h2>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '30px', flexWrap: 'wrap', marginTop: '30px' }}>
            {[
              { id: 'overview', label: '⚡ Vue Ensemble' },
              { id: 'hardware', label: '🔧 Hardware' },
              { id: 'connectivity', label: '📡 Connectivité' },
              { id: 'monitoring', label: '📊 Monitoring' },
              { id: 'integration', label: '🏠 Intégration' }
            ].map((diagram) => (
              <button key={diagram.id} onClick={() => handleManualSelect(diagram.id)} style={{
                padding: '12px 20px',
                borderRadius: '8px',
                border: activeDiagram === diagram.id ? '2px solid rgba(255, 152, 0, 0.8)' : '2px solid rgba(255, 255, 255, 0.1)',
                background: activeDiagram === diagram.id ? 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)' : 'rgba(255, 255, 255, 0.05)',
                color: activeDiagram === diagram.id ? '#fff' : '#c0c0c0',
                cursor: 'pointer',
                fontSize: '0.95em',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                fontFamily: "'Poppins', sans-serif"
              }}
              onMouseOver={(e) => {
                if (activeDiagram !== diagram.id) {
                  e.currentTarget.style.background = 'rgba(255, 152, 0, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 152, 0, 0.4)';
                  e.currentTarget.style.color = '#FF9800';
                }
              }}
              onMouseOut={(e) => {
                if (activeDiagram !== diagram.id) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#c0c0c0';
                }
              }}
              >{diagram.label}</button>
            ))}
          </div>

          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '12px',
            padding: '40px',
            textAlign: 'center',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            border: '1px solid rgba(255, 152, 0, 0.3)',
            fontFamily: 'monospace',
            color: '#FFB74D',
            lineHeight: 1.8,
            overflowX: 'auto',
            fontSize: '0.9em'
          }}>
            <div style={{ fontSize: '5em', marginBottom: '20px' }} className="pulse">
              {activeDiagram === 'overview' && '⚡'}
              {activeDiagram === 'hardware' && '🔧'}
              {activeDiagram === 'connectivity' && '📡'}
              {activeDiagram === 'monitoring' && '📊'}
              {activeDiagram === 'integration' && '🏠'}
            </div>
            <h3 style={{ color: '#FFB74D', fontSize: '1.8em', marginBottom: '15px', fontWeight: 700 }}>
              {activeDiagram === 'overview' && 'Architecture Globale IoT'}
              {activeDiagram === 'hardware' && 'Orange Pi / Jetson Nano / Arduino'}
              {activeDiagram === 'connectivity' && 'LoRa / IPFS / Cloud'}
              {activeDiagram === 'monitoring' && 'Analytics Temps Réel'}
              {activeDiagram === 'integration' && 'Plans 2D Habitation'}
            </h3>
            <p style={{ color: '#aaa', fontSize: '1.1em' }}>
              Diagramme ASCII détaillé en cours de développement
            </p>
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center', color: '#666', fontSize: '0.85em' }}>
            {autoPlay ? '▶️ Auto-play actif (5s)' : '⏸️ Auto-play en pause'}
          </div>
        </section>

        <section className="animate-on-scroll" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '40px', margin: '30px 0', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ color: '#FF9800', fontSize: '2em', marginBottom: '20px', borderBottom: '2px solid rgba(255, 152, 0, 0.3)', paddingBottom: '10px' }}>
            🏠 Captation 3D & Digital Twin
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8, marginBottom: '30px' }}>
            Numérisation complète des habitations en 3D (Matterport + LiDAR) pour créer des jumeaux numériques interactifs intégrant les capteurs IoT, flux énergie temps réel et plans 2D navigables.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '30px', marginBottom: '40px' }}>
            {[
              {
                icon: '📷',
                title: 'Capture Matterport',
                desc: 'Scanner 3D habitation complète - Précision 1cm - Visites virtuelles immersives 360°'
              },
              {
                icon: '🗺️',
                title: 'Plans 2D Intelligents',
                desc: 'Plans architecturaux annotés - Zones thermiques - Flux énergie - Emplacements capteurs IoT'
              },
              {
                icon: '🎮',
                title: 'Modèle 3D Interactif',
                desc: 'Navigation temps réel WebGL - Overlay données capteurs - Visualisation flux énergie tri-source'
              },
              {
                icon: '📊',
                title: 'Digital Twin Live',
                desc: 'Synchronisation IoT temps réel - Historiques métriques - Prédictions IA - Dashboard immersif'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'transform 0.3s, border-color 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(255, 152, 0, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <h4 style={{
                  color: '#FF9800',
                  fontSize: '1.2em',
                  marginBottom: '15px'
                }}>
                  {feature.icon} {feature.title}
                </h4>
                <p style={{
                  color: '#c0c0c0',
                  fontSize: '1em',
                  lineHeight: 1.6
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-on-scroll" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '40px', margin: '30px 0', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ color: '#FF9800', fontSize: '2em', marginBottom: '20px', borderBottom: '2px solid rgba(255, 152, 0, 0.3)', paddingBottom: '10px' }}>
            🔧 Stack Hardware IoT
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>
            {[
              { icon: '🍊', title: 'Orange Pi', desc: 'SBC ARM64 - GPIO / I2C / SPI - 2GB RAM' },
              { icon: '🤖', title: 'Jetson Nano', desc: 'GPU CUDA - ML Edge - Computer Vision' },
              { icon: '⚙️', title: 'Arduino Sensors', desc: 'Temperature / Humidity / Energy Meters' },
              { icon: '📡', title: 'LoRa Module', desc: 'Long Range - Low Power - 15km range' },
              { icon: '⚡', title: 'Énergie Tri-Source', desc: 'Vortex Schauberger (eau) + Tesla tellurique/atmosphérique - Autonomie 100%' },
              { icon: '📊', title: 'IPFS Storage', desc: 'Décentralisé - Immutable - P2P' }
            ].map((hw, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textAlign: 'center',
                transition: 'transform 0.3s, border-color 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(255, 152, 0, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
              >
                <div style={{ fontSize: '3.5em', marginBottom: '15px' }}>{hw.icon}</div>
                <h4 style={{ color: '#FF9800', fontSize: '1.2em', marginBottom: '15px', fontWeight: 700 }}>{hw.title}</h4>
                <p style={{ color: '#c0c0c0', lineHeight: 1.6, fontSize: '1em' }}>{hw.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-on-scroll" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '40px', margin: '30px 0', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ color: '#FF9800', fontSize: '2em', marginBottom: '20px', borderBottom: '2px solid rgba(255, 152, 0, 0.3)', paddingBottom: '10px' }}>
            📈 Métriques Habitation Pilote
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { value: '150 m²', label: 'Surface Scannée 3D' },
              { value: '28', label: 'Capteurs IoT Déployés' },
              { value: '24/7', label: 'Monitoring Temps Réel' },
              { value: '-42%', label: 'Réduction Consommation' },
              { value: '100%', label: 'Autonomie Énergétique' },
              { value: '0€', label: 'Coût Cloud (IPFS)' }
            ].map((metric, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.15) 0%, rgba(255, 183, 77, 0.15) 100%)',
                  padding: '20px',
                  borderRadius: '10px',
                  borderLeft: '4px solid #FF9800',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={{
                  fontSize: '2em',
                  fontWeight: 800,
                  color: '#FF9800',
                  marginBottom: '5px'
                }}>
                  {metric.value}
                </div>
                <div style={{
                  color: '#FFB74D',
                  fontSize: '0.95em'
                }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-on-scroll" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '40px', margin: '30px 0', borderRadius: '15px', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ color: '#FF9800', fontSize: '2em', marginBottom: '20px', borderBottom: '2px solid rgba(255, 152, 0, 0.3)', paddingBottom: '10px' }}>
            🎯 Use Cases COSMIC
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8, marginBottom: '30px' }}>
            Découvrez les applications concrètes de la plateforme econergy à travers différents secteurs et échelles d'autonomie énergétique.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>
            {[
              {
                icon: '🏠',
                title: 'Habitat Autonome',
                desc: 'Maison 100% autonome en énergie avec digital twin 3D et capteurs IoT temps réel',
                link: '/use-cases/habitat-autonome'
              },
              {
                icon: '🏢',
                title: 'Bâtiment Intelligent',
                desc: 'Tertiaire autonome avec IA prédictive et digital twin BIM temps réel',
                link: '/use-cases/batiment-intelligent'
              },
              {
                icon: '🏘️',
                title: 'Quartier Résilient',
                desc: 'Collectivités autonomes avec micro-réseau local et gouvernance participative',
                link: '/use-cases/quartier-resilient'
              },
              {
                icon: '🏛️',
                title: 'Patrimoine & Tourisme',
                desc: 'Monuments historiques autonomes avec digital twin patrimonial et expérience visiteur enrichie',
                link: '/use-cases/patrimoine-tourisme'
              },
              {
                icon: '🎓',
                title: 'Campus Éducatif',
                desc: 'Université autonome avec living lab IoT et engagement communautaire étudiant',
                link: '/use-cases/campus-educatif'
              }
            ].map((usecase, idx) => (
              <a
                key={idx}
                href={usecase.link}
                style={{
                  textDecoration: 'none',
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s ease',
                  display: 'block'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(255, 152, 0, 0.5)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 152, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '3em', marginBottom: '15px', textAlign: 'center' }}>{usecase.icon}</div>
                <h4 style={{
                  color: '#FF9800',
                  fontSize: '1.2em',
                  marginBottom: '15px',
                  fontWeight: 700,
                  textAlign: 'center'
                }}>
                  {usecase.title}
                </h4>
                <p style={{
                  color: '#c0c0c0',
                  lineHeight: 1.6,
                  fontSize: '0.95em',
                  textAlign: 'center'
                }}>
                  {usecase.desc}
                </p>
              </a>
            ))}
          </div>
        </section>

        <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '60px', color: '#666' }}>
          <p style={{ fontSize: '1em', color: '#FFB74D', marginBottom: '10px' }}>
            ♻️ Économie Circulaire Éco Locale • Autonomie Territoriale • Zéro Dépendance
          </p>
          <p style={{ fontSize: '0.9em', color: '#888', marginTop: '10px' }}>
            FFT Cognitive Foundation • 1 econergy Platform • COSMIC EU 2025
          </p>
          <p style={{ marginTop: '15px' }}>
            <a href="https://github.com/NextAIgeneration/econergy" style={{ color: '#FF9800', textDecoration: 'none', marginRight: '20px' }}>GitHub</a>
            <span style={{ color: '#666', fontSize: '0.9em' }}>Documentation en cours de rédaction</span>
          </p>
        </footer>

      </div>
    </div>
  );
}
