
# Utilería JavaScript

## Portada

**Nombre del alumno:** Núñez Reyes Jorge Emilio

**Materia:** Programación Web

## Descripción

Esta librería de JavaScript fue desarrollada para facilitar la validación de datos comunes en aplicaciones web. Permite validar correos electrónicos, contraseñas, nombres, longitud de números, calcular la edad de una persona y realizar otras funciones útiles como formatear texto y verificar si un número es par.

También incluye ejemplos de integración mediante un formulario, una ventana modal para mostrar la edad calculada y un formulario de inicio de sesión.

---

# Instalación

Para utilizar la librería solo es necesario agregar el siguiente archivo dentro de la página HTML.

```html
<script src="Js/libreria.js"></script>
```

---

# Uso

## Validar correo electrónico

```javascript
const correo = "usuario@gmail.com";

if(validarCorreo(correo)){
    console.log("Correo válido");
}else{
    console.log("Correo inválido");
}
```

---

## Validar contraseña

```javascript
const password = "Admin123*";

if(validarPassword(password)){
    console.log("Contraseña válida");
}else{
    console.log("Contraseña inválida");
}
```

---

## Calcular edad

```javascript
const edad = calcularEdad("2004-06-15");

console.log("Edad:", edad);
```

---

## Verificar mayoría de edad

```javascript
const mayor = esMayorDeEdad("2004-06-15");

console.log(mayor);
```

---

## Validar que un nombre solo tenga letras

```javascript
console.log(soloLetras("Jorge Emilio"));
```

---

## Validar longitud de un número

```javascript
console.log(validarLongitud(12345,5));
```

---

## Formatear texto

```javascript
console.log(formatearTexto("hola mundo desde javascript"));
```

Resultado

```
Hola Mundo Desde Javascript
```

---

## Verificar si un número es par

```javascript
console.log(esNumeroPar(24));
```

Resultado

```
true
```

---

# Integración

La librería fue integrada en:

- Formulario HTML con validaciones.
- Ventana modal que muestra la edad calculada.
- Login utilizando las funciones `validarCorreo()` y `validarPassword()`.

---

# Capturas de pantalla



## Consola mostrando resultados



![Formulario](img/captura1.png)

# Video demostrativo



---

# Estructura del proyecto

```
Actividad2/
│── README.md
│── index.html
│── login.html
│
├── Css/
│     └── index.css
│
├── Js/
│     ├── libreria.js
│     ├── index.js
│     └── login.js
│
└── img/
```
# Utileria

Librería de utilidades en JavaScript.

## 🚀 Uso desde CDN

Puedes incluir la librería directamente en tu proyecto con jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/gh/emilioreyes2219/Utileria@v1.0.0/js/libreria.js"></script>
```
---

# Autor

**Núñez Reyes Jorge Emilio**

**Materia:** Programación Web

**Tecnologías utilizadas:**

- HTML5
- CSS3
- JavaScript
- GitHub
- GitHub Pages
