

import EmployeeService from "./services/EmployeeService"
import EmployeeTable from "./components/EmployeeTable"
import {Routes,Route,Navigate} from "react-router-dom"


function app()
{
    return(
        <div>
            <Routes>
                <Route path="/" element={<EmployeeTable/>}></Route>
            </Routes>
        </div>
    )
}

export default app;