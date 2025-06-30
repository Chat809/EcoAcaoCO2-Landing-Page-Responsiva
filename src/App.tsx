import './index.css';
import heroBg from './assets/bg-hero.jpg';

// Ícones dos cards anteriores
import energiaIcon from './assets/energia.png';
import desmatamentoIcon from './assets/desmatamento.png';
import transporteIcon from './assets/transporte.png';
import eficienciaIcon from './assets/eficiencia.png';
import politicaIcon from './assets/politica.png';

// Imagens dos impactos
import efeitoEstufa from './assets/efeito-estufa.png';
import queimadas from './assets/oceano.jpg';
import seca from './assets/seca.png';

// Componentes
import StrategyCard from './components/StrategyCard';
import ImpactCard from './components/ImpactCard';


function App() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <div className="container navbar-content">
          <div className="logo">EcoAçãoCO₂</div>

          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#intro">Introdução</a></li>
              <li><a href="#measures">Medidas</a></li>
              <li><a href="#consequences">Consequências</a></li>
              <li><a href="#action">Ação</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <img
          src={heroBg}
          alt="Imagem de fundo floresta"
          className="hero-background"
        />
        <div className="gradient-overlay"></div>

        <div className="container hero-content">
  <h1>Redução de Emissão de Gás Carbônico</h1>
  <p>
    A chave para mitigar as mudanças climáticas e proteger o nosso planeta
    para as futuras gerações.
  </p>
  

  {/* Botão para acessar o jogo */}
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <a
      href="https://marianasilva028.itch.io/cards-c"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        backgroundColor: '#5e2b18',
        color: 'white',
        padding: '15px 25px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '16px',
      }}
    >
      Clique Neste Botão e Tenha Acesso ao Nosso Jogo
    </a>
  </div>
</div>



      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section" id="intro">
        <div className="container about-content">
          <h2>A Urgência da Ação Climática Global</h2>
          <p>
            A redução das emissões de CO₂ é uma necessidade imperativa para mitigar as mudanças climáticas
            e salvaguardar a saúde do nosso planeta. A emissão desenfreada de carbono e outros gases de efeito estufa (GEE)
            está exacerbando a crise ambiental que enfrentamos, com consequências cada vez mais visíveis.
          </p>
          <p>
            A solução reside na transição decisiva para iniciativas sustentáveis, focadas em diminuir drasticamente
            as emissões de GEE e em investir massivamente em fontes de energia renováveis, limpas e acessíveis.
            Somente através de um esforço coletivo e ambicioso podemos construir um futuro mais resiliente e equilibrado.
          </p>
        </div>
      </section>

      {/* ===== STRATEGIES SECTION ===== */}
      <section className="strategies-section" id="measures">
        <div className="container">
          <h2>Medidas Estratégicas para Reduzir Emissões de CO₂</h2>

          <div className="strategies-grid">
            <StrategyCard
              iconSrc={energiaIcon}
              title="Energia Renovável"
              description="Priorizar o uso de fontes de energia limpa (solar,
eólica, hidrelétrica e biomassa) em detrimento dos
combustíveis fósseis."
            />
            <StrategyCard
              iconSrc={desmatamentoIcon}
              title="Redução do Desmatamento"
              description="Combater o desmatamento e a degradação florestal,
que são grandes fontes de emissão de CO₂ e perda
de biodiversidade."
            />
            <StrategyCard
              iconSrc={transporteIcon}
              title="Transporte Sustentável"
              description="Promover ativamente o uso de transporte público
eficiente, bicicletas, e veículos elétricos para diminuir
a pegada de carbono urbana."
            />
            <StrategyCard
              iconSrc={eficienciaIcon}
              title="Eficiência Energética"
              description="Incentivar o uso de equipamentos e tecnologias de
alta eficiência energética em toda a cadeia produtiva
e no consumo doméstico."
            />
            <StrategyCard
              iconSrc={politicaIcon}
              title="Políticas de Redução"
              description="Implementar e fortalecer regulamentações e
incentivos para que empresas e indústrias reduzam
suas emissões de CO₂."
            />
          </div>
        </div>
      </section>


      {/* impacts-section */}

      <section className="impacts-section" id="consequences">
        <div className="container">
          <h2>Impactos das Altas Taxas de CO₂ no Planeta</h2>

          <div className="impacts-grid">
            <ImpactCard
              imageSrc={efeitoEstufa}
              alt="Imagem de trânsito com poluição"
              title="Intensificação do Efeito Estufa e Mudanças Climáticas"
              description="O aumento da concentração de CO₂ na atmosfera exacerba o efeito estufa.
Embora seja um processo natural vital, seu desequilíbrio causa o aquecimento
global, desencadeando mudanças climáticas com eventos extremos como
furacões mais potentes, secas severas e ondas de calor intensas."
              caption="A poluição atmosférica urbana é um sintoma visível do excesso de emissões."
            />
            <ImpactCard
              imageSrc={queimadas}
              alt="Imagem de queimadas"
              title="Desmatamento e Queimadas"
              description="Os oceanos absorvem cerca de um quarto do CO₂ emitido pela atividade
humana, o que leva à acidificação da água do mar. Este fenômeno ameaça
ecossistemas marinhos, especialmente organismos com conchas e esqueletos
de carbonato de cálcio, como corais e moluscos, impactando toda a cadeia
alimentar."
              caption="Desmatamento e queimadas aceleram a crise climática."
              reverse
            />
            <ImpactCard
              imageSrc={seca}
              alt="Imagem de seca no Brasil"
              title="Crise Hídrica e Agrícola: Exemplo da Seca no Brasil (2024)"
              description="A seca histórica que atingiu o Brasil em 2024, superando em área a de 2015,
ilustra a vulnerabilidade crescente. Vastas regiões enfrentaram seca severa a
excepcional, com graves impactos na agricultura, no abastecimento de água e
na geração de energia, evidenciando a urgência de adaptação e mitigação."
              caption="A seca extrema no Brasil em 2024 é um alerta dos impactos já presentes."
            />
          </div>
        </div>
      </section>
      {/* Footer CTA */}
      <section className="cta-section" id="action">
        <div className="container cta-content">
          <h2>Junte-se a Nós: Aja Agora Pelo Nosso Futuro!</h2>
          <p>
            A redução das emissões de gases de efeito estufa é uma responsabilidade compartilhada e uma corrida contra o tempo.
            Cada ação, individual ou coletiva, conta para mitigar os impactos das mudanças climáticas, proteger a biodiversidade
            e assegurar um planeta habitável para todos.
          </p>

          <div className="cta-buttons">
            <a href="#intro" className="btn-outline">Aprenda Mais e Engaje-se</a>
            <a href="#measures" className="btn-filled">Revise as Medidas Sustentáveis</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <p>© 2025 Redução de Emissão de CO₂. Todos os direitos reservados.</p>
          <p>Um esforço para um ambiente mais saudável.</p>
        </div>
      </footer>


    </>
  );
}

export default App;
