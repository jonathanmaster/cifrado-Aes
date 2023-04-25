import CryptoJS from 'crypto-js'

export const cifrar = texto => {
	const textoCifrado = CryptoJS.AES.encrypt(texto, 'joudas').toString()
	return textoCifrado
}

export const decifrar = texto => {
	const bytes = CryptoJS.AES.decrypt(texto, 'joudas')
	const textoCifrado = bytes.toString(CryptoJS.enc.Utf8)
	return textoCifrado
}
