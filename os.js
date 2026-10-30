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
      <h1>3D Neon Traffic Dodger</h1>
      <p>Dodge the incoming traffic! The game gets faster the longer you survive. How high can you score?</p>
      <div style="display: flex; gap: 10px; margin-bottom: 10px; align-items: center;">
        <p style="margin:0;">Controls:</p>
        <span style="background:#333; padding: 2px 8px; border-radius:4px; font-family:monospace;">A / Left Arrow</span>
        <span style="background:#333; padding: 2px 8px; border-radius:4px; font-family:monospace;">D / Right Arrow</span>
      </div>
      <div id="game-container" style="width:100%; height:450px; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.15); background: #000; position: relative;">
        <canvas id="game-canvas" style="display:block; width:100%; height:100%;"></canvas>
        <!-- UI Overlays -->
        <div id="game-ui" style="position:absolute; top:10px; left:15px; color:#fff; font-family:monospace; font-size:18px; text-shadow: 0 0 5px #0ff, 0 0 10px #0ff; pointer-events:none;">
          Score: <span id="game-score">0</span><br>
          Best: <span id="game-best">0</span>
        </div>
        <div id="game-over" style="display:none; position:absolute; inset:0; background:rgba(0,0,0,0.8); flex-direction:column; justify-content:center; align-items:center; color:#fff; font-family:sans-serif;">
          <h2 style="color:#ff0055; font-size:32px; margin-bottom:10px; text-shadow: 0 0 10px #ff0055;">CRASHED!</h2>
          <p style="font-size:20px; margin-bottom:20px;">Score: <span id="final-score" style="color:#0ff; font-weight:bold;">0</span></p>
          <button id="restart-btn" class="btn" style="font-size:16px; padding:10px 20px;">Play Again</button>
        </div>
      </div>
    `
  },

  experience: {
    title: 'My Experience',
    icon: '💼',
    body: `
      <h1>Work &amp; Project Experience</h1>
      <p>Hands-on experience across full-stack Python development, plus real-world work history.</p>

      <h2>Backend Developer — Final Course Project</h2>
      <h3>IT-Academy · Gomel (Remote) · June 2026 – September 2026</h3>
      <p>Designed and built a full-stack web application as the capstone project of the Python Web Application Development course. The application provides user authentication, a RESTful API, and a PostgreSQL-backed data layer.</p>
      <ul>
        <li>Architected the application using Django and Django REST Framework, with clean separation between models, views, and serializers.</li>
        <li>Implemented JWT-based authentication for secure, stateless API access.</li>
        <li>Designed the database schema in PostgreSQL and managed all changes through Django migrations.</li>
        <li>Containerized the application with Docker and Docker Compose for consistent dev/prod environments.</li>
        <li>Wrote unit tests to validate business logic and protect against regressions.</li>
        <li>Documented the API with Swagger / OpenAPI for ease of integration and review.</li>
      </ul>
      <p><strong>Stack:</strong> Python, Django, DRF, PostgreSQL, Docker, JWT, Swagger</p>
      <p>
        <a class="btn" href="https://github.com/ToothedTomb/final_project" target="_blank" rel="noopener">View on GitHub</a>
      </p>

      <h2>Farm Worker</h2>
      <h3>Mokroe Farm — Brest Region, Belarus · Jan 2025 – Present</h3>
      <ul>
        <li>Provide daily care for young cattle, including feeding, health monitoring, and maintaining clean, hygienic housing.</li>
        <li>Work outdoors in all weather conditions, demonstrating physical stamina, reliability, and consistency.</li>
        <li>Follow strict animal welfare standards and coordinate with a small team to complete daily routines on schedule.</li>
      </ul>

      <h2>Kitchen Porter</h2>
      <h3>The Redan Inn — United Kingdom · Aug 2020 – Aug 2024</h3>
      <ul>
        <li>Maintained cleanliness and hygiene standards in a fast-paced commercial kitchen during peak service hours.</li>
        <li>Worked as part of a team to meet tight deadlines and keep service running smoothly.</li>
        <li>Balanced part-time work with full-time college studies, developing strong time management and resilience.</li>
      </ul>

      <h2>Professional Interests</h2>
      <p>Backend development, API design, cloud technologies, and building scalable web applications.</p>

      <h2>Summary</h2>
      <p>Junior Python Developer with hands-on experience building full-stack web applications using Django, Django REST Framework, and FastAPI. Recently completed the professional <strong>Python Web Application Development</strong> course at IT-Academy, where I designed and delivered a containerized REST API with JWT authentication, PostgreSQL, and automated testing. Comfortable across the backend stack — from data modelling and API design to Docker-based deployment and CI/CD. Seeking a junior backend or full-stack role where I can contribute to production code and continue growing under experienced engineers.</p>
    `
  },

  cv: {
    title: 'JonathanSteadmanCV.docx — LibreOffice Writer',
    icon: '📄',
    body: `
      <div class="cv-editor">
        <div class="cv-toolbar">
          <div class="tb-group">
            <select id="cv-style">
              <option value="p">Paragraph</option>
              <option value="h1">Heading 1</option>
              <option value="h2">Heading 2</option>
              <option value="h3">Heading 3</option>
            </select>
          </div>
          <div class="tb-group">
            <button data-cmd="bold" title="Bold"><b>B</b></button>
            <button data-cmd="italic" title="Italic"><i>I</i></button>
            <button data-cmd="underline" title="Underline"><u>U</u></button>
          </div>
          <div class="tb-group">
            <button data-cmd="insertUnorderedList" title="Bullet list">• List</button>
            <button data-cmd="insertOrderedList" title="Numbered list">1. List</button>
          </div>
          <div class="tb-group">
            <button id="cv-print" title="Print / Export PDF">🖨️ Print</button>
          </div>
          <div class="tb-group" style="border:none;">
            <span style="font-size:11px;opacity:0.6;">A4 · 12pt · Click in the page to edit</span>
          </div>
        </div>
        <div class="cv-page-area">
          <div class="cv-page" id="cv-page" contenteditable="true" spellcheck="true">
            <div class="cv-page-header">
              <h1>Jonathan Ryan Steadman</h1>
              <div class="subtitle">Python Web Developer</div>
              <div class="contact">
                Brest, Belarus · +375 44 591 7586 · steadmanjon31@gmail.com<br>
                <a href="https://linkedin.com/in/jonathan-steadman-b4846a19b">linkedin.com/in/jonathan-steadman-b4846a19b</a>
                · <a href="https://github.com/ToothedTomb">github.com/ToothedTomb</a>
              </div>
            </div>

            <h2>Professional Summary</h2>
            <p>Junior Python Developer with hands-on experience building full-stack web applications using Django, Django REST Framework, and FastAPI. Recently completed the professional <b>Python Web Application Development</b> course at IT-Academy, where I designed and delivered a containerized REST API with JWT authentication, PostgreSQL, and automated testing. Comfortable across the backend stack — from data modelling and API design to Docker-based deployment and CI/CD. Seeking a junior backend or full-stack role where I can contribute to production code and continue growing under experienced engineers.</p>

            <h2>Technical Skills</h2>
            <ul>
              <li><b>Languages:</b> Python</li>
              <li><b>Frameworks:</b> Django, Django REST Framework, FastAPI</li>
              <li><b>Databases:</b> PostgreSQL, SQL, Django ORM, migrations</li>
              <li><b>Tools &amp; DevOps:</b> Git, Docker, Docker Compose, GitHub Actions (CI/CD), Celery, Postman</li>
              <li><b>Concepts:</b> RESTful API design, JWT authentication, OOP, asyncio, threading, multiprocessing, unit testing</li>
              <li><b>Documentation:</b> Swagger / OpenAPI</li>
            </ul>

            <h2>Project Experience</h2>
            <h3>Backend Developer — Final Course Project</h3>
            <div class="meta">IT-Academy, Gomel (Remote) · June 2026 – September 2026</div>
            <p>Designed and built a full-stack web application as the capstone project of the Python Web Application Development course. The application provides user authentication, a RESTful API, and a PostgreSQL-backed data layer.</p>
            <ul>
              <li>Architected the application using Django and Django REST Framework, with a clean separation between models, views, and serializers.</li>
              <li>Implemented JWT-based authentication for secure, stateless API access.</li>
              <li>Designed the database schema in PostgreSQL and managed all changes through Django migrations.</li>
              <li>Containerized the application with Docker and Docker Compose to guarantee consistent development and deployment environments.</li>
              <li>Wrote unit tests to validate business logic and protect against regressions.</li>
              <li>Documented the API with Swagger / OpenAPI for ease of integration and review.</li>
            </ul>
            <p><b>Stack:</b> Python, Django, DRF, PostgreSQL, Docker, JWT, Swagger<br>
            <b>Repository:</b> <a href="https://github.com/ToothedTomb/final_project">github.com/ToothedTomb/final_project</a></p>

            <h2>Work Experience</h2>
            <h3>Farm Worker</h3>
            <div class="meta">Mokroe Farm — Brest Region, Belarus · January 2025 – Present</div>
            <ul>
              <li>Provide daily care for young cattle, including feeding, health monitoring, and maintaining clean, hygienic housing.</li>
              <li>Work outdoors in all weather conditions, demonstrating physical stamina, reliability, and consistency.</li>
              <li>Follow strict animal welfare standards and coordinate with a small team to complete daily routines on schedule.</li>
            </ul>
            <h3>Kitchen Porter</h3>
            <div class="meta">The Redan Inn — United Kingdom · August 2020 – August 2024</div>
            <ul>
              <li>Maintained cleanliness and hygiene standards in a fast-paced commercial kitchen during peak service hours.</li>
              <li>Worked as part of a team to meet tight deadlines and keep service running smoothly.</li>
              <li>Balanced part-time work with full-time college studies, developing strong time management and resilience.</li>
            </ul>

            <h2>Education</h2>
            <h3>Educational Center for Programming and High Tech (IT-Academy)</h3>
            <div class="meta">Gomel, Belarus (Remote) · June 2026 – September 2026</div>
            <p><b>Course: Python Web Application Development</b> — a comprehensive professional course covering Python Core, OOP, Django, DRF, database design (SQL, ORM, migrations), Docker, CI/CD, asynchronous and parallel programming, FastAPI, WebSockets, and cloud services. The course culminated in a project-based capstone delivered as a production-style Django application.</p>
            <h3>Bath College</h3>
            <div class="meta">Bath, United Kingdom · August 2023 – August 2024</div>
            <p><b>Pearson BTEC Level 3 National Extended Diploma in Information Technology</b><br>
            Grade: <b>Triple Distinction (DDD)</b> — highest achievable grade.<br>
            IT Student of the Year Award.</p>

            <h2>Languages</h2>
            <ul>
              <li><b>English:</b> Native</li>
              <li><b>Russian:</b> Basic</li>
            </ul>

            <h2>Professional Interests</h2>
            <p>Backend development, API design, cloud technologies, and building scalable web applications.</p>
          </div>
        </div>
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

  if (appId === 'experience') {
    win.style.width = '820px';
    win.style.height = '680px';
  }

  if (appId === 'cv') {
    win.style.width = '960px';
    win.style.height = '720px';
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

  // Initialize specific apps
  if (appId === 'game') {
    initGame();
  }
  if (appId === 'cv') {
    initCVEditor();
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

  const startDrag = (clientX, clientY) => {
    dragging = true;
    startX = clientX;
    startY = clientY;
    startLeft = win.offsetLeft;
    startTop = win.offsetTop;
    focusWindow(win);
  };

  const doDrag = (clientX, clientY) => {
    if (!dragging) return;
    const dx = clientX - startX;
    const dy = clientY - startY;
    let newLeft = startLeft + dx;
    let newTop  = startTop  + dy;
    const maxLeft = window.innerWidth - 100;
    const maxTop  = window.innerHeight - 100;
    newLeft = Math.max(-win.offsetWidth + 100, Math.min(newLeft, maxLeft));
    newTop  = Math.max(0, Math.min(newTop, maxTop));
    win.style.left = newLeft + 'px';
    win.style.top  = newTop  + 'px';
  };

  // Mouse events
  bar.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'BUTTON') return;
    startDrag(e.clientX, e.clientY);
    e.preventDefault();
  });
  window.addEventListener('mousemove', (e) => doDrag(e.clientX, e.clientY));
  window.addEventListener('mouseup', () => { dragging = false; });

  // Touch events
  bar.addEventListener('touchstart', (e) => {
    if (e.target.tagName === 'BUTTON') return;
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
  }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    doDrag(touch.clientX, touch.clientY);
    e.preventDefault(); // Prevent scrolling while dragging
  }, { passive: false });
  window.addEventListener('touchend', () => { dragging = false; });
}

