// //boolean

// let muted: boolean = true

// muted = false;

// console.log(muted)

// const numerador: number = 10
// const denominador: number = 2

// const result =  numerador / denominador

// console.log(result)

// //arreglos
// //array de strings
// let people: string[] = ['manuel','leonardo','carlos']

// console.log(people)

// // si quiero un array de numeros y strings

// let peopleAndNumbers: Array<string | number> = []

// peopleAndNumbers.push('ricardo')
// peopleAndNumbers.push(1232)

// console.log(peopleAndNumbers)

// //array de tipo objeto

// let studens:object[] = [
// 	{
// 		name: "leonardo",
// 		age: 24
// 	},
// 	{
// 		name: "manuel",
// 		age: 9
// 	}
//     ]
// console.log(studens)



// //enum

// enum Color{
//     Rojo = "Rojo",
//     Verde = "Verde",
//     Azul = "Azul"
// }

// let colorFavorito: Color = Color.Verde

// console.log(colorFavorito)

// //funciones

// function add(a:number, b:number):number{
// 	return a + b
// }

// const n = add(1,3)
// console.log(n)

// function add2(a:number, b:number = 234):number{
// 	return a + b
// }

// const n2 = add2(2)

// console.log(n2)

enum Color {
    Rojo = "Rojo",
    Verde = "Verde"
}
interface Rectangulo {
    ancho: number
    alto: number
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Verde
}

function area(r: Rectangulo){
    return r.alto * r.ancho
}

const areaRec = area(rect)

console.log(areaRec)

console.log(rect.toString())

rect.toString = function(){
    return this.color ? `Un rectangulo ${this.color}` : `No hay color`
}


console.log(rect.toString())

