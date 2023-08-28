import { useState } from 'react'
import './App.css';
import Home from './assets/Home';
import Sidebar from  './assets/Sidbar'
import Header from './assets/Header'
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className="grid-container">
     <Home />
     <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    </div>
  );
}

export default App;
