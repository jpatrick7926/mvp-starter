import React from 'react';

class FavoriteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div>
        { this.props.item.name}
      </div>
    )
  }
}

export default FavoriteItem;
