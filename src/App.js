
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
        <div className='flex-container'>

          <div className='flex-item-left'>

            <div className='left-content'>
              <ul>
                <li><NavLink to="/basics">Basics</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
              </ul>
            </div>


          </div>

          <div className='flex-item-right'>
            <div className='right-content'>
              <Routes>
                <Route path="/" >
                  <Route path="basics" element={<Basics />} />
                  <Route path="events" element={<Events />} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
