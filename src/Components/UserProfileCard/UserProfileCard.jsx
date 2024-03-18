import React from 'react'
import './UserProfileCard.css'
import profile_icon from '/Users/jackiejr/Desktop/Web Design/react-profile-card/src/Components/Assets/IMG_8473.jpg'

const UserProfileCard = () => {
  return (
    <div className='upc'>
      <div className='gradient'></div>
      <div className='profile-down'>
        <img src={profile_icon}/>
        <div className='profile-title'>Jackie Wysinger</div>
        <div className='profile-description'>
          I am Jackie Wysinger, Freelance Web Developer and Graphic Designer. 
        </div>
        <div className='profile-button'><a href='mailto:jwysinger@gmail.com'>Contact Me</a></div>
      </div>
    </div>
  )
}

export default UserProfileCard
