import React from 'react'
import './artist.scss'

const Artist = ({artist}) => {
    return (
        <div className='artist'>
            <img src={ artist.img } alt={ artist.img }/>
            <h3>{ artist.name }</h3>
        </div>
    )
}

export default Artist
