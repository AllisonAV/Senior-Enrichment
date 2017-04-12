import React from 'react';
import { Link } from 'react-router';

const NavBar = (props) => {
	return (
<navbar>

	<img src="./images/planets.jpg" className="logo img-thumbnail nav-item" />
		<section>
			<h4 className="nav-item sidebar-font"> Interplantery Academy </h4> 
		</section>
		<section>
			<h4 className="nav-item sidebar-font">   
				<Link to='/campus'>Campuses</Link>
			</h4>
		</section>
		<section>
			<h4 className="nav-item sidebar-font"> 
				<Link to='/user'>Students</Link>
			</h4> 
		</section>
		<section>
			<h4 className="nav-item sidebar-font"> 
				<Link to='/student/new'>New Student</Link>
			</h4> 
		</section>
		<section>
			<h4 className="nav-item sidebar-font"> 
				<Link to='/new/campus'>New Campus</Link>
			</h4> 
		</section>

</navbar>

		)
}

export default NavBar;




