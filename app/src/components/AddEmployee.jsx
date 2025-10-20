import React from 'react'
import '../assets/css/Form.css'
const AddEmployee = () => {

    const handleInputFocus = (e) => {
        e.target.parentElement.classList.add('focused')
    }

    const handleInputBlur = (e) => {
        if (!e.target.value) {
            e.target.parentElement.classList.remove('focused')
        }
    }

    return (
        <div className="container-fluid py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-6">
                    <div className="card bg-dark border-primary shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <h2 className="card-title mb-0 text-center">
                                <i className="bi bi-person-plus-fill me-2"></i>
                                Add New Employee
                            </h2>
                        </div>
                        <div className="card-body p-4">
                            <form onSubmit={console.log("Form submitted")} className="needs-validation" noValidate>
                                {/* First Name Field */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control bg-dark text-light border-secondary"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Enter first name"
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                    />
                                    <label htmlFor="firstName" className="text-light-emphasis">
                                        <i className="bi bi-person me-1"></i>
                                        First Name
                                    </label>
                                    <div className="invalid-feedback">
                                        Please provide a valid first name.
                                    </div>
                                </div>

                                {/* Last Name Field */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control bg-dark text-light border-secondary"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Enter last name"
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                    />
                                    <label htmlFor="lastName" className="text-light-emphasis">
                                        <i className="bi bi-person me-1"></i>
                                        Last Name
                                    </label>
                                    <div className="invalid-feedback">
                                        Please provide a valid last name.
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control bg-dark text-light border-secondary"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email address"
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                    />
                                    <label htmlFor="email" className="text-light-emphasis">
                                        <i className="bi bi-envelope me-1"></i>
                                        Email Address
                                    </label>
                                    <div className="invalid-feedback">
                                        Please provide a valid email address.
                                    </div>
                                </div>

                                {/* Department Field */}
                                {/* <div className="form-floating mb-3">
                                    <select
                                        className="form-select bg-dark text-light border-secondary"
                                        id="department"
                                        name="department"
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                    >
                                        <option value="">Choose Department</option>
                                        <option value="engineering">Engineering</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="sales">Sales</option>
                                        <option value="hr">Human Resources</option>
                                        <option value="finance">Finance</option>
                                        <option value="operations">Operations</option>
                                    </select>
                                    <label htmlFor="department" className="text-light-emphasis">
                                        <i className="bi bi-building me-1"></i>
                                        Department
                                    </label>
                                    <div className="invalid-feedback">
                                        Please select a department.
                                    </div>
                                </div> */}

                                {/* Position Field */}
                                {/* <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control bg-dark text-light border-secondary"
                                        id="position"
                                        name="position"
                                        placeholder="Enter job position"
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                    />
                                    <label htmlFor="position" className="text-light-emphasis">
                                        <i className="bi bi-briefcase me-1"></i>
                                        Job Position
                                    </label>
                                    <div className="invalid-feedback">
                                        Please provide a job position.
                                    </div>
                                </div> */}

                                {/* Salary Field */}
                                {/* <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control bg-dark text-light border-secondary"
                                        id="salary"
                                        name="salary"
                                        placeholder="Enter salary"
                                        min="0"
                                        step="1000"
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                    />
                                    <label htmlFor="salary" className="text-light-emphasis">
                                        <i className="bi bi-currency-dollar me-1"></i>
                                        Annual Salary
                                    </label>
                                    <div className="invalid-feedback">
                                        Please provide a valid salary amount.
                                    </div>
                                </div> */}

                                {/* Phone Field */}
                                {/* <div className="form-floating mb-4">
                                    <input
                                        type="tel"
                                        className="form-control bg-dark text-light border-secondary"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}
                                        required
                                    />
                                    <label htmlFor="phone" className="text-light-emphasis">
                                        <i className="bi bi-telephone me-1"></i>
                                        Phone Number
                                    </label>
                                    <small className="form-text text-muted">Format: 123-456-7890</small>
                                    <div className="invalid-feedback">
                                        Please provide a valid phone number.
                                    </div>
                                </div> */}

                                {/* Action Buttons */}
                                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg px-4 me-md-2 pulse-animation"
                                    >
                                        <i className="bi bi-plus-circle me-2"></i>
                                        Add Employee
                                    </button>
                                    <button
                                        type="reset"
                                        className="btn btn-outline-secondary btn-lg px-4 hover-glow"
                                    >
                                        <i className="bi bi-arrow-counterclockwise me-2"></i>
                                        Reset Form
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Form Help Text */}
                    <div className="mt-4 text-center">
                        <small className="text-muted">
                            <i className="bi bi-info-circle me-1"></i>
                            All fields are required. States and form validation will be added in the next phase.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee