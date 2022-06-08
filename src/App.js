
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Basics from './reactjs/Basics';
import Events from './reactjs/Events';
import User from './reactjs/User';
import Styling from './reactjs/Styling';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='flex-container'>

          <div className='flex-item-left'>

            <div className='left-content'>
              <ul>
                <li><NavLink to="/test">Test</NavLink></li>
                <li><NavLink to="/basics">Basics</NavLink></li>
                <li><NavLink to="/styling">Styling</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
              </ul>
            </div>


          </div>

          <div className='flex-item-right'>
            <div className='right-content'>
              <Routes>
                <Route path="/" >
                  <Route path="test" element={<User />} />
                  <Route path="basics" element={<Basics />} />
                  <Route path="styling" element={<Styling />} />
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
