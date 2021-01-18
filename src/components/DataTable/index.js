//use context
import React, { useContext } from "react";
import DataBody from "../DataBody";
import DataAreaContext from "../../utils/DataAreaContext";
import "./style.css";


const DataTable = () => {
    const context = useContext(DataAreaContext);

    return (
        
        <div className="data-table mt-4">
            <table id="table" className="table table-striped">
                <thead>
                    <tr>
                        {context.userState.headings.map(({ name }) => {
                            return (
                                <th 
                                className="table-column" 
                                key={name}
                                onClick={() => {
                                    context.handleOrder(name.toLowerCase());
                                }}
                            >
                                {name} 
                            
                            </th>
                            );
                        })}

                    </tr>
                </thead>

                <DataBody />

            </table>
        </div>

    )

}


export default DataTable;
