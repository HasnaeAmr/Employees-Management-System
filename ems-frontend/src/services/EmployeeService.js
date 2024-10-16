import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8081/api/employee";

export const listEmployees = () => axios.get(REST_API_BASE_URL);
export const createEmployee = (employee) =>  axios.post(REST_API_BASE_URL, employee)
export const getEmployee = (id) => {
    return axios.get(`${REST_API_BASE_URL}/${id}`);
};
    
//export const updateEmployee = (id,Editedemployee) => axios.get(`${REST_API_BASE_URL}/${id}`,Editedemployee)