import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="text-primary">Employee Management System</h5>
                        <p className="mb-0">Efficiently manage your workforce with our comprehensive employee management solution.</p>
                    </div>
                    <div className="col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-light text-decoration-none hover-glow">Home</Link></li>
                            <li><Link to="/employees" className="text-light text-decoration-none hover-glow">Employees</Link></li>
                            <li><Link to="/add-employee" className="text-light text-decoration-none hover-glow">Add Employee</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6>Contact Info</h6>
                        <p className="mb-1"><i className="bi bi-envelope me-2"></i>info@ems.com</p>
                        <p className="mb-0"><i className="bi bi-telephone me-2"></i>+1 (555) 123-4567</p>
                    </div>
                </div>
                <hr className="my-3 border-secondary" />
                <div className="row">
                    <div className="col-12 text-center">
                        <p className="mb-0">&copy; 2025 Employee Management System. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer