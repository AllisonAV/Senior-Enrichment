import React, { Component } from 'react';
import NewStudent from './NewStudent';
import axois from 'axios';


export default class NewStudentContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameValue: '',
            validName: true
        }
        this.setNameValue = this.setNameValue.bind(this);
        this.handleNameValue = this.handleNameValue.bind(this);
    }

    setNameValue(e) {
        this.setState({nameValue: e.target.value})
        this.setState({validName: true})
    }

    handleNameValue(e) {
        let inputValue = this.state.inputValue
        e.preventDefault();
        
         if (nameValue && nameValue.length <= 16) {
            this.setState({validname: true});
            this.props.postNewStudent(nameValue)
        } else {
            this.setState({validName: false})    
        }
        this.setState({nameValue: ''});
    }

    render () {

        return (
        <div>
            <NewStudent     setNameValue={this.setNameValue} 
                            handleNameValue={this.handleNameValue}
                            nameValue={this.state.nameValue}
                            validName={this.state.validName}/>
        </div>
        )
    }
}