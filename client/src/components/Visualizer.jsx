import React from 'react';

class Visualizer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			params: this.props.address
		}
	}


	render () {
		return (
			<div className="Sunrise">
			<div>{'Sunset for ' + this.state.params.address}</div>
			<button onClick={this.props.refresh}>Change Address</button>
			</div>
		)
	}
}

export default Visualizer

// {"results":{"sunrise":"12:17:46 PM","sunset":"9:33:04 PM","solar_noon":"4:55:25 PM","day_length":"09:15:18","civil_twilight_begin":"11:46:54 AM","civil_twilight_end":"10:03:56 PM","nautical_twilight_begin":"11:12:24 AM","nautical_twilight_end":"10:38:26 PM","astronomical_twilight_begin":"10:39:02 AM","astronomical_twilight_end":"11:11:48 PM"},"status":"OK","address":"369 Lexington Ave, New York, NY 10016, USA"}