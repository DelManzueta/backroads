import Pages from './Pages';
import Social from './Social';

function Footer() {
	return (
		<>
			<footer className='section footer'>
				<Pages
					parentClass='footer-links'
					itemClass='footer-link'
				/>
				<Social
					parentClass='footer-icons'
					itemClass='footer-icon'
				/>
				<p className='copyright'>
					copyright &copy; Backroads travel tours company
					<span id='date'>{new Date().getFullYear()}</span> all rights
					reserved
				</p>
			</footer>
		</>
	);
}
export default Footer;
