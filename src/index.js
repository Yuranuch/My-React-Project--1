import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/state';



let rerenderEntireTree= ()=> {

ReactDOM.render(<App state={store.getState()}
                    /* addMessage={store.addMessage.bind(store)}
                     updateMessageText={store.updateMessageText.bind(store)}
                     insertNewCar={store.insertNewCar.bind(store)}*/
                     dispatch={store.dispatch.bind(store)}
                     newMessageText={store.getState().dialogPage.newMessageText}
                     carsData={store.getState().TestPage.carsData} />,
                        document.getElementById('root'));

};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
