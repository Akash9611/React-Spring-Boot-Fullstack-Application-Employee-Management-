import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await listEmployees()
            if (response)
                setEmployees(response.data)
            else 
                console.error("Failed to fetch employees")
        }
        fetchData()
    }, [])

    return (
        <div className="container-fluid">
            <h2 className="text-center my-4 text-light">Employees List</h2>
            <div className="table-responsive">
                <table className="table table-dark table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Employee ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponent