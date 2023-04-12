function isValid(userName) {
	if (userName.length < 2) {
		return [false, 'Behöver minst vara 2 tecken.']
	}
	const validChar = 'abcdefghijklmnopqrstuvwxyzåäö'
	for (let i = 0; i < userName.length; i++) {
		let character = userName.charAt(i).toLowerCase()
		if (!validChar.includes(character)) {
			return [false, 'Vänligen använd endast bokstäver.']
		}
	}
	return [true, '']
}

function isValidPassword(userPassword) {
	if (userPassword.length < 4) {
		return [false, 'Behöver minst vara 4 tecken']
	}
	const validCharPass = 'abcdefghijklmnopqrstuvwxyzåäö1234567890'
	for (let x = 0; x < userPassword.length; x++) {
		let characterPassword = userPassword.charAt(x).toLowerCase()
		if (!validCharPass.includes(characterPassword)) {
			return [false, 'Vänligen använd endast bokstäver och siffror.']
		}
	}
	if (userPassword != 'mums') {
		return [false, 'Fel lösenord. Försök igen']
	}
	else {
		return [true, '']
	}
}

export { isValid, isValidPassword }