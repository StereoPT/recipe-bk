import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';

import { GlobalProvider } from './context/GlobalState';

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <>
      <GlobalProvider>
        <Router>
          <div className="wrapper">
            <Sidebar toggle={ toggleSidebar } isOpen={ sidebarIsOpen } />
            <Content toggleSidebar={ toggleSidebar } sidebarIsOpen={ sidebarIsOpen } />
          </div>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
