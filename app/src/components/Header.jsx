import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">
                    <i className="bi bi-people-fill me-2"></i>
                    Employee Management System
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link 
                                className={`nav-link ${location.pathname === '/' || location.pathname === '/home' ? 'active' : ''}`} 
                                to="/"
                            >
                                <i className="bi bi-house me-1"></i>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className={`nav-link ${location.pathname === '/employees' ? 'active' : ''}`} 
                                to="/employees"
                            >
                                <i className="bi bi-people me-1"></i>
                                Employees
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-employee">
                                <i className="bi bi-person-plus me-1"></i>
                                Add Employee
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <span className="navbar-text me-3">
                            <i className="bi bi-person-circle me-1"></i>
                            Welcome to EMS
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header