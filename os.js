/* ==========================================================
   Jonathan OS — tiny window manager
   ========================================================== */

/* ---------- App definitions ---------- */
const APPS = {
  home: {
    title: 'Home — Who am I?',
    icon: '🏠',
    body: `
      <h1>Who am I?</h1>
      <p>My name is Jonathan Steadman, and I am not merely a user of Linux and open-source software—I am a passionate advocate, a developer, and a firm believer in the philosophy of freedom, transparency, and community that underpins the entire open-source movement. My journey into the world of free operating systems began when I was just 16 years old, a curious teenager with a modest laptop and a desire to truly understand the technology I was using every day.</p>
      <p>Now, at 23 years old, I have spent seven formative years immersed in the Linux ecosystem—seven years of learning, building, failing, troubleshooting, and ultimately thriving in an environment that rewards curiosity and punishes complacency. Today, I run Linux Mint as my primary and only operating system.</p>
      <p>I have actively contributed to the open-source community through projects like <strong>NemoS</strong>, a text-based editor for the terminal, and through videos and writings about alternative operating systems.</p>
      <p>My name is Jonathan Steadman, and I am proud to be part of this movement. The best is yet to come.</p>
      <p>
        <a class="btn" href="https://jonathan-linux.itch.io/" target="_blank" rel="noopener">Check out my projects</a>
        <a class="btn" href="https://github.com/ToothedTomb" target="_blank" rel="noopener">GitHub</a>
        <a class="btn" href="https://www.youtube.com/@JonathanSteadman2003" target="_blank" rel="noopener">YouTube</a>
        <a class="btn" href="https://www.linkedin.com/in/jonathan-steadman-b4846a19b/" target="_blank" rel="noopener">LinkedIn</a>
      </p>
      <h2>Watch one of my videos</h2>
      <iframe src="https://www.youtube-nocookie.com/embed/IFP6yDm2F5U?si=-VaGFxvYss3hvInm"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `
  },

  sysinfo: {
    title: 'My System Information',
    icon: '🖥️',
    body: `
      <h1>My System Information — 25/03/26</h1>
      <pre>System:
  Kernel: 6.17.0-19-generic arch: x86_64 bits: 64 compiler: gcc v: 13.3.0 clocksource: tsc
  Desktop: Cinnamon v: 6.6.7 tk: GTK v: 3.24.41 wm: Muffin v: 6.6.3 vt: 7 dm: LightDM v: 1.30.0
  Distro: Linux Mint 22.3 Zena base: Ubuntu 24.04 noble

Machine:
  Type: Desktop Mobo: INTEL model: B75 serial: &lt;superuser required&gt; uuid: &lt;superuser required&gt;
  UEFI: American Megatrends v: 4.6.5 date: 08/17/2022

CPU:
  Info: dual core model: Intel Core i3-3240 bits: 64 type: MT MCP smt: enabled arch: Ivy Bridge
  rev: 9 cache: L1: 128 KiB L2: 512 KiB L3: 3 MiB
  Speed (MHz): avg: 3392 min/max: 1600/3400 cores: 1: 3392 2: 3392 3: 3392 4: 3392
  bogomips: 27137
  Flags: avx ht lm nx pae sse sse2 sse3 sse4_1 sse4_2 ssse3 vmx

Graphics:
  Device-1: NVIDIA GM107 [GeForce GTX 750] driver: nvidia v: 535.288.01 arch: Maxwell pcie:
  speed: 5 GT/s lanes: 8 ports: active: none off: HDMI-A-1 empty: DVI-D-1,VGA-1 bus-ID: 01:00.0
  chip-ID: 10de:1381 class-ID: 0300
  Display: x11 server: X.Org v: 21.1.11 with: Xwayland v: 23.2.6 driver: X: loaded: nvidia
  unloaded: fbdev,modesetting,nouveau,vesa gpu: nvidia,nvidia-nvswitch display-ID: :0 screens: 1
  Screen-1: 0 s-res: 1920x1080 s-dpi: 93 s-size: 524x312mm (20.63x12.28") s-diag: 610mm (24.01")
  Monitor-1: HDMI-0 res: 1920x1080 hz: 60 dpi: 93 size: 527x296mm (20.75x11.65")
  diag: 604mm (23.8") modes: N/A
  API: OpenGL v: 4.6.0 vendor: nvidia v: 535.288.01 glx-v: 1.4 direct-render: yes renderer: NVIDIA
  GeForce GTX 750/PCIe/SSE2

Audio:
  Device-1: Intel 7 Series/C216 Family High Definition Audio driver: snd_hda_intel v: kernel
  bus-ID: 00:1b.0 chip-ID: 8086:1e20 class-ID: 0403
  Device-2: NVIDIA GM107 High Definition Audio [GeForce 940MX] driver: snd_hda_intel v: kernel
  pcie: speed: 5 GT/s lanes: 8 bus-ID: 01:00.1 chip-ID: 10de:0fbc class-ID: 0403
  API: ALSA v: k6.17.0-19-generic status: kernel-api
  Server-1: PipeWire v: 1.0.5 status: active

Network:
  Device-1: Realtek RTL8111/8168/8211/8411 PCI Express Gigabit Ethernet driver: r8169 v: kernel
  pcie: speed: 2.5 GT/s lanes: 1 port: d000 bus-ID: 03:00.0 chip-ID: 10ec:8168 class-ID: 0200
  IF: enp3s0 state: up speed: 100 Mbps duplex: full mac: &lt;filter&gt;
  Device-2: TP-Link Archer T2U PLUS [RTL8821AU] driver: rtw88_8821au type: USB rev: 2.1
  speed: 480 Mb/s lanes: 1 bus-ID: 2-1.6:3 chip-ID: 2357:0120 class-ID: 0000
  IF: wlx0cef156c2d08 state: up mac: &lt;filter&gt;

Drives:
  Local Storage: total: 1.86 TiB used: 604.29 GiB (31.7%)
  ID-1: /dev/sda vendor: Fanxiang model: S101 1TB MX size: 953.87 GiB speed: 6.0 Gb/s tech: SSD
  scheme: GPT
  ID-2: /dev/sdb vendor: Addlink model: SATA SSD size: 953.87 GiB type: USB tech: SSD

Partition:
  ID-1: / size: 937.33 GiB used: 572.85 GiB (61.1%) fs: ext4 dev: /dev/sda2
  ID-2: /boot/efi size: 511 MiB used: 6.1 MiB (1.2%) fs: vfat dev: /dev/sda1

Swap:
  ID-1: swap-1 type: file size: 2 GiB used: 8 KiB (0.0%) priority: -2 file: /swapfile

Sensors:
  System Temperatures: cpu: 41.0°C mobo: N/A gpu: nvidia temp: 29°C
  Fan Speeds: gpu: nvidia fan: 40%

Info:
  Memory: total: 8 GiB available: 7.71 GiB used: 4.15 GiB (53.8%)
  Processes: 280 Uptime: 4h 30m
  Packages: dpkg: 2793
  Init: systemd v: 255 target: graphical (5)
  Compilers: gcc: 13.3.0</pre>

      <h2>Fastfetch</h2>
      <pre>Welcome to fish, the friendly interactive shell
jonathansteadman@jonathansteadman-desktop ~&gt; fastfetch
             ...-:::::-...                  jonathansteadman@jonathansteadman-desktop
          .-MMMMMMMMMMMMMMM-.               -----------------------------------------
      .-MMMM\`..-:::::::-..\`MMMM-.           OS: Linux Mint 22.3 x86_64
    .:MMMM.:MMMMMMMMMMMMMMM:.MMMM:.         Kernel: Linux 6.17.0-19-generic
   -MMM-M---MMMMMMMMMMMMMMMMMMM.MMM-        Uptime: 4 hours, 51 mins
 \`:MMM:MM\`  :MMMM:....::-...-MMMM:MMM:\`     Packages: 2792 (dpkg)
 :MMM:MMM\`  :MM:\`  \`\`    \`\`  \`:MMM:MMM:     Shell: fish 3.7.0
.MMM.MMMM\`  :MM.  -MM.  .MM-  \`MMMM.MMM.    Display (H238): 1920x1080 in 24", 60 Hz [External]
:MMM:MMMM\`  :MM.  -MM-  .MM:  \`MMMM-MMM:    DE: Cinnamon 6.6.7
:MMM:MMMM\`  :MM.  -MM-  .MM:  \`MMMM:MMM:    WM: Muffin (X11)
.MMM.MMMM\`  :MM:--:MM:--:MM:  \`MMMM.MMM.    WM Theme: Mint-Y-Dark-Pink (Mint-Y)
 :MMM:MMM-  \`-MMMMMMMMMMMM-\`  -MMM-MMM:     Theme: Mint-Y-Dark-Pink [GTK2/3/4]
  :MMM:MMM:\`                \`:MMM:MMM:      Icons: Mint-Y-Pink [GTK2/3/4]
   .MMM.MMMM:--------------:MMMM.MMM.       Font: Ubuntu (10pt) [GTK2/3/4]
     '-MMMM.-MMMMMMMMMMMMMMM-.MMMM-'        Cursor: breeze (24px)
       '.-MMMM\`\`--:::::--\`\`MMMM-.'          Terminal: GNOME Terminal 3.52.0
            '-MMMMMMMMMMMMM-'               Terminal Font: DejaVu Sans Mono (10pt)
               \`\`-:::::-\`\`                  CPU: Intel(R) Core(TM) i3-3240 (4) @ 3.40 GHz
                                            GPU: NVIDIA GeForce GTX 750 [Discrete]
                                            Memory: 4.56 GiB / 7.71 GiB (59%)
                                            Swap: 76.00 MiB / 2.00 GiB (4%)
                                            Disk (/): 572.84 GiB / 937.33 GiB (61%) - ext4
                                            Local IP (enp3s0): 192.168.0.106/24
                                            Locale: en_US.UTF-8</pre>

      <h2>My future upgrade plans</h2>
      <ul>
        <li>Memory: DDR 3 8GB → DDR 3 16GB</li>
        <li>CPU: Intel i3-3240 → Intel i5-3570</li>
      </ul>
    `
  },

  education: {
    title: 'My Education',
    icon: '🎓',
    body: `
      <h1>My Education</h1>
      <p>The computing education I have gained prepares me to work as a qualified IT professional.</p>

      <h2>It Academy — Belarus</h2>
      <p>I have successfully completed the Development of web applications in Python course. In the future, I want to pursue Linux System Administration.</p>
      <p><a class="btn" href="https://www.it-academy.by/course/python-developer/pt-python-developer/" target="_blank" rel="noopener">Development of web applications in Python</a></p>
      <img src="Assets/Pythondegree.png" alt="Python Degree from IT Academy" class="cert-image">

      <h2>Bath College — England</h2>

      <h3>PEARSON BTEC LEVEL 3 NATIONAL EXTENDED DIPLOMA in INFORMATION TECHNOLOGY (July 2023)</h3>
      <table class="grades-table">
        <thead><tr><th>Subject</th><th>Credits</th><th>Grade</th></tr></thead>
        <tbody>
          <tr><td>Information Technology Systems</td><td>12.0</td><td class="grade-pass">PASS</td></tr>
          <tr><td>Creating Systems to Manage Information</td><td>9.0</td><td class="grade-pass">PASS</td></tr>
          <tr><td>Using Social Media in Business</td><td>9.0</td><td class="grade-dist">DISTINCTION</td></tr>
          <tr><td>Programming</td><td>9.0</td><td class="grade-merit">MERIT</td></tr>
          <tr><td>Website Development</td><td>6.0</td><td class="grade-dist">DISTINCTION</td></tr>
          <tr><td>Mobile Apps Development</td><td>6.0</td><td class="grade-dist">DISTINCTION</td></tr>
          <tr><td>IT Project Management</td><td>9.0</td><td class="grade-dist">DISTINCTION</td></tr>
          <tr><td>Cyber Security and Incident Management</td><td>12.0</td><td class="grade-pass">PASS</td></tr>
          <tr><td>IT Service Delivery</td><td>12.0</td><td class="grade-merit">MERIT</td></tr>
          <tr><td>Data Modelling</td><td>6.0</td><td class="grade-dist">DISTINCTION</td></tr>
          <tr><td>Computer Games Development</td><td>6.0</td><td class="grade-dist">DISTINCTION</td></tr>
          <tr><td>Customising and Integrating Applications</td><td>6.0</td><td class="grade-dist">DISTINCTION</td></tr>
          <tr><td>Enterprise in IT</td><td>6.0</td><td class="grade-merit">MERIT</td></tr>
        </tbody>
      </table>
      <p class="overall">🏅 Overall: DISTINCTION - DISTINCTION - DISTINCTION</p>

      <h3>PEARSON BTEC LEVEL 1 INTRODUCTORY DIPLOMA in INFORMATION TECHNOLOGY (August 2020)</h3>
      <table class="grades-table">
        <thead><tr><th>Subject</th><th>Hours</th><th>Grade</th></tr></thead>
        <tbody>
          <tr><td>Being Organised</td><td>30.0</td><td class="grade-dist">DISTINCTION</td></tr>
          <tr><td>Developing a Personal Progression Plan</td><td>30.0</td><td class="grade-dist">DISTINCTION</td></tr>
          <tr><td>Working with Others</td><td>30.0</td><td class="grade-pass">PASS</td></tr>
          <tr><td>Researching a Topic</td><td>30.0</td><td class="grade-pass">PASS</td></tr>
          <tr><td>Using Digital Communication Technologies</td><td>40.0</td><td class="grade-dist">DISTINCTION</td></tr>
          <tr><td>Solving Technical IT Problems</td><td>40.0</td><td class="grade-merit">MERIT</td></tr>
          <tr><td>Creating a Spreadsheet to Solve Problems</td><td>40.0</td><td class="grade-merit">MERIT</td></tr>
          <tr><td>Creating a Computer Program</td><td>40.0</td><td class="grade-dist">DISTINCTION</td></tr>
          <tr><td>Creating a Digital Animated Graphic</td><td>40.0</td><td class="grade-merit">MERIT</td></tr>
        </tbody>
      </table>

      <h3>BTEC FIRST EXTENDED CERTIFICATE in INFORMATION AND CREATIVE TECHNOLOGY — LEVEL 2 (June 2021)</h3>
      <p class="overall">Double Grade: DISTINCTION - DISTINCTION</p>

      <p><a class="btn" href="https://www.linkedin.com/posts/jonathan-steadman-b4846a19b_ict-certificate-at-bath-college-ugcPost-7283423312163049472-RUpd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC7gT-gBncfXOLJC7qwRNbWsNQpXe_96DZs" target="_blank" rel="noopener">My Bath College certificates</a></p>
    `
  },

  game: {
    title: 'Vibe Coded 3D Car Game',
    icon: '🏎️',
    body: `
      <h1>Vibe Coded 3D Car Game</h1>
      <p>This mini-game was completely <strong>vibe coded</strong> using Three.js. Steer left and right to avoid going off the road!</p>
      <div style="display: flex; gap: 10px; margin-bottom: 10px; align-items: center;">
        <p style="margin:0;">Controls:</p>
        <span style="background:#333; padding: 2px 8px; border-radius:4px; font-family:monospace;">A / Left Arrow</span>
        <span style="background:#333; padding: 2px 8px; border-radius:4px; font-family:monospace;">D / Right Arrow</span>
      </div>
      <div id="game-container" style="width:100%; height:450px; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.15); background: #000; position: relative; cursor: crosshair;">
        <canvas id="game-canvas" style="display:block; width:100%; height:100%;"></canvas>
      </div>
    `
  }
};

