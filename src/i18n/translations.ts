export type Translations = typeof es;

export const es = {
    meta: {
        title:       'Daniel Navacerrada — Desarrollador de Software en Madrid',
        description: 'Daniel Navacerrada, desarrollador web freelance en Madrid. Creo o mejoro tu web: .NET, Java, SEO, rendimiento y seguridad. Presupuesto sin compromiso.',
        keywords:    'desarrollador web Madrid, crear web Madrid, mejorar web existente, freelance .NET, desarrollador C# Madrid, automatización N8N, API REST, Java developer Madrid, programador freelance España, seguridad web, optimización web SEO, diseño web freelance Madrid',
        ogAlt:       'Daniel Navacerrada — Desarrollador de Software en Madrid',
        jsonLd: {
            websiteName: 'Daniel Navacerrada — Desarrollador de Software',
            websiteDesc: 'Portfolio de Daniel Navacerrada Varón, desarrollador de software en Madrid especializado en .NET, Java, automatización con N8N y seguridad web.',
            jobTitle:    'Desarrollador de Software Freelance',
            personDesc:  'Desarrollador de software especializado en .NET, Java y automatización empresarial con N8N. Disponible para proyectos freelance en Madrid.',
            areaServed:  'España',
            occupation:  'Desarrollador Web Freelance',
            skills:      '.NET, C#, Java, SQL Server, N8N, APIs REST, Seguridad Web, Desarrollo Web, Optimización Web, SEO técnico',
            offers: [
                { name: 'Desarrollo de sitios web',       desc: 'Diseño y desarrollo web completo desde cero, con despliegue incluido.' },
                { name: 'Optimización y mejora web',      desc: 'Análisis y mejora de webs existentes: rendimiento, SEO, accesibilidad y seguridad.' },
                { name: 'Desarrollo Backend .NET / Java', desc: 'APIs REST escalables con arquitectura limpia y documentación Swagger.' },
                { name: 'Automatización con N8N',         desc: 'Flujos automatizados con N8N, OCR y procesamiento inteligente de documentos.' },
            ],
            contactType: 'customer service',
            langAvailable: ['Spanish', 'English'],
        },
    },

    nav: {
        inicio:        'Inicio',
        sobreMi:       'Sobre mí',
        proyectos:     'Proyectos',
        servicios:     'Servicios',
        experiencia:   'Experiencia',
        contactar:     'Contactar',
        langSwitch:    'English',
        langSwitchHref: '/en/',
    },

    hero: {
        eyebrow:    'Disponible para proyectos',
        h1Line1:    'Hola, soy',
        sub:        'Especializado en <strong style="color:var(--text-primary)">.NET</strong> · Full Stack · 23 años · Transformo ideas en software escalable y de alto rendimiento.',
        btnProjects: 'Ver mis proyectos',
        btnContact:  'Ponerse en contacto',
        stats: {
            projects: 'Proyectos web',
            years:    'Años exp.',
            tech:     'Tecnologías',
        },
        codeComment: '// 📍 Disponible para nuevos proyectos',
    },

    about: {
        label: 'Quién soy',
        title: 'Apasionado por crear software que importa',
        p1:    'Con 23 años y experiencia sólida en desarrollo backend y full stack, me especializo en crear soluciones robustas y escalables usando .NET como tecnología principal.',
        p2:    'Me entusiasma trabajar en proyectos desafiantes que requieren optimización de rendimiento, arquitectura limpia y atención al detalle. Actualmente enfocado en automatización empresarial con N8N y seguridad de aplicaciones web.',
        p3:    'Aprendiz continuo que se mantiene al día con las tendencias tecnológicas y siempre busca mejorar sus habilidades y entregar valor real.',
        cta:   'Hablemos',
        skills: [
            { icon: 'BE',  title: 'Backend',        desc: '.NET Core, C#, Java, Node.js' },
            { icon: 'DB',  title: 'Bases de Datos', desc: 'SQL Server, MySQL, diseño y optimización' },
            { icon: 'FE',  title: 'Frontend',       desc: 'HTML, CSS, JavaScript' },
            { icon: '🔐',  title: 'Seguridad',      desc: 'OWASP Top 10, validación de entrada' },
            { icon: 'N8',  title: 'Automatización', desc: 'N8N, flujos de trabajo, OCR' },
            { icon: 'OPS', title: 'DevOps',         desc: 'Git, self-hosting, infraestructura' },
        ],
    },

    projects: {
        label:      'Mi trabajo',
        title:      'Proyectos Destacados',
        desc:       'Webs y herramientas que he diseñado, desarrollado y desplegado de principio a fin.',
        visitLabel: 'Visitar web →',
        moreLabel:  'Ver más →',
        items: [
            {
                num: '01', icon: '🚂', thumb: 'project-thumb-1',
                title: 'Orient Express',
                desc:  'Web completa desarrollada y desplegada bajo mi dominio personal. Diseño responsivo, rendimiento optimizado y experiencia de usuario cuidada.',
                tags:  ['HTML', 'CSS', 'JavaScript'],
                link:  'https://orientexpress.navacerradavaron.com',
                external: true,
            },
            {
                num: '02', icon: '🌿', thumb: 'project-thumb-2',
                title: 'Jarilla Viva',
                desc:  'Proyecto web desarrollado y publicado bajo dominio propio. Interfaz limpia y adaptada a múltiples dispositivos con foco en accesibilidad.',
                tags:  ['HTML', 'CSS', 'JavaScript'],
                link:  'https://jarillaviva.navacerradavaron.com',
                external: true,
            },
            {
                num: '03', icon: '🤖', thumb: 'project-thumb-3',
                title: 'Automatización de Facturas',
                desc:  'Sistema de procesamiento automático de facturas con OCR y N8N para extraer datos y almacenarlos en SQL Server con validación inteligente.',
                tags:  ['N8N', 'OCR', 'SQL Server'],
                link:  '#',
                external: false,
            },
            {
                num: '04', icon: '🔗', thumb: 'project-thumb-4',
                title: 'API REST con .NET',
                desc:  'API REST escalable con .NET Core siguiendo arquitectura limpia, autenticación segura, validación de datos y documentación Swagger.',
                tags:  ['.NET', 'C#', 'SQL', 'Swagger'],
                link:  '#',
                external: false,
            },
        ],
    },

    services: {
        label: 'Qué ofrezco',
        title: '¿Necesitas una web o mejorar la que tienes?',
        desc:  'Tanto si partes de cero como si ya tienes presencia online, te ayudo a tener una web que funcione, cargue rápido y posicione bien.',
        process: {
            title: '¿Cómo trabajo?',
            steps: [
                { num: '01', title: 'Consulta inicial',      desc: 'Analizamos juntos qué necesitas y cuál es el mejor enfoque para tu proyecto.' },
                { num: '02', title: 'Propuesta y presupuesto', desc: 'Te envío un presupuesto detallado sin compromiso, con plazos claros.' },
                { num: '03', title: 'Desarrollo',            desc: 'Trabajo con actualizaciones periódicas para que veas el progreso en todo momento.' },
                { num: '04', title: 'Entrega y soporte',     desc: 'Despliegue en producción, formación básica y soporte post-entrega incluido.' },
            ],
        },
        offerings: [
            {
                icon: '🚀', label: 'Desde cero', title: 'Desarrollo de tu web',
                desc: 'Diseño y desarrollo tu web completa: desde la idea hasta el despliegue en producción bajo tu dominio. Diseño responsivo, rendimiento optimizado y código limpio y mantenible.',
                features: [
                    'Diseño adaptado a tu marca e identidad',
                    'Optimización para móvil, tablet y escritorio',
                    'SEO técnico incluido desde el primer día',
                    'Despliegue y configuración del dominio',
                    'Velocidad y Core Web Vitals optimizados',
                ],
                cta: 'Solicitar presupuesto →',
                accent: 'var(--primary-light)', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.25)',
            },
            {
                icon: '⚡', label: 'Mejora tu web', title: 'Optimización de web existente',
                desc: 'Si ya tienes web pero no rinde como debería, la analizo y mejoro: velocidad, posicionamiento SEO, accesibilidad, seguridad o rediseño parcial o total.',
                features: [
                    'Auditoría completa de rendimiento y SEO',
                    'Mejora de velocidad de carga (LCP, CLS, INP)',
                    'Corrección de errores y vulnerabilidades',
                    'Rediseño parcial o total manteniendo tu marca',
                    'Accesibilidad WCAG y compatibilidad móvil',
                ],
                cta: 'Solicitar presupuesto →',
                accent: '#ec4899', bg: 'rgba(236,72,153,0.06)', border: 'rgba(236,72,153,0.25)',
            },
        ],
        capabilities: {
            title: 'Otras especialidades',
            items: [
                { icon: '🏗️', title: 'Desarrollo Backend', desc: 'APIs escalables, microservicios y sistemas robustos con .NET y Node.js.',      badge: 'Popular' },
                { icon: '🔐', title: 'Seguridad Web',       desc: 'Auditorías y remediación de vulnerabilidades OWASP Top 10.',                    badge: '' },
                { icon: '⚡', title: 'Automatización',       desc: 'Flujos automatizados con N8N, OCR y procesamiento de documentos.',              badge: '' },
                { icon: '📊', title: 'Bases de Datos',       desc: 'Diseño, optimización y administración de SQL Server y MySQL.',                  badge: '' },
                { icon: '🌐', title: 'Full Stack',           desc: 'Desarrollo completo de aplicaciones web responsivas de alto rendimiento.',      badge: '' },
                { icon: '⚙️', title: 'DevOps & Infra',       desc: 'Gestión de infraestructura, self-hosting y optimización de servidores.',        badge: '' },
            ],
        },
    },

    experience: {
        label: 'Trayectoria',
        title: 'Experiencia',
        desc:  'Mi camino profesional en el desarrollo de software.',
        jobs: [
            {
                period:  'Oct 2025 — Presente',
                role:    'Desarrollador de Software',
                company: 'Provimad · Madrid, España',
                desc:    'Desarrollo de software y automatización de procesos empresariales. Diseño e implementación de flujos de trabajo con N8N integrados con OCR para el procesamiento inteligente de documentos.',
                tags:    ['.NET', 'N8N', 'OCR', 'Automatización'],
            },
            {
                period:  '2024 — Presente',
                role:    'Desarrollador Freelance',
                company: 'Proyectos independientes · Madrid, España',
                desc:    'Desarrollo y despliegue de aplicaciones web completas bajo dominio propio. Automatización de procesos empresariales con N8N y OCR. Diseño e implementación de APIs REST con .NET Core.',
                tags:    ['.NET', 'N8N', 'SQL Server', 'Self-hosting'],
            },
            {
                period:  '2022 — 2024',
                role:    'Formación en Desarrollo de Software',
                company: 'Aprendizaje autodidacta & proyectos personales',
                desc:    'Construcción de bases sólidas en programación orientada a objetos, estructuras de datos y arquitectura de software. Proyectos prácticos con Java y .NET.',
                tags:    ['Java', 'C#', 'SQL', 'Git'],
            },
        ],
    },

    contact: {
        label: 'Hablemos',
        title: '¿Tienes un proyecto?',
        h3:    'Estoy disponible para nuevos proyectos',
        p:     'Si tienes una idea, necesitas un desarrollador o simplemente quieres hablar de tecnología, escríbeme. Suelo responder en menos de 24 horas.',
        details: {
            location:     { label: 'Ubicación',      value: 'Madrid, España' },
            availability: { label: 'Disponibilidad', value: 'Freelance & Colaboraciones' },
            languages:    { label: 'Idiomas',         value: 'Español · Inglés' },
        },
        form: {
            nombre:    'Nombre',   nombrePh:  'Tu nombre',
            email:     'Email',    emailPh:   'tu@email.com',
            asunto:    'Asunto',   asuntoPh:  'Selecciona un servicio',
            opcional:  '(opcional)',
            mensaje:   'Mensaje',  mensajePh: 'Cuéntame sobre tu proyecto...',
            requerido: 'requerido',
            submit:    'Enviar mensaje ✉️',
            sending:   'Enviando...',
            success:   '✅ ¡Mensaje enviado!',
            error:     '❌ Error al enviar. Inténtalo de nuevo.',
            groups: {
                webDev:         'Desarrollo Web',
                backend:        'Desarrollo Backend',
                specialties:    'Especialidades',
                other:          'Otros',
            },
            options: {
                webNueva:    'Quiero una web nueva',
                mejorarWeb:  'Mejorar / optimizar mi web actual',
                fullStack:   'Proyecto Full Stack',
                backend:     'Desarrollo Backend (.NET / Java)',
                n8n:         'Automatización con N8N',
                seguridad:   'Seguridad Web',
                bbdd:        'Base de Datos',
                otro:        'Otro',
            },
        },
        validation: {
            nombreReq:    'El nombre es obligatorio',
            emailReq:     'El email es obligatorio',
            emailInvalid: 'Introduce un email válido',
            mensajeReq:   'El mensaje es obligatorio',
            mensajeShort: 'El mensaje es demasiado corto',
        },
    },

    footer: {
        copy: '© 2026',
        links: [
            { label: 'Sobre mí',    href: '#about' },
            { label: 'Proyectos',   href: '#projects' },
            { label: 'Servicios',   href: '#services' },
            { label: 'Experiencia', href: '#experience' },
            { label: 'Contacto',    href: '#contact' },
        ],
    },
};

