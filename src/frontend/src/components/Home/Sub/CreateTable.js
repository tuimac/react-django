import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner, Table } from 'react-bootstrap';


class CreateTable extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      search: ''
    }
  }

  componentDidMount() {
    let url = '';
    if (this.state.search === '') {
      url = window.location.origin + '/api/item/';
    } else {
      url = window.location.origin + '/api/item/' + this.state.search + '/';
    }
    axios.get(url)
      .then(res => {
        this.setState({ data: JSON.parse(res.data), loading: false })
      })
      .catch(err => {
        console.error(err);
      })
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
          </Container>
        </>
      );
    }
  };
}

export default CreateTable;