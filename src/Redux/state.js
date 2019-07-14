

let store = {
    _state : {
        dialogPage:{
            friendsData: [
                {id: '1', name: 'Kirill'},
                {id: '2', name: 'Misha'},
                {id: '3', name: 'Sergey'},
                {id: '4', name: 'Genya'},
                {id: '5', name: 'Roma'}
            ],
            messageData: [
                {message: 'Hello!'},
                {message: 'Hi'},
                {message: 'How are you?'},
                {message: 'I am fine.'},

            ],
            newMessageText: 'Yuranuch'
        },
        TestPage:{
            carsData: [
                {name: 'Lamborgini', color:'red'},
                {name: 'VolksWagen', color:"white"},
                {name: 'Peugeot', color:"black"},
                {name: 'Audi', color:"yello"}
            ]
        }
    },

    getState() {
        return this._state},
    subscribe (observer){
        this._callsubscriber = observer;
    },
    _callsubscriber ()  {
        console.log ('state changed')
    },

   /* addMessage() {
        let newMessage = {
            message: this._state.dialogPage.newMessageText
        };
        this._state.dialogPage.messageData.push(newMessage);
        this._callsubscriber();
    },*/
   /* updateMessageText (newText) {
        this._state.dialogPage.newMessageText = newText;
        this._callsubscriber();
    },*/
   /* insertNewCar (aboutCarMessage) {
        let newPostCar = {name: aboutCarMessage, color:'blue'};
        this._state.TestPage.carsData.push(newPostCar);
        this._callsubscriber()
    },*/
    dispatch(action) {
        if (action.type === 'ADD-MESSAGE'){
            let newMessage = {
                message: this._state.dialogPage.newMessageText
            };
            this._state.dialogPage.messageData.push(newMessage);
            this._callsubscriber();
        } else if (action.type === 'UPDATE-MESSAGE-TEXT' ) {
            this._state.dialogPage.newMessageText = action.newText;
            this._callsubscriber();
        } else if (action.type === 'INSERT-NEW-CAR') {
            let newPostCar = {name: action.aboutCarMessage, color:'blue'};
            this._state.TestPage.carsData.push(newPostCar);
            this._callsubscriber()
        }
    }


}











export default store;