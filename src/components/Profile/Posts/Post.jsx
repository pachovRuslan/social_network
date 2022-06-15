import React from 'react'
import style from './Posts.module.css'
function Post(props) {
    return (
        <div className={style.Posts_block}>
            <div className={style.avatar}>
                {props.avatar}
            </div>
            <div className={style.post_owner}>
                {props.name}<br />
                {props.data}
             </div>
            <div className={style.like}>
                {props.like_count}
            </div>
            <div className={style.post} >
                {props.message}
            </div>
        </div>
    )
}

export default Post