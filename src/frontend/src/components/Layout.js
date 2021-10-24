import React from 'react';
import {
  Navbar
} from 'react-bootstrap';

class Layout extends React.Component {

  render() {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Item Store</Navbar.Brand>
        </Navbar>
      </div>
    );
  };
}

export default Layout;