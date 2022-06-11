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


        </div>
    )
}

export default Routing