import React from 'react';
type Props = {
name: string;
other?: string; //the question mark means that this is optional
}
const HelloWorld2: React.FC<Props> = (props) => {
    return (
    <>
    <p>Hello {props.name}. Greetings from React with TypeScript</p>
    </>
    )
}
export default HelloWorld2;