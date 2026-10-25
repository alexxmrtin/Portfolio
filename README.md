# Portfolio de Alejandro Martín Puertas

Bienvenido/a. En este repositorio reúno algunos de mis proyectos, cada proyecto incluye su propia documentación detallada.

---

## 📁 Proyectos

### 1. Cortex

**React · FastAPI · RAG · IA Multi-modelo · Redis · SSH**

Cortex es una plataforma web full-stack para **gestionar proyectos de software y sus servicios**, con un asistente de **IA integrado** capaz de leer los archivos de tus proyectos y explicártelos. Permite subir carpetas completas conservando su estructura, registrar los servicios asociados a cada proyecto y conversar con distintos modelos de IA que usan **tu propio código como contexto**. El backend está construido con FastAPI y SQLAlchemy, y el frontend es una SPA en React 19 con Vite, con autenticación JWT y tema claro/oscuro mediante variables CSS.

Su pieza central es un **motor RAG (Retrieval-Augmented Generation)** profesional: al subir un archivo se trocea en *chunks* que se vectorizan con embeddings locales (BGE-M3) y se guardan en una base vectorial Chroma. Al preguntar, combina **búsqueda híbrida** (vectorial + léxica BM25 con fusión RRF) y un **reranker** para recuperar los fragmentos más relevantes, y genera la respuesta **anclada en ese contexto, con citaciones** a fichero y líneas, entregándola en *streaming*. Es multi-modelo (Qwen3, Gemini 2.0 Flash, Claude Sonnet 4.6 y Llama 3.3) con historial persistente y límites de uso.

Más allá de la IA, Cortex permite **controlar servicios remotos por SSH**: encenderlos y apagarlos ejecutando comandos en su máquina, con las credenciales **cifradas en reposo con Fernet** y nunca expuestas. Cada servicio dispone además de un **panel de monitorización en vivo** (latencia, CPU, RAM, disco y carga del sistema) leído por SSH y cacheado en Redis, con tolerancia a fallos para que la vista nunca se rompa si la máquina remota cae.

