import React from "react";
import TableauReport from "tableau-react";

const TableauEmbeded = () => {

    return (
        <div>
            <TableauReport url="https://public.tableau.com/views/CustomerChurnPractise1/Dashboard1" />
        </div>
    );
}

export default TableauEmbeded;