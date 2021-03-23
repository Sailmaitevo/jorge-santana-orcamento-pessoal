function $(selector, thisArg=document){
	return thisArg.querySelector(selector)
}
function _(selector, thisArg=document){
	return thisArg.querySelectorAll(selector)
}

const arrayEquality = (array1, array2) => array1.every(
	(item, index) => item === array2[index]
)

const table = $('table.table')
const tbody = $('tbody', table)
const noResults = $('[data-js=noResults]')

const showTableButton = $('button.btn.btn-primary')

function fillTable(){
	tbody.innerHTML = null
	for(let i in localStorage){
		if(localStorageFunctions.indexOf(i) !== -1) continue

		console.log('Loop for')

		let expenseJSON = localStorage[i]
		let {
			day,
			month,
			year,
			type,
			description,
			value
		} = JSON.parse(expenseJSON)
		let expenseData = [
			day,
			month,
			year,
			type,
			description,
			value
		]

		let formData = getFormData().map(
			(item, index) =>
				item === '' || item === '00' ?
					expenseData[index] :
					item
		)
		if(arrayEquality(formData, expenseData)){
			createRow(tbody, table, expenseData)
			console.log('createRow')
		}
	}
	noResultsShow(tbody, noResults)
}

showTableButton.addEventListener(
	'click',
	fillTable
)