[🔗 Ver en GitHub](https://github.com/alexxmrtin/Cortex)

---

### 2. Infraestructura Cloud AWS

**AWS · Terraform · GitHub Actions · ECS · Serverless · FastAPI**

Infraestructura AWS completa definida **100 % como código con Terraform**, organizada en módulos (red, seguridad, datos, cómputo, edge, serverless, observabilidad y coste) y basada en el temario de **AWS Solutions Architect Associate (SAA-C03)**. Para que cada servicio tenga un motivo para estar ahí, todo gira alrededor de **ShopFlow**, una tienda online de ejemplo (catálogo, carrito y pedidos) donde lo importante es la infraestructura. El proyecto nació para aprender infraestructura en AWS, despliegue y CI/CD.

Las peticiones entran por **Route 53 y CloudFront con WAF**, que sirve la web desde un bucket S3 privado y manda la API a un **ALB** que solo admite a esa distribución. Detrás, una API FastAPI corre en **ECS sobre EC2 Graviton** con autoscaling de tareas e instancias, dentro de una **VPC en 2 AZ con tres capas de subredes** donde la capa de datos (RDS PostgreSQL y ElastiCache Valkey) no tiene salida a Internet. Los pedidos se procesan de forma **asíncrona**: SNS los reparte a colas SQS con DLQ y un flujo de **Step Functions con compensación** reserva el stock, cobra, genera la factura en PDF y confirma, con idempotencia en cada paso.

Se despliega con **GitHub Actions sin access keys gracias a OIDC**, con dos roles (plan de solo lectura y apply con aprobación manual) y validaciones con tflint, checkov e **Infracost** en cada PR. La seguridad sigue el principio de **mínimo privilegio**: claves KMS propias, secretos rotados en Secrets Manager, CloudTrail, GuardDuty y administración por SSM sin SSH. Se completa con **observabilidad en CloudWatch** (dashboard, 15 alarmas, métricas de negocio con EMF y X-Ray) y **control del coste** con presupuestos, detección de anomalías y un entorno que se crea y se destruye en cada sesión.

[🔗 Ver en GitHub](https://github.com/alexxmrtin/Infraestructura-Cloud-AWS)

---

### 3. GymPulse

**Kotlin · Jetpack Compose · Spring Boot · Java 21 · PostgreSQL · OAuth 2.0 · JWT**

GymPulse es una **aplicación móvil para registrar y seguir entrenamientos de gimnasio**, nacida para aprender cómo funciona el desarrollo móvil por dentro: un **cliente nativo Android en Kotlin con Jetpack Compose**, respaldado por una **API REST en Spring Boot 4 y Java 21** sobre PostgreSQL. El proyecto también sirvió para aprender Spring Boot y OAuth 2.0, manteniendo las buenas prácticas de proyectos anteriores.

La seguridad es uno de sus pilares: **tokens de acceso JWT de corta duración** y **tokens de refresco rotatorios** guardados solo como hash, con **detección de reutilización** que revoca todas las sesiones del usuario. Incluye verificación del email de la cuenta, **inicio de sesión con Google mediante OAuth 2.0 / OpenID Connect**, límite de intentos de login, y cada usuario solo puede acceder a sus propios datos.

Entre sus funcionalidades: personalización de la cuenta (foto de perfil, datos físicos, unidades kg/lb, idioma y tema), **seguimiento del entrenamiento en curso** con cronómetro y series de repeticiones y peso, catálogo de ejercicios predefinidos y personalizados, **historial** con el detalle de cada sesión, **calendario con racha semanal** y **gráficas de progresión de peso** por ejercicio.

[🔗 Ver en GitHub](https://github.com/alexxmrtin/GymPulse)

---

### 4. API RESTful — Sistema de Gestión de Empleados

**PHP 8 · MySQL · REST · JWT · Redis**

API REST profesional desarrollada en **PHP 8 y MySQL** para gestionar de forma integral empleados, departamentos y usuarios. Sigue el patrón arquitectónico **MVC** y aplica principios SOLID para mantener un código modular y escalable, con un *front controller* único como punto de entrada y un enrutador personalizado que soporta parámetros dinámicos en las rutas, métodos HTTP (GET, POST, PUT, DELETE) y middleware por ruta.

La seguridad es uno de sus pilares: **autenticación stateless con JWT** (firmados con HS256), contraseñas hasheadas con bcrypt, *prepared statements* para prevenir SQL Injection, sanitización contra XSS y un middleware de **CORS**. Incorpora además **Rate Limiting** que bloquea los intentos de login abusivos (máximo 5 por IP cada 20 minutos) y un sistema de **roles** (Admin con CRUD completo y Empleado con permisos de solo lectura) que garantiza un control de acceso granular.

Para optimizar el rendimiento integra **caché distribuida con Redis** sobre las consultas frecuentes, con TTL configurable e invalidación automática en cada operación de escritura, además de un sistema de logging que registra errores y anomalías de la base de datos para facilitar la auditoría.

[🔗 Ver en GitHub](https://github.com/alexxmrtin/API_RESTFUL_EMPLEADOS)

---

### 5. Sistema de Gestión de Reservas Hoteleras

**SQL Server · T-SQL · Base de Datos Relacional**

Base de datos relacional completa diseñada en **SQL Server con T-SQL** para gestionar las reservas de un hotel. El modelo contempla distintos tipos de habitaciones que varían según su precio, la posibilidad de añadir servicios adicionales a cada reserva y la generación automática del pago con el importe total, todo ello bajo un esquema **normalizado** que mantiene la integridad mediante claves primarias, foráneas y restricciones.

El sistema automatiza tanto las modificaciones como las consultas a través de **triggers** (por ejemplo, para la gestión de disponibilidad) y un amplio conjunto de **procedimientos almacenados** que cubren operaciones CRUD y consultas frecuentes. Incluye además **vistas** e **índices** para mejorar la usabilidad y el rendimiento, atributos calculados automáticamente por el sistema y *scripts* para realizar copias de seguridad.

Implementa un control de acceso basado en **cuatro roles** con privilegios diferenciados: **Administrador** (control total, incluida la estructura y los usuarios), **Gerente** (gestión completa de datos sin tocar la estructura), **Recepcionista** (consulta general y modificación de ciertos registros) y **Empleado** (acceso de solo lectura).

[🔗 Ver en GitHub](https://github.com/alexxmrtin/ReservasHotel)

---

### 6. ML Interactivo: SVM & Random Forest

**Python · Scikit-learn · Machine Learning**

Sistema de **Machine Learning interactivo** que aplica algoritmos de aprendizaje supervisado (**SVM** y **Random Forest**) para predecir etiquetas tanto discretas (clasificación) como continuas (regresión) sobre conjuntos de datos proporcionados por el usuario. El programa guía al usuario por consola pidiéndole el CSV, la columna objetivo, el algoritmo y el tipo de problema, adaptando todo el flujo a esas elecciones.

Automatiza buena parte del trabajo previo: realiza un **preprocesamiento** que maneja variables categóricas y valores nulos, una **selección de características** que identifica las 10 más relevantes, y una **búsqueda de hiperparámetros con GridSearchCV** para optimizar el modelo. Los datos se reparten de forma estratificada en entrenamiento (70%), validación (15%) y test (15%).

Finalmente evalúa el resultado con métricas adecuadas a cada caso —**F1-score** en clasificación, **R² y MSE** en regresión— y ofrece visualizaciones que ayudan a interpretarlo, como la **matriz de confusión** o el gráfico de dispersión de predicciones frente a valores reales. Está construido con Pandas, NumPy, Matplotlib y Scikit-learn.

[🔗 Ver en GitHub](https://github.com/alexxmrtin/SVMRandomForest_Interactivo)

---

📫 **Contacto:** am970110@gmail.com
💼 [LinkedIn](https://www.linkedin.com/in/alejandro-martin-7781592bb) · [GitHub](https://github.com/alexxmrtin)
