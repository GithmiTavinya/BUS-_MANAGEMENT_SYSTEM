import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const Employee = props => ( <
    tr >
    <
    td > { props.Employee.EmployeeID } </td> <
    td > { props.Employee.EmployeeName } </td> <
    td > { props.Employee.Address } </td> <
    td > { props.Employee.Telephone } </td> <
    td > { props.Employee.Email } </td> <
    td > { props.Employee.Type } </td> <
    td > { props.Employee.Discription } </td> <
    td >
    <
    Link to = { "/edit/" + props.Employee._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteEmployee(props.Employee._id) }}>Delete</a > </
    td > </tr> 
)
export default class EmployeeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Employee: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/Employee/')
            .then(response => {
                this.setState({ Employee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Employee/')
            .then(response => {
                this.setState({ Employee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    
        )
    }
}