/* ---------- Window manager ---------- */
const layer = document.getElementById('window-layer');
const taskbarApps = document.getElementById('taskbar-apps');
const startBtn = document.getElementById('start-btn');
const startMenu = document.getElementById('start-menu');
const clockEl = document.getElementById('taskbar-clock');

let zTop = 100;
let winCount = 0;
const openWindows = new Map(); // appId -> { el, taskBtn, minimized }
let gameAnimationId = null; // To stop the game loop when closed

function focusWindow(win) {
  win.style.zIndex = ++zTop;
  openWindows.forEach((info) => {
    info.taskBtn.classList.toggle('focused', info.el === win && !info.minimized);
  });
}

function openApp(appId) {
  if (openWindows.has(appId)) {
    const info = openWindows.get(appId);
    if (info.minimized) {
      info.el.classList.remove('minimized');
      info.minimized = false;
    }
    focusWindow(info.el);
    closeStartMenu();
    return;
  }

  const app = APPS[appId];
  if (!app) return;

  const win = document.createElement('div');
  win.className = 'window';
  win.dataset.appId = appId;

  const offset = (winCount++ % 6) * 28;
  win.style.left = (140 + offset) + 'px';
  win.style.top  = (80  + offset) + 'px';

  if (appId === 'education') {
    win.style.width = '900px';
    win.style.height = '700px';
  }

  if (appId === 'game') {
    win.style.width = '800px';
    win.style.height = '650px';
  }

  win.innerHTML = `
    <div class="window-bar">
      <span class="window-title">${app.icon} ${app.title}</span>
      <div class="window-controls">
        <button class="minimize" title="Minimize">—</button>
        <button class="close" title="Close">✕</button>
      </div>
    </div>
    <div class="window-body">${app.body}</div>
  `;

  layer.appendChild(win);

  const taskBtn = document.createElement('div');
  taskBtn.className = 'taskbar-app';
  taskBtn.textContent = `${app.icon} ${app.title}`;
  taskbarApps.appendChild(taskBtn);

  const info = { el: win, taskBtn, minimized: false };
  openWindows.set(appId, info);

  focusWindow(win);

  win.querySelector('.close').addEventListener('click', () => closeApp(appId));
  win.querySelector('.minimize').addEventListener('click', () => toggleMinimize(appId));

  taskBtn.addEventListener('click', () => {
    const inf = openWindows.get(appId);
    if (!inf) return;
    if (inf.minimized) {
      inf.el.classList.remove('minimized');
      inf.minimized = false;
      focusWindow(inf.el);
    } else if (Number(inf.el.style.zIndex) === zTop) {
      toggleMinimize(appId);
    } else {
      focusWindow(inf.el);
    }
  });

  win.addEventListener('mousedown', () => focusWindow(win));

  makeWindowDraggable(win);

  // Initialize the game if this is the game app
  if (appId === 'game') {
    initGame();
  }

  closeStartMenu();
}

