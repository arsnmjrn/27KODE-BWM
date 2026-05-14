/* ════════════════════════════════════════════════════════════
   KODE.BWM — 3D Tech Sphere
   Paste this <script> block into your page (before </body>)
   ════════════════════════════════════════════════════════════ */

// ── TECH DATA WITH REAL SVG BRAND ICONS ──
const TECHS = [
  {
    name: 'React',
    category: 'Frontend',
    color: '#61dafb',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="11.9" r="2.1" fill="#61dafb"/><ellipse cx="12" cy="11.9" rx="10" ry="3.8" fill="none" stroke="#61dafb" stroke-width="1.1"/><ellipse cx="12" cy="11.9" rx="10" ry="3.8" fill="none" stroke="#61dafb" stroke-width="1.1" transform="rotate(60 12 12)"/><ellipse cx="12" cy="11.9" rx="10" ry="3.8" fill="none" stroke="#61dafb" stroke-width="1.1" transform="rotate(120 12 12)"/></svg>`
  },
  {
    name: 'Node.js',
    category: 'Backend',
    color: '#68a063',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.85L2.5 7.15v9.7l9.5 5.3 9.5-5.3V7.15z" fill="none" stroke="#68a063" stroke-width="1.3"/><path d="M12 5l5.5 3.1v6.2L12 17.4 6.5 14.3V8.1z" fill="#68a063" opacity="0.25"/><text x="12" y="13.5" text-anchor="middle" font-size="5" fill="#68a063" font-family="monospace" font-weight="bold">node</text></svg>`
  },
  {
    name: 'WordPress',
    category: 'CMS',
    color: '#21759b',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="none" stroke="#21759b" stroke-width="1.3"/><circle cx="12" cy="12" r="10" fill="#21759b" opacity="0.15"/><text x="12" y="15.5" text-anchor="middle" font-size="9" fill="#21759b" font-family="serif" font-weight="bold">W</text></svg>`
  },
  {
    name: 'PHP',
    category: 'Backend',
    color: '#8892bf',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="12" rx="11" ry="6" fill="none" stroke="#8892bf" stroke-width="1.2"/><ellipse cx="12" cy="12" rx="11" ry="6" fill="#8892bf" opacity="0.12"/><text x="12" y="15.5" text-anchor="middle" font-size="6.5" fill="#8892bf" font-family="monospace" font-weight="bold">PHP</text></svg>`
  },
  {
    name: 'MySQL',
    category: 'Database',
    color: '#4479a1',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="6" rx="8" ry="3" fill="none" stroke="#4479a1" stroke-width="1.2"/><ellipse cx="12" cy="6" rx="8" ry="3" fill="#4479a1" opacity="0.2"/><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="#4479a1" stroke-width="1.2"/><line x1="4" y1="12" x2="20" y2="12" stroke="#4479a1" stroke-width="0.8" opacity="0.5"/></svg>`
  },
  {
    name: 'Figma',
    category: 'Design',
    color: '#f24e1e',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="2" width="5" height="5" rx="2.5" fill="#f24e1e"/><rect x="12" y="2" width="5" height="5" rx="2.5" fill="#ff7262"/><rect x="7" y="7" width="5" height="5" fill="#a259ff"/><rect x="7" y="12" width="5" height="5" rx="2.5" fill="#1abcfe"/><circle cx="14.5" cy="14.5" r="2.5" fill="#0acf83"/></svg>`
  },
  {
    name: 'Photoshop',
    category: 'Design',
    color: '#31a8ff',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="3" fill="#001e36"/><rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="#31a8ff" stroke-width="0.8" opacity="0.4"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="#31a8ff" font-family="serif" font-weight="bold">Ps</text></svg>`
  },
  {
    name: 'Illustrator',
    category: 'Design',
    color: '#ff9a00',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="3" fill="#330000"/><rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="#ff9a00" stroke-width="0.8" opacity="0.4"/><text x="12" y="16" text-anchor="middle" font-size="10" fill="#ff9a00" font-family="serif" font-weight="bold">Ai</text></svg>`
  },
  {
    name: 'Python',
    category: 'Backend',
    color: '#3776ab',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.5 2 8 3.5 8 5v2h4v1H5.5C4 8 2 9 2 12s2 4 3.5 4H6v-2.5c0-1.5 1-2.5 3-2.5h6c1.5 0 3-1 3-3V5c0-2-1.5-3-6-3z" fill="#3776ab"/><path d="M12 22c3.5 0 4-1.5 4-3v-2h-4v-1h6.5c1.5 0 3.5-1 3.5-4s-2-4-3.5-4H18v2.5c0 1.5-1 2.5-3 2.5H9c-1.5 0-3 1-3 3v2.5c0 2 1.5 3 6 3z" fill="#ffd343"/><circle cx="10" cy="5.5" r="1" fill="white"/><circle cx="14" cy="18.5" r="1" fill="white"/></svg>`
  },
  {
    name: 'AWS',
    category: 'Cloud',
    color: '#ff9900',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 14.5C4 13.5 3 11.5 3.5 9.5S6 7 8 7.5c.5-2 2.5-3.5 5-3.5s4.5 1.5 5 3.5c2 0 3.5 1.5 3.5 3.5S20 15 18 15" fill="none" stroke="#ff9900" stroke-width="1.3" stroke-linecap="round"/><path d="M8 19l-2-2 2-2M16 19l2-2-2-2" fill="none" stroke="#ff9900" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><line x1="6" y1="17" x2="18" y2="17" stroke="#ff9900" stroke-width="1.3"/></svg>`
  },
  {
    name: 'Docker',
    category: 'DevOps',
    color: '#2496ed',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="10" width="3" height="3" rx="0.5" fill="#2496ed"/><rect x="7" y="10" width="3" height="3" rx="0.5" fill="#2496ed"/><rect x="11" y="10" width="3" height="3" rx="0.5" fill="#2496ed"/><rect x="7" y="6" width="3" height="3" rx="0.5" fill="#2496ed"/><rect x="11" y="6" width="3" height="3" rx="0.5" fill="#2496ed"/><path d="M20 11.5c-.5-1.5-2-2-3.5-1.5-.5-1.5-2-2.5-3.5-2.5" fill="none" stroke="#2496ed" stroke-width="1.1"/><path d="M3 13c1.5 3 5 4 9 4h3c3 0 5-1.5 5-4" fill="none" stroke="#2496ed" stroke-width="1.1"/></svg>`
  },
  {
    name: 'Firebase',
    category: 'Backend',
    color: '#ffca28',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 20L7.5 4l5 8L15 8l4 12z" fill="#ffca28" stroke="#ff6d00" stroke-width="0.5"/><path d="M5 20l6-3 8 3" fill="#ff6d00" opacity="0.6"/><path d="M12.5 12l2.5-4 4 12-6.5-8z" fill="#ff6d00" opacity="0.4"/></svg>`
  },
  {
    name: 'Vue.js',
    category: 'Frontend',
    color: '#42b883',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,20 2,4 7,4 12,13 17,4 22,4" fill="none" stroke="#42b883" stroke-width="1.3" stroke-linejoin="round"/><polygon points="12,14 7,6 10,6 12,10 14,6 17,6" fill="#42b883" opacity="0.5"/></svg>`
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    color: '#264de4',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2l1.5 17L12 21l6.5-2L20 2z" fill="#264de4"/><path d="M4 2l1.5 17L12 21l6.5-2L20 2z" fill="none" stroke="#1a36b0" stroke-width="0.5"/><path d="M12 5.5H7.8l.3 3.5H12v3.2H9l.2 2.8 2.8.8V19l5.5-1.5.7-8H12V5.5z" fill="white" opacity="0.9"/></svg>`
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    color: '#e34f26',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2l1.5 17L12 21l6.5-2L20 2z" fill="#e34f26"/><path d="M12 5.5H8l.3 3.2H12v3H9.5l.2 2.5 2.3.7v3.1l4.5-1.3.6-7.2H12V5.5z" fill="white" opacity="0.9"/></svg>`
  },
  {
    name: 'MongoDB',
    category: 'Database',
    color: '#47a248',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9 2 7 6 7 10c0 3.5 2 6.5 4.5 8.5l.5.5.5-.5C14 16.5 17 13.5 17 10c0-4-2-8-5-8z" fill="#47a248"/><line x1="12" y1="18" x2="12" y2="22" stroke="#47a248" stroke-width="1.5" stroke-linecap="round"/></svg>`
  },
  {
    name: 'Linux',
    category: 'DevOps',
    color: '#fcc624',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9 2 7 4 7 7c0 1.5.5 3 1.5 4L7 15c-.5 1 0 2 1 2.5L9 18c0 1 1 2 3 2s3-1 3-2l1-.5c1-.5 1.5-1.5 1-2.5l-1.5-4c1-1 1.5-2.5 1.5-4 0-3-2-5-5-5z" fill="#fcc624"/><circle cx="10" cy="8" r="1" fill="#333"/><circle cx="14" cy="8" r="1" fill="#333"/><path d="M10 11c.5 1 3.5 1 4 0" fill="none" stroke="#333" stroke-width="0.8" stroke-linecap="round"/></svg>`
  },
  {
    name: 'GitHub',
    category: 'DevOps',
    color: '#ffffff',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.4c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" fill="white"/></svg>`
  }
];






