import React from 'react'
import style from './Users.module.css'
function User(props) {
    console.log(props)
    return (
        <div className={style.Posts_block}>
            <div className={style.avatar}>
                {props.avatar}
                {props.followed
                ?<button onclick={()=> {props.follow(props.id)}}className={style.avatar_button}>Add friend</button>
                :<button onclick={()=> {props.unFollow(props.id)}}className={style.avatar_button}>Delete friend</button>
                }
                
            </div>
            <div className={style.info}>
                {props.name}<br />
                {props.city}<br />
                {props.Country}<br />
                {props.status}
            </div>

        </div>
    )
}

export default User