import { Chart } from 'react-google-charts';
import React, { Component } from 'react';
import axios from 'axios';
const { REACT_APP_GOOGLE_MAP_API } = process.env;



const data = [
    ['Country', 'Average Temperature'],
    ['Algeria', 30], 
    ['Angola', -8], 
    ['Benin', 6], 
    ['Botswana', -24],
    ['Burkina Faso', 12], 
    ['Burundi', -3], 
    ['Cameroon', 3], 
    ['CG', 2], 
    ['Cape Verde', 15], 
    ['Central African Republic', 4], 
    ['Ceuta', 35], 
    ['Chad', 12],
    ['Comoros', -12], 
    ['Ivory Coast', 6], 
    ['CD', -3], 
    ['Djibouti', 12],
    ['Egypt', 26], 
    ['Equatorial Guinea', 3], 
    ['Eritrea', 15], 
    ['Ethiopia', 9], 
    ['Gabon', 0], 
    ['Gambia', 13], 
    ['Ghana', 5], 
    ['Guinea', 10], 
    ['Guinea-Bissau', 12], 
    ['Kenya', -1], 
    ['Lesotho', -29], 
    ['Liberia', 6], 
    ['Libya', 32], 
    ['Madagascar', -12], 
    ['Malawi', -14], 
    ['Mali', 12], 
    ['Mauritania', 18], 
    ['Mauritius', -20],
    ['Morocco', 32],
    ['Mozambique', -25], 
    ['Namibia', -22], 
    ['Niger', 14], 
    ['Nigeria', 8], 
    ['Republic of the Congo', -1],
    ['Rwanda', -2], 
    ['Saint Helena', -16], 
    ['São Tomé and Principe', 1], 
    ['Senegal', 15],
    ['Seychelles', -5], 
    ['Sierra Leone', 8], 
    ['Somalia', 2], 
    ['Sudan', 15], 
    ['South Africa', -30], 
    ['SS', 5], 
    ['Swaziland', -26], 
    ['Tanzania', -6], 
    ['Togo', 6], 
    ['Tunisia', 34], 
    ['Uganda', 1], 
    ['Western Sahara', 25], 
    ['Zambia', -15], 
    ['Zimbabwe', -18]
];



export default class Geochart extends Component {

    constructor(){
        super();
        this.state = {
            region: "Africa",
            news: []
        }
    }

    chartEvents = [
        {
          eventName: "select",
          callback({ chartWrapper }) {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const country = data[selection[0].row + 1][0];
            console.log(country);
          }
        }
    ];

    componentDidMount = () => {
        axios.get(`/gnews?region=${this.state.region}`).then(response => {
            this.setState({news: response});
        })
    };

    render() {
        return (
            <div>

                <div className='chart'> 
                    <Chart
                        width={'70vw'}
                        height={'94.5vh'}
                        chartType="GeoChart"
                        data={data}

                        options = {{
                            region: '002',
                            colorAxis: {colors: ['#FF0000', 'FFFF00', '#00FF00']},
                            backgroundColor: '#282c40',
                            datalessRegionColor: '#282c40',
                            defaultColor: '#ffffff',
                        }}

                        chartEvents = {this.chartEvents}

                        mapsApiKey={REACT_APP_GOOGLE_MAP_API}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>

                <div className='SidePanel'> 
                    <h2>Headlines: {this.state.region}</h2>
                    <h3>{this.state.region[0].title}</h3>
                    <h3>Headline 2</h3>
                    <h3>Headline 3</h3>
                    <h3>Headline 4</h3>
                    <h3>Headline 5</h3>
                </div>

            </div>
        )
    }
}

