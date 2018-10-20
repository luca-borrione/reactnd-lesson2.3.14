import React from 'react';
import PropTypes from 'prop-types'

/**
 * @param {Object}	props				- collection of properties
 * @param {string}	props.item		- individual item added by the user
 */
const Item = props => {
	return <li>{props.item}</li>;
}
 
 Item.propTypes = {
	item: PropTypes.string.isRequired
 };

 export default Item