import React, { Component } from 'react';
import MainSummary from './MainSummary';
import Total from './Total';

export class Cart extends Component {
	render() {
		const { usCurrencyFormat, selected } = this.props;
		return (
			<section className='main__summary'>
				<h2>Your cart</h2>
				<MainSummary selected={selected} usCurrencyFormat={usCurrencyFormat} />
				<div className='summary__total'>
					<div className='summary__total__label'>Total</div>
					<div className='summary__total__value'>
						{usCurrencyFormat.format(Total(selected))}
					</div>
				</div>
			</section>
		);
	}
}

export default Cart;