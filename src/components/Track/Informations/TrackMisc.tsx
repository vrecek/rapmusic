import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { MdAlbum } from 'react-icons/md'
import { TrackMiscInfo } from '../../../interfaces/TrackPageInterfaces'
import secondsToTime from '../../../util/secondsToTime'
import Icon from '../../Common/Icon'

const TrackMisc = ({length, album}: TrackMiscInfo) => {
    return (
        <div>
            <p className="time">
                <Icon><BiTimeFive /></Icon>
                {secondsToTime(length)}
            </p>

            <p className="from">
                <Icon><MdAlbum /></Icon>
                {album}
            </p>
        </div>
    )
}

export default TrackMisc