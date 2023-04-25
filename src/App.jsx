import { Content } from './components/Content'
import { Footer } from './components/Footer'
import { Form } from './components/Form'
import { Inicio } from './components/Inicio'
import './index.css'

function App() {
	return (
		<div>
			<Inicio />
			<div className='container container-form mx-auto'>
				<Content />
				<div className='flex justify-center mb-16'>
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className='bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded'
					>
						Volver arriba
					</button>
				</div>
				<Form />
			</div>
			<Footer />
		</div>
	)
}

export default App
