const validCharLetter = 'abcdefghijklmnopqrstuvwxyzåäö '
const validCharLetterNumber = 'abcdefghijklmnopqrstuvwxyzåäö1234567890'
const validCharComma = 'abcdefghijklmnopqrstuvwxyzåäö1234567890, '

function isValid(validName) {
	for (let i = 0; i < validName.length; i++) {
		let character = validName.charAt(i).toLowerCase()
		if (!validCharLetter.includes(character)) {
			return [false, 'Vänligen använd endast bokstäver.']
		}
	}
	if (validName.length < 2) {
		return [false, 'Behöver minst vara 2 tecken.']
	}
	return [true, '']
}

function isValidPassword(userPassword) {
	for (let x = 0; x < userPassword.length; x++) {
		let characterPassword = userPassword.charAt(x).toLowerCase()
		if (!validCharLetterNumber.includes(characterPassword)) {
			return [false, 'Vänligen använd endast bokstäver och siffror.']
		}
	}
	if (userPassword.length < 4) {
		return [false, 'Behöver minst vara 4 tecken.']
	}
	if (userPassword != 'mums') {
		return [false, 'Fel lösenord. Försök igen.']
	}
	else {
		return [true, '']
	}
}

function isValidIngredient(orderIngredient) {
	for (let i = 0; i < orderIngredient.length; i++) {
		let character = orderIngredient.charAt(i).toLowerCase()
		if (!validCharComma.includes(character)){
			return [false, 'Vänligen använd endast bokstäver, siffror eller komma.']
		}
	}
	let ingredientInput = orderIngredient
	let regex = /[^,]\s/
	let hasIncorrectSpace = regex.test(ingredientInput)
	if (hasIncorrectSpace == true) {
		return [false, 'Vänligen använd komma innan mellanrum.']
	}
	return [true, '']
}

function isValidPrice(orderPrice) {
	for (let x = 0; x < orderPrice.length; x++) {
		let characterPassword = orderPrice.charAt(x).toLowerCase()
		if (!validCharLetterNumber.includes(characterPassword)) {
			return [false, 'Vänligen använd endast bokstäver och siffror.']
		}
	}
	if (orderPrice.length < 5) {
		return [false, 'Behöver minst vara 5 tecken']
	}
	let endsWithKr = orderPrice.endsWith('kr')
	if (!endsWithKr) {
		return [false, 'Måste avsluta med kr.']
	}
	return [true, '']
}

export { isValid, isValidPassword, isValidIngredient, isValidPrice }