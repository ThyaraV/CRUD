# DISEÑO DE INGENIERÍA
La ingeniería web se ha vuelto fundamental en el mundo digital de hoy, y para crear aplicaciones web robustas y escalables, es esencial contar con herramientas adecuadas. Entre los frameworks más destacados, React, Node.js y Express se destacan por sus características únicas y su popularidad en el desarrollo web moderno.

## Frameworks
## REACT-La Biblioteca de JavaScript para Interfaces de Usuario
React es una biblioteca de JavaScript desarrollada y mantenida por Facebook que se ha convertido en una de las opciones más populares para construir interfaces de usuario (UI) interactivas y dinámicas. Algunas de sus características más notables incluyen:

[Componentización] React permite dividir la interfaz de usuario en componentes reutilizables, lo que facilita la construcción y el mantenimiento de aplicaciones complejas.
[Virtual-DOM] Utiliza un Virtual DOM para actualizar eficientemente la UI, minimizando las actualizaciones en el DOM real y mejorando el rendimiento de la aplicación.
[Amplia-Comunidad] React cuenta con una comunidad activa y una amplia gama de bibliotecas y herramientas complementarias, lo que facilita la creación de aplicaciones personalizadas.

## NODE.JS-Plataforma para Construir Aplicaciones Web Rápidas y Escalables

Node.js es una plataforma de tiempo de ejecución de JavaScript que permite ejecutar código JavaScript en el lado del servidor. Algunas de sus características destacadas son:

[Eficiencia] Node.js utiliza un modelo de E/S no bloqueante que lo hace altamente eficiente y adecuado para aplicaciones en tiempo real y de alta concurrencia.
[NPM(Node-Package-Manager] Ofrece acceso a un vasto ecosistema de paquetes y módulos, lo que facilita la gestión de dependencias y el desarrollo rápido.
[Escalabilidad] Node.js es altamente escalable gracias a su modelo de eventos y su capacidad para manejar múltiples conexiones simultáneas.

## Express - Framework Minimalista para Node.js

Express es un framework minimalista para Node.js que simplifica el desarrollo de aplicaciones web y APIs. Sus características notables incluyen:

[Rutas-y-Middleware] Express ofrece un sistema de manejo de rutas y middleware que facilita la creación de rutas personalizadas y el procesamiento de solicitudes HTTP.
[Amplia-Adopción] Es ampliamente adoptado en la comunidad de desarrollo de Node.js y cuenta con una gran cantidad de complementos y extensiones disponibles.
[Flexibilidad] Express es lo suficientemente flexible como para adaptarse a una variedad de aplicaciones web, desde simples APIs hasta aplicaciones web complejas.

### ARQUITECTURA DE FRAMEWORKS
![image](https://github.com/ThyaraV/CRUD/assets/96449161/f94a0b24-11df-4654-a87f-88d6c63cb345)

![image](https://github.com/ThyaraV/CRUD/assets/96449161/b7a6df76-ef74-47b7-98a5-e1bb9c18df34)

La arquitectura de la aplicación web combina React en el frontend para la interfaz de usuario, Node.js y Express en el backend para gestionar las solicitudes y rutas API, junto con MySQL como base de datos para realizar operaciones CRUD de usuarios. Axios se utiliza tanto en el cliente como en el servidor para enviar y recibir datos a través de solicitudes HTTP. En el flujo de trabajo CRUD, los usuarios pueden crear, leer, actualizar y eliminar registros de usuarios. El servidor Node.js se encarga de interactuar con la base de datos MySQL utilizando Sequelize como ORM, mientras que React proporciona la interfaz de usuario para que los usuarios realicen estas operaciones. Además, se implementan medidas de seguridad y validación tanto en el cliente como en el servidor para garantizar la integridad y seguridad de los datos. Esta arquitectura proporciona una base sólida para desarrollar una aplicación web robusta y escalable.

