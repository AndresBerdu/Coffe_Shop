import React, {  useReducer, useEffect } from "react";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import firebase from '../../firebase';

const FirebaseStage = (props) => {
    const initialState = {
        users: [],
        coffe: [],
    }

    const [state, dispatch] = useReducer(FirebaseReducer, initialState)

    useEffect(() => {
        const userRef = firebase.database.collection('users');
        const userUnsub = userRef.onSnapshot((snapshot) => {
            const userData = snapshot.docs.map((doc) => doc.data())
            console.log('Users retrieved:', userData);
            dispatch({ type: 'SET_USERS', payload: userData })
        });

        const coffeRef = firebase.database.collection('coffes');
        const coffeUnsub = coffeRef.onSnapshot((snapshot) => {
            const userData = snapshot.docs.map((doc) => doc.data())
            console.log('Coffe retrieved:', userData);
            dispatch({ type: 'SET_COFFES', payload: userData })
        });

        return () => {
            userUnsub()
            coffeUnsub()
        };

    }, []);

    return (
        <FirebaseContext.Provider value={{ state }}>
          {props.children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseStage