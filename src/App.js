import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddItem from './AddItem';
import DeleteItem from './DeleteItem';
import ItemsList from './ItemsList';

class App extends React.Component {

	/**
	 * @namespace
	 * @property {string} value		- current user input value
	 * @property {string[]} items 	- list of items added by the user so far
	 */
	state = {
		value: '',
		items: [],
	};

	updateValue = event => {
		this.setState({
			value: event.target.value
		});
	};

	addItem = event => {
		event.preventDefault();
		this.setState(oldState => ({
			value: '',
			items: [...oldState.items, this.state.value],
		}));
	};

	deleteLastItem = event => {
		this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
	};

	isValueEmpty = () => this.state.value === '';

	isItemsEmpty = () => this.state.items.length === 0;

	render() {
		return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">ReactND - Coding Practice</h1>
			</header>
			<h2>Shopping List</h2>

			<AddItem
				addItem = {this.addItem}
				value = {this.state.value}
				updateValue = {this.updateValue}
				disabled = {this.isValueEmpty()}
			/>

			<DeleteItem
				deleteLastItem = {this.deleteLastItem}
				disabled = {this.isItemsEmpty()}
			/>

			{this.state.items.length > 0 &&
				<ItemsList
					items = {this.state.items}
				/>
			}
		</div>
		);
	}
}

export default App;
