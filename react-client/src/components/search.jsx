import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  search() {
    console.log('hello in search function in search', this.state.name);
    this.props.searchInitialized(this.state.name);
  }



  render(){
    return(
      <div>
        <h3>Search for your NBA Players!</h3>
        Search Players: <input onChange={this.onChange}/>
        <button onClick={this.search}>GO!</button>
      </div>
    )
  }
}

export default Search;
