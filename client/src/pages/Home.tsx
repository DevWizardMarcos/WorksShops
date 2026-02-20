import { useState, useEffect } from 'react';
import '../styles/home.css';
import alineImg from '../assets/img/aline.png';

interface Aula {
  id: string;
  nome: string;
  dataInicio: string;
  horario: string;
  modalidade: 'online' | 'presencial';
  area: string;
  descricao: string;
  vagas: number;
  vagasDisponiveis: number;
  instrutor: string;
  instrutorImagem: string;
  instrutorLinkedin: string;
  duracao: string;
}

interface Professor {
  id: string;
  nome: string;
  imagem: string;
  linkedin: string;
  gradiente: string;
  aulas: string[]; // IDs das aulas
}

const aulasDoMes: Aula[] = [
  {
    id: '1',
    nome: 'Git/Hub na Prática',
    dataInicio: '2026-03-03',
    horario: '19:00 - 21:00',
    modalidade: 'presencial',
    area: 'Tecnologia',
    descricao: 'Aprenda Git e GitHub na prática para versionamento de código.',
    vagas: 20,
    vagasDisponiveis: 5,
    instrutor: 'Marcos Paulo',
    instrutorImagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marcos',
    instrutorLinkedin: 'https://linkedin.com/in/marcospaulo',
    duracao: '4 semanas'
  },
  {
    id: '2',
    nome: 'Desenvolvendo um backend com FastAPI e SqlAlchemy',
    dataInicio: '2026-03-10',
    horario: '19:00 - 21:00',
    modalidade: 'presencial',
    area: 'Tecnologia',
    descricao: 'Crie backends robustos com FastAPI e SqlAlchemy.',
    vagas: 15,
    vagasDisponiveis: 3,
    instrutor: 'Gabriel Souto',
    instrutorImagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=gabriel',
    instrutorLinkedin: 'https://linkedin.com/in/gabrielsouto',
    duracao: '6 semanas'
  },
  {
    id: '3',
    nome: 'Marca Pessoal na Prática',
    dataInicio: '2026-03-17',
    horario: '19:00 - 21:00',
    modalidade: 'presencial',
    area: 'Design',
    descricao: 'Construa sua marca pessoal e presença online.',
    vagas: 18,
    vagasDisponiveis: 8,
    instrutor: 'Vander',
    instrutorImagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vander',
    instrutorLinkedin: 'https://linkedin.com/in/vander',
    duracao: '3 semanas'
  },
  {
    id: '4',
    nome: 'Landing Page que Converte',
    dataInicio: '2026-03-24',
    horario: '19:00 - 21:00',
    modalidade: 'presencial',
    area: 'Design',
    descricao: 'Crie landing pages que convertem visitantes em clientes.',
    vagas: 20,
    vagasDisponiveis: 12,
    instrutor: 'Vander',
    instrutorImagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vander',
    instrutorLinkedin: 'https://linkedin.com/in/vander',
    duracao: '4 semanas'
  },
  {
    id: '5',
    nome: 'Tráfego Pago do Zero',
    dataInicio: '2026-03-31',
    horario: '19:00 - 21:00',
    modalidade: 'presencial',
    area: 'Marketing',
    descricao: 'Aprenda a estruturar campanhas de tráfego pago do zero.',
    vagas: 25,
    vagasDisponiveis: 10,
    instrutor: 'Nickolas',
    instrutorImagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nickolas',
    instrutorLinkedin: 'https://linkedin.com/in/nickolas',
    duracao: '5 semanas'
  },
  {
    id: '6',
    nome: 'SM - Figma avançado',
    dataInicio: '2026-04-07',
    horario: '19:00 - 21:00',
    modalidade: 'presencial',
    area: 'Design',
    descricao: 'Domine o Figma em nível avançado para criar designs profissionais.',
    vagas: 16,
    vagasDisponiveis: 9,
    instrutor: 'Vander',
    instrutorImagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vander',
    instrutorLinkedin: 'https://linkedin.com/in/vander',
    duracao: '4 semanas'
  },
  {
    id: '7',
    nome: 'Docker Descomplicado',
    dataInicio: '2026-04-14',
    horario: '19:00 - 21:00',
    modalidade: 'presencial',
    area: 'Tecnologia',
    descricao: 'Aprenda Docker de forma simples e prática.',
    vagas: 18,
    vagasDisponiveis: 6,
    instrutor: 'Walter',
    instrutorImagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=walter',
    instrutorLinkedin: 'https://linkedin.com/in/walter',
    duracao: '3 semanas'
  },
  {
    id: '8',
    nome: 'Criação de Imagens com IA',
    dataInicio: '2026-04-21',
    horario: '19:00 - 21:00',
    modalidade: 'presencial',
    area: 'Design',
    descricao: 'Use IA para criar imagens profissionais impressionantes.',
    vagas: 20,
    vagasDisponiveis: 14,
    instrutor: 'Vander',
    instrutorImagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vander',
    instrutorLinkedin: 'https://linkedin.com/in/vander',
    duracao: '2 semanas'
  },
  {
    id: '9',
    nome: 'Campanhas Digitais: Planejamento, Execução e Métricas',
    dataInicio: '2026-04-28',
    horario: '19:00 - 21:00',
    modalidade: 'presencial',
    area: 'Marketing',
    descricao: 'Planeje, execute e analise campanhas digitais eficazes.',
    vagas: 22,
    vagasDisponiveis: 8,
    instrutor: 'Barba',
    instrutorImagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=barba',
    instrutorLinkedin: 'https://linkedin.com/in/barba',
    duracao: '5 semanas'
  },
  {
    id: '10',
    nome: 'Instagram Estratégico: Posts e Stories que Convertem',
    dataInicio: '2026-05-05',
    horario: '19:00 - 21:00',
    modalidade: 'presencial',
    area: 'Marketing',
    descricao: 'Domine a estratégia do Instagram para crescimento orgânico.',
    vagas: 20,
    vagasDisponiveis: 11,
    instrutor: 'Angelia Mares',
    instrutorImagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=angelia',
    instrutorLinkedin: 'https://linkedin.com/in/angeliamares',
    duracao: '4 semanas'
  },
  {
    id: '11',
    nome: 'Portfólio Estratégico: Como Criar uma Gera Oportunidades',
    dataInicio: '2026-05-12',
    horario: '15:00 - 17:00',
    modalidade: 'presencial',
    area: 'Design',
    descricao: 'Crie um portfólio que abre portas e gera oportunidades.',
    vagas: 18,
    vagasDisponiveis: 5,
    instrutor: 'Barba',
    instrutorImagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=barba',
    instrutorLinkedin: 'https://linkedin.com/in/barba',
    duracao: '3 semanas'
  },
  {
    id: '12',
    nome: 'Deploy na Vercel: Colocando Seu Projeto no Ar',
    dataInicio: '2026-05-19',
    horario: '19:00 - 21:00',
    modalidade: 'presencial',
    area: 'Tecnologia',
    descricao: 'Aprenda a fazer deploy de projetos na Vercel de forma simples.',
    vagas: 16,
    vagasDisponiveis: 7,
    instrutor: 'Marcos Paulo',
    instrutorImagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marcos',
    instrutorLinkedin: 'https://linkedin.com/in/marcospaulo',
    duracao: '2 semanas'
  }
];

