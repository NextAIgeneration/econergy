'use client';

export default function BackendSaaS() {
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
            ☁️ Backend SaaS
          </h1>
          <p style={{
            fontSize: '1.3em',
            color: '#FFB74D',
            marginBottom: '40px'
          }}>
            FastAPI + Supabase + Redis + ML Pipeline = Cloud Orchestration
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
            🐍 API FastAPI (Python 3.11)
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginBottom: '20px' }}>
            Backend ultra-performant avec typage strict et documentation auto-générée.
          </p>
          <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
            <li><strong style={{ color: '#FFB74D' }}>REST API:</strong> CRUD installations, capteurs, alertes (OpenAPI 3.1)</li>
            <li><strong style={{ color: '#FFB74D' }}>WebSocket:</strong> Flux temps réel (Socket.IO / ASGI)</li>
            <li><strong style={{ color: '#FFB74D' }}>Auth:</strong> JWT (RS256) + OAuth2 (optional Google/GitHub)</li>
            <li><strong style={{ color: '#FFB74D' }}>Validation:</strong> Pydantic models (type-safe)</li>
            <li><strong style={{ color: '#FFB74D' }}>Documentation:</strong> Swagger UI + ReDoc (auto-sync)</li>
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
            🗄️ Base de Données Supabase
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginBottom: '20px' }}>
            PostgreSQL 15 avec Row Level Security (RLS) et Real-time subscriptions.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            <div style={{ padding: '25px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '15px' }}>Tables Principales</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li>• users (auth)</li>
                <li>• installations</li>
                <li>• sensors</li>
                <li>• timeseries_data</li>
                <li>• alerts</li>
              </ul>
            </div>

            <div style={{ padding: '25px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '15px' }}>Fonctionnalités</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li>• RLS (tenant isolation)</li>
                <li>• Realtime (websocket)</li>
                <li>• Storage (3D models)</li>
                <li>• Edge Functions</li>
              </ul>
            </div>

            <div style={{ padding: '25px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '15px' }}>Extensions</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li>• PostGIS (geo data)</li>
                <li>• TimescaleDB (time-series)</li>
                <li>• pg_cron (jobs)</li>
                <li>• pg_vector (embeddings)</li>
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
            ⚡ Redis Cache & Queues
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginBottom: '20px' }}>
            Cache in-memory ultra-rapide + queues asynchrones (Celery/RQ).
          </p>
          <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
            <li><strong style={{ color: '#FFB74D' }}>Cache API:</strong> Réponses fréquentes (TTL 5-60min)</li>
            <li><strong style={{ color: '#FFB74D' }}>Session Store:</strong> JWT blacklist + user sessions</li>
            <li><strong style={{ color: '#FFB74D' }}>Pub/Sub:</strong> Communication inter-services (microservices)</li>
            <li><strong style={{ color: '#FFB74D' }}>Task Queue:</strong> ML predictions, exports PDF, emails (Celery)</li>
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
            🤖 ML Pipeline (Prédictions IA)
          </h2>
          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginBottom: '20px' }}>
            Modèles LSTM/Transformer pour optimisation énergétique prédictive.
          </p>
          <div style={{
            background: 'rgba(0, 152, 255, 0.1)',
            padding: '30px',
            borderRadius: '10px',
            marginTop: '30px',
            border: '1px solid rgba(0, 152, 255, 0.3)'
          }}>
            <h3 style={{ color: '#00E0FF', fontSize: '1.5em', marginBottom: '20px' }}>Modèles Déployés</h3>
            <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
              <li><strong style={{ color: '#FFB74D' }}>Prédiction 24h:</strong> LSTM (TensorFlow) - consommation future</li>
              <li><strong style={{ color: '#FFB74D' }}>Détection Anomalies:</strong> Isolation Forest (sklearn) - pannes</li>
              <li><strong style={{ color: '#FFB74D' }}>Optimisation Tri-Source:</strong> RL Agent (Stable Baselines3)</li>
              <li><strong style={{ color: '#FFB74D' }}>Classification Patterns:</strong> Transformer (Hugging Face)</li>
            </ul>
          </div>

          <p style={{ color: '#c0c0c0', fontSize: '1.1em', lineHeight: 1.8, marginTop: '25px' }}>
            <strong style={{ color: '#FFB74D' }}>Entraînement:</strong> Scheduled re-training (weekly) avec données agrégées.
            <strong style={{ color: '#FFB74D' }}>Inférence:</strong> Edge (Jetson Nano) + Cloud (fallback si offline).
          </p>
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
            📊 Monitoring & Observability
          </h2>
          <ul style={{ color: '#c0c0c0', lineHeight: 2.5, fontSize: '1.1em' }}>
            <li><strong style={{ color: '#FFB74D' }}>Logs:</strong> Loguru (structured JSON) → Loki / CloudWatch</li>
            <li><strong style={{ color: '#FFB74D' }}>Metrics:</strong> Prometheus + Grafana (latency, error rate, throughput)</li>
            <li><strong style={{ color: '#FFB74D' }}>Tracing:</strong> OpenTelemetry (distributed tracing)</li>
            <li><strong style={{ color: '#FFB74D' }}>Alerting:</strong> PagerDuty / Slack (seuils critiques)</li>
            <li><strong style={{ color: '#FFB74D' }}>Uptime:</strong> UptimeRobot (99.9% SLA target)</li>
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
            🚀 Infrastructure & Hosting
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            <div style={{ padding: '20px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '10px' }}>Production</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li>• Railway / Fly.io</li>
                <li>• Docker containers</li>
                <li>• Auto-scaling</li>
                <li>• SSL/TLS (Let's Encrypt)</li>
              </ul>
            </div>

            <div style={{ padding: '20px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '10px' }}>CI/CD</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li>• GitHub Actions</li>
                <li>• Pytest (coverage 80%+)</li>
                <li>• Ruff (linting)</li>
                <li>• Semver (releases)</li>
              </ul>
            </div>

            <div style={{ padding: '20px', background: 'rgba(255, 152, 0, 0.1)', borderRadius: '10px' }}>
              <h3 style={{ color: '#FFB74D', fontSize: '1.3em', marginBottom: '10px' }}>Security</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2, listStyle: 'none', padding: 0 }}>
                <li>• Rate limiting (20 req/s)</li>
                <li>• CORS (whitelist)</li>
                <li>• Input validation</li>
                <li>• Secrets (Vault/1Password)</li>
              </ul>
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
