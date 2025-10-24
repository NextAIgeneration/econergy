'use client';

export default function EnergieTriSource() {
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
            ⚡ Énergie Tri-Source
          </h1>
          <p style={{
            fontSize: '1.3em',
            color: '#FFB74D',
            marginBottom: '40px'
          }}>
            Hydraulique + Géothermique + Atmosphérique = 100% Autonomie
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
            🌊 1. Énergie Hydraulique (40%)
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginBottom: '20px' }}>
            Turbine à implosion hydrodynamique basée sur mouvement vortex optimisé.
          </p>
          <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
            <li><strong style={{ color: '#FFB74D' }}>Principe:</strong> Mouvement vortex + implosion (vs explosion classique)</li>
            <li><strong style={{ color: '#FFB74D' }}>Source:</strong> Circuit fermé eau (recyclage 100%)</li>
            <li><strong style={{ color: '#FFB74D' }}>Rendement:</strong> 40% de la production totale</li>
            <li><strong style={{ color: '#FFB74D' }}>Avantage:</strong> Zéro déchet, ultra-silencieux, maintenance faible</li>
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
            🌍 2. Énergie Géothermique (35%)
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginBottom: '20px' }}>
            Captation des courants telluriques terrestres par électrodes géomagnétiques.
          </p>
          <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
            <li><strong style={{ color: '#FFB74D' }}>Principe:</strong> Électrodes géomagnétiques enfouies (10-50m profondeur)</li>
            <li><strong style={{ color: '#FFB74D' }}>Source:</strong> Champ magnétique terrestre + ionosphère</li>
            <li><strong style={{ color: '#FFB74D' }}>Rendement:</strong> 35% de la production totale</li>
            <li><strong style={{ color: '#FFB74D' }}>Avantage:</strong> Disponible 24/7, pas de météo, pas de pièces mobiles</li>
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
            ☁️ 3. Énergie Atmosphérique (25%)
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginBottom: '20px' }}>
            Captation de l'électricité atmosphérique (charge ionosphère + foudre diffuse).
          </p>
          <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
            <li><strong style={{ color: '#FFB74D' }}>Principe:</strong> Antenne haute altitude + condensateurs haute tension</li>
            <li><strong style={{ color: '#FFB74D' }}>Source:</strong> Gradient électrique air (100V/m à 10km)</li>
            <li><strong style={{ color: '#FFB74D' }}>Rendement:</strong> 25% de la production totale</li>
            <li><strong style={{ color: '#FFB74D' }}>Avantage:</strong> Complément parfait (actif jour/nuit + orages)</li>
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
            🔋 Stockage & Distribution
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            <div style={{ padding: '25px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '15px' }}>Batteries Lithium</h3>
              <p style={{ color: '#c0c0c0', lineHeight: 1.8 }}>
                Batteries lithium haute capacité (13.5 kWh). Autonomie 48h minimum sans production.
              </p>
            </div>

            <div style={{ padding: '25px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '15px' }}>Inverter Hybride</h3>
              <p style={{ color: '#c0c0c0', lineHeight: 1.8 }}>
                Victron MultiPlus (5kW). Gestion intelligente des 3 sources + backup réseau si nécessaire.
              </p>
            </div>

            <div style={{ padding: '25px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '15px' }}>Smart Grid Local</h3>
              <p style={{ color: '#c0c0c0', lineHeight: 1.8 }}>
                Micro-réseau DC/AC. Optimisation temps réel (IA). Surplus → voisins ou revente.
              </p>
            </div>
          </div>
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
