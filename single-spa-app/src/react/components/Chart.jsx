import React, { Component } from 'react';
import Chartify from 'chartify';

let data = [{
    xValue: '20.11.2016',
    yValue: 5,
    title: '007 Spectre'
}];

let config = {
    theme: 'blue',
    width: 200,			      
    height: 20,		
    boxSize: 80,
    isLineChart: false,
    bordered: false
};
class Chart extends Component {
    render() {
        return (
            <div>
                <Chartify 
                    data={data} 
                    container="films-container" 
                    config={config} 
                />
            </div>
        )
    }
}
export default Chart;