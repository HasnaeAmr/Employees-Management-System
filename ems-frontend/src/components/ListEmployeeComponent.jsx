//react functional component export: rfce cmd
//react arrow component export : race cmd
import React, {useState, useEffect} from 'react'
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
    const navigator = useNavigate();
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error)
        })
    }, [])

    function addEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }
  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Last Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td><button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent

