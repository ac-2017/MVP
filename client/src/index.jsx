import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import UserPrompt from './components/UserPrompt.jsx';
import Visualizer from './components/Visualizer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      showPrompt : true,
      currentAddress : {}
    }
    this.changeAddress = this.changeAddress.bind(this)
    this.newSearch = this.newSearch.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading:false
      })
    },1000)
  }

  changeAddress(query) {
    $.ajax({
      method: 'GET',
      url: '/sunrise',
      data: {
        address: query,
      },
      success: (data) => {
        // this.setState({
        //   // currentAddress : (data.results[0].geometry.location),
        //   showPrompt: !this.state.showPrompt
        // })
        data = JSON.parse(data)
        this.setState({
          loading:true,
          showPrompt:false,
          currentAddress: data
        })
        setTimeout(() => {
          this.setState({
            loading:false
          })
        },1000)
      },

    })
  }

  newSearch () {
    this.setState({
      showPrompt:true
    })
  }

  render () {
    if (this.state.loading) {
      return null
    } else {
      if(this.state.showPrompt) {
        return (
          <UserPrompt search={this.changeAddress}/>
        )
      } else {
        return (
          <Visualizer address={this.state.currentAddress} refresh={this.newSearch}/>
        )
      }
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));