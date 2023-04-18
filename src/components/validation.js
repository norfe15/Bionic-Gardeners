const validCharLetter = "abcdefghijklmnopqrstuvwxyzåäö "
const validCharLetterNumber = "abcdefghijklmnopqrstuvwxyzåäö1234567890"
const validCharComma = "abcdefghijklmnopqrstuvwxyzåäö1234567890, "
const validPhone = "1234567890"

function isValid(validName) {
	for (let i = 0; i < validName.length; i++) {
		let character = validName.charAt(i).toLowerCase()
		if (!validCharLetter.includes(character)) {
			return [false, "Vänligen använd endast bokstäver."]
		}
	}
	if (validName.length < 2) {
		return [false, "Behöver minst vara 2 tecken."]
	}
	return [true, ""]
}

function isValidPassword(userPassword) {
	for (let x = 0; x < userPassword.length; x++) {
		let characterPassword = userPassword.charAt(x).toLowerCase()
		if (!validCharLetterNumber.includes(characterPassword)) {
			return [false, "Vänligen använd endast bokstäver och siffror."]
		}
	}
	if (userPassword.length < 4) {
		return [false, "Behöver minst vara 4 tecken."]
	}
	if (userPassword != "mums") {
		return [false, "Fel lösenord. Försök igen."]
	} else {
		return [true, ""]
	}
}

function isValidIngredient(addIngredient) {
	for (let i = 0; i < addIngredient.length; i++) {
		let character = addIngredient.charAt(i).toLowerCase()
		if (!validCharComma.includes(character)) {
			return [false, "Endast bokstäver, siffror eller komma."]
		}
	}
	let ingredientInput = addIngredient
	let regex = /[^,]\s/
	let hasIncorrectSpace = regex.test(ingredientInput)
	if (hasIncorrectSpace == true) {
		return [false, "Använd komma innan mellanrum."]
	}
	if (addIngredient.length == 0) {
		return [false, "Saknar ingredienser."]
	}
	return [true, ""]
}

function isValidPrice(addPrice) {
	for (let x = 0; x < addPrice.length; x++) {
		let characterPassword = addPrice.charAt(x).toLowerCase()
		if (!validCharLetterNumber.includes(characterPassword)) {
			return [false, "Vänligen använd endast bokstäver och siffror."]
		}
	}
	if (addPrice.length < 4) {
		return [false, "Behöver minst vara 4 tecken"]
	}
	let endsWithKr = addPrice.toLowerCase().endsWith("kr")
	if (!endsWithKr) {
		return [false, "Måste avsluta med kr."]
	}
	return [true, ""]
}

function isValidUrl(addImg) {
	const whiteSpaceCheck = /\s/
	if (whiteSpaceCheck.test(addImg)) {
		return [false, "Godkänner ej mellanrum"]
	}
	if (addImg.substring(0, 4) != "src/") {
		return [false, "Vänligen börja url-strängen med src/"]
	}
	return [true, ""]
}

function isValidPhone(phoneNumber) {
	const whiteSpaceCheck = /\s/
	if (whiteSpaceCheck.test(phoneNumber)) {
		return [false, "Godkänner ej mellanrum"]
	}
	for (
		let validCountPhone = 0;
		validCountPhone < phoneNumber.length;
		validCountPhone++
	) {
		let validPhoneNumber = phoneNumber.charAt(validCountPhone)
		if (!validPhone.includes(validPhoneNumber)) {
			return [false, "Vänligen använd endast siffror."]
		}
	}
	if (phoneNumber.length < 10) {
		return [false, "Vänligen skriv in minst 10 tecken"]
	}
	return [true, ""]
}

function isValidMail(mail) {
	const validMailCharacter = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/
	if (!validMailCharacter.test(mail)) {
		return [false, "Ej godkänt format"]
	}
	return [true, ""]
}

export {
	isValid,
	isValidPassword,
	isValidIngredient,
	isValidPrice,
	isValidUrl,
	isValidPhone,
	isValidMail,
}
