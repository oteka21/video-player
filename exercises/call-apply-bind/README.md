# call, apply y bind

Call, apply y bind son tres metodos que hacen parte del prototipo de *function*, estos tres metodos nos sirven para establecer cual va a ser el this el cual será el contexto de la llamada de una funcion.

## Usando call

Call le pasa el **this** a la funcion y automaticamente la ejecuta.

```javascript

let persona ={
    name: 'leonardo',
    lastname: 'oteca'
}
function saludar(){
    console.log(`Hola soy ${this.name} y me apellido ${this.lastname}`)
}

saludar.call(persona)
//->Resultado: Hola soy leonardo y me apellido oteca

//pasando argumentos

function caminar(metros,direccion){
    console.log(`${this.name} camina  ${metros} metros hacia ${direccion}`)
}
caminar.call(persona, 34, 'norte')
//->Resultado: leonardo camina 34 metros hacia norte
```

Call siempre recibe el objeto que queremos pasar como this al contexto y despues los parametros de la funcion separados por comma.

## Usando apply

Apply tiene la misma funcionalidad que call pero sus argumentos se pasan en un array.

```javascript
function caminar(metros,direccion){
    console.log(`${this.name} camina  ${metros} metros hacia ${direccion}`)
}

const argumentos = [500, 'sur']

caminar.apply(persona, argumentos)
//->Resultado: leonardo camina 500 metros hacia sur
```
Un truco para no cunfundir call con apply en su funcionamiento es:

**C**all - comma
**A**pply - Array 

# Usando bind

La unica diferencia de **bind** es que no ejecuta la funcion automaticamente por lo que hay que asignarla a una constante como en el siguiente ejemplo.

```javascript

const manuel ={
    name: 'manuel',
    lastname: 'oteca'
}

const manuelSaluda = saludar.bind(manuel)

manuelSaluda()

//->resultado: Hola soy manuel y me apellido oteca
```

Para pasar argumentos 

```javascript
const manuelCamina = caminar.bind(manuel)

manuelCamina(400,'oeste')

//pasrlos en el bind

const manuelCaminaWithArgs = caminar.bind(manuel, 500)

manuelCaminaWithArgs('noroeste')
```

Podemos pasar argumentos en el bind de la funcion o en la ejecucion de la funcion, tambien en el bind se pueden pasar argumentos parciales con el fin de dejarlos predeterminados.





