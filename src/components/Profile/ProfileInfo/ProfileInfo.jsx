import React from 'react'
import style from './ProfileInfo.module.css'
import Header from '../../Header/Header'
function ProfileInfo(props) {

 

  return (
    <>
      <div className={style.avatar}>

        {props.avatar}
        <button className={style.button_photo}> Upload Photo</button>
      </div>
      <div className={style.information}>
        <span>{props.name}</span>
        <div className={style.info}>
          <div className={style.cl1}>
            birthday:<br />
            Current city:<br />
            Relationship:<br />
            Hometown:<br />
            Mobile: <br />
          </div>
          <div className={style.cl2}>
            {props.birthday}<br />
            {props.Current_city}<br />
            {props.Relationship}<br />
            {props.Hometown}<br />
            {props.Mobile}<br />
          </div>

        </div>
      </div>
    </>
  )
}

export default ProfileInfo