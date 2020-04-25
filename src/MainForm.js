import React, { Component } from 'react';
import FeatureList from './FeatureList';

class MainForm extends Component {
	render() {
		const { updateFeature, usCurrencyFormat, store, selected } = this.props;
		return Object.keys(store).map((feature, idx) => {
			const featureHash = feature + '-' + idx;

			return (
				<form className='main__form'>
				<fieldset className='feature' key={featureHash}>
					<legend className='feature__name'>
						<h3>{feature}</h3>
					</legend>
					<FeatureList
						feature={feature}
						store={store}
						usCurrencyFormat={usCurrencyFormat}
						updateFeature={updateFeature}
						selected={selected}
					/>
				</fieldset>
				</form>
			);
		});
	}
}

export default MainForm;