import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminEvent from "./components/AdminEvent"; 
import AddEvent from "./components/AddEvent"; 
import AdminOrg from "./components/AdminOrg"; 
import AdminGenerateCR from "./components/AdminGenerateCR"; 
import PARdashboard from "./components/PARdashboard"; 
import PARcertificates from "./components/PARcertificates"; 





function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/AdminEvent" element={<AdminEvent />} /> {/* New Route */}
                <Route path="/AddEvent" element={<AddEvent />} /> {/* New Route */}
                <Route path="/AdminOrg" element={<AdminOrg />} /> {/* New Route */}
                <Route path="/AdminGenerateCR" element={<AdminGenerateCR />} /> {/* New Route */}
                <Route path="/PARdashboard" element={<PARdashboard />} /> {/* New Route */}
                <Route path="/PARcertificates" element={<PARcertificates />} /> {/* New Route */}




            </Routes>
        </Router>
    );

}

export default App;
