import { useRef, useState } from 'react'
import { cifrar, decifrar } from './encoding'

export const Form = () => {
	const [inputTexto, setInputTexto] = useState('')
	const [inputCifrado, setInputCifrado] = useState('')

	const onInputChange = ({ target }) => {
		setInputTexto(target.value)
	}

	const onCifradoChange = ({ target }) => {
		setInputCifrado(target.value)
	}

	const onSubmit = event => {
		event.preventDefault()

		if (inputTexto.trim().length <= 1) return
	}

	const limpiarTexto = () => {
		setInputTexto('')
	}

	const limpiarCifrado = () => {
		setInputCifrado('')
	}

	return (
		<div className='w-full max-w-md mx-auto '>
			<form
				onSubmit={onSubmit}
				className='bg-indigo-950 shadow-md rounded px-8 pt-6 pb-8 mb-4 text-white'
			>
				<h1 className='text-center text-2xl font-black mb-4'>
					Convertidor AES
				</h1>
				<div className='mb-4'>
					<label className='block text-sm font-bold mb-2' htmlFor='inputTexto'>
						Ingresa una frase:
					</label>
					<input
						className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='inputTexto'
						type='text'
						placeholder='Escribe la frase'
						value={inputTexto}
						onChange={onInputChange}
					/>
					<p className='mt-2 whitespace-pre-wrap break-all'>
						Texto cifrado: {inputTexto.length > 0 ? cifrar(inputTexto) : ''}
					</p>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
						onClick={limpiarTexto}
					>
						Limpiar
					</button>
				</div>
				<div className='mb-6'>
					<label
						className='block text-sm font-bold mb-2'
						htmlFor='inputCifrado'
					>
						Ingresa la frase cifrada:
					</label>
					<input
						className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='inputCifrado'
						type='text'
						placeholder='Escribe la frase cifrada'
						value={inputCifrado}
						onChange={onCifradoChange}
					/>
					<p className='mt-2 whitespace-pre-wrap break-all'>
						Texto decifrado:{' '}
						{inputCifrado.length > 0 ? decifrar(inputCifrado) : ''}
					</p>
					<button
						className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
						onClick={limpiarCifrado}
					>
						Limpiar
					</button>
				</div>
			</form>
		</div>
	)
}
