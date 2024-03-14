import React, {  useReducer, useEffect } from "react";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import firebase from '../../firebase';

const FirebaseStage = (props) => {
    const initialState = {
        users: [],
    }

    const [state, dispatch] = useReducer(FirebaseReducer, initialState)

    useEffect(() => {
        const userRef = firebase.database.collection('Register');
        const userUnsub = userRef.onSnapshot((snapshot) => {
            const userData = snapshot.docs.map((doc) => doc.data())
            console.log('Users retrieved:', userData);
            dispatch({ type: 'SET_USERS', payload: userData })
        });

        return () => {
            userUnsub()
            tweetsUnsub()
        };

    }, []);

    return (
        <FirebaseContext.Provider value={{ state }}>
          {props.children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseStage