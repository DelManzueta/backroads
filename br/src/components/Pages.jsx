import PropTypes from 'prop-types';
import { pageLinks } from '../assets/js/data';

function Pages({ parentClass, itemClass }) {
	return (
		<ul
			className={parentClass}
			id='nav-links'
		>
			{pageLinks.map((link) => {
				return (
					<li key={link.id}>
						<a
							href={link.href}
							className={itemClass}
						>
							{link.text}
						</a>
					</li>
				);
			})}
		</ul>
	);
}

Pages.propTypes = {
	parentClass: PropTypes.string.isRequired,
	itemClass: PropTypes.string.isRequired,
};

export default Pages;
