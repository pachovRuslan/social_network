import React from 'react'
import style from './Messages.module.css';
import { Link } from 'react-router-dom';
let dialogData=[
  {name:'alex', id:'1'},
  {name:'dima', id:'2'},
  {name:'denis', id:'3'},
  {name:'oleg', id:'4'},
  {name:'roman', id:'5'},
];
let messages=[
  {message:'hi', id:'1'},
  {message:'bye', id:'2'},
  {message:'lol', id:'3'},
  {message:'good', id:'4'},
  {message:'so so', id:'5'},
];

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;
  return (
    <div className={style.contact} >
      <Link to={path}>{props.name}</Link>
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
function Messages() {
  return (
    <div className={style.Messages}>
      <div className={style.message}>
        <div className={style.contacts}>
          <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
 

        </div>
        <div className={style.dialog}>
          <MessagesItem message={messages[0].message} />
        </div>
      </div>
    </div>
  )
}

export default Messages