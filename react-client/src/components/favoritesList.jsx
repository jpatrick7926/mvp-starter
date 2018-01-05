import React from 'react';
import FavoriteItem from './FavoriteListItem.jsx';

class FavoriteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3> Your Favorites! </h3>

        {console.log(this.props.favs)}
        { this.props.favs.map((item) => <FavoriteItem item={item}/>)}
      </div>
    )
  }
}

export default FavoriteList;