/* ---------- Drag support (Desktop Icons) ---------- */
function makeIconDraggable(icon) {
  let dragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;

  const startDrag = (clientX, clientY) => {
    dragging = true;
    startX = clientX;
    startY = clientY;
    startLeft = icon.offsetLeft;
    startTop = icon.offsetTop;
  };

  const doDrag = (clientX, clientY) => {
    if (!dragging) return;
    const dx = clientX - startX;
    const dy = clientY - startY;
    let newLeft = startLeft + dx;
    let newTop  = startTop  + dy;
    newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - 100));
    newTop  = Math.max(0, Math.min(newTop, window.innerHeight - 150));
    icon.style.left = newLeft + 'px';
    icon.style.top  = newTop  + 'px';
  };

  // Mouse events
  icon.addEventListener('mousedown', (e) => {
    startDrag(e.clientX, e.clientY);
    e.preventDefault();
  });
  window.addEventListener('mousemove', (e) => doDrag(e.clientX, e.clientY));
  window.addEventListener('mouseup', () => { dragging = false; });

  // Touch events
  icon.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
  }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    doDrag(touch.clientX, touch.clientY);
    e.preventDefault(); // Prevent page scrolling while dragging an icon
  }, { passive: false });
  window.addEventListener('touchend', () => { dragging = false; });
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

