import React, { useContext } from "react";
import "./style.css"
import DataAreaContext from "../../utils/DataAreaContext"

//DataBody
//map over filtered users to put each use in their own row
function DataBody() {
    const context = useContext(DataAreaContext);

    return (
        <tbody>
            {context.userState.filteredEmployees.map(({ name, picture, phone, email, dob }) => {
                return (
                    <tr key={name}>
                        <td className="img-container">
                            <img alt={name.first} src={picture.medium} />
                        </td>
                        <td className="employee-name">
                            {name.first} {name.last}
                        </td>
                        <td className="phone">
                            {phone}
                        </td>
                        <td className="email">
                            {email}
                        </td>
                        <td className="DOB">
                            {dob.age}
                        </td>
                    </tr>
                )
            })};

        </tbody>

    );
}

export default DataBody; 
