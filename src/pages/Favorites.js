import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteSongs: JSON.parse(localStorage.getItem('favorite_songs')),
    };
  }

  render() {
    const { favoriteSongs } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {favoriteSongs.map((item) => (
          <MusicCard
            Music={ item }
            key={ item.trackId }
            checked
            handChange={ () => false }
          />
        ))}
      </div>
    );
  }
}

export default Favorites;
