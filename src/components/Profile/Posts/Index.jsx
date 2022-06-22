import React from 'react';
import Post from './Post'
import style from './Posts.module.css';

function Posts(props) {
  console.log(props)
  return (
    <div className={style.Posts} >

      {props.posts.map((post) => (<Post data={post.data}
        message={post.message}
        like_count={post.like_count}
        avatar={props.avatar}
        name={props.name} />
      ))
      }

    </div>
  )
}

export default Posts