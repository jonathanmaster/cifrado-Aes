import inicioImg from '../assets/inicio-img.svg'

export const Inicio = () => {
	return (
		<div className='mb-10 text-white img-fondo flex gap-10 justify-center items-center p-1 lg:p-8 shadow-xl'>
			<div className='w-96 lg:w-1/2 lg:mx-0 lg:mr-4'>
				<h1 className='text-7xl font-black mb-4'>Cifrado Aes</h1>
				<p className='text-lg mb-8 font-bold'>
					¿Sabes qué es el algoritmo AES? A lo largo de toda la historia, se han
					desarrollado diferentes métodos para encriptar la información de forma
					segura. En la era de la criptografía digital, los ordenadores nos han
					permitido cifrar datos de manera compleja y protegiendo la
					autenticidad, integridad y confidencialidad del mensaje.
				</p>
				<button
					onClick={() =>
						window.scrollTo({
							top: document.body.scrollHeight,
							behavior: 'smooth',
						})
					}
					className='bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded'
				>
					Convertidor
				</button>
			</div>
			<img src={inicioImg} alt='Imagen de datos' className='w-96 lg:w-1/2 ' />
		</div>
	)
}
