import Link from 'next/link';

export default function Home() {
  return (
    <div className='  h-screen w-full  bg-[#4561ae]'>
			<div className='max-w-[1000px] px-8 mx-auto flex flex-col items-center justify-center  h-full'>
    
				<h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>Bem vindo ao <strong className='text-pink-600'>Posto Flux </strong>   </h1>
				<h2 className=' text-3xl sm:text-3xl font-bold text-[#8892b0]'>Registre e Consulte seus abastecimentos</h2>

				<Link href='/dashboard'>
					<button className='group text-white border-2 px-6 py-3 my-7  hover:bg-pink-600 hover:border-pink-600 hover:duration-[500ms]'>
							Acesse seu dashboard
					</button>
				</Link>

      </div>
    </div>
  );
}
