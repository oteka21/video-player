# Hablando de **this** en javascript

##  Ques es **this** en javascript?
> this se refiere a un objeto, ese objeto es el que esta ejecutando un fragmento de código

Para entenderlo tenemos los siguientes ejemplos:


1. Si llamamos a this en el contexto global del navegador nos va a retornar window


```javascript
console.log(`this es ${this}`)

//->resultado: [window]

```

2. this en el scope de una funcion 

```javascript
function whoIsthis(){
    return this
}

console.log(`en whoIsthis, this es ${whoIsthis()}`)

//->resultado: [window]

```
Como la funcion se esta ejecutando en el scope global, **this** tomará el valor de window.


3. this en el contexto de un objeto


```javascript

const persona = {
    name: "leonardo",
    saludar: function (){
        console.log(`Hola soy${this.name}`)
    }
}

persona.saludar()

//->resultado: Hola soy leonardo
```

Aquí podemos ver que **this** toma el valor de persona, entonces que pasa si le paso a una variable la funcion persona.saludar?




```javascript

const persona = {
    name: "leonardo",
    saludar: function (){
        console.log(`Hola soy${this.name}`)
    }
}

persona.saludar()

const saludo = persona.saludar

console.log(saludo())

//->resultado: Hola soy 
```

El resultado es que no podremos acceder al nombre por que la funcion se esta ejecutando en el contexto de window donde name no existe

4. **this** dentro de una clase

```javascript

    function Person(name){
        this.name = name 
    }

    Person.prototype.saludar = function(){
        console.log(`Hola soy ${this.name}`)
    }
    

    const leo = new Person('leonardo')

    leo.saludar()
    //->resultado: Hola soy leonardo
```

En este ejemplo la funcion Persona sirve de contructor por eso instanciamos leonardo con la palabra reservada ***new***. Tambien para agregar metodos hay que agregarlos mediante prototipos los cuales son ls forma de escribir classes en javascript.

