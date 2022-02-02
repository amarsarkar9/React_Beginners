import react from "react";

const Welcome =({name}) =>{
    let sayHi=`Hey ${name}!`;
    let greet='Welcome to School.';
    return (
        <div>
            <h1>{sayHi}</h1>
            <h2>{greet}</h2>
        
        </div>
    );
};

export default Welcome;