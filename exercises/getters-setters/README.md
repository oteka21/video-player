## Getters y Setters

Esta es una funcionalidad nueva del lenguaje que nos permite tener propiedades virtuales dentro de objetos
es decir que no es una propiedad que exista directamente en nuestro objeto, pero va a utilizar estos 
getter y setters para calcularlos.

```javascript
let persona = {
  nombre: 'Yeison',
  apellido: 'Daza',
  get nombreCompleto() {
    return`${nombre}${apellido}`
  },
  set nombreCompleto(nom) {
    const palabras = nom.split(' ');
    this.nombre = palabras[0] || '';
    this.apellido = palabras[1] || '';
  }
}

persona.nombreCompleto = 'Camilo Sanchez'

console.log(persona.nombre); //camilo
console.log(persona.apellido); //sanchez

```