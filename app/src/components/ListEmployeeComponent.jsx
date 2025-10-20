import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { Link } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees
    }, [])
    const getAllEmployees = async () => {
        const response = await listEmployees()
        if (response)
            setEmployees(response.data)
        else
            console.error("Failed to fetch employees")
    }

    const handleDelete = async (id) => {
        await deleteEmployee(id).then((response) => {
            // //! use this method to remove deleted employee from the state without calling an getEmployees API
            //  if (response.status === 200) {
            //     setEmployees(employees.filter(emp => emp.id !== id));
            //     console.log("Employee deleted successfully");
            // }
            getAllEmployees();
            console.log("Employee deleted successfully", response);
        }).catch((err) => {
            console.error("Failed to delete employee:", err);
        })
    }

    return (
        <div className="container-fluid">
            <button type='button' className='btn btn-primary'><Link to="/add-employee" className='text-decoration-none text-white'>Add Employee</Link></button>
            <h2 className="text-center my-4 text-light">Employees List</h2>
            <div className="table-responsive">
                <table className="table table-dark table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Employee ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td><div>
                                    <button className='btn btn-info'><Link to={`/edit-employee/${employee.id}`} className='text-decoration-none text-white'>Update</Link></button>
                                    <button className='btn btn-danger ms-2' onClick={() => handleDelete(employee.id)}>Delete</button>
                                </div></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponent