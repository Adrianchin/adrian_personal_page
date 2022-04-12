import React from 'react';

const Navigation = ({routeChange}) => {
    return (
        
            <nav style = {{display:'flex', justifyContent: 'flex-end'}} className="navbar">
                <b onClick={()=> routeChange('home')}>Home</b>

                <b onClick={()=> routeChange('about')}>About</b>

                <b onClick={()=> routeChange('projects')}>Projects</b>

                <b onClick={()=> routeChange('contact')}>Contact</b>
            </nav>
        
    );
}

export default Navigation;