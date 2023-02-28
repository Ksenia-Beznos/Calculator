const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', calculate);

function calculate(event) {
	if (!event.target.classList.contains('calc__btn')) return;

	const value = event.target.innerText;

	switch (value) {
		case 'C':
			result.innerText = '';
			break;

		case '=':
			// функция eval выполняет переданный ей JS код в виде строки
			// метод toFixed оставляет то кол-во знаков после точки, которое указано в скобках
			result.innerText = eval(result.innerText).toFixed(1);
			break;

		default:
			result.innerText = result.innerText + value;
	}
}
