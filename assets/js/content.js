/*
  All website text lives here, in English (en) and Arabic (ar).
  Edit this file to update the site. {years} and {pmYears} are filled in
  automatically from the start dates below, so they stay current.
*/
window.SITE = {
  profile: {
    name: { en: "Khaled Naguib Othman", ar: "خالد نجيب عثمان" },
    headline: {
      en: "Production Manager | Plastic Injection Molding & IML | Lean Manufacturing & Continuous Improvement | MBA",
      ar: "مدير إنتاج | حقن البلاستيك والـ IML | التصنيع الرشيق والتحسين المستمر | ماجستير إدارة الأعمال"
    },
    role: {
      en: "Production Manager at YES PAC Plastic Packaging",
      ar: "مدير الإنتاج في شركة YES PAC للعبوات البلاستيكية"
    },
    location: { en: "6th of October, Giza, Egypt", ar: "السادس من أكتوبر، الجيزة، مصر" },
    email: "engkhalednageeb@outlook.com",
    linkedin: "https://www.linkedin.com/in/engkhaled-nageeb/",
    photo: "assets/img/khaled.jpg",
    // To offer a CV download, put the PDF in assets/cv/ and set e.g. cv: "assets/cv/Khaled-Naguib-Othman-CV.pdf"
    cv: "",
    careerStart: "2012-09",
    pmStart: "2018-07"
  },

  ui: {
    nav: {
      home: { en: "Home", ar: "الرئيسية" },
      about: { en: "About", ar: "نبذة عني" },
      experience: { en: "Experience", ar: "الخبرات" },
      projects: { en: "Projects", ar: "المشاريع" },
      contact: { en: "Contact", ar: "تواصل" }
    },
    langButton: { en: "عربي", ar: "English" },
    langLabel: { en: "Switch to Arabic", ar: "التبديل إلى الإنجليزية" },
    themeLabel: { en: "Toggle dark mode", ar: "تبديل الوضع الداكن" },
    menuLabel: { en: "Menu", ar: "القائمة" },
    downloadCv: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
    linkedin: { en: "LinkedIn", ar: "لينكدإن" },
    all: { en: "All", ar: "الكل" },
    present: { en: "Present", ar: "حتى الآن" },
    footer: { en: "© {year} Khaled Naguib Othman. All rights reserved.", ar: "© {year} خالد نجيب عثمان. جميع الحقوق محفوظة." },
    tags: {
      leadership: { en: "Leadership", ar: "القيادة" },
      lean: { en: "Lean", ar: "التصنيع الرشيق" },
      oee: { en: "OEE", ar: "OEE" },
      cost: { en: "Cost reduction", ar: "خفض التكلفة" },
      planning: { en: "Planning", ar: "التخطيط" },
      erp: { en: "ERP / SAP", ar: "ERP / SAP" },
      procurement: { en: "Procurement", ar: "المشتريات" },
      budgeting: { en: "Budgeting", ar: "الموازنات" },
      commissioning: { en: "Commissioning", ar: "التركيب والتشغيل" },
      iml: { en: "IML", ar: "IML" },
      sops: { en: "SOPs", ar: "إجراءات التشغيل" },
      quality: { en: "Quality", ar: "الجودة" },
      safety: { en: "Safety", ar: "السلامة" },
      automation: { en: "Automation", ar: "الأتمتة" },
      maintenance: { en: "Maintenance", ar: "الصيانة" },
      reporting: { en: "Reporting & data", ar: "التقارير والبيانات" },
      electronics: { en: "Electronics", ar: "الإلكترونيات" },
      training: { en: "Training", ar: "التدريب" }
    }
  },

  home: {
    eyebrow: { en: "Hello, I'm", ar: "مرحبًا، أنا" },
    intro: {
      en: "I lead the production of high-quality plastic packaging using injection molding and in-mold labeling (IML). With an engineering background in industrial electronics and automation, and an MBA, I connect what happens on the shop floor with the goals of the business.",
      ar: "أقود إنتاج عبوات بلاستيكية عالية الجودة باستخدام تقنيات الحقن والتغليف داخل القالب (IML). وبخلفية هندسية في الإلكترونيات الصناعية والتحكم الآلي، وماجستير في إدارة الأعمال، أربط بين ما يحدث في أرض المصنع وأهداف العمل."
    },
    viewExperience: { en: "View my experience", ar: "استعرض خبراتي" },
    stats: [
      { value: "{years}", suffix: "+", label: { en: "Years in manufacturing", ar: "سنوات في التصنيع" } },
      { value: "{pmYears}", suffix: "+", label: { en: "Years as Production Manager", ar: "سنوات كمدير إنتاج" } },
      { value: "2", suffix: "", label: { en: "Degrees: Engineering & MBA", ar: "شهادتان: الهندسة والماجستير" } }
    ],
    whatTitle: { en: "What I do", ar: "ماذا أقدّم" },
    what: [
      {
        icon: "users",
        title: { en: "Production leadership", ar: "قيادة الإنتاج" },
        text: {
          en: "Leading production teams to deliver on time, on spec and safely, from planning and scheduling to daily output.",
          ar: "قيادة فرق الإنتاج لتسليم المنتجات في موعدها وبالمواصفات المطلوبة وبأمان، بدءًا من التخطيط والجدولة وحتى الإنتاج اليومي."
        }
      },
      {
        icon: "activity",
        title: { en: "Operational excellence", ar: "التميز التشغيلي" },
        text: {
          en: "Applying lean manufacturing, OEE and root-cause analysis to remove waste and improve quality, safety and cost.",
          ar: "تطبيق التصنيع الرشيق وقياس الفعالية الكلية للمعدات (OEE) وتحليل الأسباب الجذرية للتخلص من الهدر وتحسين الجودة والسلامة والتكلفة."
        }
      },
      {
        icon: "tool",
        title: { en: "Engineering & automation", ar: "الهندسة والأتمتة" },
        text: {
          en: "Installing and commissioning injection molding machines and IML robots, and solving complex technical problems.",
          ar: "تركيب وتشغيل ماكينات الحقن وروبوتات الـ IML وحل المشكلات الفنية المعقدة."
        }
      }
    ],
    ctaTitle: { en: "Let's work together", ar: "لنتعاون معًا" },
    ctaText: {
      en: "Open to conversations about manufacturing leadership, operational excellence and plastic packaging.",
      ar: "يسعدني التواصل حول قيادة التصنيع والتميز التشغيلي وصناعة العبوات البلاستيكية."
    },
    ctaButton: { en: "Get in touch", ar: "تواصل معي" }
  },

  about: {
    title: { en: "About me", ar: "نبذة عني" },
    subtitle: { en: "Engineer by training, production leader by experience.", ar: "مهندس بالدراسة، وقائد إنتاج بالخبرة." },
    storyTitle: { en: "My story", ar: "قصتي" },
    story: [
      {
        en: "I am a Production Manager with {years}+ years at YES PAC Plastic Packaging, where I have grown from production and installation engineer to leading the plant's production. I work with injection molding and in-mold labeling (IML) technologies to produce high-quality plastic packaging.",
        ar: "أعمل مديرًا للإنتاج بخبرة تزيد عن {years} عامًا في شركة YES PAC للعبوات البلاستيكية، حيث تدرّجت من مهندس إنتاج وتركيب حتى قيادة الإنتاج في المصنع. أعمل بتقنيات الحقن والتغليف داخل القالب (IML) لإنتاج عبوات بلاستيكية عالية الجودة."
      },
      {
        en: "My engineering degree in industrial electronics and automatic control gives me a deep understanding of the whole production process, from the machine to the finished product. I am skilled in planning, forecasting, scheduling and inventory management.",
        ar: "منحتني دراستي للهندسة في الإلكترونيات الصناعية والتحكم الآلي فهمًا عميقًا لعملية الإنتاج كاملة، من الماكينة حتى المنتج النهائي. ولديّ خبرة في التخطيط والتنبؤ والجدولة وإدارة المخزون."
      },
      {
        en: "I am passionate about continuous improvement. I apply lean manufacturing to eliminate waste and improve quality, safety and cost, and I completed my MBA at the Arab Academy for Science, Technology and Maritime Transport in 2024 to strengthen my business and leadership skills.",
        ar: "أؤمن بالتحسين المستمر، وأطبّق مبادئ التصنيع الرشيق للتخلص من الهدر وتحسين الجودة والسلامة والتكلفة. وقد أتممت ماجستير إدارة الأعمال في الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري عام 2024 لتعزيز مهاراتي في الإدارة والقيادة."
      }
    ],
    facts: [
      { icon: "briefcase", label: { en: "Current role", ar: "المنصب الحالي" }, value: { en: "Production Manager, YES PAC", ar: "مدير الإنتاج، YES PAC" } },
      { icon: "pin", label: { en: "Location", ar: "الموقع" }, value: { en: "6th of October, Giza, Egypt", ar: "السادس من أكتوبر، الجيزة، مصر" } },
      { icon: "award", label: { en: "Education", ar: "التعليم" }, value: { en: "MBA · BE Industrial Electronics", ar: "ماجستير إدارة الأعمال · بكالوريوس هندسة" } },
      { icon: "globe", label: { en: "Languages", ar: "اللغات" }, value: { en: "Arabic, English, German", ar: "العربية، الإنجليزية، الألمانية" } }
    ],
    skillsTitle: { en: "Skills", ar: "المهارات" },
    skills: [
      {
        name: { en: "Manufacturing & process", ar: "التصنيع والعمليات" },
        items: [
          { en: "Plastic injection molding", ar: "حقن البلاستيك" },
          { en: "In-mold labeling (IML) & robots", ar: "التغليف داخل القالب (IML) والروبوتات" },
          { en: "Machine installation & commissioning", ar: "تركيب الماكينات وتشغيلها" },
          { en: "Process optimization (weight & cycle time)", ar: "تحسين العمليات (الوزن وزمن الدورة)" },
          { en: "Electrical & mechanical troubleshooting", ar: "تشخيص الأعطال الكهربائية والميكانيكية" }
        ]
      },
      {
        name: { en: "Operational excellence", ar: "التميز التشغيلي" },
        items: [
          { en: "Lean manufacturing", ar: "التصنيع الرشيق" },
          { en: "Continuous improvement", ar: "التحسين المستمر" },
          { en: "OEE (Overall Equipment Effectiveness)", ar: "الفعالية الكلية للمعدات (OEE)" },
          { en: "Root-cause & breakdown analysis", ar: "تحليل الأسباب الجذرية والأعطال" },
          { en: "SOPs & standard setups", ar: "إجراءات التشغيل القياسية" },
          { en: "Quality control", ar: "مراقبة الجودة" }
        ]
      },
      {
        name: { en: "Planning & business", ar: "التخطيط والأعمال" },
        items: [
          { en: "Production planning & scheduling", ar: "تخطيط الإنتاج وجدولته" },
          { en: "Forecasting & budgeting", ar: "التنبؤ وإعداد الموازنات" },
          { en: "Inventory & safety stock", ar: "إدارة المخزون ومخزون الأمان" },
          { en: "Procurement of molds & machines", ar: "شراء القوالب والماكينات" },
          { en: "SAP / ERP", ar: "أنظمة SAP و ERP" },
          { en: "Production reporting & analysis", ar: "تقارير الإنتاج وتحليلها" }
        ]
      },
      {
        name: { en: "Leadership", ar: "القيادة" },
        items: [
          { en: "Team leadership", ar: "قيادة الفرق" },
          { en: "Mentoring engineers & technicians", ar: "توجيه المهندسين والفنيين" },
          { en: "Establishing priorities", ar: "تحديد الأولويات" },
          { en: "Health & safety culture", ar: "ثقافة الصحة والسلامة" },
          { en: "Cross-functional collaboration", ar: "التعاون بين الإدارات" }
        ]
      }
    ],
    educationTitle: { en: "Education", ar: "التعليم" },
    education: [
      {
        degree: { en: "Master of Business Administration (MBA)", ar: "ماجستير إدارة الأعمال (MBA)" },
        field: { en: "Business Administration & Management", ar: "إدارة الأعمال والإدارة العامة" },
        school: { en: "Arab Academy for Science, Technology and Maritime Transport", ar: "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري" },
        years: "2022 – 2024"
      },
      {
        degree: { en: "Bachelor of Engineering (BE)", ar: "بكالوريوس الهندسة" },
        field: { en: "Industrial Electronics & Automatic Control", ar: "الإلكترونيات الصناعية والتحكم الآلي" },
        school: { en: "Minufiya University", ar: "جامعة المنوفية" },
        years: "2006 – 2011"
      }
    ],
    languagesTitle: { en: "Languages", ar: "اللغات" },
    languages: [
      { name: { en: "Arabic", ar: "العربية" }, level: { en: "Native", ar: "اللغة الأم" }, dots: 5 },
      { name: { en: "English", ar: "الإنجليزية" }, level: { en: "Professional", ar: "مستوى مهني" }, dots: 4 },
      { name: { en: "German", ar: "الألمانية" }, level: { en: "Elementary", ar: "مستوى مبتدئ" }, dots: 2 }
    ]
  },

  experiencePage: {
    title: { en: "Experience", ar: "الخبرات العملية" },
    subtitle: {
      en: "{years}+ years building production excellence in plastic packaging.",
      ar: "أكثر من {years} عامًا في بناء التميز في إنتاج العبوات البلاستيكية."
    },
    glance: { en: "Career at a glance", ar: "المسار المهني باختصار" },
    filter: { en: "Filter by skill", ar: "تصفية حسب المهارة" },
    expandAll: { en: "Expand all", ar: "عرض الكل" },
    collapseAll: { en: "Collapse all", ar: "طي الكل" },
    keyPoints: { en: "Key responsibilities", ar: "أبرز المهام" },
    empty: { en: "No roles match this skill.", ar: "لا توجد وظائف تطابق هذه المهارة." }
  },

  experience: [
    {
      id: "pm",
      role: { en: "Production Manager", ar: "مدير الإنتاج" },
      company: { en: "YES PAC Plastic Packaging", ar: "YES PAC للعبوات البلاستيكية" },
      location: { en: "6th of October, Egypt", ar: "السادس من أكتوبر، مصر" },
      start: "2018-07",
      end: null,
      summary: {
        en: "Member of the management team, reporting to the Plant Manager. I drive continuous improvement across the site in line with the business strategy, raising performance in quality, safety and cost.",
        ar: "عضو في فريق الإدارة وأتبع مدير المصنع مباشرة. أقود مبادرات التحسين المستمر في الموقع بما يتماشى مع استراتيجية العمل، لرفع الأداء في الجودة والسلامة والتكلفة."
      },
      points: [
        { en: "Lead the production team to deliver efficient, high-quality output.", ar: "قيادة فريق الإنتاج لتحقيق إنتاج فعّال وعالي الجودة." },
        { en: "Champion lean manufacturing and continuous improvement to eliminate waste and optimize processes.", ar: "قيادة تطبيق التصنيع الرشيق والتحسين المستمر للتخلص من الهدر وتحسين العمليات." },
        { en: "Reduce product cost by optimizing critical process parameters such as part weight and cycle time.", ar: "خفض تكلفة المنتج من خلال تحسين معايير التشغيل الحرجة مثل وزن المنتج وزمن الدورة." },
        { en: "Developed and implemented OEE measures to track equipment effectiveness and find improvement opportunities.", ar: "تطوير وتطبيق مقاييس OEE لمتابعة فعالية المعدات وتحديد فرص التحسين." },
        { en: "Run monthly breakdown analyses to find root causes and put corrective actions in place.", ar: "إجراء تحليل شهري للأعطال لتحديد الأسباب الجذرية وتطبيق الإجراءات التصحيحية." },
        { en: "Forecast yearly material and manpower needs and contribute to the annual budget.", ar: "التنبؤ باحتياجات المواد والعمالة السنوية والمساهمة في إعداد الموازنة السنوية." },
        { en: "Schedule the supply of materials and components and manage minimum safety stock.", ar: "جدولة توريد المواد والمكونات وإدارة الحد الأدنى لمخزون الأمان." },
        { en: "Own the purchasing of molds, machines and utility equipment.", ar: "مسؤول عن شراء القوالب والماكينات ومعدات المرافق." },
        { en: "Implemented the ERP system for production.", ar: "تطبيق نظام ERP في الإنتاج." }
      ],
      tags: ["leadership", "lean", "oee", "cost", "planning", "budgeting", "procurement", "erp"]
    },
    {
      id: "head",
      role: { en: "Head of Installation & Operation Team", ar: "رئيس فريق التركيب والتشغيل" },
      company: { en: "YES PAC Plastic Packaging", ar: "YES PAC للعبوات البلاستيكية" },
      location: { en: "6th of October, Egypt", ar: "السادس من أكتوبر، مصر" },
      start: "2015-01",
      end: "2018-06",
      summary: {
        en: "Led a team of engineers and technicians responsible for installing, operating and optimizing the plant's plastic processing machinery.",
        ar: "قيادة فريق من المهندسين والفنيين المسؤولين عن تركيب وتشغيل وتحسين ماكينات تصنيع البلاستيك في المصنع."
      },
      points: [
        { en: "Led the installation and commissioning of injection molding and IML equipment.", ar: "قيادة تركيب وتشغيل معدات الحقن والـ IML." },
        { en: "Worked with cross-functional teams to integrate new machinery into the production line.", ar: "التعاون مع الإدارات المختلفة لدمج الماكينات الجديدة في خط الإنتاج." },
        { en: "Oversaw day-to-day operations of the plastic processing department.", ar: "الإشراف على العمليات اليومية لقسم تصنيع البلاستيك." },
        { en: "Implemented and maintained SOPs to optimize machine performance and product quality.", ar: "تطبيق إجراءات التشغيل القياسية والحفاظ عليها لتحسين أداء الماكينات وجودة المنتج." },
        { en: "Mentored and developed team members' technical skills.", ar: "توجيه أعضاء الفريق وتطوير مهاراتهم الفنية." },
        { en: "Acted as the primary technical expert for complex machinery issues.", ar: "المرجع الفني الأول في حل المشكلات المعقدة للماكينات." },
        { en: "Enforced safety protocols and promoted a culture of safety.", ar: "تطبيق إجراءات السلامة ونشر ثقافة السلامة." },
        { en: "Developed and managed budgets for installation and operation projects.", ar: "إعداد وإدارة موازنات مشاريع التركيب والتشغيل." }
      ],
      tags: ["leadership", "commissioning", "iml", "sops", "quality", "safety", "budgeting"]
    },
    {
      id: "eng",
      role: { en: "Production & Installation Engineer", ar: "مهندس إنتاج وتركيب" },
      company: { en: "YES PAC Plastic Packaging", ar: "YES PAC للعبوات البلاستيكية" },
      location: { en: "6th of October, Egypt", ar: "السادس من أكتوبر، مصر" },
      start: "2012-09",
      end: "2015-01",
      summary: {
        en: "Kept the machines at top performance while holding to standard setups and process parameters, covering both electrical and mechanical automation.",
        ar: "الحفاظ على أعلى أداء للماكينات مع الالتزام بالإعدادات القياسية ومعايير التشغيل، في مجالي الأتمتة الكهربائية والميكانيكية."
      },
      points: [
        { en: "Monitored machine performance and upheld standard setups for consistent quality.", ar: "متابعة أداء الماكينات والالتزام بالإعدادات القياسية لضمان جودة ثابتة." },
        { en: "Maintained and troubleshot electrical and mechanical systems.", ar: "صيانة الأنظمة الكهربائية والميكانيكية وتشخيص أعطالها." },
        { en: "Installed and operated injection molding machines with various types of IML robots.", ar: "تركيب وتشغيل ماكينات الحقن مع أنواع مختلفة من روبوتات الـ IML." },
        { en: "Compiled daily production reports covering breakdown time, productivity, material consumption and scrap.", ar: "إعداد تقارير الإنتاج اليومية التي تشمل زمن الأعطال والإنتاجية واستهلاك المواد ونسبة الهالك." }
      ],
      tags: ["automation", "maintenance", "iml", "commissioning", "reporting"]
    },
    {
      id: "atos",
      role: { en: "Technical Support Engineer", ar: "مهندس دعم فني" },
      company: { en: "ATOS Generators", ar: "ATOS للمولدات" },
      location: { en: "Egypt", ar: "مصر" },
      start: "2012-08",
      end: "2012-09",
      summary: {
        en: "Designed electronic circuits for generator control.",
        ar: "تصميم دوائر إلكترونية للتحكم في المولدات."
      },
      points: [],
      tags: ["electronics", "automation"]
    }
  ],

  projectsPage: {
    title: { en: "Projects", ar: "المشاريع" },
    subtitle: { en: "Selected work from my career in production and operations.", ar: "مختارات من أعمالي في الإنتاج والعمليات." },
    note: { en: "Details are described in general terms to respect confidentiality.", ar: "تُعرض التفاصيل بشكل عام حفاظًا على السرية." },
    readMore: { en: "Read more", ar: "اقرأ المزيد" },
    challenge: { en: "The challenge", ar: "التحدي" },
    did: { en: "What I did", ar: "ما قمت به" },
    outcome: { en: "The result", ar: "النتيجة" },
    skillsUsed: { en: "Skills used", ar: "المهارات" },
    close: { en: "Close", ar: "إغلاق" },
    categories: {
      ops: { en: "Operational excellence", ar: "التميز التشغيلي" },
      eng: { en: "Engineering", ar: "الهندسة" },
      digital: { en: "Digital & data", ar: "الرقمنة والبيانات" },
      people: { en: "People & training", ar: "الأفراد والتدريب" }
    }
  },

  projects: [
    {
      id: "oee",
      category: "ops",
      icon: "activity",
      title: { en: "OEE measurement system", ar: "نظام قياس الفعالية الكلية للمعدات (OEE)" },
      summary: {
        en: "Built and rolled out OEE tracking so the plant can see availability, performance and quality losses on every machine.",
        ar: "بناء وتطبيق نظام لقياس OEE يتيح للمصنع رؤية فاقد التوافر والأداء والجودة على كل ماكينة."
      },
      challenge: {
        en: "Without a common measure of equipment effectiveness, it was hard to compare machines or see where production time was being lost.",
        ar: "بدون مقياس موحّد لفعالية المعدات، كان من الصعب مقارنة الماكينات أو معرفة أين يضيع وقت الإنتاج."
      },
      did: [
        { en: "Defined OEE measures for availability, performance and quality.", ar: "تحديد مقاييس OEE للتوافر والأداء والجودة." },
        { en: "Set up tracking of production data and losses for each machine.", ar: "إعداد متابعة لبيانات الإنتاج والفاقد لكل ماكينة." },
        { en: "Used the results to target improvement actions.", ar: "استخدام النتائج لتوجيه إجراءات التحسين." }
      ],
      outcome: {
        en: "A shared, data-based view of efficiency that guides where the team focuses its improvement work.",
        ar: "رؤية موحّدة مبنية على البيانات للكفاءة، توجّه الفريق إلى أولويات التحسين."
      },
      tags: ["oee", "lean", "reporting"]
    },
    {
      id: "cost",
      category: "ops",
      icon: "trending-down",
      title: { en: "Cost reduction: part weight & cycle time", ar: "خفض التكلفة: وزن المنتج وزمن الدورة" },
      summary: {
        en: "Reduced product cost by optimizing critical process parameters, part weight and cycle time, while protecting quality.",
        ar: "خفض تكلفة المنتج بتحسين معايير التشغيل الحرجة، وزن المنتج وزمن الدورة، مع الحفاظ على الجودة."
      },
      challenge: {
        en: "In injection molding, material and machine time are the biggest drivers of product cost.",
        ar: "في صناعة الحقن، تُعد المواد الخام ووقت الماكينة أكبر العوامل المؤثرة في تكلفة المنتج."
      },
      did: [
        { en: "Analyzed process parameters for key products.", ar: "تحليل معايير التشغيل للمنتجات الرئيسية." },
        { en: "Optimized part weight to use less material.", ar: "تحسين وزن المنتج لتقليل استهلاك المواد." },
        { en: "Shortened cycle times to increase output per machine.", ar: "تقليل زمن الدورة لزيادة إنتاج كل ماكينة." },
        { en: "Verified that quality stayed within specification.", ar: "التأكد من بقاء الجودة ضمن المواصفات." }
      ],
      outcome: {
        en: "Lower cost per part and better use of machine capacity, with no compromise on quality.",
        ar: "تكلفة أقل لكل قطعة واستغلال أفضل لطاقة الماكينات دون التأثير على الجودة."
      },
      tags: ["cost", "lean", "quality"]
    },
    {
      id: "commissioning",
      category: "eng",
      icon: "tool",
      title: { en: "Injection molding & IML line commissioning", ar: "تركيب وتشغيل خطوط الحقن والـ IML" },
      summary: {
        en: "Led the installation and commissioning of injection molding machines and IML robots, and their integration into the production line.",
        ar: "قيادة تركيب وتشغيل ماكينات الحقن وروبوتات الـ IML ودمجها في خط الإنتاج."
      },
      challenge: {
        en: "New machines and robots must be installed, set up and running to standard as quickly as possible.",
        ar: "يجب تركيب الماكينات والروبوتات الجديدة وضبطها وتشغيلها وفق المعايير في أسرع وقت ممكن."
      },
      did: [
        { en: "Coordinated installation with cross-functional teams.", ar: "تنسيق أعمال التركيب مع الإدارات المختلفة." },
        { en: "Commissioned injection molding machines and IML robots.", ar: "تشغيل ماكينات الحقن وروبوتات الـ IML." },
        { en: "Set standard setups and SOPs for stable production.", ar: "وضع الإعدادات القياسية وإجراءات التشغيل لإنتاج مستقر." },
        { en: "Led the team of engineers and technicians on site.", ar: "قيادة فريق المهندسين والفنيين في الموقع." }
      ],
      outcome: {
        en: "New capacity brought into production smoothly and running to standard.",
        ar: "إدخال طاقات إنتاجية جديدة بسلاسة وتشغيلها وفق المعايير."
      },
      tags: ["commissioning", "iml", "sops", "leadership"]
    },
    {
      id: "breakdown",
      category: "ops",
      icon: "search",
      title: { en: "Monthly breakdown analysis", ar: "التحليل الشهري للأعطال" },
      summary: {
        en: "A monthly analysis of machine breakdowns to find root causes and put lasting corrective actions in place.",
        ar: "تحليل شهري لأعطال الماكينات لتحديد الأسباب الجذرية وتطبيق إجراءات تصحيحية دائمة."
      },
      challenge: {
        en: "Repeated breakdowns cost production time when the same problems are fixed again and again.",
        ar: "الأعطال المتكررة تُهدر وقت الإنتاج عندما تُصلَح المشكلات نفسها مرة بعد أخرى."
      },
      did: [
        { en: "Collected and classified breakdown time by machine and cause.", ar: "جمع زمن الأعطال وتصنيفه حسب الماكينة والسبب." },
        { en: "Identified recurring problems and their root causes.", ar: "تحديد المشكلات المتكررة وأسبابها الجذرية." },
        { en: "Assigned and followed up corrective actions.", ar: "تحديد الإجراءات التصحيحية ومتابعة تنفيذها." }
      ],
      outcome: {
        en: "Recurring problems are tackled at the root instead of being fixed repeatedly.",
        ar: "معالجة المشكلات المتكررة من جذورها بدلًا من إصلاحها مرارًا."
      },
      tags: ["maintenance", "reporting", "lean"]
    },
    {
      id: "lean",
      category: "ops",
      icon: "layers",
      title: { en: "Lean manufacturing rollout", ar: "تطبيق التصنيع الرشيق" },
      summary: {
        en: "Championed lean manufacturing and continuous improvement across the site, aligned with the business strategy.",
        ar: "قيادة تطبيق التصنيع الرشيق والتحسين المستمر في الموقع بما يتماشى مع استراتيجية العمل."
      },
      challenge: {
        en: "Improvement needs to be part of daily work, not a one-off project.",
        ar: "يجب أن يكون التحسين جزءًا من العمل اليومي، وليس مشروعًا لمرة واحدة."
      },
      did: [
        { en: "Introduced lean principles to eliminate waste.", ar: "إدخال مبادئ التصنيع الرشيق للتخلص من الهدر." },
        { en: "Drove continuous improvement initiatives with the teams.", ar: "قيادة مبادرات التحسين المستمر مع الفرق." },
        { en: "Linked improvements to quality, safety and cost goals.", ar: "ربط التحسينات بأهداف الجودة والسلامة والتكلفة." }
      ],
      outcome: {
        en: "A team that looks for and removes waste as part of everyday work.",
        ar: "فريق يبحث عن الهدر ويتخلص منه كجزء من العمل اليومي."
      },
      tags: ["lean", "leadership", "quality", "safety"]
    },
    {
      id: "erp",
      category: "digital",
      icon: "database",
      title: { en: "ERP implementation for production", ar: "تطبيق نظام ERP في الإنتاج" },
      summary: {
        en: "Implemented the ERP system on the production side, linking planning, materials and production orders.",
        ar: "تطبيق نظام ERP في جانب الإنتاج، وربط التخطيط والمواد وأوامر الإنتاج."
      },
      challenge: {
        en: "Planning, material and production information needed to live in one system instead of separate files.",
        ar: "كان لا بد من جمع بيانات التخطيط والمواد والإنتاج في نظام واحد بدلًا من ملفات منفصلة."
      },
      did: [
        { en: "Brought production planning and orders into the ERP system.", ar: "إدخال تخطيط الإنتاج وأوامره في نظام ERP." },
        { en: "Linked material requirements to the production schedule.", ar: "ربط احتياجات المواد بجدول الإنتاج." },
        { en: "Supported the team in adopting the new way of working.", ar: "دعم الفريق في التحول إلى طريقة العمل الجديدة." }
      ],
      outcome: {
        en: "One source of truth for production planning and material availability.",
        ar: "مصدر موحّد وموثوق لبيانات تخطيط الإنتاج وتوافر المواد."
      },
      tags: ["erp", "planning"]
    },
    {
      id: "analytics",
      category: "digital",
      icon: "bar-chart",
      title: { en: "Production analytics & daily reporting", ar: "تحليلات الإنتاج والتقارير اليومية" },
      summary: {
        en: "Data-driven reports that compare planned production with actual output and keep daily operations on track.",
        ar: "تقارير مبنية على البيانات تقارن الإنتاج المخطط بالفعلي وتحافظ على انتظام العمليات اليومية."
      },
      challenge: {
        en: "Managers need a fast, clear view of the gap between the plan and what the shop floor actually produced.",
        ar: "يحتاج المديرون إلى رؤية سريعة وواضحة للفجوة بين الخطة وما تم إنتاجه فعليًا."
      },
      did: [
        { en: "Compared the production plan with actual output by customer, machine and product.", ar: "مقارنة خطة الإنتاج بالإنتاج الفعلي حسب العميل والماكينة والمنتج." },
        { en: "Created a daily operations brief that highlights recurring issues and actions coming due.", ar: "إعداد تقرير يومي للعمليات يُبرز المشكلات المتكررة والإجراءات المستحقة." },
        { en: "Tracked trials of new molds, machines and robots.", ar: "متابعة تجارب القوالب والماكينات والروبوتات الجديدة." },
        { en: "Turned daily production data, downtime, productivity and scrap, into clear decisions.", ar: "تحويل بيانات الإنتاج اليومية، الأعطال والإنتاجية والهالك، إلى قرارات واضحة." }
      ],
      outcome: {
        en: "Faster, data-based decisions and a clear view of the gaps between plan and reality.",
        ar: "قرارات أسرع مبنية على البيانات ورؤية واضحة للفجوات بين الخطة والواقع."
      },
      tags: ["reporting", "planning", "oee"]
    },
    {
      id: "training",
      category: "people",
      icon: "book",
      title: { en: "Bilingual shop-floor training manuals", ar: "أدلة تدريب ثنائية اللغة لأرض المصنع" },
      summary: {
        en: "Turned complex equipment manuals into clear Arabic–English training guides for operators and technicians.",
        ar: "تحويل أدلة المعدات المعقدة إلى أدلة تدريب واضحة باللغتين العربية والإنجليزية للمشغلين والفنيين."
      },
      challenge: {
        en: "Original equipment manuals are long, technical and often only in English.",
        ar: "أدلة المعدات الأصلية طويلة وتقنية وغالبًا متاحة بالإنجليزية فقط."
      },
      did: [
        { en: "Restructured equipment manuals into step-by-step guides.", ar: "إعادة تنظيم أدلة المعدات في صورة خطوات واضحة." },
        { en: "Wrote the content in both Arabic and English.", ar: "كتابة المحتوى باللغتين العربية والإنجليزية." },
        { en: "Made the guides practical for daily use on the shop floor.", ar: "جعل الأدلة عملية للاستخدام اليومي في أرض المصنع." }
      ],
      outcome: {
        en: "Easier training for new team members and more consistent machine operation.",
        ar: "تدريب أسهل للأعضاء الجدد وتشغيل أكثر انتظامًا للماكينات."
      },
      tags: ["training", "sops", "safety"]
    }
  ],

  contactPage: {
    title: { en: "Contact", ar: "تواصل معي" },
    subtitle: { en: "Let's talk about manufacturing, operations or a new opportunity.", ar: "يسعدني الحديث عن التصنيع أو العمليات أو فرصة جديدة." },
    email: { en: "Email", ar: "البريد الإلكتروني" },
    copy: { en: "Copy", ar: "نسخ" },
    copied: { en: "Email copied", ar: "تم نسخ البريد" },
    linkedinText: { en: "Connect on LinkedIn", ar: "تواصل عبر لينكدإن" },
    location: { en: "Location", ar: "الموقع" },
    formTitle: { en: "Send a message", ar: "أرسل رسالة" },
    name: { en: "Your name", ar: "اسمك" },
    subject: { en: "Subject", ar: "الموضوع" },
    message: { en: "Message", ar: "رسالتك" },
    send: { en: "Send message", ar: "إرسال الرسالة" },
    note: { en: "This opens your email app with the message ready to send.", ar: "سيفتح هذا تطبيق البريد لديك والرسالة جاهزة للإرسال." },
    error: { en: "Please fill in all fields.", ar: "يرجى ملء جميع الحقول." },
    fromLabel: { en: "From", ar: "من" }
  }
};
