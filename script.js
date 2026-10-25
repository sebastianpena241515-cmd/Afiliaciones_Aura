const siteConfig = {
  advisorName: 'Aura Luz Arévalo',
  whatsappNumber: '573112097671',
  whatsappMessage: 'Hola, quisiera recibir orientación sobre un trámite de EPS',
  email: 'auraluz241515@hotmail.com',
  confirmedEmail: true,
};

const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.href = whatsappUrl;
});

document.querySelector('#current-year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú');
  });
});

document.querySelectorAll('[data-email]').forEach((link) => {
  if (siteConfig.confirmedEmail && siteConfig.email) {
    link.href = `mailto:${siteConfig.email}`;
    link.textContent = siteConfig.email;
  } else {
    link.removeAttribute('href');
    link.textContent = 'Disponible cuando sea confirmado';
  }
});

document.querySelectorAll('[data-email-service]').forEach((link) => {
  const service = link.dataset.emailService;
  const subject = `Solicitud de orientación: ${service}`;
  const body = `Hola, necesito orientación sobre ${service.toLowerCase()}. ¿Podrían indicarme los datos y requisitos correspondientes, así como la forma de presentar la información de la empresa cuando el trámite lo requiera? No adjunto documentos sensibles hasta recibir instrucciones.`;
  link.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
