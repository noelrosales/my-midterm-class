import React from 'react'
import './hero.scss'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-tagline'>
                <p className='title'>Level-up your bass playing with the experts.</p>
                <p className='description'>Sit back and watch the full tutorial sessions with all the bass tracks and obscure references included.</p>
            </div>
            <button className='cta'>Be a member today</button>
        </div>
    )
}

export default Hero
