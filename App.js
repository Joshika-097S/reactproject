import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp'; 
import Login from './components/Login'; 
import VehicleList from './components/VehicleList'; 
import SlotBooking from './components/SlotBooking'; 
import ServiceHistory from './components/ServiceHistory'; 

const App = () => {
    const handleSignUp = (username, password) => {
        console.log('User signed up:', username);
        // Add your sign-up logic here (e.g., API call)
    };

    const handleLogin = (username, password) => {
        console.log('User logged in:', username);
        // Add your login logic here (e.g., API call)
    };

    return (
        <Router>
            <header className="text-center text-primary">
                <h1>Vehicle Service Management Portal</h1>
            </header>
            <nav>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vehicle-list">Vehicle List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/slot-booking">Slot Booking</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/service-history">Service History</Link>
                    </li>
                </ul>
            </nav>
            

            {/* Routing */}
            <Routes>
                <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/vehicle-list" element={<VehicleList />} />
                <Route path="/slot-booking" element={<SlotBooking />} />
                <Route path="/service-history" element={<ServiceHistory />} />
            </Routes>

            <footer className="text-center mt-4">
                <p>&copy; 2024 Vehicle Service Management Portal. All rights reserved.</p>
            </footer>
        </Router>
    );
};

export default App;