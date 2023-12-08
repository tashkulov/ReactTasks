import React from 'react';

const HomeworkEvents = (props) => {
    const {
        btnTitle,
        btnTitle2,
        btnTitle3,
        placeholder,
        placeholder2,
        onClick,
        onChange,
        onBlur,
        onFocus,
        onDoubleClick,
        onContextMenu,
        onMouseDown
    } = props;

    const inputStyle = {
        margin: '5px',
        padding: '8px',
        fontSize: '16px',
    };

    const buttonStyle = {
        margin: '5px',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#3498db',
        color: '#fff',
        cursor: 'pointer',
    };

    return (
        <div>
            <input
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                style={inputStyle}
            />
            <button onClick={onClick} style={buttonStyle}>
                {btnTitle}
            </button>

            <button
                onDoubleClick={onDoubleClick}
                onContextMenu={onContextMenu}
                style={buttonStyle}
            >
                {btnTitle2}
            </button>
            <button onMouseDown={onMouseDown} style={buttonStyle}>
                {btnTitle3}
            </button>
            <input
                placeholder={placeholder2}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                style={inputStyle}
            />
        </div>
    );
};

export default HomeworkEvents;
