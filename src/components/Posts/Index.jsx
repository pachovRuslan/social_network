import React from 'react';

import style from './Posts.module.css';

function Posts(props) {
  return (
    <div className={style.h1}>
    Post
    <div className={style.post} >
      {props.avatar}
      {props.message},
      {props.like_counts}</div>
  </div>
  )
}

export default Posts