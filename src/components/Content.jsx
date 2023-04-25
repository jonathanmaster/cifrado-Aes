import { info } from '../data/content'

export const Content = () => {
	return (
		<div className='mb-4 mt-16'>
			{info.map(info => {
				return (
					<div key={info.id}>
						<h1 className='text-center text-2xl font-black mb-4'>
							{info.title}
						</h1>
						<p className='text-lg mb-8 '>{info.texto1}</p>
						{info.id === 8 ? <img src={info.url} className='mx-auto' /> : ''}
						{info.id === 9 ? <img src={info.url} className='mx-auto' /> : ''}
						{info.id === 10 ? <img src={info.url} className='mx-auto' /> : ''}
						{info.id === 12 ? <img src={info.url} className='mx-auto' /> : ''}
						<p className='text-lg mb-8 '>{info.texto2}</p>
						{info.id === 7 ? <img src={info.url1} className='mx-auto' /> : ''}
						{info.id === 9 ? <img src={info.url2} className='mx-auto' /> : ''}
						{info.id === 11 ? <img src={info.url} className='mx-auto' /> : ''}
						<p className='text-lg mb-8 '>{info.texto3}</p>
						{info.id === 7 ? <img src={info.url2} className='mx-auto' /> : ''}
						<p className='text-lg mb-8 '>{info.texto4}</p>
						{info.id === 8 ? <img src={info.url2} className='mx-auto' /> : ''}
						{info.id === 6 ? <img src={info.url} className='mx-auto' /> : ''}
						<p className='text-lg mb-8 '>{info.texto5}</p>
					</div>
				)
			})}
		</div>
	)
}