function closeApp(appId) {
  const info = openWindows.get(appId);
  if (!info) return;

  // Stop game loop if closing the game
  if (appId === 'game' && gameAnimationId) {
    cancelAnimationFrame(gameAnimationId);
    gameAnimationId = null;
  }

  info.el.remove();
  info.taskBtn.remove();
  openWindows.delete(appId);
}

function toggleMinimize(appId) {
  const info = openWindows.get(appId);
  if (!info) return;
  info.minimized = !info.minimized;
  info.el.classList.toggle('minimized', info.minimized);
  if (!info.minimized) focusWindow(info.el);
  else info.taskBtn.classList.remove('focused');
}

/* ---------- Drag support (Windows) ---------- */
function makeWindowDraggable(win) {
  const bar = win.querySelector('.window-bar');
  let dragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;

  bar.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'BUTTON') return;
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = win.offsetLeft;
    startTop = win.offsetTop;
    focusWindow(win);
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    let newLeft = startLeft + dx;
    let newTop  = startTop  + dy;
    const maxLeft = window.innerWidth - 100;
    const maxTop  = window.innerHeight - 100;
    newLeft = Math.max(-win.offsetWidth + 100, Math.min(newLeft, maxLeft));
    newTop  = Math.max(0, Math.min(newTop, maxTop));
    win.style.left = newLeft + 'px';
    win.style.top  = newTop  + 'px';
  });

  window.addEventListener('mouseup', () => { dragging = false; });
}

