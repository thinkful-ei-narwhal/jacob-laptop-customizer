import React, { Component } from 'react';
import MainSummary from './MainSummary';

export class Cart extends Component {
	render() {
		const { usCurrencyFormat, selected } = this.props;
		return (
			<div>
				<h2>Your cart</h2>
				<MainSummary selected={selected} usCurrencyFormat={usCurrencyFormat} />
			</div>
		);
	}
}

export default Cart;