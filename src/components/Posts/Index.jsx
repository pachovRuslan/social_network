import React from 'react';

import style from './Posts.module.css';

function Posts(props) {
  return (
    <div className={style.h1}>
      <div className={style.avatar}>{props.avatar}</div>
      <div className={style.post_owner}>{props.name}<br />
      {props.data}</div>
      <div className={style.like}>{props.like_counts}</div>
      <div className={style.post} >
        {props.message}
        
      </div>
    </div>
  )
}

export default Posts