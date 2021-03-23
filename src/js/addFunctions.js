function getDateFromTimeInputs() {
	const day = document.getElementById('input-dia').value.padStart(2, '0')
	const month = document.getElementById('select-mes').value.padStart(2, '0')
	const year = document.getElementById('select-ano').value

	const date = [day, month, year]

	if (
		date.some(
			value => value === ""
		)
	) {
		return ""
	}
	return date
}
function getFormData() {
	const date = getDateFromTimeInputs()
	const type = document.getElementById('select-tipo').value
	const description = document.getElementById('input-descricao').value
	const value = document.getElementById('input-valor').value

	return [...date, type, description, value]
}
const types = {
	"1": 'Alimentação',
	"2": 'Educação',
	"3": 'Lazer',
	"4": 'Saúde',
	"5": 'Transporte'
}
