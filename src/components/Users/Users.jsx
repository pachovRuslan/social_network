import React from 'react'
import style from './Users.module.css'


function Users(props) {
    return (
        <div className={style.Content}>
            {props.users.map((u) =>
                <div className={style.Posts_block}>
                    <div className={style.avatar}>
                        <div><img src={u.avatar != null ? u.avatar : 'img/user.png'} alt="avatar" />
                            {u.followed
                                ? <button onClick={() => { props.unFollow(u.id) }} className={style.avatar_button}>
                                    Delete friend</button>
                                : <button onClick={() => { props.follow(u.id) }} className={style.avatar_button}>
                                    Add friend</button>}
                        </div>
                    </div>
                    <div className={style.info}>
                        <div className={style.info_name}><h2>{u.name}</h2><br />
                            <p>{u.status}</p><br /></div>
                        <div className={style.info_country}> <p>{u.Current_city}</p><br />
                            <p>{u.Country}</p><br /></div>

                    </div>
                </div>)}
        </div>)
}
export default Users