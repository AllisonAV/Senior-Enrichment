import React from 'react';


export default class NewCampus extends React.Component {



  render () {

  	const props = this.props;
  	return (
  	<div>
		<h2 className="format-font">Add A New Campus</h2>
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
	      <button className="btn btn-default" >Add Campus</button>
	    </form>
  	</div>)
  }

}