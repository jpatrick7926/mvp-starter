import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: this.props.item,
      stats: 'click to show stats',
    }
    this.clickFav = this.clickFav.bind(this);
    this.showStats = this.showStats.bind(this);
  }

  clickFav() {
    console.log('hello in list item');
    this.props.favorite(this.props.item);
  }

  showStats(){
    this.setState({
      stats: this.props.item.stats
    })
  }

  render(){
    return (
      <div>
        {this.state.player.name}
        <button onClick={this.showStats}>{this.state.stats}</button> <button onClick={this.clickFav}>FAV</button>
      </div>
    )
  }
}

export default ListItem;


// onClick={this.props.favorite}
