import { socialLinks } from '../assets/js/data';

function Social() {
	return (
		<ul className='nav-icons'>
			{socialLinks.map((link) => {
				const { id, href, icon } = link;
				return (
					<li key={id}>
						<a
							href={href}
							target='_blank'
							className='nav-icon'
							rel='noreferrer'
						>
							<i className={icon}></i>
						</a>
					</li>
				);
			})}
		</ul>
	);
}
export default Social;
