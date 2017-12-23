import React from 'react';
import $ from 'jquery';

class UserPrompt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	address : ''
  	}
  	this.handleSearch = this.handleSearch.bind(this)
  	this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
  	$('form').on('submit', function(e){e.preventDefault()})
  }

  handleSearch () {
  	this.props.search(this.state.address)
  }

  handleChange(e) {
  	this.setState({
  		address:e.target.value
  	})
  }

  render () {
    return (
  	  <div className="AddressPage">
      <span>Sunrise</span>
  		<form id="form" onSubmit={this.handleSearch}>
  		<input type="text" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Enter Address"/>
  		<button>Search</button>
  		</form>
  	  </div>
  	)
  }

}

export default UserPrompt