/* ---------- Drag support (Desktop Icons) ---------- */
function makeIconDraggable(icon) {
  let dragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;

  icon.addEventListener('mousedown', (e) => {
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = icon.offsetLeft;
    startTop = icon.offsetTop;
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    let newLeft = startLeft + dx;
    let newTop  = startTop  + dy;

    newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - 100));
    newTop  = Math.max(0, Math.min(newTop, window.innerHeight - 150));

    icon.style.left = newLeft + 'px';
    icon.style.top  = newTop  + 'px';
  });

  window.addEventListener('mouseup', () => { dragging = false; });
}

/* ---------- Start menu ---------- */
function toggleStartMenu() {
  startMenu.classList.toggle('hidden');
}
function closeStartMenu() {
  startMenu.classList.add('hidden');
}
startBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleStartMenu();
});
document.addEventListener('click', (e) => {
  if (!startMenu.classList.contains('hidden') &&
      !startMenu.contains(e.target) &&
      e.target !== startBtn) {
    closeStartMenu();
  }
});

/* ---------- Clock ---------- */
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' });
  clockEl.innerHTML = `<div class="clock-time">${time}</div><div class="clock-date">${date}</div>`;
}
setInterval(updateClock, 1000);
updateClock();

/* ---------- Launch Triggers ---------- */
function launchFromTrigger(el) {
  const app = el.dataset.app;
  const url = el.dataset.url;
  if (app) { openApp(app); return; }
  if (url) { window.open(url, '_blank', 'noopener'); return; }
}

