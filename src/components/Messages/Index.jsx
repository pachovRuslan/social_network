import React from 'react'
import style from './Messages.module.css';
import { Link } from 'react-router-dom';
const DialogItem = (props) => {
  let path = "/dialog/" + props.id;
  return (
    <div className={style.contact} >
      <div className={style.friend_ava}><img src='img/1 (6).jpg' alt="ava" /></div>
     <div className={style.friend_name}><Link to={path}>{props.name}</Link></div> 
    </div>

  )
}
const MessagesItem = (props) => {
  return (
    <div className={style.dialog} >
      {props.message}
    </div>

  )
}
let dialogData=[
  {name:'alex', id:'1', avatar:'img/1 (1).jpg'},
  {name:'dima', id:'2', avatar:'img/1 (2).jpg'},
  {name:'denis', id:'3', avatar:'img/1 (3).jpg'},
  {name:'oleg', id:'4', avatar:'img/1 (4).jpg'},
  {name:'roman', id:'5', avatar:'img/1 (5).jpg'},
];
let messages=[
  {message:'hi', id:'1'},
  {message:'bye', id:'2'},
  {message:'lol', id:'3'},
  {message:'good', id:'4'},
  {message:'so so', id:'5'},
  {message:'ready', id:'6'},
  {message:'lets go', id:'7'},
  {message:'miss you', id:'8'},
  {message:'go home', id:'9'},
  {message:'he returted', id:'10'},
  {message:'i learn English', id:'11'},
  {message:'She passed this test', id:'12'},
  {message:'They remained friends', id:'13'},
  {message:'it offen rained there', id:'14'},
  {message:'its last sentense', id:'15'},
];

let dialogElements = dialogData
.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
let messageElemetns = messages
.map( m => <MessagesItem message={m.message} id={m.id}/>);


function Messages() {
  return (
    <div className={style.Messages}>
      <div className={style.message}>
        <div className={style.contacts}>
        { dialogElements }
        </div>
        <div className={style.dialog}>
          {messageElemetns}
        </div>
      </div>
    </div>
  )
}

export default Messages