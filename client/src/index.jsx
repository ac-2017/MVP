import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
    }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json',
      data: {
        address: '369 Lexington Avenue',
        key: 'AIzaSyDmcNL4wjb35HwTqGUDCig6EIKDT7yuRfo'
      },
      success: function(data) {
        console.log(data.results[0].geometry.location)
      }
    })
  }

  render () {
    return (<div>Hello</div>)
  }
}

// ReactDOM.render(<App />, document.getElementById('app'));