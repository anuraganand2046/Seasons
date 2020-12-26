import React from 'react';
const Spin = (Props) =>{
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{Props.message}</div>
        </div>
    );
};
Spin.defaultProps = {
    message: 'Loading....'
};
export default Spin;