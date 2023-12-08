import React from 'react';

const HomeworkChildren = (props) => {
    return (
        <div>
        <h1>Parent Component</h1>
      {props.children}
        </div>
    );
};

export default HomeworkChildren;