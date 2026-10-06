/* ==========================================================
   EXPRESSIVE MODEL COMPANY: OP LIGHTNING ENGINE (INDIA EDITION)
   High-FPS • Zero Lag • Apple Sensory Audio • Cross-Page Ready
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initAudioSynthesizer();
  initFastLiquidCursor();
  initProjectFiltering();
  initLightboxModal();
  initCommissionModal();
  initMobileNavigation();
  initInteractiveMaterialTabs();
});

/* ==========================================================
   1. FAST APPLE-STYLE WEB AUDIO SYNTHESIZER
   Zero audio files; instant microsecond frequency synthesis
   ========================================================== */
let audioCtx = null;
let soundEnabled = true;

function initAudioSynthesizer() {
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  if (!soundToggleBtn) return;

  const soundOnIcon = soundToggleBtn.querySelector('.sound-on-icon');
  const soundOffIcon = soundToggleBtn.querySelector('.sound-off-icon');

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  window.playGlassChime = function(freq = 920, duration = 0.18) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.04, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.035, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  };

  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      if (soundOnIcon) soundOnIcon.classList.remove('hidden');
      if (soundOffIcon) soundOffIcon.classList.add('hidden');
      window.playGlassChime(1100, 0.25);
    } else {
      if (soundOnIcon) soundOnIcon.classList.add('hidden');
      if (soundOffIcon) soundOffIcon.classList.remove('hidden');
    }
  });

  // Fast hover sound ticks
  document.querySelectorAll('button, a, .project-card, .filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      window.playGlassChime(1300 + Math.random() * 300, 0.05);
    });
  });
}

/* ==========================================================
   2. FAST LIQUID CURSOR (Lag-Free Smooth Track)
   ========================================================== */
function initFastLiquidCursor() {
  const cursorGlow = document.getElementById('liquid-cursor-glow');
  if (!cursorGlow) return;

  if (window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorGlow.style.opacity = '1';
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
    });

    function renderCursor() {
      // Fast snappy follow (0.2 factor for instant tracking)
      curX += (mouseX - curX) * 0.22;
      curY += (mouseY - curY) * 0.22;
      cursorGlow.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();
  }
}

/* ==========================================================
   3. FAST PROJECT FILTERING
   ========================================================== */
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'text-white', 'bg-white/15', 'border-cyan-400');
        b.classList.add('text-slate-300');
      });
      btn.classList.add('active', 'text-white', 'bg-white/15', 'border-cyan-400');
      btn.classList.remove('text-slate-300');

      const filter = btn.dataset.filter;
      window.playGlassChime(1150, 0.12);

      projectCards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================
   4. RICH INDIAN ARCHITECTURAL CASE STUDIES (Zero Price)
   ========================================================== */
