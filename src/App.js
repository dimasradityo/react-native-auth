import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB5ci5KpQ-xVQCZHTxWaSJCfdZAwYVQcmA',
            authDomain: 'authentication-5f8af.firebaseapp.com',
            databaseURL: 'https://authentication-5f8af.firebaseio.com',
            storageBucket: 'authentication-5f8af.appspot.com',
            messagingSenderId: '856794051380'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Auth" />            
                <LoginForm />
            </View>
        );
    }
}

export default App;
