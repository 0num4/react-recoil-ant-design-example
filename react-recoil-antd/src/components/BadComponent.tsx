import React from "react";
const BadComponent: React.FC = () => {
    const rand = Math.random()
    if(rand > 0.7){
        throw new Error('this is bad components');
    }
    return (
        <>
        OK!
        </>
    );
}
export default BadComponent;