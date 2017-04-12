import React, { Component } from 'react';
import NewStudent from '../components/NewStudent';
import axios from 'axios';


export default class NewStudentContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameValue: '',
            emailValue: '',
            campusValue: '',
            campuses: []
        }

         axios.get('/api/campus')
        .then(res => res.data)
        .then( data => {  
            this.setState({campuses: data})
        })
        .catch(err => console.error('Error is ', err))

        this.setNameValue = this.setNameValue.bind(this);
        this.setCampusValue = this.setCampusValue.bind(this);
        this.setEmailValue = this.setEmailValue.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
    }

    setNameValue(e) {
        this.setState({nameValue: e.target.value})
    }

    setEmailValue(e) {
        this.setState({emailValue: e.target.value})
    }

    setCampusValue(e) {
        this.setState({campusValue: e.target.value})
    }



    handleInputValue(e) {
        let nameValue   = this.state.nameValue;
        let emailValue  = this.state.emailValue;
        let campusValue = this.state.campusValue;
        e.preventDefault();
        axios.post(`/api/user/${campusValue}`, {name: nameValue, email: emailValue, campusName: campusValue})
         .then(res => res.data)
        .catch(err => console.error('Error is ', err))
    }


    render () {

        return (
        <div>
            <NewStudent     setNameValue={this.setNameValue} 
                            setEmailValue={this.setEmailValue}
                            setCampusValue={this.setCampusValue}
                            handleInputValue={this.handleInputValue}
                            nameValue={this.state.nameValue}
                            emailValue={this.state.emailValue}
                            campusValue={this.state.campusValue}
                            campuses={this.state.campuses}/>
        </div>
        )
    }
}