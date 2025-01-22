import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { FaChevronDown } from "react-icons/fa"; // Import a dropdown icon



const HeaderComponent = () => {
    const [empName, setEmpName] = useState('');
    const [userRole, setUserRole] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const sessionName = sessionStorage.getItem('empName') || 'No name available';
        const role = sessionStorage.getItem('userRole');
        const loginStatus = sessionStorage.getItem('isLoggedIn');

        // Set state with sessionStorage values
        setEmpName(sessionName);
        setUserRole(role);
        setIsLoggedIn(loginStatus === 'true'); // Set login status based on sessionStorage
    }, []);

    // Extract first and last letter from empName
    const getFirstAndLastLetters = (name) => {
        const nameParts = name.split(" ");
        const firstLetter = nameParts[0]?.charAt(0).toUpperCase();
        const lastLetter = nameParts[nameParts.length - 1]?.charAt(0).toUpperCase();
        return firstLetter + lastLetter;
    };

    const initials = getFirstAndLastLetters(empName);

    // Handle sign out
    const handleSignOut = () => {
        sessionStorage.clear(); // Clear sessionStorage on signout
        setIsLoggedIn(false); // Update state after signout
        navigate('/login'); // Redirect to login page
    };
    const [servicesDropdown, setServicesDropdown] = useState(false);

    const toggleServicesDropdown = () => {
        setServicesDropdown(!servicesDropdown);
    };

    const closeServicesDropdown = () => {
        setServicesDropdown(false);
    };
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-links">
                    <li><Link to="/userDetail">UserDetail</Link></li>
                    <li><Link to="/createAccount">CreateUser</Link></li>

                    <li
                        className="dropdown-container"
                        onMouseEnter={toggleServicesDropdown}
                        onMouseLeave={closeServicesDropdown}
                    >
                        <span className="nav-link" >Master <FaChevronDown className="dropdown-icon" /></span>
                        {servicesDropdown && (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/emailMaster" className="dropdown-item">
                                        EmailMaster
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/machineMaster" className="dropdown-item">
                                        MachineMaster
                                    </Link>
                                </li>

                            </ul>
                        )}
                    </li>

                    <li><Link to="/screenAcess">ScreenAccess</Link></li>
                    <li><Link to="/dashBoard">DashBoard</Link></li>
                    <li><Link to="/report">Report</Link></li>

                </ul>
            </nav>

            <div className="auth-buttons">
                <Link to="/" className="signup-btn">Logout</Link>
            </div>
        </header>
    )
}

export default HeaderComponent