/* ---------- Initialization & Setup ---------- */
window.addEventListener('load', () => {
  // 1. Setup Desktop Icons
  document.querySelectorAll('.desktop-icon').forEach((el, index) => {
    el.style.top = (24 + (index * 104)) + 'px';
    el.style.left = '24px';

    makeIconDraggable(el);

    let wasDragged = false;
    el.addEventListener('mousedown', () => { wasDragged = false; });
    el.addEventListener('mousemove', () => { wasDragged = true; });

    el.addEventListener('click', (e) => {
      e.preventDefault();
      if (!wasDragged) {
        launchFromTrigger(el);
      }
    });
  });

  // 2. Setup Start Menu Items
  document.querySelectorAll('.start-item').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      launchFromTrigger(el);
    });
  });

  // 3. Auto-open (prefers <body data-auto-open="...">, then falls back to URL)
  const autoOpenAttr = document.body.dataset.autoOpen;
  let autoOpen = autoOpenAttr || 'home';
  if (!autoOpenAttr) {
    const path = window.location.pathname;
    if (path.includes('education')) autoOpen = 'education';
    if (path.includes('MySystemInfo')) autoOpen = 'sysinfo';
  }
  openApp(autoOpen);
});

/* ---------- 3D Car Game Logic (Vibe Coded) ---------- */
function initGame() {
  const container = document.getElementById('game-container');
  const canvas = document.getElementById('game-canvas');
  if (!container || !canvas) return;

  // If Three.js is already loaded (e.g. game window reopened), start immediately
  if (window.THREE) {
    startThreeJSGame(canvas, container);
    return;
  }

  // Load Three.js dynamically
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  script.onload = () => {
    startThreeJSGame(canvas, container);
  };
  script.onerror = () => {
    container.innerHTML = '<p style="padding:20px;color:#f88;">Could not load Three.js — check your internet connection.</p>';
  };
  document.head.appendChild(script);
}

