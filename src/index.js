import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let friendsData = [
    {id : '1', name : 'Kirill'},
    {id : '2', name : 'Misha'},
    {id : '3', name : 'Sergey'},
    {id : '4', name : 'Genya'},
    {id : '5', name : 'Roma'}
];

let messageData = [
    {message : 'Hello!'},
    {message : 'Hi'},
    {message : 'How are you?'},
    {message : 'I am fine.'}
];

ReactDOM.render(<App friendsData={friendsData} messageData={messageData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
