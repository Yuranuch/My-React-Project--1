import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addMessage, insertNewCar, subscribe, updateMessageText} from './Redux/state';



let rerenderEntireTree= ()=> {

ReactDOM.render(<App state={state}
                     addMessage={addMessage} updateMessageText={updateMessageText} insertNewCar={insertNewCar}
                     newMessageText={state.dialogPage.newMessageText}
                     carsData={state.TestPage.carsData} />,
                        document.getElementById('root'));

};

rerenderEntireTree();

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
