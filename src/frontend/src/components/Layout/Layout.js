import React from 'react';
import { FormControl, Navbar, Form, Button } from 'react-bootstrap';

class Layout extends React.Component {

  render() {
    return(
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/" style={{ marginLeft: 15 }}>Item Store</Navbar.Brand>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Item Name" className="me-2"/>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  };
}

export default Layout;