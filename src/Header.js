import React, { useState } from 'react'
import './Header.css'
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import MicSharpIcon from '@material-ui/icons/MicSharp';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom'

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuSharpIcon />
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="Youtube logo" />
                </Link>

            </div>
            <div className="header__mid">
                <div className="header__mid__left">
                    <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
                    <Link to={`/search/${inputSearch}`}>
                        <SearchSharpIcon className="header__inputButton" />
                    </Link>

                </div>
                <MicSharpIcon />
            </div>
            <div className="header__right">
                <VideoCallSharpIcon className="header__icon" />
                <AppsSharpIcon className="header__icon" />
                <NotificationsSharpIcon className="header__icon" />
                <Avatar
                    alt="Kd"
                    src="https://yt3.ggpht.com/yti/ANoDKi4IdSP6Weq54o-G5Hm33xiAESLGbqiI_m_7PA=s88-c-k-c0x00ffffff-no-rj-mo"
                />
            </div>
        </div>
    )
}

export default Header
