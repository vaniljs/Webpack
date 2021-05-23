import React from 'react';

function importAll(r) {
    let images = {};

    r.keys().forEach((item) => { 
        images[item.replace('./', '')] = r(item); 
    });
    return images;
  }

const images = importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));

export function App() {
    return ( 
        <div>
            <img src='./images/test/third.png' /> 
            <img src='./images/react-light.jpg' /> 
            <img src={images['second.png']} /> 
            <img src={images['first.png']} /> 
            <h1>React JS</h1>
        </div>
    )
}