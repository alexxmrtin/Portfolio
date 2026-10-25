import { asset } from "../utils/asset";

// Para añadir capturas a un proyecto: deja los archivos en `public/projects/` y
// envuelve la ruta en asset(), p. ej. images: [asset("projects/cortex-1.png"), ...]
export const projects = [
  {
    id: 1,
    name: {
      en: "Cortex",
      es: "Cortex",
    },
    type: {
      en: "Full Stack Web App",
      es: "Aplicación Web Full Stack ",
    },
    description: {
      en: [
        "Full-stack web platform to manage software projects and their services, with an AI assistant at the center of the experience. Upload entire projects preserving their folder structure and chat with different AI models (Gemini, Claude or Llama) using your own files as context. Secured with JWT authentication, persistent conversations, usage limits and Redis caching.",
        "Its differentiating piece is its RAG engine: files are split into 1600-character chunks with line tracking and vectorized with local embeddings model (BGE-M3) in a Chroma vector database. Retrieval is hybrid —semantic + BM25 fused with Reciprocal Rank Fusion and refined by a cross-encoder reranker— and the answer streams token by token (SSE) with clickable citations that open the source file and lines.",
        "It also manages remote services over SSH to start and stop them on their own machine, with credentials encrypted at rest, plus a live monitoring panel for latency and CPU/RAM/disk usage cached in Redis.",
      ],
      es: [
        "Plataforma web full-stack  para gestionar proyectos de software y sus servicios, con un asistente de IA en el centro de la experiencia. Sube proyectos completos conservando su estructura de carpetas y conversa con distintos modelos de IA (Gemini, Claude o Llama) usando tus propios archivos como contexto. Protegida con autenticación JWT, conversaciones persistentes, límites de uso y caché con Redis.",
        "Su pieza diferencial es su motor RAG: los ficheros se dividen en chunks de 1600 caracteres con registro de líneas y se vectorizan con modelos de embeddings locales (BGE-M3) en una base vectorial Chroma. La recuperación de datos es híbrida —semántica + BM25 fusionadas con Reciprocal Rank Fusion y refinadas por un reranker cross-encoder— y la respuesta llega en streaming token a token (SSE) con citaciones clicables que abren el fichero y las líneas de origen.",
        "Además gestiona servicios remotos por SSH para arrancarlos y detenerlos en su propia máquina, con credenciales cifradas en reposo, y un panel de monitorización en vivo de latencia y uso de CPU/RAM/disco cacheado en Redis.",
      ],
    },
    link: "https://github.com/alexxmrtin/Cortex",
    tags: ["React", "FastAPI", "SQLAlchemy", "RAG", "JWT", "Redis", "SSH"],
    images: [
      asset("projects/cortex-6.png"),
      asset("projects/cortex-5.png"),
      asset("projects/cortex-3.png"),
      asset("projects/cortex-4.png"),
      asset("projects/cortex-1.png"),
      asset("projects/cortex-2.png"),
    ],
  },
  {
    id: 2,
    name: {
      en: "Cloud Infrastructure AWS",
      es: "Infraestructura Cloud AWS",
    },
    type: {
      en: "Cloud Infrastructure",
      es: "Infraestructura Cloud",
    },
    description: {
      en: [
        "Complete AWS infrastructure defined 100% as code with Terraform and organized into modules (network, security, data, compute, edge, serverless, observability and cost), based on the AWS Solutions Architect Associate (SAA-C03) syllabus. So that every service has a reason to be there, everything revolves around ShopFlow, a sample online store (catalog, cart and orders) where what matters is the infrastructure. The project was built to learn AWS infrastructure, deployment and CI/CD.",
        "Requests come in through Route 53 and CloudFront with WAF, which serves the website from a private S3 bucket and forwards the API to an ALB that only accepts that distribution. Behind it, a FastAPI API runs on ECS over Graviton EC2 with task and instance autoscaling, inside a 2-AZ VPC with three subnet tiers where the data layer (RDS PostgreSQL and ElastiCache Valkey) has no Internet access. Orders are processed asynchronously: SNS fans them out to SQS queues with DLQs, and a Step Functions workflow with compensation reserves stock, charges, generates the PDF invoice and confirms, with idempotency at every step.",
        "It is deployed with GitHub Actions without access keys thanks to OIDC, using two roles (read-only plan and apply with manual approval) and checks with tflint, checkov and Infracost on every PR. Security follows least privilege: dedicated KMS keys, secrets rotated in Secrets Manager, CloudTrail, GuardDuty and administration through SSM with no SSH. It is completed with observability in CloudWatch (dashboard, 15 alarms, business metrics with EMF and X-Ray) and cost control with budgets, anomaly detection and an environment created and destroyed per session.",
      ],
      es: [
        "Infraestructura AWS completa definida al 100 % como código con Terraform y organizada en módulos (red, seguridad, datos, cómputo, edge, serverless, observabilidad y coste), basada en el temario de AWS Solutions Architect Associate (SAA-C03). Para que cada servicio tenga un motivo para estar ahí, todo gira alrededor de ShopFlow, una tienda online de ejemplo (catálogo, carrito y pedidos) donde lo importante es la infraestructura. El proyecto nació para aprender infraestructura en AWS, despliegue y CI/CD.",
        "Las peticiones entran por Route 53 y CloudFront con WAF, que sirve la web desde un bucket S3 privado y manda la API a un ALB que solo admite a esa distribución. Detrás, una API FastAPI corre en ECS sobre EC2 Graviton con autoscaling de tareas e instancias, dentro de una VPC en 2 AZ con tres capas de subredes donde la capa de datos (RDS PostgreSQL y ElastiCache Valkey) no tiene salida a Internet. Los pedidos se procesan de forma asíncrona: SNS los reparte a colas SQS con DLQ y un flujo de Step Functions con compensación reserva el stock, cobra, genera la factura en PDF y confirma, con idempotencia en cada paso.",
        "Se despliega con GitHub Actions sin access keys gracias a OIDC, con dos roles (plan de solo lectura y apply con aprobación manual) y validaciones con tflint, checkov e Infracost en cada PR. La seguridad sigue el principio de mínimo privilegio: claves KMS propias, secretos rotados en Secrets Manager, CloudTrail, GuardDuty y administración por SSM sin SSH. Se completa con observabilidad en CloudWatch (dashboard, 15 alarmas, métricas de negocio con EMF y X-Ray) y control del coste con presupuestos, detección de anomalías y un entorno que se crea y se destruye en cada sesión.",
      ],
    },
    link: "https://github.com/alexxmrtin/Infraestructura-Cloud-AWS",
    tags: ["AWS", "Terraform", "GitHub Actions", "ECS", "Lambda", "Step Functions", "FastAPI"],
    images: [
      asset("projects/InfraestructuraAWS-1.png"),
      asset("projects/InfraestructuraAWS-2.png"),
    ],
  },
  {
    id: 3,
    name: {
      en: "GymPulse",
      es: "GymPulse",
    },
    type: {
      en: "Mobile App",
      es: "Aplicación Móvil",
    },
    description: {
      en: [
        "Mobile app to log and track gym workouts, built to learn how mobile development works from the inside: a native Android client in Kotlin with Jetpack Compose, backed by a REST API in Spring Boot 4 and Java 21 on PostgreSQL. It was also the project to learn Spring Boot and OAuth 2.0, carrying over the good practices from previous projects",
        "Security is one of its pillars: short-lived JWT access tokens and rotating refresh tokens stored only as hashes, with reuse detection that revokes every session of the user. Account email verification, sign-in with Google through OAuth 2.0 / OpenID Connect, login rate limiting, and every user can only reach their own data.",
        "Features include account customization (profile photo, physical data, kg/lb units, language and theme), live workout tracking with a timer and sets of reps and weight, a catalog of predefined exercises plus custom ones, workout history with the detail of each session, a calendar with weekly streak, and weight progression charts per exercise.",
      ],
      es: [
        "Aplicación móvil para registrar y seguir entrenamientos de gimnasio, nacida para aprender cómo funciona el desarrollo móvil por dentro: un cliente nativo Android en Kotlin con Jetpack Compose, respaldado por una API REST en Spring Boot 4 y Java 21 sobre PostgreSQL. El proyecto tambien se desarrollo para aprender Spring Boot y OAuth 2.0, manteniendo las buenas prácticas de proyectos anteriores.",
        "La seguridad es uno de sus pilares: tokens de acceso JWT de corta duración y tokens de refresco rotatorios guardados solo como hash, con detección de reutilización que revoca todas las sesiones del usuario. Verificación del email de la cuenta, inicio de sesión con Google mediante OAuth 2.0 / OpenID Connect, límite de intentos de login y cada usuario solo puede acceder a sus propios datos.",
        "Entre sus funcionalidades: personalización de la cuenta (foto de perfil, datos físicos, unidades kg/lb, idioma y tema), seguimiento del entrenamientos en curso con cronómetro y series de repeticiones y peso, catálogo de ejercicios predefinidos y personalizados, historial de entrenamientos con el detalle de cada sesión, calendario con racha semanal y gráficas de progresión de peso por ejercicio.",
      ],
    },
    link: "https://github.com/alexxmrtin/GymPulse",
    tags: ["Kotlin", "Spring Boot", "Java", "PostgreSQL", "OAuth2", "JWT"],
    images: [
      asset("projects/gympulse-1.png"),
      asset("projects/gympulse-2.png"),
      asset("projects/gympulse-3.png"),
      asset("projects/gympulse-4.png"),
      asset("projects/gympulse-5.png"),
      asset("projects/gympulse-6.png"),
    ],
  },
  {
    id: 4,
    name: {
      en: "APIEmpleados",
      es: "APIEmpleados",
    },
    type: {
      en: "REST API",
      es: "API REST",
    },
    description: {
      en: [
        "Production-grade RESTful API for managing employees, departments and users, built with PHP 8 and MySQL. Follows MVC architecture and SOLID principles to ensure a clean, maintainable and scalable codebase.",
        "Secured with stateless JWT authentication, granular role-based access control, Redis distributed cache for query optimization, and rate limiting to protect against brute-force attacks.",
      ],
      es: [
        "API RESTful de nivel profesional para la gestión integral de empleados, departamentos y usuarios, desarrollada en PHP 8 y MySQL. Sigue la arquitectura MVC y los principios SOLID para garantizar un código limpio, mantenible y escalable.",
        "Protegida con autenticación JWT stateless, control de acceso granular por roles, caché distribuida con Redis para optimizar consultas y rate limiting para prevenir ataques de fuerza bruta.",
      ],
    },
    link: "https://github.com/alexxmrtin/API_RESTFUL_EMPLEADOS",
    tags: ["PHP 8", "MySQL", "JWT", "Redis"],
    images: [],
  },
  {
    id: 5,
    name: {
      en: "ReservasHotel",
      es: "ReservasHotel",
    },
    type: {
      en: "Relational Database",
      es: "Base de Datos Relacional",
    },
    description: {
      en: [
        "Relational database for hotel reservation management built with SQL Server and T-SQL.",
        "Includes room types, bookable services, and automatic payment generation. Implements triggers, stored procedures, indexes, views, and backup scripts, with four differentiated user roles for access control.",
      ],
      es: [
        "Base de datos relacional para la gestión de reservas hoteleras desarrollada en SQL Server y T-SQL.",
        "Contempla tipos de habitación, servicios añadibles a reservas y generación automática de pagos. Implementa triggers, procedimientos almacenados, índices, vistas y scripts de backup, con cuatro roles de usuario diferenciados para el control de acceso.",
      ],
    },
    link: "https://github.com/alexxmrtin/ReservasHotel",
    tags: ["SQL Server", "T-SQL"],
    images: [],
  },
  {
    id: 6,
    name: {
      en: "Interactive SVM & Random Forest",
      es: "SVM y Random Forest Interactivo",
    },
    type: {
      en: "Machine Learning · CLI",
      es: "Machine Learning · CLI",
    },
    description: {
      en: [
        "Interactive CLI system that applies supervised Machine Learning algorithms — SVM and Random Forest — to predict both discrete and continuous labels on user-provided datasets.",
        "Includes automatic preprocessing, selection of the 10 most relevant features, hyperparameter tuning via GridSearchCV, and stratified train/validation/test splits. Outputs F1-score for classification tasks and R²/MSE for regression, along with a confusion matrix or prediction scatter plot.",
      ],
      es: [
        "Sistema interactivo por línea de comandos que aplica algoritmos de Machine Learning supervisado — SVM y Random Forest — para predecir etiquetas discretas y continuas sobre datasets proporcionados por el usuario.",
        "Incluye preprocesamiento automático, selección de las 10 características más relevantes, optimización de hiperparámetros con GridSearchCV y división estratificada en train/validación/test. Reporta F1-score en clasificación y R²/MSE en regresión, junto con una matriz de confusión o gráfico de dispersión.",
      ],
    },
    link: "https://github.com/alexxmrtin/SVMRandomForest_Interactivo",
    tags: ["Python", "scikit-learn", "pandas", "matplotlib"],
    images: [],
  },
];
