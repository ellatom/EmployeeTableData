import React, { Component } from 'react';
import MaterialTable from "material-table";
import utilsData from '../../Utilities/data-util-functions.js';
import utilsOptions from '../../Utilities/table-options-util-function.js';

const data = require('../../Data/data.json');


class EmployeeTable extends Component {

    state = { tableData: [] };

    //set table data from json
    componentDidMount() {
        this.setState({ tableData: data });
    }
    //set table title
    getTitle = () => {
        return "Employees";
    }

    //table headers 
    getHeaders = () => {
        let keys = utilsData().getKeys();

        let headers = keys.map(key => {
            let titleValue = utilsData().setTitleValue(key);
            let fieldValue = key;

            return { title: titleValue, field: fieldValue };
        })

        return headers;
    }

    //get table rows data
    getRows = () => {
        const { tableData } = this.state;
        let filteredData = utilsData().getFilteredDataByKeys(tableData);
        return filteredData;
    }

    render() {
        return (
            <MaterialTable
                title={this.getTitle()}
                columns={this.getHeaders()}
                data={this.getRows()}
                options={utilsOptions().setOptions()}
            />
        );
    }

}
export default EmployeeTable;
