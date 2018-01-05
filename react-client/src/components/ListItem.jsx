import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.item,
    }
    this.clickFav = this.clickFav.bind(this);
  }

  clickFav() {
    console.log('hello in list item');
    this.props.favorite(this.props.item);
  }

  render(){
    return (
      <div>
        <button>{ this.props.item.name }</button> <button onClick={this.clickFav}>FAV</button>
      </div>
    )
  }
}

export default ListItem;


// onClick={this.props.favorite}
