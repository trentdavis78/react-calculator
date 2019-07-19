import React from 'react';

const Button = props => {
    return (
        <button name={props.name} 
                onClick={e => props.onClick(e.target.name)} 
                className={`button ${props.styleName}`}
        >{props.name}</button>
    );
}

export default Button;