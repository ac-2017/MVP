import React from 'react';
import $ from 'jquery';

class Visualizer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			params: this.props.address,
			time: '00 00 00',
			height: -50
		}
	}
	componentDidMount() {
		var SecondsTohhmmss = function(totalSeconds) {
			  var hours   = Math.floor(totalSeconds / 3600);
			  var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
			  var seconds = totalSeconds - (hours * 3600) - (minutes * 60);

			  // round seconds
			  seconds = Math.round(seconds * 100) / 100

			  var result = (hours < 10 ? "0" + hours : hours);
			      result += " " + (minutes < 10 ? "0" + minutes : minutes);
			      result += " " + (seconds  < 10 ? "0" + seconds : seconds);
  			return result;
		}

		var landHeight = $('.Sunrise').height();

		var sunrise = Date.parse(this.state.params.results.sunrise)/1000
		var sunset = (Date.parse(this.state.params.results.sunset))/1000
		console.log('time until sunset', sunset)
		console.log('time from sunrise',sunrise)

		setInterval(() => {
			var currentTime = Math.round((Date.parse(new Date().toISOString()))/1000)
			var timer = sunset - currentTime
			var newHeight = timer/(sunset-sunrise)
			var pixels = ($('.Sunrise').height() * (1-newHeight))
			this.setState({
				time: SecondsTohhmmss(timer),
				height: pixels-50
			})
		},1000)

	}


	render () {
		return (
			<div>
			<button id="changeAddress" onClick={this.props.refresh}>Change Address</button>
			<div className="Sunspot">{'Sunset for ' + this.state.params.address}</div>
			<br></br>
			<div className="Sunrise">
				<hr></hr>
				<span id="sun" style={{top: this.state.height + 'px'}}>☀️</span>
				<span id="time" style={{top: this.state.height + 'px'}}>{this.state.time}</span>
			</div>
			<hr></hr>
			</div>
		)
	}
}

export default Visualizer

// {"results":{"sunrise":"12:17:46 PM","sunset":"9:33:04 PM","solar_noon":"4:55:25 PM","day_length":"09:15:18","civil_twilight_begin":"11:46:54 AM","civil_twilight_end":"10:03:56 PM","nautical_twilight_begin":"11:12:24 AM","nautical_twilight_end":"10:38:26 PM","astronomical_twilight_begin":"10:39:02 AM","astronomical_twilight_end":"11:11:48 PM"},"status":"OK","address":"369 Lexington Ave, New York, NY 10016, USA"}