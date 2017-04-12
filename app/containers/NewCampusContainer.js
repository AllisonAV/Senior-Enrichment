import React, { Component } from 'react';
import NewCampus from '../components/NewCampus';
import axios from 'axios';


export default class NewCampusContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameValue: '',
            emailValue: '',
            campusValue: '',
            campuses: []
        }

        this.setNameValue = this.setNameValue.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
    }

    setNameValue(e) {
        this.setState({nameValue: e.target.value})
    }

    handleInputValue(e) {
        let nameValue   = this.state.nameValue;
        e.preventDefault();
        axios.post(`/api/campus/`, {name: nameValue})
         .then(res => res.data)
        .catch(err => console.error('Error is ', err))
    }


    render () {

        return (
        <div>
            <NewCampus      setNameValue={this.setNameValue} 
                            handleInputValue={this.handleInputValue}
                            nameValue={this.state.nameValue}
                            />
        </div>
        ) 
    }
}