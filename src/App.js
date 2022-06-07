
import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Basics from './reactjs/Basics';
import Events from './reactjs/Events';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Row>
            <Col sm={3}>
              <div className='left-content'>


                <ul>
                  <li><NavLink to="/basics">Basics</NavLink></li>
                  <li><NavLink to="/events">Events</NavLink></li>
                </ul>


              </div>
            </Col>
            <Col sm={9}>
              <div className='right-content'>
                <Routes>
                  <Route path="/" >
                    <Route path="basics" element={<Basics />} />
                    <Route path="events" element={<Events />} />
                  </Route>
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
