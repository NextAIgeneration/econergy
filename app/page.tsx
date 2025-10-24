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
      background: 'linear-gradient(135deg, #1a3a1a 0%, #0f1f0a 50%, #0a1405 100%)',
      color: '#e0e0e0',
      minHeight: '100vh'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; overflow-x: hidden; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .pulse { animation: pulse 2s ease-in-out infinite; }
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
            background: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            fontWeight: 800
          }}>
            ⚡ 1 econergy Platform
          </h1>
          <p style={{ fontSize: '1.3em', color: '#81C784', marginBottom: '30px' }}>
            IoT Smart Energy • Orange Pi / Jetson Nano • LoRa / IPFS • Monitoring Temps Réel
          </p>
          <p style={{ fontSize: '1em', color: '#888', marginBottom: '30px' }}>
            Hardware Open Source • Connectivité Décentralisée • Analytics IA • Appel COSMIC EU
          </p>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
            {['✅ Production Ready', '📡 LoRa + IPFS', '🏠 IoT Smart Home', '📊 Analytics IA', '🇪🇺 COSMIC EU'].map((badge, idx) => (
              <span key={idx} style={{
                padding: '8px 16px',
                background: 'rgba(76, 175, 80, 0.2)',
                border: '1px solid rgba(76, 175, 80, 0.4)',
                borderRadius: '20px',
                fontSize: '0.9em',
                color: '#4CAF50',
                fontWeight: 600
              }}>{badge}</span>
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
          <h2 style={{ color: '#4CAF50', fontSize: '2em', marginBottom: '30px', textAlign: 'center', fontWeight: 700 }}>
            📊 Architecture IoT Interactive
          </h2>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '30px', flexWrap: 'wrap' }}>
            {[
              { id: 'overview', label: '⚡ Vue Ensemble' },
              { id: 'hardware', label: '🔧 Hardware' },
              { id: 'connectivity', label: '📡 Connectivité' },
              { id: 'monitoring', label: '📊 Monitoring' },
              { id: 'integration', label: '🏠 Intégration' }
            ].map((diagram) => (
              <button key={diagram.id} onClick={() => handleManualSelect(diagram.id)} style={{
                padding: '10px 20px',
                borderRadius: '15px',
                border: activeDiagram === diagram.id ? '2px solid #4CAF50' : '1px solid rgba(255, 255, 255, 0.2)',
                background: activeDiagram === diagram.id ? 'rgba(76, 175, 80, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                color: activeDiagram === diagram.id ? '#81C784' : '#888',
                cursor: 'pointer',
                fontSize: '0.9em',
                fontWeight: 600
              }}>{diagram.label}</button>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '15px',
            padding: '40px',
            textAlign: 'center',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            border: '1px solid rgba(76, 175, 80, 0.3)'
          }}>
            <div style={{ fontSize: '5em', marginBottom: '20px' }} className="pulse">
              {activeDiagram === 'overview' && '⚡'}
              {activeDiagram === 'hardware' && '🔧'}
              {activeDiagram === 'connectivity' && '📡'}
              {activeDiagram === 'monitoring' && '📊'}
              {activeDiagram === 'integration' && '🏠'}
            </div>
            <h3 style={{ color: '#81C784', fontSize: '1.8em', marginBottom: '15px', fontWeight: 700 }}>
              {activeDiagram === 'overview' && 'Architecture Globale'}
              {activeDiagram === 'hardware' && 'Orange Pi / Jetson Nano / Arduino'}
              {activeDiagram === 'connectivity' && 'LoRa / IPFS / Cloud'}
              {activeDiagram === 'monitoring' && 'Analytics Temps Réel'}
              {activeDiagram === 'integration' && 'Plans 2D Habitation'}
            </h3>
            <p style={{ color: '#aaa', fontSize: '1.1em' }}>
              Diagramme détaillé disponible dans la documentation
            </p>
          </div>

          <div style={{ marginTop: '20px', textAlign: 'center', color: '#666', fontSize: '0.85em' }}>
            {autoPlay ? '▶️ Auto-play actif (5s)' : '⏸️ Auto-play en pause'}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#4CAF50', fontSize: '2em', marginBottom: '30px', textAlign: 'center', fontWeight: 700 }}>
            🔧 Stack Hardware IoT
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {[
              { icon: '🍊', title: 'Orange Pi', desc: 'SBC ARM64 - GPIO / I2C / SPI - 2GB RAM' },
              { icon: '🤖', title: 'Jetson Nano', desc: 'GPU CUDA - ML Edge - Computer Vision' },
              { icon: '⚙️', title: 'Arduino Sensors', desc: 'Temperature / Humidity / Energy Meters' },
              { icon: '📡', title: 'LoRa Module', desc: 'Long Range - Low Power - 15km range' },
              { icon: '🔋', title: 'Solar + Battery', desc: 'Autonomie 72h - Panels 100W' },
              { icon: '📊', title: 'IPFS Storage', desc: 'Décentralisé - Immutable - P2P' }
            ].map((hw, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '30px',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3.5em', marginBottom: '15px' }}>{hw.icon}</div>
                <h3 style={{ color: '#81C784', fontSize: '1.4em', marginBottom: '12px', fontWeight: 700 }}>{hw.title}</h3>
                <p style={{ color: '#c0c0c0', lineHeight: 1.6, fontSize: '0.95em' }}>{hw.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '60px' }}>
          <p style={{ fontSize: '1.2em', color: '#81C784', marginBottom: '15px', fontWeight: 600 }}>
            1 econergy Platform • IoT Smart Energy • COSMIC EU 2025
          </p>
          <p style={{ fontSize: '0.95em', color: '#888' }}>
            Développé par Fred French Touch • Green IoT Made in BE/FR/EU
          </p>
        </footer>

      </div>
    </div>
  );
}