const professores: Professor[] = [
  {
    id: '1',
    nome: 'Marcos Paulo',
    imagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=marcos',
    linkedin: 'https://linkedin.com/in/marcospaulo',
    gradiente: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    aulas: ['1', '12']
  },
  {
    id: '2',
    nome: 'Gabriel Souto',
    imagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=gabriel',
    linkedin: 'https://linkedin.com/in/gabrielsouto',
    gradiente: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    aulas: ['2']
  },
  {
    id: '3',
    nome: 'Vander',
    imagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vander',
    linkedin: 'https://linkedin.com/in/vander',
    gradiente: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    aulas: ['3', '4', '6', '7', '8']
  },
  {
    id: '4',
    nome: 'Nickolas',
    imagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nickolas',
    linkedin: 'https://linkedin.com/in/nickolas',
    gradiente: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    aulas: ['5']
  },
  {
    id: '5',
    nome: 'Barba',
    imagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=barba',
    linkedin: 'https://linkedin.com/in/barba',
    gradiente: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    aulas: ['9', '11']
  },
  {
    id: '6',
    nome: 'Angelia Mares',
    imagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=angelia',
    linkedin: 'https://linkedin.com/in/angeliamares',
    gradiente: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    aulas: ['10']
  },
  {
    id: '7',
    nome: 'Walter',
    imagem: 'https://api.dicebear.com/7.x/avataaars/svg?seed=walter',
    linkedin: 'https://linkedin.com/in/walter',
    gradiente: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
    aulas: ['7']
  }
];

