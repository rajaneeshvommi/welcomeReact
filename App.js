import React from 'react';
import ReactDOM from 'react-dom/client';

const SubHeading = () => <h2 id={"SubHeading"}>Learn once Write Everywhere</h2>

const Heading = () =>
(
    <div>
        <h1 id={"Heading"}>Welcome React javascript</h1>
        <SubHeading/>
    </div>
)
    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading/>);