import React from 'react';

const Navigation = ({onRouteChange}) => {
    return (
        
            <nav style = {{display:'flex', justifyContent: 'flex-end'}} className="navbar">
                <b onClick={()=> onRouteChange('home')}>Home</b>

                <b onClick={()=> onRouteChange('about')}>About</b>

                <b onClick={()=> onRouteChange('projects')}>Projects</b>

                <b onClick={()=> onRouteChange('contact')}>Contact</b>
            </nav>
        
    );
}

export default Navigation;