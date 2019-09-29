console.log('ola perras')
class Field{
    errors: string[]
    input: HTMLInputElement

    constructor(input: HTMLInputElement){
        this.input = input
        this.errors = []

        let errorMessage = document.createElement('p')
        errorMessage.className = 'text-danger'

        this.input.parentNode.insertBefore(errorMessage, this.input.nextElementSibling)

        this.input.addEventListener('input', e => {
            this.errors = []
            this.validate()
            errorMessage.innerText = this.errors[0] || ""
        })
    }

    validate(){

    }
}

function requiredFieldDecorator(field: Field){
    let validate = field.validate;
    field.validate = function(){
        validate()
        let value = field.input.value
        if (!value){
            field.errors.push('Requerido')
        }
    }
    return field
}

function emailFieldDecorator(field: Field){
    let validate = field.validate;
    field.validate = function(){
        validate()
        let value = field.input.value
        if (value.indexOf('@') === -1){
            field.errors.push('debe ser un email')
        }
    }
    return field
}


const a = document.querySelector('#email')

let field =  new Field(a)
requiredFieldDecorator(field)
emailFieldDecorator(field)

