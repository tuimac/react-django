import React from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Spinner
} from 'react-bootstrap';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount() {
    let url = window.location.origin + '/api/item/';
    axios.get(url)
      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data, loading: false })
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
                hello
              </Col>
            </Row>
          </Container>
        </>
      );
    }
  };
}

export default Home;