// ── SPHERE GEOMETRY ──
function fibonacciSphere(n, radius) {
  const points = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    points.push({
      x: Math.cos(theta) * r * radius,
      y: y * radius,
      z: Math.sin(theta) * r * radius,
    });
  }
  return points;
}

// ── STATE ──
let rotX = -15, rotY = 0;
let velX = 0, velY = 0;
let isDragging = false;
let lastMouseX = 0, lastMouseY = 0;
let autoRotate = true;
let autoSpeed = 0.3;
let sphereRadius = 170;
let nodeSize = 64;
let positions = [];
let scatterMode = false;

const sphere = document.getElementById('sphere3d');
const scene = document.getElementById('sphereScene');
const tooltip = document.getElementById('sphereTooltip');
const ttName = document.getElementById('ttName');
const ttCat = document.getElementById('ttCat');
const speedCtrl = document.getElementById('speedCtrl');
const zoomCtrl = document.getElementById('zoomCtrl');
const sizeCtrl = document.getElementById('sizeCtrl');
const toggleAutoBtn = document.getElementById('toggleAutoBtn');
const statRPM = document.getElementById('statRPM');
const statZoom = document.getElementById('statZoom');
const statHovered = document.getElementById('statHovered');

// ── BUILD NODES ──
function buildNodes() {
  sphere.innerHTML = '';
  positions = fibonacciSphere(TECHS.length, sphereRadius);

  TECHS.forEach((tech, i) => {
    const node = document.createElement('div');
    node.className = 'tech-node';
    node.style.cssText = `width:${nodeSize}px;height:${nodeSize}px;margin:${-nodeSize/2}px 0 0 ${-nodeSize/2}px;`;
    node.innerHTML = `
      <div class="tech-node-inner" style="border-radius:${nodeSize * 0.25}px;">
        ${tech.svg}
        <span>${tech.name}</span>
      </div>`;

    // Hover
    node.addEventListener('mouseenter', (e) => {
      ttName.textContent = tech.name;
      ttCat.textContent = tech.category;
      tooltip.classList.add('show');
      statHovered.textContent = tech.name;
    });
    node.addEventListener('mousemove', (e) => {
      tooltip.style.left = (e.clientX + 14) + 'px';
      tooltip.style.top = (e.clientY - 10) + 'px';
    });
    node.addEventListener('mouseleave', () => {
      tooltip.classList.remove('show');
      statHovered.textContent = '—';
    });

    sphere.appendChild(node);
  });
}

