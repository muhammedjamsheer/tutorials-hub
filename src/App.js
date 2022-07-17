
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
import Angularpipes from './angular/Angularpipes';
import Angularcomponetcammunication from './angular/Angularcomponetcammunication';
import Angularforms from './angular/Angularforms';



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
              {/* <Route path="" element={<Angularhomepage />} /> */}
              <Route path="databinding" element={<Angulardatabinding />}>
                <Route path="interpolation" element={<Angulardatabinding />} />
                <Route path="propertybinding" element={<Angulardatabinding />} />
                <Route path="eventbinding" element={<Angulardatabinding />} />
              </Route>
              <Route path="pipes" element={<Angularpipes />} >
                <Route path="datepipe" element={<Angularpipes />} />
                <Route path="casepipe" element={<Angularpipes />} />
                <Route path="slicepipe" element={<Angularpipes />} />
                <Route path="currencypipe" element={<Angularpipes />} />
                <Route path="decimalpipe" element={<Angularpipes />} />
              </Route>
              <Route path="angularcomponetcammunication" element={<Angularcomponetcammunication />} >
                <Route path="urldatapass" element={<Angularcomponetcammunication />} />
                <Route path="inputdatapass" element={<Angularcomponetcammunication />} />
                <Route path="outputdatapass" element={<Angularcomponetcammunication />} />
                <Route path="viewchilddatapass" element={<Angularcomponetcammunication />} />
                <Route path="servicedatapass" element={<Angularcomponetcammunication />} />
              </Route>


              <Route path="reactiveforms" element={<Angularforms />} >
                <Route path="reactiveformexample" element={<Angularforms />} />
                <Route path="setvaluepatchvalue" element={<Angularforms />} />
                <Route path="valuechanges" element={<Angularforms />} />
                <Route path="dynamicform" element={<Angularforms />} />
                <Route path="validations" element={<Angularforms />} />
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
