import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CardAlbum extends React.Component {
  render() {
    const { album } = this.props;
    const { artistName, artworkUrl100, collectionName, collectionId } = album;
    return (
      <Link
      className="fatherAlbumCard"
        to={ `album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <div
        className='albumCard'
        key={ collectionId }
        >
          <img src={ artworkUrl100 } alt={ collectionName } />
          <h3>{ collectionName }</h3>
          <p>{ artistName }</p>
        </div>
      </Link>
    );
  }
}

CardAlbum.propTypes = {
  album: PropTypes.shape({
    artistName: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardAlbum;
