export const profile = {
  name: 'Sude Nur Akyıldız',
  title: 'Bilgisayar Mühendisi',
  subtitle: 'Yazılım Geliştirme · Yapay Zeka · Bilgisayarlı Görü',
  location: 'İstanbul, Türkiye',
  phone: '+90 505 976 44 84',
  email: 'Sudeaky5@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sude-a-9592b3343/',
  github: 'https://github.com/Sudeakyildz',
  summary:
    'Bilgisayar Mühendisliği mezunu. Yazılım geliştirme, yapay zeka, makine öğrenmesi ve bilgisayarlı görü alanlarında güçlü bir ilgiye sahibim. Gerçek dünya problemlerine akıllı çözümler üretmeyi, yeni teknolojiler öğrenmeyi ve yenilikçi projelere katkı sağlamayı hedefliyorum.',
}

export const skills = [
  {
    category: 'Programlama',
    items: ['Python', 'C#', 'JavaScript', 'SQL', 'Java', 'C++'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Bootstrap', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['ASP.NET Core', 'Node.js', 'Express.js', 'REST API', 'JWT'],
  },
  {
    category: 'Yapay Zeka & ML',
    items: [
      'TensorFlow',
      'Keras',
      'PyTorch',
      'Scikit-learn',
      'Transfer Learning',
      'CNN',
    ],
  },
  {
    category: 'Bilgisayarlı Görü',
    items: [
      'OpenCV',
      'YOLOv8',
      'Mask R-CNN',
      'EfficientNet',
      'DeepFace',
      'MediaPipe',
    ],
  },
  {
    category: 'Veritabanı & Araçlar',
    items: [
      'SQL Server',
      'MySQL',
      'PostgreSQL',
      'SQLite',
      'Git',
      'Docker',
      'Pytest',
      'Selenium',
    ],
  },
]

export const experience = [
  {
    role: 'Yazılım Geliştirme Stajyeri',
    company: 'Icredible',
    period: 'Şub 2026 – Haz 2026',
    highlights: [
      'Backend Development ve QA Automation ekiplerinde ürün geliştirme ve otomasyon süreçlerine katkı sağladım.',
      'ASP.NET Core, Entity Framework Core, SQL Server, JWT ve React ile full-stack e-ticaret platformu geliştirdim.',
      'Pytest ve SeleniumBase ile Python tabanlı E2E otomasyon framework\'ü tasarladım ve sürdürdüm.',
      'Node.js ile test orkestrasyon paneli oluşturdum: SSE log akışı, test keşfi, ortam yönetimi ve raporlama.',
      'GitHub OAuth ve e-posta OTP/2FA doğrulama akışlarını otomatikleştirdim.',
    ],
    tech: [
      'Python',
      'Pytest',
      'SeleniumBase',
      'C#',
      'ASP.NET Core',
      'React',
      'Node.js',
      'SQL Server',
      'Git',
    ],
  },
  {
    role: 'Yapay Zeka Geliştirici Stajyeri',
    company: 'Makine ve Kimya Endüstrisi',
    period: 'Tem 2025 – Ağu 2025',
    highlights: [
      'Araç altı görüntülerinde tehlikeli madde tespiti için gerçek zamanlı AI sistemi geliştirdim.',
      'EfficientNetB0 transfer learning ile CNN modeli eğittim; %75 doğruluk, %88 recall elde ettim.',
      'Tehlikeli madde tespitinde %100 recall (sıfır kaçırılan tehdit) sağladım.',
      'OpenCV ile 30 FPS kamera entegrasyonlu gerçek zamanlı görüntü işleme pipeline\'ı kurdum.',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Pandas'],
  },
  {
    role: 'Stajyer',
    company: 'TNCGROUP',
    period: 'May 2025 – Haz 2025',
    highlights: [
      'Excel ile kişisel finans ve bütçe analiz sistemi geliştirdim.',
      'AutoCAD ile ev kat planı tasarladım.',
      'Adobe Photoshop ile iç mekan görselleştirme materyalleri hazırladım.',
    ],
    tech: ['Excel', 'AutoCAD', 'Adobe Photoshop'],
  },
]

export const projects = [
  {
    title: 'Kamera Tabanlı Orman Yangını Tespit Sistemi',
    category: 'AI / Computer Vision',
    description:
      'YOLO ve Mask R-CNN ile gerçek zamanlı yangın tespiti, Flask API, React Native mobil uygulama ve Firebase push bildirimleri.',
    highlights: [
      'Pixel düzeyinde etiketli veri seti hazırladım',
      'Webcam/video/görüntü girişleriyle masaüstü uygulama',
      'Canlı izleme ve anlık uyarı sistemi',
    ],
    tech: [
      'Python',
      'PyTorch',
      'YOLOv8',
      'Mask R-CNN',
      'OpenCV',
      'Flask',
      'React Native',
      'Firebase',
    ],
  },
  {
    title: 'Yüz Tanıma & El Hareketi Güvenlik Sistemi',
    category: 'AI / Computer Vision',
    description:
      'Yüz tanıma ve kişiye özel el hareketi doğrulaması ile çok faktörlü erişim kontrolü ve Türkçe sesli asistan.',
    highlights: [
      'Random Forest ile el hareketi sınıflandırma',
      'Vosk ile çevrimdışı konuşma tanıma',
      'SQLite tabanlı görev/takvim yönetimi',
    ],
    tech: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'scikit-learn',
      'Tkinter',
      'Vosk',
      'SQLite',
    ],
  },
  {
    title: 'Mikro İfade ile Yalan Tespiti',
    category: 'AI / Deep Learning',
    description:
      'DeepFace duygu analizi ve Keras MLP regresyon modeli ile gerçek zamanlı yalan tespit sistemi.',
    highlights: [
      '5 analiz yönteminin ağırlıklı ensemble\'ı',
      'PyQt5 masaüstü uygulaması',
      'Dışa aktarılabilir analiz raporları',
    ],
    tech: [
      'Python',
      'PyQt5',
      'DeepFace',
      'TensorFlow',
      'OpenCV',
      'scikit-learn',
    ],
  },
  {
    title: 'Kişisel Web Sitesi',
    category: 'Full-Stack',
    description:
      'N-Tier mimari ile ASP.NET Core MVC web uygulaması; Identity tabanlı kimlik doğrulama ve soru-cevap modülleri.',
    highlights: [
      'Core, Data, Business, Web, API katmanları',
      'Rol tabanlı yetkilendirme',
      'Özel request-logging middleware',
    ],
    tech: [
      'ASP.NET Core MVC',
      '.NET 9',
      'Entity Framework Core',
      'SQL Server',
      'REST API',
    ],
  },
  {
    title: 'Admin Dashboard',
    category: 'Full-Stack',
    description:
      'React ve Next.js ile kullanıcı ve sipariş yönetim paneli; korumalı rotalar ve istatistik modülleri.',
    highlights: [
      'Kimlik doğrulama ve oturum yönetimi',
      'Dinamik filtreleme ve istatistikler',
      'REST API entegrasyonu',
    ],
    tech: ['React', 'Next.js', 'JavaScript', 'REST API'],
  },
  {
    title: 'QR Tabanlı Kafe Sipariş Sistemi',
    category: 'Full-Stack',
    description:
      'React ve Node.js/Express ile QR kodlu sipariş sistemi; yerel ağ üzerinden mobil erişim.',
    highlights: [
      'RESTful API tasarımı',
      'MySQL veri kalıcılığı',
      'Doğrulama ve hata senaryoları',
    ],
    tech: ['Node.js', 'Express', 'React', 'MySQL'],
  },
]

export const education = {
  school: 'Bilecik Şeyh Edebali Üniversitesi',
  degree: 'Bilgisayar Mühendisliği Lisans',
  period: '2022 – 2026',
  location: 'Bilecik, Türkiye',
}

export const languages = [
  { name: 'İngilizce', level: 'B1–B2' },
  { name: 'Almanca', level: 'Temel' },
]
