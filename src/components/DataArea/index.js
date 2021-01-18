import React, { useState, useEffect } from "react";
import DataTable from "../DataTable";
import Header from "../Header";
import API from "../../utils/API";
import "./style.css";
import DataAreaContext from "../../utils/DataAreaContext"
import FormInput from "../FormInput";

//Set states of employees in directory, set state of headings for table columns
function DataArea() {
    const [userState, setUserState] = useState({
        employees: [],
        filteredEmployees: [],
        alphabetical: true,
        headings: [
            { name: "Image" },
            { name: "Name" },
            { name: "Phone" },
            { name: "Email" },
            { name: "DOB" }
        ]
    });


    //handlsort function, changes the order to the opposite of its current state 
    const handleOrder = heading => {
        if (userState.alphabetical === true) {
            setUserState({
                alphabetical: false
            })
        } else {
            setUserState({
                alphabetical: true
            })
        }


        //order employees alphabetically depending on name
        //compare a to b, and b to a
        const compareEmployees = (a, b) => {
            // if alph. true, then 
            if (userState.alphabetical === true) {
                //ensure a heading and b heading are defined, otherwise a will order before b
                if (a[heading] === undefined) {
                    return 1;

                } else if (b[heading] === undefined) {
                    return -1;
                    //if heading is "name", compare a and b to see which comes first
                    //if a comes before b, a positive number will be returned
                } else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else {
                    //if a positive number is not returned, this will return a positive number
                    return b[heading] - a[heading];
                }
            } else {
                //ensure a heading and b heading are defined, otherwise a will order before b
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                    //if heading is "name", compare b and a to see which comes first
                    //if b comes before a, a positive number will be returned
                } else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                    //if a positive number is not returned, this will return a positive number
                } else {
                    return a[heading] - b[heading];
                }
            }
        }

        //this sort function will order the employees depending on the positive or negative numbers returned from the compare function
        const sortedEmployees = userState.filteredEmployees.sort(compareEmployees);

        setUserState({
            ...userState,
            filteredEmployees: sortedEmployees
        })
    };



    //handleInputChange
    //setEmployeeState
    const handleInputChange = event => {
        const searchTerm = event.target.value;
        const searchedEmployees = userState.employees.filter(employee => {
            let item = employee.name.first + employee.name.last + employee.email + employee.cell + employee.dob.age;
            return item.indexOf(searchTerm) !== -1;
        })

        setUserState({
            ...userState,
            filteredEmployees: searchedEmployees
        });
    }



    useEffect(() => {
        API.getUsers().then(results => {
            setUserState({
                employees: results.data.results,
                filteredEmployees: results.data.results,
                headings: [
                    { name: "Image" },
                    { name: "Name" },
                    { name: "Phone" },
                    { name: "Email" },
                    { name: "DOB" }
                ]
            });
        });
    }, []);



    //retrun dataareacontext.provider with values to pass to the datatable
    return (
        <DataAreaContext.Provider value={{ userState, handleInputChange, handleOrder }}>
            <FormInput />
            <div className="data-area mx-auto">
                {userState.filteredEmployees.length > 0 ? <DataTable /> : <div className="null-results">No Employees</div>}
            </div>
        </DataAreaContext.Provider>
    )

}

export default DataArea;