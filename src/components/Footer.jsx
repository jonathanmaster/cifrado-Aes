import github from '../assets/github.svg'

export const Footer = () => {
	return (
		<footer className='bg-gray-800 py-1'>
			<div className='container  '>
				<div className=' text-white mr-6 text-center px-4'>
					<span className='font-semibold text-xl tracking-tight'>
						Jonatahan Rodriguez 😎
					</span>
					<div className='w-16 mx-auto '>
						<a
							className='flex flex-wrap justify-center'
							href='https://github.com/jonathanmaster'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								src={github}
								alt='Imagen de datos'
								className='w-96 lg:w-1/2'
							/>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