export const en: Translations = {
    meta: {
        title:       'Daniel Navacerrada — Software Developer in Madrid',
        description: 'Daniel Navacerrada, freelance web developer in Madrid. I build or improve your website: .NET, Java, SEO, performance and security. Free no-obligation quote.',
        keywords:    'web developer Madrid, build website Madrid, improve existing website, freelance .NET developer, C# developer Madrid, N8N automation, REST API, Java developer Madrid, freelance programmer Spain, web security, SEO web optimisation, freelance web design Madrid',
        ogAlt:       'Daniel Navacerrada — Software Developer in Madrid',
        jsonLd: {
            websiteName: 'Daniel Navacerrada — Software Developer',
            websiteDesc: "Portfolio of Daniel Navacerrada Varón, software developer in Madrid specialised in .NET, Java, N8N automation and web security.",
            jobTitle:    'Freelance Software Developer',
            personDesc:  'Software developer specialised in .NET, Java and business automation with N8N. Available for freelance projects in Madrid.',
            areaServed:  'Spain',
            occupation:  'Freelance Web Developer',
            skills:      '.NET, C#, Java, SQL Server, N8N, REST APIs, Web Security, Web Development, Web Optimisation, Technical SEO',
            offers: [
                { name: 'Website development',          desc: 'Complete web design and development from scratch, deployment included.' },
                { name: 'Website optimisation & improvement', desc: 'Analysis and improvement of existing websites: performance, SEO, accessibility and security.' },
                { name: 'Backend development .NET / Java', desc: 'Scalable REST APIs with clean architecture and Swagger documentation.' },
                { name: 'Automation with N8N',          desc: 'Automated workflows with N8N, OCR and intelligent document processing.' },
            ],
            contactType: 'customer service',
            langAvailable: ['Spanish', 'English'],
        },
    },

    nav: {
        inicio:        'Home',
        sobreMi:       'About',
        proyectos:     'Projects',
        servicios:     'Services',
        experiencia:   'Experience',
        contactar:     'Contact',
        langSwitch:    'Español',
        langSwitchHref: '/',
    },

    hero: {
        eyebrow:     'Available for projects',
        h1Line1:     "Hi, I'm",
        sub:         'Specialised in <strong style="color:var(--text-primary)">.NET</strong> · Full Stack · 23 years old · I turn ideas into scalable, high-performance software.',
        btnProjects: 'View my projects',
        btnContact:  'Get in touch',
        stats: {
            projects: 'Web projects',
            years:    'Yrs. exp.',
            tech:     'Technologies',
        },
        codeComment: '// 📍 Available for new projects',
    },

    about: {
        label: 'About me',
        title: 'Passionate about building software that matters',
        p1:    'At 23 with solid experience in backend and full stack development, I specialise in building robust, scalable solutions using .NET as my primary technology.',
        p2:    "I'm enthusiastic about challenging projects that require performance optimisation, clean architecture and attention to detail. Currently focused on business automation with N8N and web application security.",
        p3:    'A continuous learner who keeps up with technology trends and always seeks to improve their skills and deliver real value.',
        cta:   "Let's talk",
        skills: [
            { icon: 'BE',  title: 'Backend',    desc: '.NET Core, C#, Java, Node.js' },
            { icon: 'DB',  title: 'Databases',  desc: 'SQL Server, MySQL, design and optimisation' },
            { icon: 'FE',  title: 'Frontend',   desc: 'HTML, CSS, JavaScript' },
            { icon: '🔐',  title: 'Security',   desc: 'OWASP Top 10, input validation' },
            { icon: 'N8',  title: 'Automation', desc: 'N8N, workflows, OCR' },
            { icon: 'OPS', title: 'DevOps',     desc: 'Git, self-hosting, infrastructure' },
        ],
    },

    projects: {
        label:      'My work',
        title:      'Featured Projects',
        desc:       'Websites and tools I have designed, developed and deployed from start to finish.',
        visitLabel: 'Visit website →',
        moreLabel:  'Learn more →',
        items: [
            {
                num: '01', icon: '🚂', thumb: 'project-thumb-1',
                title: 'Orient Express',
                desc:  'Complete website developed and deployed under my personal domain. Responsive design, optimised performance and polished user experience.',
                tags:  ['HTML', 'CSS', 'JavaScript'],
                link:  'https://orientexpress.navacerradavaron.com',
                external: true,
            },
            {
                num: '02', icon: '🌿', thumb: 'project-thumb-2',
                title: 'Jarilla Viva',
                desc:  'Web project developed and published under a custom domain. Clean interface adapted to multiple devices with a focus on accessibility.',
                tags:  ['HTML', 'CSS', 'JavaScript'],
                link:  'https://jarillaviva.navacerradavaron.com',
                external: true,
            },
            {
                num: '03', icon: '🤖', thumb: 'project-thumb-3',
                title: 'Invoice Automation',
                desc:  'Automatic invoice processing system using OCR and N8N to extract data and store it in SQL Server with intelligent validation.',
                tags:  ['N8N', 'OCR', 'SQL Server'],
                link:  '#',
                external: false,
            },
            {
                num: '04', icon: '🔗', thumb: 'project-thumb-4',
                title: '.NET REST API',
                desc:  'Scalable REST API with .NET Core following clean architecture, secure authentication, data validation and Swagger documentation.',
                tags:  ['.NET', 'C#', 'SQL', 'Swagger'],
                link:  '#',
                external: false,
            },
        ],
    },

    services: {
        label: 'What I offer',
        title: 'Do you need a website or to improve the one you have?',
        desc:  'Whether you are starting from scratch or already have an online presence, I help you get a website that works, loads fast and ranks well.',
        process: {
            title: 'How I work',
            steps: [
                { num: '01', title: 'Initial consultation', desc: 'We analyse together what you need and the best approach for your project.' },
                { num: '02', title: 'Proposal & quote',     desc: 'I send you a detailed, no-obligation quote with clear timelines.' },
                { num: '03', title: 'Development',          desc: 'I work with regular updates so you can see progress at all times.' },
                { num: '04', title: 'Delivery & support',   desc: 'Production deployment, basic training and post-delivery support included.' },
            ],
        },
        offerings: [
            {
                icon: '🚀', label: 'From scratch', title: 'Website development',
                desc: 'I design and build your complete website: from the idea to production deployment under your domain. Responsive design, optimised performance and clean, maintainable code.',
                features: [
                    'Design tailored to your brand and identity',
                    'Optimised for mobile, tablet and desktop',
                    'Technical SEO included from day one',
                    'Deployment and domain configuration',
                    'Speed and Core Web Vitals optimised',
                ],
                cta: 'Request a quote →',
                accent: 'var(--primary-light)', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.25)',
            },
            {
                icon: '⚡', label: 'Improve your site', title: 'Existing website optimisation',
                desc: "If you already have a website but it's not performing as it should, I analyse and improve it: speed, SEO ranking, accessibility, security or partial / full redesign.",
                features: [
                    'Full performance and SEO audit',
                    'Loading speed improvements (LCP, CLS, INP)',
                    'Bug and vulnerability fixes',
                    'Partial or full redesign keeping your brand',
                    'WCAG accessibility and mobile compatibility',
                ],
                cta: 'Request a quote →',
                accent: '#ec4899', bg: 'rgba(236,72,153,0.06)', border: 'rgba(236,72,153,0.25)',
            },
        ],
        capabilities: {
            title: 'Other specialities',
            items: [
                { icon: '🏗️', title: 'Backend Development', desc: 'Scalable APIs, microservices and robust systems with .NET and Node.js.',                badge: 'Popular' },
                { icon: '🔐', title: 'Web Security',         desc: 'Audits and remediation of OWASP Top 10 vulnerabilities.',                               badge: '' },
                { icon: '⚡', title: 'Automation',            desc: 'Automated workflows with N8N, OCR and document processing.',                            badge: '' },
                { icon: '📊', title: 'Databases',             desc: 'Design, optimisation and administration of SQL Server and MySQL.',                      badge: '' },
                { icon: '🌐', title: 'Full Stack',            desc: 'Complete development of high-performance responsive web applications.',                  badge: '' },
                { icon: '⚙️', title: 'DevOps & Infra',        desc: 'Infrastructure management, self-hosting and server optimisation.',                      badge: '' },
            ],
        },
    },

    experience: {
        label: 'Career',
        title: 'Experience',
        desc:  'My professional journey in software development.',
        jobs: [
            {
                period:  'Oct 2025 — Present',
                role:    'Software Developer',
                company: 'Provimad · Madrid, Spain',
                desc:    'Software development and business process automation. Design and implementation of N8N workflows integrated with OCR for intelligent document processing.',
                tags:    ['.NET', 'N8N', 'OCR', 'Automation'],
            },
            {
                period:  '2024 — Present',
                role:    'Freelance Developer',
                company: 'Independent projects · Madrid, Spain',
                desc:    'Development and deployment of complete web applications under custom domains. Business process automation with N8N and OCR. Design and implementation of REST APIs with .NET Core.',
                tags:    ['.NET', 'N8N', 'SQL Server', 'Self-hosting'],
            },
            {
                period:  '2022 — 2024',
                role:    'Software Development Training',
                company: 'Self-taught learning & personal projects',
                desc:    'Building solid foundations in object-oriented programming, data structures and software architecture. Practical projects with Java and .NET.',
                tags:    ['Java', 'C#', 'SQL', 'Git'],
            },
        ],
    },

    contact: {
        label: "Let's talk",
        title: 'Do you have a project?',
        h3:    'I am available for new projects',
        p:     'If you have an idea, need a developer or simply want to talk tech, write to me. I usually reply within 24 hours.',
        details: {
            location:     { label: 'Location',     value: 'Madrid, Spain' },
            availability: { label: 'Availability', value: 'Freelance & Collaborations' },
            languages:    { label: 'Languages',    value: 'Spanish · English' },
        },
        form: {
            nombre:    'Name',    nombrePh:  'Your name',
            email:     'Email',   emailPh:   'you@email.com',
            asunto:    'Subject', asuntoPh:  'Select a service',
            opcional:  '(optional)',
            mensaje:   'Message', mensajePh: 'Tell me about your project...',
            requerido: 'required',
            submit:    'Send message ✉️',
            sending:   'Sending...',
            success:   '✅ Message sent!',
            error:     '❌ Failed to send. Please try again.',
            groups: {
                webDev:      'Web Development',
                backend:     'Backend Development',
                specialties: 'Specialities',
                other:       'Other',
            },
            options: {
                webNueva:   'I want a new website',
                mejorarWeb: 'Improve / optimise my current website',
                fullStack:  'Full Stack project',
                backend:    'Backend Development (.NET / Java)',
                n8n:        'Automation with N8N',
                seguridad:  'Web Security',
                bbdd:       'Database',
                otro:       'Other',
            },
        },
        validation: {
            nombreReq:    'Name is required',
            emailReq:     'Email is required',
            emailInvalid: 'Please enter a valid email',
            mensajeReq:   'Message is required',
            mensajeShort: 'Message is too short',
        },
    },

    footer: {
        copy: '© 2026',
        links: [
            { label: 'About',      href: '#about' },
            { label: 'Projects',   href: '#projects' },
            { label: 'Services',   href: '#services' },
            { label: 'Experience', href: '#experience' },
            { label: 'Contact',    href: '#contact' },
        ],
    },
};

export function useTranslations(locale?: string): Translations {
    return locale === 'en' ? en : es;
}
