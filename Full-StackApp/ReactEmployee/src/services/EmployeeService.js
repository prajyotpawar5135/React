import axios from "axios"
const baseURL="http://localhost:3002"
class EmployeeService
{
      getEmployeeDetails()
      {
        return axios.get(baseURL+"/employees")
      }
}




export default new EmployeeService();