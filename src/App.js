
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basics from './reactjs/Basics';
import Events from './reactjs/Events';
import User from './reactjs/User';
import Styling from './reactjs/Styling';
import Hooks from './reactjs/Hooks';
import Layout from './components/Layout';
import Home from './reactjs/Home';
import Routing from './reactjs/Routing';
import Notfound from './reactjs/Notfound';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="test" element={<User />} />
            <Route path="basics" element={<Basics />} />
            <Route path="styling" element={<Styling />} />
            <Route path="events" element={<Events />} />
            <Route path="usestatehooks" element={<Hooks />} />
            <Route path="routing" element={<Routing />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