// ── APPLY TRANSFORM ──
function applyTransforms() {
  const nodes = sphere.querySelectorAll('.tech-node');
  const cos_x = Math.cos(rotX * Math.PI / 180);
  const sin_x = Math.sin(rotX * Math.PI / 180);
  const cos_y = Math.cos(rotY * Math.PI / 180);
  const sin_y = Math.sin(rotY * Math.PI / 180);

  nodes.forEach((node, i) => {
    const pos = positions[i];
    if (!pos) return;

    // Rotate around Y
    let rx = pos.x * cos_y + pos.z * sin_y;
    let ry = pos.y;
    let rz = -pos.x * sin_y + pos.z * cos_y;

    // Rotate around X
    let fx = rx;
    let fy = ry * cos_x - rz * sin_x;
    let fz = ry * sin_x + rz * cos_x;

    // Depth cue: scale + opacity
    const scale = (fz + sphereRadius * 1.5) / (sphereRadius * 2.5);
    const opacity = 0.3 + scale * 0.7;
    const zIndex = Math.round(fz + 1000);

    node.style.transform = `translate3d(${fx}px, ${fy}px, ${fz}px)`;
    node.style.zIndex = zIndex;
    node.style.opacity = opacity;
    node.querySelector('.tech-node-inner').style.transform = `scale(${0.6 + scale * 0.55})`;
    node.style.pointerEvents = fz > 0 ? 'auto' : 'none';
  });
}

// ── ANIMATION LOOP ──
let lastTime = 0;
function animate(ts) {
  const dt = Math.min((ts - lastTime) / 16, 3);
  lastTime = ts;

  if (autoRotate && !isDragging) {
    rotY += autoSpeed * dt;
  }

  if (!isDragging) {
    velX *= 0.92;
    velY *= 0.92;
    rotX += velX * dt;
    rotY += velY * dt;
  }

  rotX = Math.max(-85, Math.min(85, rotX));

  applyTransforms();
  updateStats();
  requestAnimationFrame(animate);
}

function updateStats() {
  statRPM.textContent = Math.round(autoSpeed * 36);
  statZoom.textContent = Math.round((sphereRadius / 170) * 100) + '%';
}

