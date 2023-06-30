import React,{Component,Fragement} from "react"

import EmployeeService from "../services/EmployeeService";

class EmployeeTable extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            searcharr:[]
        }
    }

    fetchDetails()
    {
        EmployeeService.getEmployeeDetails().then((result)=>{
            console.log(result)
            this.setState({...this.state,searcharr:result.data})
        }).catch(()=>{})
       

    }
    componentDidMount()
    {
        this.fetchDetails()
    }


    render()
    {
        return(
            <div>
                <table border={2} >
               <thead>
                <tr>
                    <td>Employee id </td>
                    <td>Employee name </td>
                    <td> salary </td>

                </tr>
               </thead>
                 <tbody>
                   {this.state.searcharr.map((emp)=>

                    <tr key={emp.empid}>
                        <td>{emp.empid}</td>
                        <td>{emp.ename}</td>
                        <td>{emp.sal}</td>

                    </tr>

                   )}

                 
                 </tbody>

                </table>
            </div>
        )

    }

}

export default EmployeeTable;







