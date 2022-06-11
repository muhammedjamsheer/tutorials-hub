import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Tabs, Tab } from 'react-bootstrap'

function Routing() {

    const simplerouting_appjs = `
    import './App.css';
    import { BrowserRouter, Route, Routes } from "react-router-dom";
    import Home from './pages/Home';
    import About from './pages/About';
    import User from './pages/User';
    import Layout from './components/Layout';
    import Notfound from './pages/Notfound';

    function App() {
      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="user" element={<User />} />
                <Route path="basics" element={<Basics />} />
              </Route>
              <Route path="*" element={<Notfound />} />
            </Routes>
          </BrowserRouter>
        </>
      );
    }
    export default App;
    `;

    const simplerouting_layoutjs = `
    import React from 'react'
    import Header from '../components/Header';
    import { Outlet, NavLink } from "react-router-dom";
    function Layout() {
        return (
            <>
                <Header />
                <div className='flex-container'>
                    <div className='flex-item-left'>
                        <div className='left-content'>
                            <ul>
                                <li><NavLink to="/user">User</NavLink></li>
                                <li><NavLink to="/basics">Basics</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex-item-right'>
                        <div className='right-content'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </>
        )
    }
    export default Layout
    `;

    const urlparameters_appjs = `
    <Route path="userdetails/:userid" element={<UserDetails />} />
    `;

    const urlparameters_userjs = `
    import React from 'react';
    import { Link } from "react-router-dom";
    function User() {

        const users = [
            { id: 1, name: "jamsheer" },
            { id: 2, name: "thafseer" },
            { id: 3, name: "nasik" }
        ]

        return (
            <>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link to={'/userdetails/' + user.id} > {user.name}</Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
    export default User
    `;

    const urlparameters_userdetailsjs = `
    import React from 'react'
    import { useParams } from 'react-router-dom'
    
    function UserDetails() {
        const { userid } = useParams()
        console.log(userid)
        
        return (
            <div>UserDetails</div>
        )
    }
    
    export default UserDetails
    `;

    const searchparameters_userjs = `
    import React from 'react';
    import { useSearchParams } from "react-router-dom";
    
    function User() {
        const [searchParams] = useSearchParams();
        const gender = searchParams.get('gender');
    
        const users = [
            { id: 1, name: "jamsheer", gender: 'male' },
            { id: 2, name: "thafseer", gender: 'male' },
            { id: 3, name: "Ishwa", gender: 'female' },
            { id: 4, name: "zaiba", gender: 'female' },
            { id: 5, name: "Haniya", gender: 'female' }
        ]
    
        return (
            <>
                <ul>
                    {users.filter((user) => {
                        if (!gender) { return true }
                        return gender === user.gender
                    }).map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </>
        )
    }
    export default User
    `;

    const navigatefn = `
    import { useNavigate } from 'react-router-dom'
    function Userdata() {
        const navigate = useNavigate();
    
        return (
            <div className='card mt-4'>
                <div className='card-body'>
                    <p className="btn btn-info" onClick={() => { navigate('/users') }}>User</p>
                </div>
            </div>
        )
    }
    
    export default Userdata
    `;

    const navigatefnpassingparams = `
    <Route path="userdata" element={<Usrdata />} />

    ------------------------------------------------
    import React from 'react';
    import { useNavigate } from "react-router-dom";
    
    function User() {
        const navigate = useNavigate();
        const users = [
            { id: 1, name: "jamsheer", gender: 'male' },
            { id: 2, name: "thafseer", gender: 'male' },
            { id: 3, name: "Ishwa", gender: 'female' },
            { id: 4, name: "zaiba", gender: 'female' },
            { id: 5, name: "Haniya", gender: 'female' }
        ]
    
        return (
            <>
                <ul>{
                    users.map(user => (
                        <li key={user.id} onClick={() => { navigate('/userdata',{state:{data:user}}) }}>{user.name}</li>
                    ))}
                </ul>
            </>
        )
    }
    export default User
    ---------------------------------------------------------------------------
    import React from 'react'
    import { useLocation } from "react-router-dom";
    function Usrdata() {
        const location = useLocation();
        const state = location.state || {};
        const user = state.data || {}
        console.log(user)
        return (
            <>
                <div className="page details">
                    <div className="title">
                        Name : {user.name}
                    </div>
                    <div className="body">
                        Gender : {user.gender}
                    </div>

                </div>
            </>
        )
    }

    export default Usrdata
    `;


    return (
        <div>
            <h4>Simple Routing</h4>

            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="App.js">
                    <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                        {simplerouting_appjs}
                    </SyntaxHighlighter>
                </Tab>
                <Tab eventKey="profile" title="Layout.js">
                    <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                        {simplerouting_layoutjs}
                    </SyntaxHighlighter>
                </Tab>
            </Tabs>


            <h4>URL parameters</h4>
            <p>http://localhost:3000/userdetails/1</p>

            <Tabs defaultActiveKey="app" id="uncontrolled-tab-example2" className="mb-3">
                <Tab eventKey="app" title="App.js">
                    <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                        {urlparameters_appjs}
                    </SyntaxHighlighter>
                </Tab>
                <Tab eventKey="user" title="Users.js">
                    <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                        {urlparameters_userjs}
                    </SyntaxHighlighter>
                </Tab>
                <Tab eventKey="userdetail" title="Userdetails.js">
                    <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                        {urlparameters_userdetailsjs}
                    </SyntaxHighlighter>
                </Tab>
            </Tabs>


            <h4>Search parameters</h4>
            <p>http://localhost:3000/users?gender=male</p>

            <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                {searchparameters_userjs}
            </SyntaxHighlighter>

            <h4> Routing with navigate function (useNavigate)</h4>


            <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                {navigatefn}
            </SyntaxHighlighter>


            <h4> Routing with navigate function with parameters (useLocate)</h4>


            <SyntaxHighlighter className="codesyntax" language="jsx" style={vscDarkPlus}>
                {navigatefnpassingparams}
            </SyntaxHighlighter>





        </div>
    )
}

export default Routing