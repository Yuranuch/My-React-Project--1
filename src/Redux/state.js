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
    },
    TestPage:{
        carsData: [
            {name: 'Lamborgini', color:'red'},
            {name: 'VolksWagen', color:"white"},
            {name: 'Peugeot', color:"black"},
            {name: 'Audi', color:"yello"}
        ]
    }


};
export let addMessage =()=> {
    let newMessage = {
        message: state.dialogPage.newMessageText
    };
    state.dialogPage.messageData.push(newMessage);
    rerenderEntireTree();
};

export let updateMessageText = (newText)=> {
    state.dialogPage.newMessageText = newText;
    rerenderEntireTree();
};

export let subscribe = (observer)=>{
    rerenderEntireTree = observer;
};

export let insertNewCar = (aboutCarMessage) => {

    let newPostCar = {name: aboutCarMessage, color:'blue'};
    state.TestPage.carsData.push(newPostCar);
    rerenderEntireTree(state)
};


export default state;