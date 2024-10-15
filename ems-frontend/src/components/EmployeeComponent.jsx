import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail]= useState('')
    const navigator = useNavigate()
    //const  handleFirstName = (e) => { setFirstName(e.target.value) }
    //function handleLastName(e){ setLastName(e.target.value) }
    function handleEmail(e){ setEmail(e.target.value) }
    
    function saveEmployee(e){ 
        e.preventDefault();
        if(validateFormData()){
            const employee = {firstName, lastName, email}
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employee');
        })
    }
}

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })


    function validateFormData(){
        let valid = true;
        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName=''
        }
        else{
            errorsCopy.firstName='First name is required';
            valid = false;
        }
        if(lastName.trim()){
            errorsCopy.lastName=''
        }
        else{
            errorsCopy.lastName='Last name is required';
            valid = false;
        }
        if(email.trim()){
            errorsCopy.email=''
        }
        else{
            errorsCopy.email='Email is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }
    return(
        <div className="container">
            <br/><br/>
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">Add Employee</h2>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group mb-2">
                                <label className='form-label'>First Name:</label>
                                <input
                                    type="text"
                                    placeholder='Enter Employee First Name'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFirstName(e.target.value) }
                                ></input>
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className='form-label'>Last Name:</label>
                                <input
                                    type="text"
                                    placeholder='Enter Employee Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={ (e) => setLastName(e.target.value) }
                                ></input>
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className='form-label'>Email:</label>
                                <input
                                    type="text"
                                    placeholder='Enter Employee Email'
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={handleEmail}
                                ></input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveEmployee}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmployeeComponent