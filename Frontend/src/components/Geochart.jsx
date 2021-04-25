import { Chart } from 'react-google-charts';
import React, { Component } from 'react';
import axios from 'axios';
const { REACT_APP_GOOGLE_MAP_API } = process.env;



const data = [
    ['Country', 'Color Index'],

    // African countries
    ['Algeria', -12], 
    ['Angola', -8], 
    ['Benin', 6], 
    ['Botswana', -24],
    ['Burkina Faso', 12], 
    ['Burundi', -3], 
    ['Cameroon', 3], 
    ['CG', 2], 
    ['Cape Verde', 15], 
    ['Central African Republic', 4], 
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
    ['Lesotho', -24], 
    ['Liberia', 6], 
    ['Libya', -21], 
    ['Madagascar', -12], 
    ['Malawi', -14], 
    ['Mali', 12], 
    ['Mauritania', 18], 
    ['Mauritius', -20],
    ['Morocco', -22],
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
    ['South Africa', -10], 
    ['SS', 5], 
    ['Swaziland', -26], 
    ['Tanzania', -6], 
    ['Togo', 6], 
    ['Tunisia', 20], 
    ['Uganda', 1], 
    ['Western Sahara', 25], 
    ['Zambia', -15], 
    ['Zimbabwe', -18],

    // South American Countries
    ['Argentina', -62], 
    ['Bolivia', -45],
    ['Brazil', -40],
    ['Chile', -45],
    ['Colombia', -40],
    ['Ecuador', -50],
    ['Guyana', -38],
    ['Paraguay', -38],
    ['Peru', -67],
    ['Suriname', -41],
    ['Uruguay', -39],
    ['Venezuela', -51],

    // North American Countries
    ['Antigua and Barbuda', 40],
    ['Bahamas', 30],
    ['Barbados', 34],
    ['Belize', 28],
    ['Canada', 35],
    ['Costa Rica', 32],
    ['Cuba', 38],
    ['Dominica', 29],
    ['Dominican Republic', 35],
    ['El Salvador', 29],
    ['Grenada', 30],
    ['Greenland', 30],
    ['Guatemala', 26],
    ['Haiti', 30],
    ['Honduras', 37],
    ['Jamaica', 31],
    ['Mexico', 38],
    ['Nicaragua', 29],
    ['Panama', 28],
    ['Saint Kitts and Nevis', 20],
    ['Saint Lucia', 34],
    ['Saint Vincent and the Grenadines', 27],
    ['Trinidad and Tobago', 32],
    ['United States', 40],

    // European Countries
    ['Albania', 76],
    ['Andorra', 80],
    ['Armenia', 87],
    ['Austria', 81],
    ['Azerbaijan', 90],
    ['Belarus', 72],
    ['Belgium', 76],
    ['Bosnia and Herzegovina', 80],
    ['Bulgaria', 100],
    ['Croatia', 91],
    ['Cyprus', 90],
    ['Czech Republic', 82],
    ['Denmark', 72],
    ['Estonia', 64],
    ['Finland', 80],
    ['France', 60],
    ['Georgia', 87],
    ['Germany', 84],
    ['Greece', 93],
    ['Hungary', 99],
    ['Iceland', 74],
    ['Ireland', 81],
    ['Italy', 99],
    ['Kazakhstan', 83],
    ['Kosovo', 69],
    ['Latvia', 72],
    ['Liechtenstein', 79],
    ['Lithuania', 90],
    ['Luxembourg', 87],
    ['Macedonia', 90],
    ['Malta', 99],
    ['Moldova', 75],
    ['Monaco', 89],
    ['Montenegro', 78],
    ['Netherlands', 69],
    ['Norway', 78],
    ['Poland', 81],
    ['Portugal', 90],
    ['Romania', 86],
    ['Russia', 68],
    ['San Marino', 79],
    ['Serbia', 77],
    ['Slovakia', 92],
    ['Slovenia', 85],
    ['Spain', 99],
    ['Sweden', 90],
    ['Switzerland', 69],
    ['Turkey', 87],
    ['Ukraine', 78],
    ['United Kingdom', 76],
    ['Vatican City', 100],

    // Asian Countries
    ['Afghanistan', -99],
    ['Armenia', -80],
    ['Azerbaijan', -87],
    ['Bahrain', -90],
    ['Bangladesh', -93],
    ['Bhutan', -79],
    ['Brunei', -73], 
    ['Cambodia', -100],
    ['China', -82],
    ['Cyprus', -87],
    ['Georgia', -91],
    ['India', -72],
    ['Indonesia', -93],
    ['Iran', -89],
    ['Iraq', -100],
    ['Israel', -97], 
    ['Japan', -74],
    ['Jordan', -80],
    ['Kazakhstan', -86],
    ['Kuwait', -94],
    ['Kyrgyzstan', -78],
    ['Laos', -92],
    ['Lebanon', -91],
    ['Malaysia', -97],
    ['Maldives', -89],
    ['Mongolia', -78],
    ['Myanmar', -77],
    ['Nepal', -98],
    ['North Korea', -82],
    ['Oman', -76],
    ['Pakistan', -91],
    ['Palestine', -97],
    ['Philippines', -87],
    ['Qatar', -86],
    ['Saudi Arabia', -89],
    ['Singapore', -86],
    ['South Korea', -90],
    ['Sri Lanka', -79],
    ['Syria', -85],
    ['Taiwan', -98],
    ['Tajikistan', -93],
    ['Thailand', -77],
    ['Timor Leste', -100],
    ['Turkey', -87],
    ['Turkmenistan', -79],
    ['United Arab Emirates', -77],
    ['Uzbekistan', -97],
    ['Vietnam', -96],
    ['Yemen', -84],

    // Australia
    ['Australia', -81],

];


export default class Geochart extends Component {
    constructor(){
        super();
        this.state = {
            region: " ",
            news: [" - Select a Country to See Recent News", " ", " ", " ",],
            links: []
        }
        this.handleClick = this.handleClick.bind(this);
        const superClass = this;
        this.chartEvents = [
            {
              eventName: "select",
              callback({ chartWrapper }) {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                let country = data[selection[0].row + 1][0];
                if (country === 'SS') country = 'South Sudan';
                if (country === 'CD') country = 'Democratic Republic of Congo';
                if (country === 'CG') country = 'Congo';
                axios.get(`https://vast-hamlet-19182.herokuapp.com/gnews?region=${country}`).then(response => {
                    superClass.setState({ news: response.data[0], links: response.data[1], region: country})
                    console.log(superClass.state.news);
                });
                //console.log(superClass.state.news);
                /*superClass.setState({
                    region: country,
                });*/
              }
            }
        ];
    }

    handleClick(country) {
        this.setState({
            region: country
        })
    }


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
                            region: 'world',
                            colorAxis: {colors: ['#FF0000', 'blue', '#00FF00']},
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
                    <a href={this.state.links[0]} target="_blank" rel="noreferrer"><h3>{this.state.news[0]}</h3></a>
                    <a href={this.state.links[1]} target="_blank" rel="noreferrer"><h3>{this.state.news[1]}</h3></a>
                    <a href={this.state.links[2]} target="_blank" rel="noreferrer"><h3>{this.state.news[2]}</h3></a>
                    <a href={this.state.links[3]} target="_blank" rel="noreferrer"><h3>{this.state.news[3]}</h3></a>
                </div>

            </div>
        )
    }
}

