import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }






  render(){
    return(
      <div>
        <h3>Search for your NBA Players!</h3>
        Search Players: <input value = {this.state.name}/>
        <button>GO!</button>
      </div>
    )
  }
}

export default Search;
