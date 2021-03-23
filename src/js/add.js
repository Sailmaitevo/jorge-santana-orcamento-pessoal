class Expense{
	constructor(day, month, year, type, description, value){
		this.day = day
		this.month = month
		this.year = year
		this.date = `${day}/${month}/${year}`

		this.type = type
		this.description = description
		this.value = value

		console.log(this)
	}
	addToStorage(){
		localStorage.setItem(this.description, JSON.stringify(this))
	}
}

function addExpense(){
	const args = getFormData()

	if(
		args.some(
			value => value === ""
		)
	){
		alert('Por favor, preencha todos os campos')
		return
	}

	alert('Registro adicionado')
	new Expense(...args).addToStorage()
}