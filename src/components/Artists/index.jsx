import React from 'react'
import './artists.scss'
import Artist from './Artist'
import a1 from '../../assets/img/a1.jpg'
import a2 from '../../assets/img/a2.jpg'
import a3 from '../../assets/img/a3.jpg'
import a4 from '../../assets/img/a4.jpg'

const Artists = () => {
    const artists = [
        {
            name: 'Victor Wooten',
            img: a1
        },
        {
            name: 'Flea',
            img: a2
        },
        {
            name: 'Prince',
            img: a3
        },
        {
            name: 'Shavo Odadjian',
            img: a4
        }
    ]
    
    return (
        <div className='artists'>
            {
                artists.map( (artist, i) => <Artist key={i} artist={artist} />)
            }
        </div>
    )
}

export default Artists