const indiaProjectData = {
  'jal-mandir-jaipur': {
    title: 'Jal Mandir Parametric Pavilion',
    subtitle: 'Jaipur, Rajasthan • Royal Cultural Enclave',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=80',
    thumb1: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    thumb2: 'https://images.unsplash.com/photo-1585136915152-78d1451d6c8b?auto=format&fit=crop&w=800&q=80',
    tag: 'Maharana Heritage Trust',
    desc: 'Suspended over Man Sagar Lake, Jal Mandir merges traditional Rajasthani Jharokha geometries with 420 double-curved liquid borosilicate glass panels. The building utilizes subterranean water channels for natural evaporative air conditioning, cutting ambient desert temperatures by 12°C without artificial chillers.',
    area: '18,500 m²',
    glass: 'Thermal-Reflective Liquid Crystal',
    structure: 'Dholpur Pink Sandstone & Titanium Spaceframe',
    lead: 'Aarav Singhania, Ananya Deshmukh',
    patron: 'Maharana Heritage Cultural Trust'
  },
  'marine-monolith-mumbai': {
    title: 'The Nariman Marine Monolith',
    subtitle: 'Mumbai, Maharashtra • Waterfront Kinetic Tower',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1400&q=80',
    thumb1: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80',
    thumb2: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80',
    tag: 'Piramal-Godrej Consortium',
    desc: 'An aerodynamic 64-story residential spire rising over the Arabian Sea. Engineered with kinetic electrochromic glass fins that twist in synchrony with marine breezes to neutralize wind shear and deflect intense western monsoon salt spray.',
    area: '142,000 m² (64 Floors)',
    glass: 'Hydrophobic Marine-Grade Borosilicate',
    structure: 'High-Performance Basalt Core',
    lead: 'Aarav Singhania, Kabir Malhotra',
    patron: 'Piramal-Godrej Consortium'
  },
  'bengaluru-biosphere': {
    title: 'The Quantum Canopy Biosphere',
    subtitle: 'Whitefield, Bengaluru • Tech Research Campus',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1400&q=80',
    thumb1: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    thumb2: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    tag: 'Aethelgard India',
    desc: 'A living biome hosting 3,000 endemic Western Ghats plant species under a self-shading double-skin glass diagrid. The roof harvests 100% of Bengaluru monsoonal rainfall, funneling water through illuminated crystalline vortex spouts into internal aquifer recharge wells.',
    area: '45,000 m²',
    glass: 'Photobioreactive ETFE & Low-E Crystal',
    structure: 'Biomimetic Glulam Timber & Recycled Steel',
    lead: 'Dr. Vikramaditya Roy, Ananya Deshmukh',
    patron: 'Aethelgard Technology India'
  },
  'varanasi-ghat-amphitheater': {
    title: 'Ganga Celestial Amphitheater',
    subtitle: 'Varanasi, Uttar Pradesh • Sacred Cultural Riverfront',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1400&q=80',
    thumb1: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    thumb2: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    tag: 'Kashi Spiritual Heritage Council',
    desc: 'A stepped floating crystalline civic podium positioned along the sacred Ganges. By night, fiber-optic embedded glass steps illuminate the water in subtle celestial constellations during the evening Ganga Aarti ceremonies.',
    area: '12,600 m²',
    glass: 'Submersible Hardened Quartz',
    structure: 'Chunar Red Sandstone & Buoyant Pontoon Core',
    lead: 'Aarav Singhania, Meera Nambiar',
    patron: 'Kashi Spiritual Heritage Council'
  },
  'ladakh-solar-observatory': {
    title: 'Himalayan Apex Observatory',
    subtitle: 'Hanle, Ladakh (4,500m Altitude) • Astral Science Sanctuary',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=80',
    thumb1: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    thumb2: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    tag: 'Indian Institute of Astrophysics',
    desc: 'Built in sub-zero high-altitude winds, this geodesic dome features triple-vacuum insulated aerogel glass panels that eliminate all atmospheric diffraction, giving astronomers unobstructed access to Himalayan dark skies.',
    area: '6,200 m²',
    glass: 'Aerogel-Infused Vacuum Quartz',
    structure: 'High-Strength Cryogenic Steel Diagrid',
    lead: 'Dr. Vikramaditya Roy, Kabir Malhotra',
    patron: 'National Astral Science Mission'
  },
  'kerala-floating-sanctuary': {
    title: 'Vembanad Water Lotus Estate',
    subtitle: 'Kumarakom, Kerala • Private Cantilever Haven',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=80',
    thumb1: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    thumb2: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    tag: 'Private Tea & Spice Industrialist',
    desc: 'Hovering over emerald backwaters, this residential sanctuary uses frameless motorized glass walls that slide silently into floor recesses, dissolving the barrier between living spaces and the surrounding coconut groves.',
    area: '4,800 m²',
    glass: 'Anti-Glare Solar Control Monoliths',
    structure: 'Teak Wood Framework & Marine Concrete Caissons',
    lead: 'Meera Nambiar, Aarav Singhania',
    patron: 'Private Family Office'
  }
};

