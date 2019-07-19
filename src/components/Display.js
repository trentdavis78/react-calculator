import React from 'react';

const Display = props => {

    return (
        
            <input id="display" type="text" value={props.value} readOnly />
        
    );
}

export default Display;