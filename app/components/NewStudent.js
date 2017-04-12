import React from 'react';


export default class NewStudent extends React.Component {




  render () {

  	const props = this.props;
  	return (
  	<div>
		<h2 className="format-font">Add A New Student</h2>
	    <form className="form-group" onSubmit={props.handleInputValue} style={{marginTop: '20px'}}>
	    <label>Name:
	      <input
	        className="form-control"
	        placeholder="Enter name"  
	        onChange={props.setNameValue} 
	        value={props.NameValue}
	      />
	      </label>
	      <br />
	      <br />
	      <label>Email:
	      <input
	        className="form-control"
	        placeholder="Enter email"  
	        onChange={props.setEmailValue} 
	        value={props.emailValue}
	      />
	      </label>
	      <br />
	      <br />
	      <label>Campus:</label>
	      <br />
	      <select onChange={props.setCampusValue} >Campus:
		      <option value="">- Please select a campus -</option>
		      {props.campuses.map(campus => 
		      	(<option key={campus.id}>{campus.name}</option>)
		      	)}
	      </select>
	      <br />
	      <br />
	      <br />
	      <button className="btn btn-default" >Add Student</button>
	    </form>
  	</div>)
  }

}
