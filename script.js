/**
 * Dr. Cley Rocha — Endocrinologia e Metabologia
 * Interatividade, Efeitos Parallax e Animações
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Elementos DOM ---
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const monumentalBg = document.getElementById('monumentalBg');
  const heroVisual = document.getElementById('heroVisual');
  const heroDoctorImg = document.getElementById('heroDoctorImg');
  const badgeVertical = document.getElementById('badgeVertical');
  const badgeSignature = document.getElementById('badgeSignature');
  const accordionItems = document.querySelectorAll('.accordion-item');
  const modal = document.getElementById('bookingModal');
  const modalClose = document.getElementById('modalClose');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const tiltCards = document.querySelectorAll('[data-tilt]');

  // --- 1. Navbar Scroll Effect ---
  const handleScrollNavbar = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScrollNavbar, { passive: true });
  handleScrollNavbar();

  // --- 2. Mobile Menu Toggle ---
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Fechar ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // --- 3. Parallax Efeitos Monumental & Hero ---
  let isMobile = window.innerWidth <= 768;
  window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
  });

  // Parallax no Scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Monumental Typography "ENDOCRINO" Parallax
    if (monumentalBg && scrollY < 900) {
      const offset = scrollY * 0.28;
      monumentalBg.style.transform = `translate(-50%, ${offset}px)`;
    }

    // Hero Visual Parallax
    if (heroVisual && scrollY < 900 && !isMobile) {
      const offsetDoctor = scrollY * 0.12;
      heroVisual.style.transform = `translateY(${offsetDoctor}px)`;
    }

    // Badges Parallax
    if (badgeVertical && scrollY < 900 && !isMobile) {
      const offsetVertical = scrollY * -0.15;
      badgeVertical.style.transform = `translateY(${offsetVertical}px)`;
    }

    if (badgeSignature && scrollY < 900 && !isMobile) {
      const offsetSignature = scrollY * 0.08;
      badgeSignature.style.transform = `translateY(${offsetSignature}px)`;
    }
  }, { passive: true });

  // Parallax interativo com o Mouse (Desktop)
  if (!isMobile && heroVisual) {
    const heroSection = document.getElementById('hero');
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (monumentalBg) {
        const textElement = monumentalBg.querySelector('.monumental-text');
        if (textElement) {
          textElement.style.transform = `translate(${x * -25}px, ${y * -15}px)`;
        }
      }

      if (heroDoctorImg) {
        heroDoctorImg.style.transform = `translate(${x * 12}px, ${y * 10}px) scale(1.02)`;
      }

      if (badgeVertical) {
        badgeVertical.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
      }

      if (badgeSignature) {
        badgeSignature.style.transform = `translate(${x * -15}px, ${y * -12}px)`;
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      if (monumentalBg) {
        const textElement = monumentalBg.querySelector('.monumental-text');
        if (textElement) {
          textElement.style.transform = 'translate(0px, 0px)';
        }
      }
      if (heroDoctorImg) {
        heroDoctorImg.style.transform = 'translate(0px, 0px) scale(1)';
      }
      if (badgeVertical) {
        badgeVertical.style.transform = 'translate(0px, 0px)';
      }
      if (badgeSignature) {
        badgeSignature.style.transform = 'translate(0px, 0px)';
      }
    });
  }

  // --- 4. Interactive 3D Card Tilt ---
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 768) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // --- 5. Accordion Interativo (FAQ) ---
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros itens para manter elegância
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.accordion-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Alterna o atual
      item.classList.toggle('active', !isActive);
      trigger.setAttribute('aria-expanded', !isActive);
    });
  });

  // Abre o primeiro item do FAQ por padrão para instruir o usuário
  if (accordionItems.length > 0) {
    accordionItems[0].classList.add('active');
    const firstTrigger = accordionItems[0].querySelector('.accordion-trigger');
    if (firstTrigger) firstTrigger.setAttribute('aria-expanded', 'true');
  }

  // --- 6. Modal de Agendamento ---
  const openModal = (e) => {
    if (e) e.preventDefault();
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // --- 7. Smooth Anchor Scroll com Offset da Navbar ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
