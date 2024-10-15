import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8081/api/employee";

export const listEmployees = () => axios.get(REST_API_BASE_URL);
export const createEmployee = (employee) => {
    return axios.post(REST_API_BASE_URL, employee)
        .then(response => {
            console.log("Employee created successfully", response.data);
            return response; // You can handle the returned data as needed
        })
        .catch(error => {
            console.error("There was an error creating the employee!", error);
            throw error; // Throwing error so that it can be caught in the component
        });
};