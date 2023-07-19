import {db} from '../../firebase/config'

export const authSignUpUser = ({ email, password, name }) => async (dispatch, getState) => {
    try {
        console.log('email, password, name', email, password, name)
    const user = await db.createUserWithEmailAndPassword(email, password);
    console.log('user', user)
    
} catch (err) {
    console.log('error', error)
    console.log('error.message', error.message)
}}

export const authSignInUser = () => async (dispatch, getState) => { }
export const authSignOutUser = () => async (dispatch, getState) => { }

