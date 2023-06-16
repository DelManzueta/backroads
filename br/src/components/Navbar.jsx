import logo from '../assets/images/logo.svg';
import Pages from './Pages';
import Social from './Social';

function Navbar() {
	return (
		<>
			<nav className='navbar'>
				<div className='nav-center'>
					<div className='nav-header'>
						<img
							src={logo}
							className='nav-logo'
							alt='backroads'
						/>
						<button
							type='button'
							className='nav-toggle'
							id='nav-toggle'
						>
							<i className='fas fa-bars'></i>
						</button>
					</div>
					<Pages
						parentClass='nav-links'
						itemClass='nav-link'
					/>
					{/* social  */}
					<Social />
				</div>
			</nav>
		</>
	);
}
export default Navbar;
