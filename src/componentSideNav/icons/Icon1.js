import React from 'react';
import Icons from '../../img/IconChat.svg'; // Path to your icons.svg
import PropTypes from 'prop-types';

const Icon1 = ({ name, color, size }) => (
	<svg
		className={`icon icon-${name}`}
		fill={color}
		width={size}
		height={size}>
		<use xlinkHref={`${Icons}#icon-${name}`} />
	</svg>
);

Icon1.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.number,
};

export default Icon1;
