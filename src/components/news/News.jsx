import React from 'react'
import Posts from '../Profile/Posts/Index';
import style from './News.module.css'

function News(props) {
    let postElements = props.profilesData.map(post => <Posts name={post.name} avatar={post.avatar} posts={post.posts} />);
    return (
        <div className={style.Content}>
            {postElements[0]}
            {postElements[1]}
            {postElements[2]}
            {postElements[3]}
            {postElements[4]}
            {postElements[5]}
            {postElements[7]}
            {postElements[8]}
            {postElements[9]}
        </div>
    )
}

export default News