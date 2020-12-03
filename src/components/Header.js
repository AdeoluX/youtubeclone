import React from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from "@material-ui/core/Avatar"
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon/>
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=""/>
            </div>
            <div className="header__input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header__inputButton"/>
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__Icon"/>
                <AppsIcon className="header__Icon"/>
                <NotificationsIcon className="header__Icon"/>
                <Avatar alt="Adejuwon Tayo" src="https://media-exp1.licdn.com/dms/image/C4D03AQF97ef2TTlN8w/profile-displayphoto-shrink_200_200/0/1580154682396?e=1612396800&v=beta&t=vSOc782SzS1X5KMD0kDxA9Li-2UPy6xlfxwwOG0wOiE"/>
            </div>
        </div>
    )
}

export default Header