/* ---------- CV editor helpers ---------- */
function initCVEditor() {
  const page = document.getElementById('cv-page');
  if (!page) return;

  // Toolbar commands
  document.querySelectorAll('.cv-toolbar button[data-cmd]').forEach(btn => {
    btn.addEventListener('mousedown', (e) => {
      e.preventDefault();
      document.execCommand(btn.dataset.cmd, false, null);
      page.focus();
    });
  });

  // Block-style select
  const styleSelect = document.getElementById('cv-style');
  if (styleSelect) {
    styleSelect.addEventListener('change', () => {
      document.execCommand('formatBlock', false, styleSelect.value);
      page.focus();
    });
  }

  // Print button
  const printBtn = document.getElementById('cv-print');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      const printWin = window.open('', '_blank');
      if (!printWin) return;
      printWin.document.write(`
        <html><head><title>Jonathan Steadman — CV</title>
        <style>
          body { margin: 0; background: #fff; }
          .cv-page { width: 794px; padding: 72px; font-family: 'Liberation Serif','Times New Roman',serif; font-size: 12pt; line-height: 1.35; color: #1a1a1a; margin: 0 auto; }
          .cv-page h1 { font-family: Arial, sans-serif; font-size: 22pt; }
          .cv-page h2 { font-family: Arial, sans-serif; font-size: 14pt; border-bottom: 1px solid #999; padding-bottom: 2pt; }
          .cv-page h3 { font-family: Arial, sans-serif; font-size: 12pt; }
          .cv-page .meta { color: #555; font-style: italic; }
          .cv-page-header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 10pt; }
          .cv-page a { color: #1a4b8c; }
          @media print { .cv-page { width: auto; padding: 0.75in; } }
        </style></head><body>
          ${page.outerHTML}
        </body></html>
      `);
      printWin.document.close();
      printWin.focus();
      setTimeout(() => { printWin.print(); }, 300);
    });
  }
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
let gameLoopId = null;

