const heading = React.createElement('div',{}, [
    React.createElement('div',{},[
        React.createElement('h1',{},'Heading_1'),
        React.createElement('h2',{},'Heading_2')
    ]),
    React.createElement('div',{},[
        React.createElement('h3',{},'Heading_3'),
        React.createElement('h4',{},'Heading_4')
    ])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);