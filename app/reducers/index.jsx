import { combineReducers } from 'redux'
import initialState from '../initialState'

/*---------   ACTIONS ----------------*/

 const LOAD_STUDENTS = 'LOAD_STUDENTS';
 const LOAD_CAMPUSES = 'LOAD_CAMPUSES';
 const SELECT_STUDENT = 'SELECT_STUDENT';
 const SELECT_CAMPUS = 'SELECT_CAMPUS';

/*---------   ACTION CREATORS ----------------*/


const load_campuses  = campuses => ({ type: LOAD_CAMPUSES,campuses});
const load_students  = students => ({ type: LOAD_STUDENTS, students});
const select_campus  = campus   => ({ type: SELECT_CAMPUS, campus});
const select_student = student  => ({ type: SELECT_STUDENT, student});


/*---------   REDUCERS ----------------*/


export default function Reducer (state = initialState, action) {

	const newState = Object.assign({}, state);
 	switch (action.type) {

		case LOAD_STUDENTS:
			return newState.students = action.students;

		case LOAD_CAMPUSES:
			return newState.campuses = action.campuses;

		case SELECT_STUDENT:
			return newState.selectedStudent = action.selectedStudent;

		case SELECT_CAMPUS:
			return newState.selectedCampus = action.selectedCampus;

	    default: return state
  }
}

/*---------   DISPATCHERS ----------------*/


export const getCampuses = () => dispatch => {
	console.log('in get campuses')
	axios.get('/api/campus')
		.then(res => res.data)
		.catch(err => console.error('Error is ', err))
	}


export const getStudents = () => dispatch => {
	axios.get('/api/user')
		.then(res => res.data)
		.catch(err => console.error('Error is ', err))
	}













