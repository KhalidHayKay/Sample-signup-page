import Logo from '../assets/logo.png';
import { ReactComponent as AppStore } from '../assets/App_store_badge.svg';
import { ReactComponent as GooglePlay } from '../assets/Google_play_badge.svg';
import Form from './Form';

const Main = () => {
	return (
		<main className='flex-1 p-10 space-y-10'>
			<div className='flex items-center gap-x-2'>
				<img src={Logo} alt='Logo' />
				<h1 className='text-lg font-semibold'>Capzul</h1>
			</div>
			<div className='space-y-1'>
				<h2 className='text-3xl font-semibold'>Create account</h2>
				<p>For business, band or celebrity.</p>
			</div>

			<Form />

			<p className='text-center'>
				Already have an account?{' '}
				<a href='/' className='text-secondary-content'>
					Login
				</a>
			</p>

			<div className='flex gap-x-2'>
				<a href='/' target='_blank'>
					<GooglePlay />
				</a>
				<a href='/' target='_blank'>
					<AppStore />
				</a>
			</div>
		</main>
	);
};

export default Main;
