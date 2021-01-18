import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext";
import { Container, Row } from "../Grid";
import "./style.css";

const FormInput = () => {
    const context = useContext(DataAreaContext)
    //form to search
    return (
        <Container>
            <Row>

                <div className="search-div mx-auto">
                    <form className="form-inline">
                        <label htmlFor="search"></label>
                        <input
                            className="form-control mr-sm-2"
                            onChange={event => context.handleInputChange(event)}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Enter Name"
                            id="search"
                        />
                        <button className="btn btn-dark my-2 my-sm-0" type="submit">
                            Search
                        </button>
                    </form>
                </div>

            </Row>
        </Container>

    );
}

export default FormInput;