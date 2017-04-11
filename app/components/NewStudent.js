import React from 'react';


export default class NewStudent extends React.Component {


	// componentDidMount () {
	//     const selectPlaylist = this.props.selectPlaylist;
	//     const playlistId = this.props.selectedPlaylist.id;

	//     selectPlaylist(playlistId);
 //  }


  render () {

  	const props = this.props;

  	let warningClassName = props.validInput ? 'hidden' : ''
  	return (
  	<div>
		<div className={`alert alert-warning ${warningClassName}`}>Names must be between 1 and 16 characters</div>
	    <form className="form-group" onSubmit={props.handleInputValue} style={{marginTop: '20px'}}>
	      <input
	        className="form-control"
	        placeholder="Enter name"  
	        onChange={props.setNameValue} 
	        value={props.NameValue}
	      />
	      <input
	        className="form-control"
	        placeholder="Enter email"  
	        onChange={props.setEmailValue} 
	        value={props.emailValue}
	      />
	      <button className="btn btn-default" disabled={!props.validInput} >Add Student</button>
	    </form>
  	</div>)
  }

}