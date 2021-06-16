import React from 'react';

import "antd/dist/antd.css";
import { SmileOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';

// Русификация
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';


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
        <ConfigProvider locale={ruRU}>
            <div>
                <img src='./images/test/third.png' />
                <img src='./images/react-light.jpg' />
                <img src={images['second.png']} />
                <img src={images['first.png']} />
                <h1>React JS <SmileOutlined spin/></h1>
                <DatePicker/>
            </div>
        </ConfigProvider>
    )
}