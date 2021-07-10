import React from "react";
import "./Table.css";

function Table({ id }) {
    return (
        id === 0 ? <td></td> : <td>{id}</td>
    );
}

export default Table;