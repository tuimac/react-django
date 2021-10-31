import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner, Table, Form, Card, Button } from 'react-bootstrap';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      name: '',
      count: '',
      owner: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let url = window.location.origin + '/api/item/';
    axios.get(url)
      .then(res => {
        console.log(res.data);
        this.setState({ data: JSON.parse(res.data), loading: false })
      })
      .catch(err => {
        console.error(err);
      })
  }

  addItems() {
    let url = window.location.origin + '/api/item/';
    console.log(this.state.owner);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    console.log(event);
  }

  render() {
    if(this.state.loading) {
      return(
        <Spinner animation="border" role="status" className='center'>
          <span className="sr-only"></span>
        </Spinner>
      )
    } else {
      return(
        <>
          <Container style={{marginTop: 30}}>
            <Row>
              <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Item Name</th>
                      <th>Count</th>
                      <th>Owner</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(this.state.data).map((items) => (
                      <tr key={items.pk}>
                        <td>{items.pk}</td>
                        <td>{items.fields.count}</td>
                        <td>{items.fields.owner}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
            <Row>
              <Card className='text-left'>
                <Card.Header>
                  <h4>Add Items</h4>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={this.addItems}>
                    <Form.Group>
                      <Form.Label>Item Name</Form.Label>
                      <Form.Control type='text' placeholder='Item Name'  name='name' value={ this.state.name } onChange={ this.handleChange }/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Count</Form.Label>
                      <Form.Control type='text' placeholder='' name='count' value={ this.state.count } onChange={ this.handleChange }/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Owner</Form.Label>
                      <Form.Control type='text' placeholder='Item Name' name='owner' value={ this.state.owner } onChange={ this.handleChange }/>
                    </Form.Group><br/>
                    <Button variant='primary' type='submit'>Add</Button>
                  </Form>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </>
      );
    }
  };
}

export default Home;