function startThreeJSGame(canvas, container) {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0b0912, 10, 50);

  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 5, 10);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(0, 10, 0);
  scene.add(dirLight);

  // The Car
  const carGeometry = new THREE.BoxGeometry(1, 0.5, 2);
  const carMaterial = new THREE.MeshPhongMaterial({ color: 0xff0055, emissive: 0x330011 });
  const car = new THREE.Mesh(carGeometry, carMaterial);
  car.position.y = 0.25;
  scene.add(car);

  // Neon Grid / Road
  const gridHelper = new THREE.GridHelper(100, 100, 0xff00ff, 0x00ffff);
  gridHelper.position.y = 0;
  scene.add(gridHelper);

  // Game Variables
  let speed = 0.5;
  let carX = 0;
  const keys = { left: false, right: false };

  // Keyboard Controls
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
  };
  const onKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
  };
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);

  // Animation Loop
  function animate() {
    gameAnimationId = requestAnimationFrame(animate);

    // Move car
    if (keys.left) carX -= 0.15;
    if (keys.right) carX += 0.15;
    carX = Math.max(-4, Math.min(4, carX)); // Keep on road
    car.position.x += (carX - car.position.x) * 0.2; // Smooth lerp

    // Tilt car when steering
    car.rotation.z = (carX - car.position.x) * -0.5;

    // Scroll the grid to simulate movement
    gridHelper.position.z += speed;
    if (gridHelper.position.z > 10) {
      gridHelper.position.z = 0;
    }

    // Camera follow (slight sway)
    camera.position.x = car.position.x * 0.5;
    camera.lookAt(car.position.x * 0.8, 0, 0);

    renderer.render(scene, camera);
  }

  // Handle Resize
  const resizeObserver = new ResizeObserver(() => {
    if (!container.clientWidth || !container.clientHeight) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
  resizeObserver.observe(container);

  animate();
}
