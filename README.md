## **Proyecto Final Digitalers**

### **Listado de tecnologías utilizadas:**

- [Node.js](https://nodejs.org/en)  - Para el lado del servidor.
- [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript) para validaciones y funcionalidades en el lado del cliente.
- [Handlebars](https://handlebarsjs.com/ )  - Como motor de plantilla.
- [Mongo DB](https://www.mongodb.com/es-) -Como motor de base de datos.
- [Boostrap](https://getbootstrap.com/) - Como framedwork front-end.
- [JQuery](https://jquery.com/) - Como libreria de JavaScript.
- [Markdown](https://markdown.es/) - Para el diseño del README.md.


## **instalacion**

Descomprimir el archivo zip o clonar el repositorio de [github]
está configurado para escuchar en el puerto 3000 de localhost.
Verificar que no haya otra aplicación o servicio consumiendo este puerto


### **configuracion de MongoDB**
Las variables de entorno son las siguientes:

- MONGO_URL_LOCAL = mongodb://127.0.0.1:27017/TiendaOnline
- MONGO_URL_ATLAS = mongodb+srv://valetheangel95:CEOuwEcgEmMnM2CO@cluster0.q1almmz.mongodb.net/TiendaOnline?retryWrites=true&w=majority&appName=AtlasApp
- PORT = 3000
- CLAVETOKEN = whsdrt2@fkhstdpks

### **las herramientas necesarias que instalé para realizar el proyecto son:**
- dotenv
- express
- cors 
- path
- jsonwebtoken
- mongoose
- mongodb
- bcrypt
- cookie-parser


### **PROPOSITO DE LA APP**
Esta app se creó con el fin de consolidar los conocimientos adquiridos durante el cursada de Digitalers Node.js Developer , poniendo en práctica el uso del lenguaje de programacion con JavaScript , como así tambien adentrarme en la utilizacion de bases de datos no relacionales como MongoDB. Además de reforzar conocimientos relacionados al diseño del sitio web. Es una aplicación que puede tomarse como base en proyectos mas complejos.

Entre sus caracteristicas encontramos:

### **SECCIÓN DE PRODUCTOS:**

- *Conjunto de imagenes de productos*: Se utilizó Css para el diseño y JavaScript para mostrar los mismos y darle funcionalidad a los botones de "comprar".

- *Descripción de Productos*: Se utilizó Css para el diseño, se muestran los detalles de cada producto.

- *Carrito de compra*: Se utilizó CSS para el diseño junto con JavaScript y JQuery para la funcionalidad del mismo. Al finalizar la compra, la informacion se guarda en la base de datos. El administrador puede realizar las modificaciones pertinentes.



 ### **SECCIONES RELACIONADAS CON LOS USUARIOS:**


 - *Sección Contacto:* Se encuentra un formulario donde el usuario puede enviar consultas.

 - *Sección Crear Usuario:* Se encuentra un formulario donde el usuario crea su cuenta. Los campos de imput estan validados con JavaScript y la contraseña encriptada con bcrypt. Realizando el envío de datos, se genera un mensaje de confirmacion. Este se realizo usando Sweet alert junto con JavaScript.

 - *Sección Login:* Se encuentra un formulario de Login donde se puede loguear, con rol de usuario o como administrador.





### **SECCIONES RELACIONADAS CON EL ADMINISTRADOR:**


 **Los datos son: email: admin2@gmail.com y la contraseña:asdasd123**
  

 Para ingresar en esta sección, se necesita el email y la contraseña para loguarse como administrador. Aquí encontramos los formularios para ingresar nuevos productos o nuevos usuarios y poder eliminarlos o actualizarlos posteriormente en una tabla. todos los cambios se reflejan en la coleccion de productos y de clientes de la base de datos. 