function initLightboxModal() {
  const lightbox = document.getElementById('project-lightbox');
  if (!lightbox) return;

  const closeBtn = document.getElementById('close-lightbox-btn');
  const projectCards = document.querySelectorAll('.project-card');

  const modalImgMain = document.getElementById('modal-img-main');
  const modalThumb1 = document.getElementById('modal-thumb-1');
  const modalThumb2 = document.getElementById('modal-thumb-2');
  const modalTagBadge = document.getElementById('modal-tag-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalDesc = document.getElementById('modal-desc');
  const modalSpecArea = document.getElementById('modal-spec-area');
  const modalSpecGlass = document.getElementById('modal-spec-glass');
  const modalSpecStructure = document.getElementById('modal-spec-structure');
  const modalSpecLead = document.getElementById('modal-spec-lead');
  const modalSpecPatron = document.getElementById('modal-spec-patron');

  function openModal(id) {
    const data = indiaProjectData[id];
    if (!data) return;

    if (modalImgMain) modalImgMain.src = data.image;
    if (modalThumb1) modalThumb1.src = data.thumb1;
    if (modalThumb2) modalThumb2.src = data.thumb2;
    if (modalTagBadge) modalTagBadge.textContent = data.tag;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalDesc) modalDesc.textContent = data.desc;
    if (modalSpecArea) modalSpecArea.textContent = data.area;
    if (modalSpecGlass) modalSpecGlass.textContent = data.glass;
    if (modalSpecStructure) modalSpecStructure.textContent = data.structure;
    if (modalSpecLead) modalSpecLead.textContent = data.lead;
    if (modalSpecPatron) modalSpecPatron.textContent = data.patron;

    lightbox.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
    window.playGlassChime(1250, 0.2);
  }

  function closeModal() {
    lightbox.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      openModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeModal();
  });

  if (modalThumb1 && modalThumb2) {
    [modalThumb1, modalThumb2].forEach(th => {
      th.addEventListener('click', () => {
        const cur = modalImgMain.src;
        modalImgMain.src = th.src;
        th.src = cur;
        window.playGlassChime(1400, 0.1);
      });
    });
  }
}

/* ==========================================================
   5. BESPOKE COMMISSION INQUIRY
   ========================================================== */
function initCommissionModal() {
  const commModal = document.getElementById('commission-modal');
  const openBtns = document.querySelectorAll('.open-commission-trigger');
  const closeBtn = document.getElementById('close-commission-btn');
  const inquiryForm = document.getElementById('inquiry-form');
  const inquirySuccess = document.getElementById('inquiry-success');
  const inquiryResetBtn = document.getElementById('inquiry-reset-btn');

  function openComm() {
    if (commModal) {
      commModal.classList.remove('opacity-0', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
      window.playGlassChime(950, 0.25);
    }
  }

  function closeComm() {
    if (commModal) {
      commModal.classList.add('opacity-0', 'pointer-events-none');
      document.body.style.overflow = '';
    }
  }

  openBtns.forEach(btn => btn.addEventListener('click', openComm));
  if (closeBtn) closeBtn.addEventListener('click', closeComm);
  if (commModal) {
    commModal.addEventListener('click', (e) => {
      if (e.target === commModal) closeComm();
    });
  }

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      inquiryForm.classList.add('hidden');
      if (inquirySuccess) inquirySuccess.classList.remove('hidden');
      window.playGlassChime(1450, 0.4);
    });
  }

  if (inquiryResetBtn) {
    inquiryResetBtn.addEventListener('click', () => {
      if (inquirySuccess) inquirySuccess.classList.add('hidden');
      if (inquiryForm) {
        inquiryForm.classList.remove('hidden');
        inquiryForm.reset();
      }
      closeComm();
    });
  }
}

/* ==========================================================
   6. MOBILE NAVIGATION DRAWER
   ========================================================== */
function initMobileNavigation() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const closeMenu = document.getElementById('close-mobile-menu');
  const drawer = document.getElementById('mobile-drawer');
  if (!drawer) return;

  function openDrawer() {
    drawer.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
    window.playGlassChime(1050, 0.15);
  }

  function closeDrawer() {
    drawer.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (closeMenu) closeMenu.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================
   7. MATERIAL & R&D LAB INTERACTIVE TABS
   ========================================================== */
function initInteractiveMaterialTabs() {
  const tabs = document.querySelectorAll('.research-tab-btn');
  const panes = document.querySelectorAll('.research-tab-pane');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active', 'border-cyan-400', 'bg-cyan-400/20', 'text-white');
        t.classList.add('border-white/15', 'bg-white/5', 'text-slate-300');
      });
      tab.classList.add('active', 'border-cyan-400', 'bg-cyan-400/20', 'text-white');
      tab.classList.remove('border-white/15', 'bg-white/5', 'text-slate-300');

      const targetId = tab.dataset.target;
      panes.forEach(pane => {
        if (pane.id === targetId) {
          pane.classList.remove('hidden');
        } else {
          pane.classList.add('hidden');
        }
      });
      window.playGlassChime(1200, 0.15);
    });
  });
}
