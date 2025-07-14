import React from 'react';
import ah01 from '../assets/ah01.svg'


const Divider: React.FC = () => {
    return (
        <div className='ah01'>
            <img src={ah01} alt="ahStart" className="ahStart" />
            <img src={ah01} alt="ahEnd" className="ahEnd" />
        </div>

    );
};


const DividerWithMargin: React.FC = () => {
    const style = { marginTop: '-10px' };
    return (
        <div className='ah01' style={style}>
            <img src={ah01} alt="ahStart" className="ahStart" />
            <img src={ah01} alt="ahEnd" className="ahEnd" />
        </div>
    );
};

export { Divider, DividerWithMargin };
