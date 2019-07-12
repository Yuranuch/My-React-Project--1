let rerenderEntireTree = () => {
    console.log ('state changed')
}

let state = {
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
    }
};
export let addMessage =()=> {
    let newMessage = {
        message: state.dialogPage.newMessageText
    };
    state.dialogPage.messageData.push(newMessage);
    rerenderEntireTree(state);
};

export let updateMessageText = (newText)=> {
    state.dialogPage.newMessageText = newText;
    rerenderEntireTree(state);
};


export let subscribe = (observer)=>{
    rerenderEntireTree = observer;
}


export default state;