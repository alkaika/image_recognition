import React from 'react';
import Tilt from 'react-tilt'
import rocket from './rocket.png';
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
            <Tilt className="Tilt br2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3"> 
                  <img style={{padding: '1px'}} src={rocket} alt="rocket"/>             
                </div>
            </Tilt>
        </div>
	);
}

export default Logo;