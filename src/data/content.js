import blocks1 from '../assets/img/aes-encryption-blocks.png'
import blocks2 from '../assets/img/aes-encryption-before-key-expansion.png'
import blocks3 from '../assets/img/aes-encryption-after-key-expansion.png'
import blocks4 from '../assets/img/aes-key-addition.png'
import blocks5 from '../assets/img/aes-encryption-key-added.png'
import blocks6 from '../assets/img/AES-encryption-the-Rijndael-S-box.jpg'
import blocks7 from '../assets/img/aes-encryption-byte-substitute.png'
import blocks8 from '../assets/img/aes-encryption-shifting-rows.png'
import blocks9 from '../assets/img/aes-encryption-mix-columns.png'
import blocks10 from '../assets/img/aes-encryption-add-round-key.png'

export const info = [
	{
		id: 5,
		title: '¿Cómo funciona?',
		texto1:
			'Esto es lo que debes saber desde el principio: sin los antecedentes adecuados, el algoritmo de cifrado AES puede ser difícil de entender. Para apreciar completamente sus complejidades, probablemente tendrías que ser un estudiante de matemáticas (al menos).',
		texto2:
			'Afortunadamente, es posible simplificar el funcionamiento interno del cifrado AES. Reemplazar el código binario con símbolos «normales» es una forma de hacerlo.',
		texto3:
			'En las siguientes secciones, explicaré brevemente la idea principal detrás de la criptografía de AES.',
	},
	{
		id: 6,
		title: '1. Dividir datos en bloques',
		texto1:
			'Primero, tenemos que tener en cuenta que AES es un cifrado de bloques. A diferencia de los cifrados de flujo, cifra los datos en bloques de bits en lugar de hacerlo bit a bit.',
		texto2:
			'Cada uno de sus bloques contiene una columna de 16 bytes en una disposición de cuatro por cuatro. Como un byte contiene 8 bits, obtenemos un tamaño de bloque de 128 bits (16×8=128).',
		texto3:
			'Por lo tanto, el primer paso del cifrado AES es dividir el texto sin formato (texto que no está escrito en código) en estos bloques. Entonces, elijamos el texto que deseas cifrar. Por ejemplo, puede ser “más vale tarde que nunca”. La aplicación del estándar de cifrado avanzado convertiría el comienzo de esta frase en el siguiente bloque:',
		url: blocks1,
		texto5:
			'Ten en cuenta que este es solo el primer bloque del texto; el resto de la frase iría al siguiente.',
	},
	{
		id: 7,
		title: '2. Expansión clave',
		texto1:
			'Este es un paso importante del cifrado AES. Produce nuevas claves redondas de 128 bits con la ayuda del programa de claves de Rijndael.',
		texto2: 'Digamos que nuestra clave inicial es “extraterrestre”:',
		url1: blocks2,

		texto3:
			'Después de aplicar el programa clave de Rijndael, la frase se verá como un revoltijo de caracteres aleatorios y podría parecerse a algo como esto:',
		url2: blocks3,
		texto5:
			'Sin embargo, estos caracteres no serán tan aleatorios después de todo, ya que el programa de claves de Rijndael utiliza procesos específicos para cifrar todos y cada uno de los símbolos. El algoritmo AES necesitará este conjunto de nuevas claves ampliadas un poco más tarde.',
	},
	{
		id: 8,
		title: '3. Agregar clave redonda',
		texto1:
			'Esta es la primera ronda de cifrado AES. Aquí, el algoritmo agrega la clave inicial a nuestra frase, que previamente se convirtió en un bloque de 4×4:',
		url: blocks4,
		texto2: 'Digamos que nuestra clave inicial es “extraterrestre”:',
		texto3:
			'Sé que agregar dos bloques de texto puede parecer imposible. Sin embargo, recuerda que AES en realidad usa código binario, y lo que ahora ves es solo una representación visual de lo que realmente sucede en el lenguaje binario.',
		texto4:
			'Entonces, después de agregar los dos bloques, terminamos con un bloque de cifrado completamente nuevo, que describiré así:',
		url2: blocks5,
	},
	{
		id: 9,
		title: '4. Sustitución de bytes',
		texto1:
			'Ahora, el algoritmo AES sustituye cada byte con un código de acuerdo con una tabla preestablecida llamada Rijndael S-box . Se parece a esto:',
		url: blocks6,
		texto2:
			'Según la tabla, un elemento como 19 se convierte en d4, e9 se convierte en 1a, y así sucesivamente. Entonces, después del proceso de sustitución de bytes, mi bloque de cifrado podría tener la apariencia de algo como esto:',
		url2: blocks7,
		texto3:
			'Como puedes ver, marqué un par de columnas con diferentes colores. Esto será útil en el siguiente paso.',
	},
	{
		id: 10,
		title: '5. Cambio de filas',
		texto1:
			'En este paso, el algoritmo AES cambia las filas del bloque que obtuvo durante el proceso de sustitución de bytes.La primera fila se queda quieta. Sin embargo, la segunda fila se desplaza un byte hacia la izquierda, la tercera fila se desplaza dos bytes hacia la izquierda, mientras que la última se desplaza tres bytes:',
		url: blocks8,
	},
	{
		id: 11,
		title: '6. Columnas de mezcla',
		texto1:
			'Hablando en términos matemáticos, este paso multiplica cada columna por una matriz predefinida, dándonos un bloque de código completamente nuevo.',
		texto2:
			'Es un proceso realmente complicado, que involucra muchas matemáticas de nivel avanzado. En aras de la simplicidad, supongamos que hice los cálculos y mi nuevo bloque ahora se ve así:',
		url: blocks9,
	},
	{
		id: 12,
		title: '7. Agregar clave redonda',
		texto1:
			'Es hora de aplicar la llave redonda que obtuvimos en la sección de expansión de llaves. Vamos a agregarlo al bloque que obtuvimos en la sección anterior después del proceso de mezcla en columna:',
		url: blocks10,
		texto2:
			'Esta acción produce otro bloque de código binario, que luego sufre muchas modificaciones adicionales.',
	},
	{
		id: 13,
		title: '8. Enjuaga y repite',
		texto1:
			'Ahora, el algoritmo de cifrado AES pasará por muchas más rondas de sustitución de bytes, cambiando filas, mezclando columnas y agregando una clave de ronda.',
		texto2:
			'El número de rondas idénticas por las que pasan los datos depende de la longitud de la clave AES:',
		texto3:
			'128 bits: 9 rondas. 192 bits: 11 rondas. 256 bits: 13 rondas. Entonces, en el caso del cifrado de clave de 256 bits, por ejemplo, los datos pasan por los pasos mencionados anteriormente 13 veces seguidas.',
		texto4:
			'Sin embargo, ese todavía no es el final. Hay una ronda adicional después de las 9, 11 o 13 rondas de cifrado mencionadas. Durante esta ronda adicional, el algoritmo solo pasa por las etapas de sustitución de bytes, cambios de fila y adición de una clave de ronda. Omite el paso de mezclar columnas. ¿Por qué? Porque, en este punto, eso sería redundante. En otras palabras, esta acción usaría demasiada potencia de procesamiento sin alterar significativamente los datos.',
		texto5:
			'Entonces, al final del proceso de encriptación, los datos habrán pasado por el siguiente número de rondas: 128 bits: 10 rondas, 192 bits: 12 rondas, 256 bits: 14 rondas. Después de completar todas las rondas, la frase original «más vale tarde que nunca» se verá como un conjunto de caracteres aleatorios.',
	},
	{
		id: 14,
		title: 'Ejemplos de uso de AES',
		texto1:
			'‣VPN (Redes Privadas Virtuales). Como el trabajo de una VPN es conectarte de manera segura a otro servidor en línea, solo se pueden considerar los mejores métodos de encriptación para que tus datos no se filtren. Las VPN que utilizan el estándar de cifrado avanzado con claves de 256 bits incluyen NordVPN, Surfshark y ExpressVPN.',
		texto2:
			'‣Wifi. Así es, las redes inalámbricas también usan encriptación AES (generalmente, junto con WPA2). Este no es el único tipo de encriptación que pueden usar las redes Wi-Fi, sin embargo, la mayoría de los otros métodos de encriptación son mucho menos seguros.',
		texto3:
			'‣Aplicaciones móviles. Muchas aplicaciones populares (como Snapchat y Facebook Messenger) utilizan el cifrado AES para enviar información de manera segura, como fotos y mensajes.',
		texto4:
			'‣Herramientas de archivo y compresión. Todos los principales programas de compresión de archivos utilizan AES para evitar la fuga de datos. Estas herramientas incluyen 7z, WinZip y RAR.',
		texto5:
			'‣Administradores de contraseñas. Estos son los programas que transportan una gran cantidad de información confidencial. Es por eso que los administradores de contraseñas como LastPass y Dashlane no se saltan el importante paso de la implementación de AES.',
	},
]
