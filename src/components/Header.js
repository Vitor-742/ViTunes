import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      usuario: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.retornaUsuario();
  }

  retornaUsuario() {
    this.setState({ loading: true }, async () => {
      const a = await getUser();
      this.setState({
        usuario: a.name,
        loading: false,
      });
    });
  }

  render() {
    const { loading, usuario } = this.state;
    return (
      <header data-testid="header-component">
        <h1>ViTunes</h1>
        <div className="header-options">
          <div>
            {(loading) ? <Loading /> : <p>{`Hello, ${usuario}`}</p>}
          </div>
          <Link to="/search" data-testid="link-to-search">Search</Link>
          <br />
          <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        </div>

      </header>
    );
  }
}

export default Header;
