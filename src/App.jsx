import { useState } from "react"
import './App.css'
import Header from "./Header"
import Sidebar from "./Sidebar"
import Home from "./Home"

function App() {

    const [openSidebarToggle, setOpenSidebarToggel] = useState(false); 

    const openSidbar = () => {
        setOpenSidebarToggel(!openSidebarToggle)
    }
    
    return(
        <div className="grid-container">
            <Header OpenSidebar={openSidbar}/>
            <Sidebar openSidebarToggle={openSidebarToggle}/>
            <Home />
        </div>
    )

}

export default App
