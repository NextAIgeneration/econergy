'use client';

export default function BatimentIntelligent() {
  const metrics = [
    { label: 'Surface Type', value: '2500 m²', desc: 'tertiaire/bureaux' },
    { label: 'Réduction Conso', value: '-65%', desc: 'vs baseline classique' },
    { label: 'ROI', value: '4-6 ans', desc: 'amortissement complet' },
    { label: 'Capteurs', value: '120', desc: 'multi-zones IoT' }
  ];

  const capabilities = [
    {
      title: 'Gestion Énergétique Intelligente',
      icon: '🧠',
      features: [
        'IA prédictive (météo + occupation)',
        'Optimisation temps réel (chauffage/clim)',
        'Peak shaving automatique',
        'Reporting carbone mensuel'
      ]
    },
    {
      title: 'Digital Twin Bâtiment',
      icon: '🏢',
      features: [
        'Scan 3D Matterport précision 1cm',
        'Plans BIM (Revit/IFC import)',
        'Overlay capteurs multi-étages',
        'Simulation thermique temps réel'
      ]
    },
    {
      title: 'Capteurs Edge Distribués',
      icon: '📡',
      features: [
        'Cortex A boards (par zone)',
        'Température / Humidité / CO2 / Luminosité',
        'Détection présence (PIR)',
        'Qualité air intérieur (COV)'
      ]
    },
    {
      title: 'Intégration Tri-Source',
      icon: '⚡',
      features: [
        'Vortex Schauberger (circuit eau)',
        'Tesla Tellurique (ancrage terre)',
        'Tesla Atmosphérique (toiture)',
        'Stockage batterie tampon'
      ]
    }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #3d2817 0%, #2d1b0e 50%, #1a0f08 100%)',
      color: '#e0e0e0',
      minHeight: '100vh',
      padding: '60px 20px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <a href="/" style={{
            color: '#FF9800',
            textDecoration: 'none',
            fontSize: '1em',
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            ← Retour à l'accueil
          </a>

          <h1 style={{
            fontSize: '3.5em',
            background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            fontWeight: 800
          }}>
            🏢 Bâtiment Intelligent
          </h1>

          <p style={{ fontSize: '1.3em', color: '#FFB74D', marginBottom: '30px' }}>
            Tertiaire autonome en énergie avec IA prédictive et digital twin BIM temps réel
          </p>
        </header>

        {/* Metrics */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{ color: '#FF9800', fontSize: '2em', marginBottom: '30px' }}>
            📊 Métriques Clés
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {metrics.map((metric, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, rgba(255, 152, 0, 0.15) 0%, rgba(255, 183, 77, 0.15) 100%)',
                padding: '20px',
                borderRadius: '10px',
                borderLeft: '4px solid #FF9800'
              }}>
                <div style={{ fontSize: '0.9em', color: '#FFB74D', marginBottom: '5px' }}>
                  {metric.label}
                </div>
                <div style={{ fontSize: '2em', fontWeight: 800, color: '#FF9800', marginBottom: '5px' }}>
                  {metric.value}
                </div>
                <div style={{ fontSize: '0.85em', color: '#aaa' }}>
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{ color: '#FF9800', fontSize: '2em', marginBottom: '30px', borderBottom: '2px solid rgba(255, 152, 0, 0.3)', paddingBottom: '10px' }}>
            🔧 Capacités Techniques
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {capabilities.map((cap, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <h4 style={{ color: '#FF9800', fontSize: '1.2em', marginBottom: '15px' }}>
                  {cap.icon} {cap.title}
                </h4>
                <ul style={{ color: '#c0c0c0', lineHeight: 1.8, paddingLeft: '20px' }}>
                  {cap.features.map((feature, fidx) => (
                    <li key={fidx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Visualisations */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#FF9800',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(255, 152, 0, 0.3)',
            paddingBottom: '10px'
          }}>
            📊 Architecture Visualisations
          </h2>

          <div style={{ display: 'grid', gap: '30px', marginTop: '30px' }}>
            <div>
              <h3 style={{ color: '#FFB74D', marginBottom: '15px', fontSize: '1.2em' }}>
                Smart Building Architecture
              </h3>
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '40px',
                borderRadius: '12px',
                textAlign: 'center',
                color: '#aaa'
              }}>
                <p>Schéma "Bâtiment Intelligent - Architecture IoT Multi-Zones" à venir</p>
                <p style={{ fontSize: '0.9em', marginTop: '10px' }}>
                  (Edge Devices par étage → Gateway LoRa → COSMIC Platform → BIM Digital Twin)
                </p>
              </div>
            </div>

            <div>
              <h3 style={{ color: '#FFB74D', marginBottom: '15px', fontSize: '1.2em' }}>
                Energy Optimization Flow
              </h3>
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '40px',
                borderRadius: '12px',
                textAlign: 'center',
                color: '#aaa'
              }}>
                <p>Schéma "Optimisation Énergétique IA - Prédiction → Action" à venir</p>
                <p style={{ fontSize: '0.9em', marginTop: '10px' }}>
                  (Météo + Occupation → IA Prédictive → Tri-Source Allocation → Peak Shaving)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '60px' }}>
          <p style={{ fontSize: '1em', color: '#FFB74D', marginBottom: '10px' }}>
            ♻️ Économie Circulaire Éco Locale • Autonomie Territoriale
          </p>
          <p style={{ fontSize: '0.9em', color: '#888' }}>
            FFT Cognitive Foundation • 1 econergy Platform • COSMIC EU 2025
          </p>
        </footer>

      </div>
    </div>
  );
}
