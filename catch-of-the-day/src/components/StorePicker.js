import React from 'react';
import {getFunName} from '../helpers';

export default class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = e => {
		e.preventDefault();
		const storeName = this.myInput.current.value;
		// change the page to /store/value-of-text-input
		this.props.history.push(`/store/${storeName}`);
	};

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please enter a store</h2>
				<input
					type="text"
					ref={this.myInput}
					required
					placeholder="Store Name"
					defaultValue={getFunName()}
				/>
				<button type="submit">Visit Store</button>
			</form>
		);
	}
}
