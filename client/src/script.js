/* 
  JavaScript - Infinity School Landing Page
  Funcionalidades:
  - Sistema de abas para programação
  - Scroll suave entre seções
  - Animações ao entrar na viewport
*/

// ============= SISTEMA DE ABAS =============
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      
      // Remove active de todos os botões e conteúdos
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Adiciona active ao botão clicado e seu conteúdo
      this.classList.add('active');
      document.getElementById(tabName).classList.add('active');
    });
  });

  // ============= SCROLL SUAVE =============
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ============= ANIMAÇÃO AO ENTRAR NA VIEWPORT =============
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observa cards e elementos para animação
  document.querySelectorAll('.card, .professor-card, .aula-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });

  // ============= BOTÕES DE AÇÃO =============
  const btnParticipate = document.querySelector('.btn-cta');
  if (btnParticipate) {
    btnParticipate.addEventListener('click', function() {
      // Já será tratado por onclick="openParticipationModal()"
    });
  }

  // ============= FORM DE PARTICIPAÇÃO =============
  const participationForm = document.getElementById('participationForm');
  if (participationForm) {
    participationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleFormSubmit();
    });
  }

  // ============= LINKS SOCIAIS =============
  // document.querySelectorAll('.social-link').forEach(link => {
  //   link.addEventListener('click', function(e) {
  //     e.preventDefault();
  //     alert('Link de rede social - Configure os URLs reais conforme necessário');
  //   });
  // });

  // ============= SCROLL INDICATOR FADE OUT =============
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
      } else {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.pointerEvents = 'auto';
      }
    });

    scrollIndicator.style.transition = 'opacity 0.3s ease';
  }
});

// ============= FUNÇÃO AUXILIAR PARA SCROLL =============
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ============= FUNÇÕES DE MODAL DE PARTICIPAÇÃO =============
function openParticipationModal() {
  const modal = document.getElementById('participationModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeParticipationModal() {
  const modal = document.getElementById('participationModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    resetParticipationForm();
  }
}

function handleGuestStatusChange() {
  const hasGuests = document.getElementById('hasGuests').value;
  const guestsSection = document.getElementById('guestsSection');
  
  if (hasGuests === 'sim') {
    guestsSection.style.display = 'block';
  } else {
    guestsSection.style.display = 'none';
    document.getElementById('guestCount').value = '';
    document.getElementById('guestFieldsContainer').innerHTML = '';
  }
}

function generateGuestFields() {
  const guestCount = parseInt(document.getElementById('guestCount').value);
  const container = document.getElementById('guestFieldsContainer');
  
  container.innerHTML = ''; // Limpar campos anteriores
  
  if (guestCount > 0) {
    for (let i = 1; i <= guestCount; i++) {
      const guestCard = document.createElement('div');
      guestCard.className = 'guest-card';
      guestCard.innerHTML = `
        <div class="guest-card-title">Convidado ${i}</div>
        <div class="form-group">
          <label for="guestName${i}">Nome Completo *</label>
          <input type="text" id="guestName${i}" name="guestName${i}" required placeholder="Nome do convidado">
        </div>
        <div class="form-group">
          <label for="guestPhone${i}">Telefone (WhatsApp) *</label>
          <input type="tel" id="guestPhone${i}" name="guestPhone${i}" required placeholder="(11) 99999-9999">
        </div>
      `;
      container.appendChild(guestCard);
    }
  }
}

function handleFormSubmit() {
  const participantName = document.getElementById('participantName').value;
  const participantPhone = document.getElementById('participantPhone').value;
  const participantStatus = document.getElementById('participantStatus').value;
  const hasGuests = document.getElementById('hasGuests').value;
  
  let formData = {
    participante: {
      nome: participantName,
      telefone: participantPhone,
      ehAluno: participantStatus === 'aluno'
    },
    convidados: []
  };
  
  // Coletar dados de convidados se houver
  if (hasGuests === 'sim') {
    const guestCount = parseInt(document.getElementById('guestCount').value);
    for (let i = 1; i <= guestCount; i++) {
      const guestName = document.getElementById(`guestName${i}`).value;
      const guestPhone = document.getElementById(`guestPhone${i}`).value;
      
      if (guestName && guestPhone) {
        formData.convidados.push({
          nome: guestName,
          telefone: guestPhone
        });
      }
    }
  }
  
  // Log dos dados
  console.log('Dados de Inscrição:', formData);
  
  // Construir mensagem para WhatsApp
  let messageText = `🎓 *NOVA INSCRIÇÃO - INFINITY SCHOOL* 🎓\n\n`;
  messageText += `📋 *PARTICIPANTE*\n`;
  messageText += `Nome: ${participantName}\n`;
  messageText += `Telefone: ${participantPhone}\n`;
  messageText += `Status: ${participantStatus === 'aluno' ? 'Aluno da Infinity School' : 'Não é aluno'}\n`;
  
  if (hasGuests === 'sim' && formData.convidados.length > 0) {
    messageText += `\n👥 *CONVIDADOS (${formData.convidados.length})*\n`;
    formData.convidados.forEach((guest, index) => {
      messageText += `${index + 1}. ${guest.nome} - ${guest.telefone}\n`;
    });
  }
  
  messageText += `\n✅ Mensagem automática do formulário da landing page`;
  
  // Enviar para WhatsApp
  sendToWhatsApp(messageText);
  
  // Mostrar mensagem de sucesso
  alert(`Obrigado, ${participantName}! Sua inscrição foi recebida com sucesso.\nEntraremos em contato em breve através do WhatsApp (${participantPhone}).`);
  
  // Fechar modal e resetar formulário
  closeParticipationModal();
}

// ============= FUNÇÃO PARA ENVIAR AO WHATSAPP =============
function sendToWhatsApp(message) {
  const phoneNumber = '5531987927056'; // Número de destino
  const encodedMessage = encodeURIComponent(message);
  
  // Abrir WhatsApp Web com a mensagem pré-preenchida
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // Abrir em nova aba
  window.open(whatsappUrl, '_blank');
}

function resetParticipationForm() {
  document.getElementById('participationForm').reset();
  document.getElementById('guestsSection').style.display = 'none';
  document.getElementById('guestFieldsContainer').innerHTML = '';
}

// ============= FECHAR MODAL AO CLICAR FORA =============
window.addEventListener('click', function(event) {
  const modal = document.getElementById('participationModal');
  if (event.target === modal) {
    closeParticipationModal();
  }
});
