'use client';

export default function HardwareEdge() {
  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: 'linear-gradient(135deg, #3d2817 0%, #2d1b0e 50%, #1a0f08 100%)',
      color: '#e0e0e0',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <a href="/" style={{ color: '#FF9800', textDecoration: 'none', fontSize: '1.1em' }}>
          ← Retour
        </a>

        <header style={{ marginTop: '40px' }}>
          <h1 style={{
            fontSize: '3.5em',
            background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            fontWeight: 800,
            textShadow: '0 4px 20px rgba(0, 152, 255, 0.25), 0 8px 40px rgba(0, 152, 255, 0.15)'
          }}>
            📡 Hardware Edge IoT
          </h1>
          <p style={{
            fontSize: '1.3em',
            color: '#FFB74D',
            marginBottom: '40px'
          }}>
            Capteurs décentralisés + Edge Computing pour autonomie énergétique
          </p>
        </header>

        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          marginBottom: '30px',
          border: '1px solid rgba(255, 152, 0, 0.2)'
        }}>
          <h2 style={{
            color: '#FF9800',
            fontSize: '2em',
            marginBottom: '25px'
          }}>
            🔧 Stack Hardware
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px'
          }}>
            <div style={{ padding: '20px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '10px' }}>Orange Pi</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li>• ARM64 Quad-Core</li>
                <li>• 2GB RAM</li>
                <li>• WiFi 6 + Bluetooth 5.0</li>
                <li>• GPIO 40 pins</li>
              </ul>
            </div>

            <div style={{ padding: '20px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '10px' }}>Jetson Nano</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li>• GPU 128 CUDA cores</li>
                <li>• ML Edge (TensorRT)</li>
                <li>• Vision (OpenCV)</li>
                <li>• Prédiction consommation</li>
              </ul>
            </div>

            <div style={{ padding: '20px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '10px' }}>Arduino Sensors</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li>• DHT22 (temp/humidity)</li>
                <li>• SCT013 (current)</li>
                <li>• DS18B20 (temp water)</li>
                <li>• BMP280 (pressure)</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          marginBottom: '30px',
          border: '1px solid rgba(255, 152, 0, 0.2)'
        }}>
          <h2 style={{
            color: '#FF9800',
            fontSize: '2em',
            marginBottom: '25px'
          }}>
            📶 Connectivité Décentralisée
          </h2>
          <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
            <li><strong style={{ color: '#FFB74D' }}>LoRa Module (SX1276):</strong> Portée 15km, 20 kbps, ultra low power</li>
            <li><strong style={{ color: '#FFB74D' }}>IPFS Storage:</strong> Données décentralisées, immutables (CID hash)</li>
            <li><strong style={{ color: '#FFB74D' }}>MQTT Broker:</strong> Communication temps réel (Eclipse Mosquitto)</li>
            <li><strong style={{ color: '#FFB74D' }}>Mesh Network:</strong> Auto-routing si coupure réseau central</li>
          </ul>
        </section>

        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 152, 0, 0.2)'
        }}>
          <h2 style={{
            color: '#FF9800',
            fontSize: '2em',
            marginBottom: '25px'
          }}>
            ⚡ Edge Processing
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginBottom: '20px' }}>
            Traitement local des données pour réduire latence et dépendance cloud:
          </p>
          <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
            <li><strong style={{ color: '#FFB74D' }}>Analyse temps réel:</strong> Détection anomalies consommation (TensorFlow Lite)</li>
            <li><strong style={{ color: '#FFB74D' }}>Prédiction 24h:</strong> ML optimisation tri-source (LSTM model)</li>
            <li><strong style={{ color: '#FFB74D' }}>Autonomie:</strong> Fonctionne sans Internet (sync cloud périodique)</li>
            <li><strong style={{ color: '#FFB74D' }}>Sécurité:</strong> Données chiffrées (AES-256) avant transmission</li>
          </ul>
        </section>

        <footer style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '30px',
          borderTop: '1px solid rgba(255, 152, 0, 0.3)',
          color: '#FFB74D',
          fontSize: '1.2em'
        }}>
          ♻️ Économie Circulaire Éco Locale
        </footer>
      </div>
    </div>
  );
}
