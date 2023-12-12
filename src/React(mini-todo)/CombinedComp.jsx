
import React from 'react';

const CombinedComp = (props) => {
    const {
        inputProps,
        buttonProps,
    } = props;

    return (
        <div>
            <InputComp {...inputProps} />
            <ButtonComp {...buttonProps} />
        </div>
    );
};

const InputComp = (props) => {
    const {
        placeholder, backgroundColor, width, height
    } = props;

    return (
        <div>
            <input type="text" placeholder={placeholder} style={{ backgroundColor: backgroundColor, width: width, height: height }} />
        </div>
    );
};

const ButtonComp = (props) => {
    const {
        backgroundColor, color, fontWeight, btnTitle
    } = props;

    return (
        <div>
           <button style={{ backgroundColor: backgroundColor, color: color, fontWeight: fontWeight }}>{btnTitle}</button> 
        </div>
    );
};

export default CombinedComp;