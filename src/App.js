
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
import UserDetails from './reactjs/UserDetails';
import Usrdata from './reactjs/Usrdata';
import Reacthome from './reactjs/Reacthome';
import Cssbasics from './csstutorials/Cssbasics';
import Csshomepage from './csstutorials/Csshomepage';
import Cssselector from './csstutorials/Cssselector';
import Angularhomepage from './angular/Angularhomepage';
import Angulardatabinding from './angular/Angulardatabinding';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="reactjs/" element={<Reacthome />}>
              <Route path="" element={<Home />} />
              <Route path="userdata" element={<Usrdata />} />
              <Route path="basics" element={<Basics />} />
              <Route path="styling" element={<Styling />} />
              <Route path="events" element={<Events />} />
              <Route path="usestatehooks" element={<Hooks />} />
              <Route path="routing" element={<Routing />} />
              <Route path="users" element={<User />} />
              <Route path="userdetails/:userid" element={<UserDetails />} />
            </Route>

            <Route path="css/" element={<Csshomepage />}>
              <Route path="" element={<Cssbasics />} />
              <Route path="basics" element={<Cssbasics />} />
              <Route path="selector" element={<Cssselector />} />
              <Route path="combinators" element={<Cssselector />} />
              <Route path="pseudoclass" element={<Cssselector />} />
              <Route path="pseudoelement" element={<Cssselector />} />

              <Route path="colors" element={<Cssbasics />} />
              <Route path="backgrounds" element={<Cssbasics />} />
              <Route path="borders" element={<Cssbasics />} />
              <Route path="margins" element={<Cssbasics />} />
              <Route path="padding" element={<Cssbasics />} />
              <Route path="heightorwidth" element={<Cssbasics />} />

              <Route path="outline" element={<Cssbasics />} />
              <Route path="text" element={<Cssbasics />} />
              <Route path="fonts" element={<Cssbasics />} />
              
            </Route>


            
            <Route path="angular/" element={<Angularhomepage />}>
              <Route path="" element={<Angularhomepage />} />
              <Route path="databinding" element={<Angulardatabinding />}>
              <Route path="interpolation" element={<Angulardatabinding />} />
              <Route path="propertybinding" element={<Angulardatabinding />} />
              <Route path="eventbinding" element={<Angulardatabinding />} />

              </Route>



        
              
            </Route>


            <Route path="*" element={<Notfound />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
