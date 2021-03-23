var $ = document.getElementById

function getDateFromTimeInputs() {
	const day = document.getElementById('input-dia').value.padStart(2, '0')
	const month = document.getElementById('select-mes').value.padStart(2, '0')
	const year = document.getElementById('select-ano').value

	const date = [day, month, year]

	return date
}
function getFormData() {
	const date = getDateFromTimeInputs()
	const type = document.getElementById('select-tipo').value
	const description = document.getElementById('input-descricao').value
	const value = document.getElementById('input-valor').value

	return [...date, type, description, value]
}
function noResultsShow(tbody, noResults){
	if(tbody.innerHTML === ''){
		noResults.classList.remove('d-none')
		tbody.classList.add('d-none')
	} else{
		noResults.classList.add('d-none')
		tbody.classList.remove('d-none')
	}
}
function createRow(
	tbody,
	table,
	[
		day,
		month,
		year,
		type,
		description,
		value
	]
){
	let row = document.createElement("tr")
	row.innerHTML = `
		<td>${day}/${month}/${year}</td>
		<td>${types[type]}</td>
		<td>${description}</td>
		<td>${value}</td>
		<td class="d-flex justify-content-end">
			<button onclick="
				(() => {
					localStorage.removeItem('${description}')
					fillTable()
				})()" class="fs-0 btn btn-danger remove-register-button">
				<i
					class="fas fa-times"
					aria-hidden="true"
					aria-label="Remover este registro"
				></i>
			</button>
		</td>
	`
	tbody.appendChild(row)
	table.classList.remove('d-none')
}

const types = [
	,
	'Alimentação',
	'Educação',
	'Lazer',
	'Saúde',
	'Transporte'
]
const localStorageFunctions = [
	'key',
	'getItem',
	'setItem',
	'removeItem',
	'clear',
	'length'
]