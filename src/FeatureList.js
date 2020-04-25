import React, { Component } from 'react';
import Feature from './Feature';
import slugify from 'slugify';

class FeatureList extends Component {
	render() {


		const { feature, updateFeature, usCurrencyFormat, store, selected } = this.props;

		return store[feature].map((item) => {

			const itemHash = slugify(JSON.stringify(item));

			return (

				<Feature
					key={itemHash}
					itemHash={itemHash}
					item={item}
					feature={feature}
					usCurrencyFormat={usCurrencyFormat}
					selected={selected}
					updateFeature={updateFeature}
				/>

			);
		});
	}
}
export default FeatureList;