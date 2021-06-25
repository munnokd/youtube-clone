import React from 'react'
import './ChannelVideo.css'
import { Avatar } from '@material-ui/core'

function ChannelVideo({views,description,timestamp,channel,title,image,avatar}) {
    return (
        <div className="channelVideo">
            <img src={image} alt={channel} />
            <div className="channelVideo__disc">
                <h4>{title}</h4>
                <p>{views} views • {timestamp} </p>
                <div className="channelVideo__avatar">
                    <Avatar
                        src={avatar}
                        alt={channel}
                    />
                    <p>{channel}</p>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelVideo
