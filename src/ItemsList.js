import React from 'react';
import PropTypes from 'prop-types'
import Item from './Item'

/**
 * @param {Object}	props				- collection of properties
 * @param {string[]}	props.items		- list of items added by the user so far
 */
const ItemsList = props => {
	return (
		<div>
			<p className="items">Items</p>
			<ol className="item-list">
				{props.items.map((item, index) =>

					<Item
						key = {index}
						item = {item}
					/>

				)}
			</ol>
		</div>
	);
};
 
 ItemsList.propTypes = {
	items: PropTypes.array.isRequired
 };

 export default ItemsList