function initGame() {
  const container = document.getElementById('game-container');
  const canvas = document.getElementById('game-canvas');
  if (!container || !canvas) return;

  // Setup UI
  const scoreEl = document.getElementById('game-score');
  const bestEl = document.getElementById('game-best');
  const gameOverEl = document.getElementById('game-over');
  const finalScoreEl = document.getElementById('final-score');
  const restartBtn = document.getElementById('restart-btn');
  
  bestEl.textContent = localStorage.getItem('neon_dodge_best') || '0';

  // If Three.js is already loaded, start immediately
  if (window.THREE) {
    startThreeJSGame(canvas, container, scoreEl, bestEl, gameOverEl, finalScoreEl, restartBtn);
    return;
  }

  // Load Three.js dynamically
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  script.onload = () => {
    startThreeJSGame(canvas, container, scoreEl, bestEl, gameOverEl, finalScoreEl, restartBtn);
  };
  script.onerror = () => {
    container.innerHTML = '<p style="padding:20px;color:#f88;">Could not load Three.js — check your internet connection.</p>';
  };
  document.head.appendChild(script);
}

function startThreeJSGame(canvas, container, scoreEl, bestEl, gameOverEl, finalScoreEl, restartBtn) {
  if (gameLoopId) cancelAnimationFrame(gameLoopId);

  // --- Scene Setup ---
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0b0912, 15, 60);

  const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 6, 12);
  camera.lookAt(0, 0, -5);

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
  dirLight.position.set(0, 20, 10);
  scene.add(dirLight);

  // The Road (Neon Grid)
  const gridHelper = new THREE.GridHelper(20, 20, 0xff00ff, 0x00ffff);
  gridHelper.position.y = 0;
  scene.add(gridHelper);

  // Side Walls (Neon Pillars)
  const pillarGeo = new THREE.BoxGeometry(1, 2, 1);
  const pillarMat = new THREE.MeshBasicMaterial({ color: 0xff00ff });
  const leftPillar = new THREE.Mesh(pillarGeo, pillarMat);
  const rightPillar = new THREE.Mesh(pillarGeo, pillarMat);
  leftPillar.position.set(-10.5, 1, 0);
  rightPillar.position.set(10.5, 1, 0);
  scene.add(leftPillar, rightPillar);

  // --- Player Car ---
  const carGroup = new THREE.Group();
  
  // Body
  const carBodyGeo = new THREE.BoxGeometry(1.2, 0.6, 2.5);
  const carBodyMat = new THREE.MeshPhongMaterial({ color: 0x00ffff, emissive: 0x003333, shininess: 100 });
  const carBody = new THREE.Mesh(carBodyGeo, carBodyMat);
  carBody.position.y = 0.4;
  carGroup.add(carBody);

  // Roof
  const roofGeo = new THREE.BoxGeometry(0.9, 0.4, 1.2);
  const roofMat = new THREE.MeshPhongMaterial({ color: 0x222222 });
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.position.set(0, 0.9, -0.2);
  carGroup.add(roof);

  // Wheels
  const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 16);
  wheelGeo.rotateZ(Math.PI / 2);
  const wheelMat = new THREE.MeshPhongMaterial({ color: 0x111111 });
  const wheelPositions = [[-0.7, 0.3, 0.8], [0.7, 0.3, 0.8], [-0.7, 0.3, -0.8], [0.7, 0.3, -0.8]];
  wheelPositions.forEach(pos => {
    const wheel = new THREE.Mesh(wheelGeo, wheelMat);
    wheel.position.set(...pos);
    carGroup.add(wheel);
  });

  // Headlights
  const lightGeo = new THREE.BoxGeometry(0.3, 0.1, 0.1);
  const lightMat = new THREE.MeshBasicMaterial({ color: 0xffffaa });
  const leftLight = new THREE.Mesh(lightGeo, lightMat);
  leftLight.position.set(-0.4, 0.4, -1.26);
  const rightLight = new THREE.Mesh(lightGeo, lightMat);
  rightLight.position.set(0.4, 0.4, -1.26);
  carGroup.add(leftLight, rightLight);

  carGroup.position.set(0, 0, 0);
  scene.add(carGroup);

  // --- Game State ---
  let speed = 0.3;
  let score = 0;
  let isGameOver = false;
  let carX = 0;
  let targetX = 0;
  const keys = { left: false, right: false };
  const enemies = [];
  let enemySpawnTimer = 0;

  gameOverEl.style.display = 'none';
  scoreEl.textContent = '0';

  // --- Controls ---
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

  // --- Enemy Spawner ---
  function spawnEnemy() {
    const enemyGroup = new THREE.Group();
    const colors = [0xff0055, 0xffaa00, 0xff00ff];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    const bodyGeo = new THREE.BoxGeometry(1.2, 0.6, 2.5);
    const bodyMat = new THREE.MeshPhongMaterial({ color: color, emissive: color, emissiveIntensity: 0.3 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.4;
    enemyGroup.add(body);

    // Random lane (-6, -3, 0, 3, 6) -> we'll use 3 lanes for simplicity: -3, 0, 3
    const lanes = [-3, 0, 3];
    const lane = lanes[Math.floor(Math.random() * lanes.length)];
    
    enemyGroup.position.set(lane, 0, -60); // Spawn far away
    scene.add(enemyGroup);
    enemies.push(enemyGroup);
  }

  // --- Reset Game ---
  function resetGame() {
    if (gameLoopId) cancelAnimationFrame(gameLoopId);
    
    // Clear enemies
    enemies.forEach(e => scene.remove(e));
    enemies.length = 0;
    
    // Reset stats
    speed = 0.3;
    score = 0;
    carX = 0;
    targetX = 0;
    isGameOver = false;
    enemySpawnTimer = 0;
    carGroup.position.x = 0;
    carGroup.rotation.z = 0;
    gridHelper.position.z = 0;
    
    scoreEl.textContent = '0';
    gameOverEl.style.display = 'none';
    
    // Restart loop
    animate();
  }

  restartBtn.addEventListener('click', resetGame);

  // --- Animation Loop ---
  function animate() {
    if (isGameOver) return;

    gameLoopId = requestAnimationFrame(animate);

    // Increase difficulty over time
    speed += 0.0001;
    score += Math.floor(speed * 10);
    scoreEl.textContent = score;

    // Player movement
    if (keys.left) targetX -= 0.2;
    if (keys.right) targetX += 0.2;
    targetX = Math.max(-7, Math.min(7, targetX)); // Keep within walls
    
    // Smooth lerp
    carX += (targetX - carX) * 0.15;
    carGroup.position.x = carX;
    
    // Tilt car when steering
    carGroup.rotation.z = (targetX - carX) * -0.3;
    carGroup.rotation.y = (targetX - carX) * 0.2;

    // Move Grid (simulating speed)
    gridHelper.position.z += speed;
    if (gridHelper.position.z > 1) { // Grid size is 20, spacing is 1
      gridHelper.position.z -= 1;
    }

    // Move Pillars
    leftPillar.position.z += speed;
    rightPillar.position.z += speed;
    if (leftPillar.position.z > 10) {
      leftPillar.position.z = -10;
      rightPillar.position.z = -10;
    }

    // Enemy Logic
    enemySpawnTimer += speed;
    // Spawn a new enemy every ~60 frames (adjust for difficulty)
    if (enemySpawnTimer > 45) {
      spawnEnemy();
      enemySpawnTimer = 0;
    }

    // Move and check enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
      const enemy = enemies[i];
      enemy.position.z += speed * 1.5; // Enemies move towards player

      // Check collision (simple bounding box)
      const dx = Math.abs(enemy.position.x - carGroup.position.x);
      const dz = Math.abs(enemy.position.z - carGroup.position.z);
      
      if (dx < 1.2 && dz < 2.0) { // Collision threshold
        isGameOver = true;
        finalScoreEl.textContent = score;
        
        // Save best score
        const currentBest = parseInt(localStorage.getItem('neon_dodge_best') || '0');
        if (score > currentBest) {
          localStorage.setItem('neon_dodge_best', score);
          bestEl.textContent = score;
        }
        
        gameOverEl.style.display = 'flex';
        cancelAnimationFrame(gameLoopId);
        break;
      }

      // Remove enemies that passed the player
      if (enemy.position.z > 15) {
        scene.remove(enemy);
        enemies.splice(i, 1);
      }
    }

    // Camera follow (subtle sway)
    camera.position.x += (carGroup.position.x * 0.5 - camera.position.x) * 0.1;
    camera.lookAt(carGroup.position.x * 0.3, 1, -10);

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

  // Start!
  animate();
}