export default function Home() {
  const [aulas, setAulas] = useState<Aula[]>(aulasDoMes);
  const [filtroModalidade, setFiltroModalidade] = useState<string>('todos');
  const [filtroArea, setFiltroArea] = useState<string>('todos');
  const [aulasFiltrads, setAulasFiltrads] = useState<Aula[]>(aulasDoMes);

  useEffect(() => {
    let resultado = aulas;

    if (filtroModalidade !== 'todos') {
      resultado = resultado.filter(aula => aula.modalidade === filtroModalidade);
    }

    if (filtroArea !== 'todos') {
      resultado = resultado.filter(aula => aula.area === filtroArea);
    }

    setAulasFiltrads(resultado);
  }, [filtroModalidade, filtroArea, aulas]);

  const scrollToAulas = () => {
    const element = document.getElementById('aulas-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const areas = ['Tecnologia', 'Design', 'Marketing'];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Aulas Disponíveis Este Mês</h1>
            <p className="hero-subtitle">
              Explore nossos cursos especializados em Tecnologia, Design e Marketing. 
              Aprenda com instrutores experientes e transforme sua carreira.
            </p>
            <button className="btn btn-primary hero-btn" onClick={scrollToAulas}>
              Explorar Aulas
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </button>
          </div>
          
          {/* Hero Image */}
          <div className="hero-image">
            <img src={alineImg} alt="Instrutor" />
          </div>
        </div>
      </section>

      {/* Seção de Filtros */}
      <section className="filters-section">
        <div className="container">
          <h2>Filtrar Aulas</h2>
          
          <div className="filters-grid">
            {/* Filtro Modalidade */}
            <div className="filter-group">
              <label htmlFor="modalidade">Modalidade:</label>
              <select 
                id="modalidade" 
                value={filtroModalidade}
                onChange={(e) => setFiltroModalidade(e.target.value)}
              >
                <option value="todos">Todas as Modalidades</option>
                <option value="online">Online</option>
                <option value="presencial">Presencial</option>
              </select>
            </div>

            {/* Filtro Área */}
            <div className="filter-group">
              <label htmlFor="area">Área:</label>
              <select 
                id="area"
                value={filtroArea}
                onChange={(e) => setFiltroArea(e.target.value)}
              >
                <option value="todos">Todas as Áreas</option>
                {areas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            {/* Contador de resultados */}
            <div className="filter-results">
              <span className="results-count">{aulasFiltrads.length} aula(s) encontrada(s)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Professores */}
      <section className="professores-section">
        <div className="container">
          <h2>Conheça Nossos Instrutores</h2>
          
          <div className="professores-grid">
            {professores.map((prof) => {
              const aulasDoProf = aulasDoMes.filter(aula => prof.aulas.includes(aula.id));
              
              return (
                <div key={prof.id} className="professor-card">
                  {/* Avatar com Gradiente */}
                  <div className="professor-avatar-container" style={{ background: prof.gradiente }}>
                    <img 
                      src={prof.imagem} 
                      alt={prof.nome}
                      className="professor-avatar-img"
                    />
                  </div>
                  
                  {/* Informações do Professor */}
                  <div className="professor-card-content">
                    <h3 className="professor-card-name">{prof.nome}</h3>
                    
                    {/* Aulas que ele leciona */}
                    <div className="professor-aulas">
                      <p className="aulas-title">Aulas este mês:</p>
                      <ul className="aulas-list">
                        {aulasDoProf.map(aula => (
                          <li key={aula.id}>{aula.nome}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Link LinkedIn */}
                    <a 
                      href={prof.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="professor-linkedin-btn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                      </svg>
                      Ver Perfil
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção de Aulas */}
      <section id="aulas-section" className="aulas-section">
        <div className="container">
          <h2>Aulas do Mês</h2>
          
          {aulasFiltrads.length > 0 ? (
            <div className="aulas-grid">
              {aulasFiltrads.map((aula, index) => (
                <div 
                  key={aula.id} 
                  className="aula-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Badge de Últimas Vagas */}
                  {aula.vagasDisponiveis <= 3 && (
                    <div className="badge badge-primary ultimas-vagas">
                      ⚡ Últimas {aula.vagasDisponiveis} Vagas
                    </div>
                  )}

                  {/* Badge de Modalidade */}
                  <div className={`badge badge-secondary modalidade-badge ${aula.modalidade}`}>
                    {aula.modalidade === 'online' ? '🌐 Online' : '📍 Presencial'}
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="aula-card-content">
                    <h3 className="aula-nome">{aula.nome}</h3>
                    
                    <p className="aula-descricao">{aula.descricao}</p>

                    {/* Informações */}
                    <div className="aula-info">
                      <div className="info-item">
                        <span className="info-label">📅 Data:</span>
                        <span className="info-value">
                          {new Date(aula.dataInicio).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      
                      <div className="info-item">
                        <span className="info-label">🕐 Horário:</span>
                        <span className="info-value">{aula.horario}</span>
                      </div>

                      {/* Professor */}
                      <div className="info-item professor-section">
                        <span className="info-label">👨‍🏫 Instrutor:</span>
                        <div className="professor-info">
                          <img 
                            src={aula.instrutorImagem} 
                            alt={aula.instrutor}
                            className="professor-avatar"
                          />
                          <div className="professor-details">
                            <span className="professor-name">{aula.instrutor}</span>
                            <a 
                              href={aula.instrutorLinkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="professor-linkedin"
                              title="Ver perfil no LinkedIn"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                              </svg>
                              LinkedIn
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="info-item">
                        <span className="info-label">⏱️ Duração:</span>
                        <span className="info-value">{aula.duracao}</span>
                      </div>

                      <div className="info-item">
                        <span className="info-label">👥 Vagas:</span>
                        <span className="info-value">
                          {aula.vagasDisponiveis} de {aula.vagas}
                        </span>
                      </div>
                    </div>

                    {/* Barra de Progresso de Vagas */}
                    <div className="vagas-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${((aula.vagas - aula.vagasDisponiveis) / aula.vagas) * 100}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">
                        {Math.round(((aula.vagas - aula.vagasDisponiveis) / aula.vagas) * 100)}% preenchido
                      </span>
                    </div>
                  </div>

                  {/* Botão de Ação */}
                  <button className="btn btn-primary aula-btn">
                    Quero Participar
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>Nenhuma aula encontrada com os filtros selecionados.</p>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setFiltroModalidade('todos');
                  setFiltroArea('todos');
                }}
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Infinity School</h4>
              <p>Transformando carreiras através da educação em tecnologia, design e marketing.</p>
            </div>

            <div className="footer-section">
              <h4>Contato</h4>
              <ul>
                <li><a href="mailto:contato@infinityschool.com">contato@infinityschool.com</a></li>
                <li><a href="tel:+5511999999999">(11) 99999-9999</a></li>
                <li>São Paulo, SP - Brasil</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Redes Sociais</h4>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#aulas-section">Aulas</a></li>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Infinity School. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
