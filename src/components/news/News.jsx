import React from 'react'
import Posts from '../Profile/Posts/Index';
import style from './News.module.css'

function News(props) {

    return (
        <div className={style.Content}>
            {props.state.profilesData.map((post) =>
            (<Posts
                key={post.id}
                name={post.name}
                avatar={post.avatar}
                posts={post.posts} 
                />))}
        </div>
    )
}

export default News