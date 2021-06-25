import React from 'react'
import './Channel.css'
import { Avatar } from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Channel({image,Channel,verified,subs,noVideos,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__avatar" alt={Channel} src={image} />
            <div className="channelRow__text">
                <h4>{Channel} {verified &&<CheckCircleIcon/>}</h4>
                <p>{subs} subscribers • {noVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Channel
