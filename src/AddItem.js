import React from 'react';
import PropTypes from 'prop-types'

function AddItem(props) {
	return (
		<form onSubmit={props.addItem}>
			<input
				type="text"
				placeholder="Enter New Item"
				value={props.value}
				onChange={props.updateValue}
			/>
			<button disabled={props.disabled}>Add</button>
		</form>
	);
 }
 
 AddItem.propTypes = {
	addItem: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	updateValue: PropTypes.func.isRequired,
	disabled: PropTypes.bool.isRequired
 };

 export default AddItem