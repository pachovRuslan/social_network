let store = {

    _state: {

        profilesData: [
            {
                id: '1', name: 'Mary Jane', avatar: <img src='img/1 (1).jpg' alt="ava" />, birthday: " 23 November", Current_city: "Polotsk",
                Relationship: "Married to Yulia Pachkova",
                Hometown: "Ноябрьск",
                Mobile: "+375295933838",
                posts: [
                    {
                        data: '12.11.2021', message: 'While we are postponing, life speeds by. Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                        , like_count: '9'
                    }],
                newPostText:""
            },
            {
                id: '2', name: 'Den Fix', avatar: <img src='img/1 (2).jpg' alt="ava" />, birthday: " 10 december", Current_city: "Minsk",
                Relationship: "Married to Mary Jane",
                Hometown: "Витебск",
                Mobile: "+375295922838",
                posts: [{
                    data: '31.12.2021', message: 'There are three things which the superior man guards against. In youth...lust. When he is strong...quarrelsomeness. When he is old...covetousness.'
                    , like_count: '0'
                },]
            },
            {
                id: '3', name: 'Banny Rabbit', avatar: <img src='img/1 (3).jpg' alt="ava" />, birthday: " 3 November", Current_city: "Gomel",
                Relationship: "Married to Yulia Pachkova",
                Hometown: "Минск",
                Mobile: "+37529590000",
                posts: [
                    {
                        data: '12.11.2021', message: 'There are three things which the superior man guards against. In youth...lust. When he is strong...quarrelsomeness. When he is old...covetousness.'
                        , like_count: '1'
                    },]
            },
            {
                id: '4', name: 'Alex Snous', avatar: <img src='img/1 (4).jpg' alt="ava" />, birthday: " 30 November", Current_city: "Orsha",
                Relationship: "Married to Alexa Sprank",
                Hometown: "Москва",
                Mobile: "+375295933809", posts: [
                    {
                        data: '12.11.2021', message: 'There are three things which the superior man guards against. In youth...lust. When he is strong...quarrelsomeness. When he is old...covetousness.'
                        , like_count: '4'
                    },
                    {
                        data: '22.10.2021', message: 'When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.'
                        , like_count: '8'
                    },
                    {
                        data: '10.10.2021', message: 'A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.'
                        , like_count: '8'
                    },]
            },
            {
                id: '5', name: 'Kev Godick', avatar: <img src='img/1 (5).jpg' alt="ava" />, birthday: " 20 february", Current_city: "Vitebks",
                Relationship: "Married to Yulia Pachkova",
                Hometown: "Орша",
                Mobile: "+37529591133",
                posts: [

                    {
                        data: '15.12.2021', message: 'Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself.  Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                        , like_count: '2'
                    },]
            },
            {
                id: '6', name: 'Davis Junior', avatar: <img src='img/1 (6).jpg' alt="ava" />, birthday: " 12 february", Current_city: "Vitebks",
                Relationship: "Married to Yulia Pachkova",
                Hometown: "Орша",
                Mobile: "+37533591133",
                posts: [

                    {
                        data: '15.12.2021', message: 'Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself.  Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                        , like_count: '2'
                    },]
            },
            {
                id: '7', name: 'Alexa Sprank', avatar: <img src='img/1 (7).jpg' alt="ava" />, birthday: " 22 june", Current_city: "Brest",
                Relationship: "Married to Yulia Pachkova",
                Hometown: "Гродно",
                Mobile: "+375291238732", 
                posts: [

                    {
                        data: '15.12.2021', message: 'Always dream and shoot higher than you know you can do. Do not bother just to be better than your contemporaries or predecessors. Try to be better than yourself.  Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                        , like_count: '2'
                    },]
            },
            {
                id: '8', name: 'Dipper Hall', avatar: <img src='img/1 (8).jpg' alt="ava" />, birthday: " 29 may", Current_city: "Postavi",
                Relationship: "Married to Yulia Pachkova",
                Hometown: "Могилев",
                Mobile: "+375336541047",
                posts: [
                    {
                        data: '14.11.2021', message: 'While we are postponing, life speeds by. Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                        , like_count: '9'
                    }]
            },
            {
                id: '9', name: 'Jeck Black', avatar: <img src='img/1 (9).jpg' alt="ava" />, birthday: " 9 october", Current_city: "Moskov",
                Relationship: "Married to Yulia Pachkova",
                Hometown: "Поставы",
                Mobile: "+3752576534419",
                posts: [
                    {
                        data: '14.11.2021', message: 'While we are postponing, life speeds by. Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                        , like_count: '9'
                    }]
            },
            {
                id: '10', name: 'Jon Troffy', avatar: <img src='img/1 (10).jpg' alt="ava" />, birthday: " 26 febryary", Current_city: "New York",
                Relationship: "Married to Yulia Pachkova",
                Hometown: "Брест",
                Mobile: "+375295911848",
                posts: [
                    {
                        data: '12.11.2021', message: 'While we are postponing, life speeds by. Источник - Онлайн школа Skysmart: https://skysmart.ru/articles/english/citaty-na-anglijskom-s-perevodom'
                        , like_count: '9'
                    }]
            }
        ],

        messages: [
            { message: 'hi dear', id: '1' },
            { message: 'bye friend', id: '2' },
            { message: 'lol', id: '3' },
            { message: 'good job', id: '4' },
            { message: 'so so', id: '5' },
            { message: 'ready', id: '6' },
            { message: 'lets go', id: '7' },
            { message: 'miss you', id: '8' },
            { message: 'go home', id: '9' },
            { message: 'he returted', id: '10' },
            { message: 'i learn English', id: '11' },
            { message: 'She passed this test', id: '12' },
            { message: 'They remained friends', id: '13' },
            { message: 'it offen rained there', id: '14' },
            { message: 'its last sentense', id: '15' },
         
        ],
        newMessageText: [
            {newMessageText: ""}
        ]
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = (observer);
    },

    addPost() {
        let newPost = {
            data: '11.11.1911',
            message: this._state.profilesData[0].newPostText,
            like_count: '9'
        };
        this._state.profilesData[0].posts.push(newPost);
        this._state.profilesData[0].newPostText='';
        this._callSubscriber(this._state)
    },
    addMessage() {
        let newMessage = {
            messages: this._state.newMessageText,
            id: '0'
        };
        this._state.messages.push(newMessage);
        this._state.messages.newMessageText='';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
  
        this._state.profilesData[0].newPostText= newText;

        this._callSubscriber(this._state)
    },
    updateNewMessageText(newText) {
  
        this._state.newMessageText.newMessageText= newText;

        this._callSubscriber(this._state)
    },



}


export default store;
