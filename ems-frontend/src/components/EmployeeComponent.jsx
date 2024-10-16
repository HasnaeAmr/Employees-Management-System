import React, { useState , useEffect } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { getEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'


const EmployeeComponent = () => {

    const { id } = useParams();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail]= useState('')
    const navigator = useNavigate()
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            });
        }
    }, [id]);

    
    //const  handleFirstName = (e) => { setFirstName(e.target.value) }
    //function handleLastName(e){ setLastName(e.target.value) }
    function handleEmail(e){ setEmail(e.target.value) }

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

    function saveEmployee(e) { 
        e.preventDefault();
        if (validateFormData()) {
            const employee = { firstName, lastName, email };
            
            createEmployee(employee)
                .then((response) => {
                    console.log(response.data);
                    navigator('/employee');
                })
                .catch((error) => {
                    console.error('Error creating employee:', error);
    
                    if (error.response) {
                        console.error('Server responded with:', error.response.data);
                        console.error('Status code:', error.response.status);
                    } else if (error.request) {
                        console.error('No response received:', error.request);
                    } else {
                        console.error('Error message:', error.message);
                    }
                });
        }
    }
    
    function pageTitle(){
        if(id){
            return <h2 className="text-center">Update Employee</h2>
        }
        return <h2 className="text-center">Add Employee</h2>
    }
    



    return(
        <div className="container">
            <br/><br/>
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                {pageTitle()}
                    <div className="card-body">
                        <form onSubmit={saveEmployee}>
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
                            <button type="submit" className='btn btn-success'>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmployeeComponent