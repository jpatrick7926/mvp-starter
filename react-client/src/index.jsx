import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/search.jsx';
import FavoriteList from './components/favoritesList.jsx';
import playerData from '../../mock.js';

// console.log(playerData.players);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: playerData.players,
      favorites: []
    }
    this.onSearch = this.onSearch.bind(this);
    this.makeMessage = this.makeMessage.bind(this);
    this.onFavorite = this.onFavorite.bind(this);
  }

  componentDidMount() {
    // console.log('this is the problem');
    // $.ajax({
    //   url: '/items',
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });

    // team={list-of-teams} (filter teams)
    // player={list-of-players} (filter players)
    // position={list-of-positions} (filter player positions)
    // country={list-of-countries} (filter player countries of birth)
    // playerstats={list-of-player-stats} (filter player stats)
    // sort={sort-specifier} (sort the feed's content)
    // offset={offset-specifier} (filter results starting at the given offset)
    // limit={limit-specifier} (limit the maximum # of results)
    // force={force-if-not-modified} (force content)
    $.ajax({
      url: 'http:api.probasketballapi.com/teams',
      method: 'POST',
      contentType: 'application/json',
      data: 'WxzV8Iv5QJ1RqYAanGsFTdkou4fU9SNl',
      success: () => {
        console.log('hello in post, SUCCESSSSSS');
      }
    })

//WxzV8Iv5QJ1RqYAanGsFTdkou4fU9SNl
    $.ajax({
      type: 'GET',
      url: 'http:api.probasketballapi.com/player',
      api_key: 'WxzV8Iv5QJ1RqYAanGsFTdkou4fU9SNl',
      player:'stephen curry',
      limit: 5,
      success: (data) => {
        console.log('hello in the get');
        console.log(data);
      }
    })
  }

  makeMessage(name, prevState) {
    var lastId = prevState.items[prevState.items.length - 1].id;
    var nextId = lastId++;

    var message = {}

    message.id = nextId;
    message.name = name;
    message.favorite = false;

    return message;
  }


  onSearch(value) {
    console.log('hello in client index', value);
    this.setState({
      items: this.state.items.concat(this.makeMessage(value, this.state)),
    })
  }

  onFavorite(player){
    console.log('hello');
    this.setState({
      favorites: this.state.favorites.concat(player),
    })
  }


  render () {
    return (<div>
      <h1>MY NBA PLAYERS</h1>
      <List items={this.state.items} favClick={this.onFavorite}/>
      <Search searchInitialized={this.onSearch}/>
      <FavoriteList favs={this.state.favorites}/>

    </div>)
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
