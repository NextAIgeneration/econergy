'use client';

export default function DigitalTwin3D() {
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
            🏠 Digital Twin 3D
          </h1>
          <p style={{
            fontSize: '1.3em',
            color: '#FFB74D',
            marginBottom: '40px'
          }}>
            Matterport + WebGL + IoT Overlay = Visualisation Temps Réel
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
            📸 1. Scan Matterport
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginBottom: '20px' }}>
            Capture 3D précise du bâtiment avec caméra Matterport Pro2/Pro3.
          </p>
          <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
            <li><strong style={{ color: '#FFB74D' }}>Précision:</strong> 1cm (millimétrique pour points clés)</li>
            <li><strong style={{ color: '#FFB74D' }}>Durée scan:</strong> 2-4h pour 150m² (habitat) / 1-2 jours pour 2500m² (tertiaire)</li>
            <li><strong style={{ color: '#FFB74D' }}>Output:</strong> Nuage de points (PLY) + Textures 4K (JPG)</li>
            <li><strong style={{ color: '#FFB74D' }}>Métadonnées:</strong> Coordonnées GPS, orientation, timestamps</li>
          </ul>
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
            🎮 2. Modèle 3D Navigable
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginBottom: '20px' }}>
            Conversion en environnement WebGL interactif (Three.js + React Three Fiber).
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            <div style={{ padding: '20px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '10px' }}>Navigation</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li>• Visite virtuelle 360°</li>
                <li>• Zoom illimité</li>
                <li>• Annotations cliquables</li>
                <li>• Mesures distances</li>
              </ul>
            </div>

            <div style={{ padding: '20px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '10px' }}>Performance</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li>• LOD (Level of Detail)</li>
                <li>• Compression DRACO</li>
                <li>• Lazy loading</li>
                <li>• 60 FPS mobile</li>
              </ul>
            </div>

            <div style={{ padding: '20px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '10px' }}>Export</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li>• GLB (web)</li>
                <li>• OBJ (CAD)</li>
                <li>• FBX (Unity/Unreal)</li>
                <li>• USDZ (AR Apple)</li>
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
            📐 3. Plans 2D Annotés
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginBottom: '20px' }}>
            Extraction automatique des plans (top view) avec zones thermiques et électriques.
          </p>
          <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
            <li><strong style={{ color: '#FFB74D' }}>Plans architecturaux:</strong> RDC, étages, toiture (format DWG/PDF)</li>
            <li><strong style={{ color: '#FFB74D' }}>Zones thermiques:</strong> Heat map (isolation, ponts thermiques)</li>
            <li><strong style={{ color: '#FFB74D' }}>Circuits électriques:</strong> Tableau, prises, capteurs IoT</li>
            <li><strong style={{ color: '#FFB74D' }}>Annotations BIM:</strong> Conformité ISO 19650 (si requis)</li>
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
            📊 4. Overlay Capteurs IoT Temps Réel
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginBottom: '20px' }}>
            Superposition des données IoT live sur le modèle 3D (température, consommation, humidité).
          </p>
          <div style={{
            background: 'rgba(0, 152, 255, 0.1)',
            padding: '30px',
            borderRadius: '10px',
            marginTop: '30px',
            border: '1px solid rgba(0, 152, 255, 0.3)'
          }}>
            <h3 style={{ color: '#00E0FF', fontSize: '1.5em', marginBottom: '20px' }}>Visualisations Disponibles</h3>
            <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
              <li><strong style={{ color: '#FFB74D' }}>Heat Map Température:</strong> Gradient rouge/bleu (15°C → 25°C)</li>
              <li><strong style={{ color: '#FFB74D' }}>Consommation Électrique:</strong> Flèche animée (W/m²)</li>
              <li><strong style={{ color: '#FFB74D' }}>Production Tri-Source:</strong> Graphes temps réel (Schauberger/Tesla)</li>
              <li><strong style={{ color: '#FFB74D' }}>Alertes Anomalies:</strong> Badge rouge si seuil dépassé</li>
              <li><strong style={{ color: '#FFB74D' }}>Historique 7 jours:</strong> Timeline navigable (slider)</li>
            </ul>
          </div>
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
            🚀 Stack Technique
          </h2>
          <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
            <li><strong style={{ color: '#FFB74D' }}>Frontend:</strong> Next.js + React Three Fiber (R3F) + Drei</li>
            <li><strong style={{ color: '#FFB74D' }}>3D Processing:</strong> Blender (automation Python) + CloudCompare</li>
            <li><strong style={{ color: '#FFB74D' }}>WebSocket:</strong> Socket.IO (flux temps réel capteurs)</li>
            <li><strong style={{ color: '#FFB74D' }}>Storage:</strong> IPFS (modèles 3D) + Supabase (métadonnées)</li>
            <li><strong style={{ color: '#FFB74D' }}>Hosting:</strong> Vercel (frontend) + AWS S3 (assets GLB)</li>
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
