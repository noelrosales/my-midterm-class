import React from 'react'
import './hero.scss'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-tagline'>
                <p className='title'>Level-up your bass playing with the experts.</p>
                <p className='description'>Sit back and watch the full tutorial sessions with all the bass tracks and obscure references included.</p>
            </div>
            <form>
                <input type='text'/>
                <button>Search for artist</button>
            </form>
            <button className='cta'>Slap it now</button>
        </div>
    )
}

export default Hero
