import Feature from '../assets/feature.png';

const Aside = () => {
	return (
		<aside className='w-[45%] max-w-[625px] py-10 grid items-center bg-gradient-to-br from-secondary to-primary'>
			<h3 className='text-center text-neutral text-xl lg:text-2xl font-semibold max-w-[400px] px-5 self-start justify-self-center'>
				Social media shared today, tomorrow or by location
			</h3>
			<div className='relative before:absolute before:size-4/5 before:bg-gradient-to-tr before:from-primary before:to-secondary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2'>
				<div className='grid grid-cols-1 w-3/5 min-w-[350px] h-fit items-center mx-auto'>
					<img
						src={Feature}
						alt='feature img'
						className='row-start-1 col-start-1 size-4/5 z-10'
					/>
					<img
						src={Feature}
						alt='feature img'
						className='row-start-1 col-start-1 justify-self-center z-20'
					/>
					<img
						src={Feature}
						alt='feature img'
						className='row-start-1 col-start-1 size-4/5 justify-self-end z-10'
					/>
				</div>
			</div>
			<div className='flex gap-x-3 justify-center'>
				<span className='block size-2 border border-neutral rounded-full'></span>
				<div
					className='size-2 bg-neutral relative rounded-full
					after:absolute after:size-4 after:top-1/2 after:z-20 after:-translate-y-1/2 after:right-1/2 after:translate-x-1/2 after:border after:border-neutral after:rounded-full'
				></div>
				<span className='block size-2 border border-neutral rounded-full'></span>
			</div>
		</aside>
	);
};

export default Aside;
