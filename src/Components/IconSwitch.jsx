import React from 'react';

function IconSwitch({state,onSwitch}) {
    return (
        <div>
            <span className="material-icons" onClick={onSwitch}>{state}</span>
        </div>
    );
}

export default IconSwitch;