// ── DRAG CONTROLS ──
scene.addEventListener('mousedown', (e) => {
  isDragging = true;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
  velX = 0; velY = 0;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const dx = e.clientX - lastMouseX;
  const dy = e.clientY - lastMouseY;
  velY = dx * 0.35;
  velX = dy * 0.35;
  rotY += dx * 0.35;
  rotX += dy * 0.35;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
});

window.addEventListener('mouseup', () => { isDragging = false; });

// Touch support
let lastTouchX = 0, lastTouchY = 0;
scene.addEventListener('touchstart', (e) => {
  isDragging = true;
  lastTouchX = e.touches[0].clientX;
  lastTouchY = e.touches[0].clientY;
  velX = 0; velY = 0;
  e.preventDefault();
}, { passive: false });

scene.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const dx = e.touches[0].clientX - lastTouchX;
  const dy = e.touches[0].clientY - lastTouchY;
  velY = dx * 0.4;
  velX = dy * 0.4;
  rotY += dx * 0.4;
  rotX += dy * 0.4;
  lastTouchX = e.touches[0].clientX;
  lastTouchY = e.touches[0].clientY;
  e.preventDefault();
}, { passive: false });

scene.addEventListener('touchend', () => { isDragging = false; });

// Scroll to zoom
scene.addEventListener('wheel', (e) => {
  sphereRadius = Math.max(100, Math.min(280, sphereRadius - e.deltaY * 0.3));
  zoomCtrl.value = sphereRadius;
  buildNodes(); // rebuild with new radius
  e.preventDefault();
}, { passive: false });

// ── CONTROLS ──
speedCtrl.addEventListener('input', () => {
  autoSpeed = speedCtrl.value / 100;
});

zoomCtrl.addEventListener('input', () => {
  sphereRadius = parseInt(zoomCtrl.value);
  buildNodes();
});

sizeCtrl.addEventListener('input', () => {
  nodeSize = parseInt(sizeCtrl.value);
  buildNodes();
});

toggleAutoBtn.addEventListener('click', () => {
  autoRotate = !autoRotate;
  toggleAutoBtn.textContent = autoRotate ? '⏸ Pause' : '▶ Resume';
  toggleAutoBtn.classList.toggle('active', autoRotate);
});

document.getElementById('resetBtn').addEventListener('click', () => {
  rotX = -15; rotY = 0; velX = 0; velY = 0;
  sphereRadius = 170; nodeSize = 64; autoSpeed = 0.3;
  speedCtrl.value = 30; zoomCtrl.value = 100; sizeCtrl.value = 64;
  scatterMode = false;
  buildNodes();
});

document.getElementById('scatterBtn').addEventListener('click', () => {
  if (scatterMode) return;
  scatterMode = true;
  const nodes = sphere.querySelectorAll('.tech-node');
  nodes.forEach((n, i) => {
    positions[i] = {
      x: (Math.random() - 0.5) * sphereRadius * 3,
      y: (Math.random() - 0.5) * sphereRadius * 3,
      z: (Math.random() - 0.5) * sphereRadius * 3,
    };
  });
});

document.getElementById('gatherBtn').addEventListener('click', () => {
  scatterMode = false;
  buildNodes();
});

// ── INIT ──
buildNodes();
requestAnimationFrame(animate);









(function() {
  const mapFrame = document.getElementById('laptopMapFrame');
  if (!mapFrame) return;

  // Intersection observer to load map lazily + animate
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate laptop lid open on scroll
        const lid = mapFrame.closest('.lm-lid');
        if (lid) {
          lid.style.transition = 'transform 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.6s';
          lid.style.transformOrigin = 'bottom center';
          lid.style.transform = 'rotateX(-5deg)';
          lid.style.opacity = '1';

          setTimeout(() => {
            lid.style.transform = 'rotateX(0deg)';
          }, 100);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const wrap = document.querySelector('.laptop-map-wrap');
  if (wrap) observer.observe(wrap);

  // Nav button clicks (non-functional but feel real)
  document.querySelectorAll('.lm-nav-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btn.style.background = 'rgba(56,189,248,0.2)';
      setTimeout(() => { btn.style.background = ''; }, 200);
    });
  });

  // Dot clicks
  document.querySelectorAll('.lm-dot').forEach((dot, i) => {
    dot.addEventListener('click', () => {
      if (i === 0) { // Red = minimise effect
        const wrap = dot.closest('.laptop-map-wrap');
        if (wrap) {
          wrap.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
          wrap.style.transform = 'scale(0.97)';
          wrap.style.opacity = '0.6';
          setTimeout(() => {
            wrap.style.transform = 'scale(1)';
            wrap.style.opacity = '1';
          }, 600);
        }
      }
    });
  });
})();