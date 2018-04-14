import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Panel from './components/Panel';
import ArticleItem from './components/ArticleItem';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      articles: [
        {
          
        }
      ]
    }
  }
  componentDidMount(){

    console.log("Component did mount");

    let self = this;
        fetch('/', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            var data = JSON.stringify(response);
            console.log("res" , response.body);
            return data;
        }).then(function(data) {
            var newObj = {
              articles: data
            }
            self.setState(() =>{
              ({newObj})
            } );
        }).catch(err => {
        console.log('caught it!',err);
        })

  }

  render() {
    return (
      <div className="App">
       <Navbar />
       <Panel 
        articles={this.state.articles}
       />
      </div>
    );
  }
}

export default App;
