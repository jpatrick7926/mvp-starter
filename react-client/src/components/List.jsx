import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onFav = this.onFav.bind(this);
  }

  onFav(player) {
    console.log('hello in List');
    this.props.favClick(player);
  }

  render() {
    return (
      <div>
        <h3> Player Search </h3>
        <h5>Documenting { this.props.items.length } Players.</h5>
        ---------------------------------------------------------

        {console.log(this.props.items)}
        { this.props.items.map((item) => <ListItem item={item} favorite={this.onFav}/>)}
        ---------------------------------------------------------
      </div>
    )
  }
}

export default List;

//favorite={props.favClick}
