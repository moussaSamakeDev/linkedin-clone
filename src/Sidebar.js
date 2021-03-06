import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic} </p>
        </div>
    )


  return (

    <div className="sidebar">

        <div className="sidebar_top">
            <img src="https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045__340.png" alt="" />
           
           
            <Avatar src={user.photoUrl} className='sidebar_avatar'>
                {user.email[0]}
            </Avatar>
            <h2>{user.diplayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>who viewed you</p>    
                <p className='sidebar_statNumber'>2,513</p>            
            </div>
            <div className="sidebar_stat">
                <p>View on post</p>    
                <p className='sidebar_statNumber'>2,448</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('reactJs')}
            {recentItem('programming')}
            {recentItem('softwareenginneering')}
            {recentItem('design')}
            {recentItem('developper')}
        </div>

    </div>

    )
}

export default Sidebar