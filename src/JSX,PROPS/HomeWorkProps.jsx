import React from 'react';

const HomeWorkProps = () => {
    // let parentComp='it is parent comp'
    // let child1Comp='it is child1 comp'
    // let child2Comp='it is child2 comp'

    function Parent(props){
        return <h1>Hello,{props.name}</h1>
    }
    let elem1=<Parent name="Oleg"/>
    let elem2=<Parent name="Alisa"/>

    return (
        <div>
            {/* <div>{parentComp}</div>
            <div>{child1Comp}</div>
            <div>{child2Comp}</div> */}
            <div>{elem1}</div>
            <div>{elem2}</div>
        </div>
    );
};

export default HomeWorkProps;