import { Chart } from 'react-google-charts';
import React, { Component } from 'react';
import axios from 'axios';
const { REACT_APP_GOOGLE_MAP_API } = process.env;



const data = [
    ['Country', 'Average Temperature'],

    // African countries
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
    ['Zimbabwe', -18],

    // South American Countries
    ['Argentina', 2], 
    ['Bolivia', 30],
    ['Brazil', 3],
    ['Chile', -7],
    ['Colombia', 10],
    ['Ecuador', 15],
    ['Guyana', 25],
    ['Paraguay', 20],
    ['Peru', 7],
    ['Suriname', 21],
    ['Uruguay', 9],
    ['Venezuela', -1],

    // North American Countries
    ['Antigua and Barbuda', 2],
    ['Bahamas', 2],
    ['Barbados', 2],
    ['Belize', 2],
    ['Canada', 2],
    ['Costa Rica', 2],
    ['Cuba', 2],
    ['Dominica', 2],
    ['Dominican Republic', 2],
    ['El Salvador', 2],
    ['Grenada', 2],
    ['Guatemala', 2],
    ['Haiti', 2],
    ['Honduras', 2],
    ['Jamaica', 2],
    ['Mexico', 2],
    ['Nicaragua', 2],
    ['Panama', 2],
    ['Saint Kitts and Nevis', 2],
    ['Saint Lucia', 2],
    ['Saint Vincent and the Grenadines', 2],
    ['Trinidad and Tobago', 2],
    ['United States', 2],

    // European Countries
    ['Albania', 16],
    ['Andorra', 16],
    ['Armenia', 16],
    ['Austria', 16],
    ['Azerbaijan', 16],
    ['Belarus', 16],
    ['Belgium', 16],
    ['Bosnia and Herzegovina', 16],
    ['Bulgaria', 16],
    ['Croatia', 16],
    ['Cyprus', 16],
    ['Czech Republic', 16],
    ['Denmark', 16],
    ['Estonia', 16],
    ['Finland', 16],
    ['France', 16],
    ['Georgia', 16],
    ['Germany', 16],
    ['Greece', 16],
    ['Iceland', 16],
    ['Ireland', 16],
    ['Italy', 16],
    ['Kazakhstan', 16],
    ['Kosovo', 16],
    ['Latvia', 16],
    ['Liechtenstein', 16],
    ['Lithuania', 16],
    ['Luxembourg', 16],
    ['Macedonia', 16],
    ['Malta', 16],
    ['Moldova', 16],
    ['Monaco', 16],
    ['Montenegro', 16],
    ['Netherlands', 16],
    ['Norway', 16],
    ['Poland', 16],
    ['Portugal', 16],
    ['Romania', 16],
    ['Russia', 16],
    ['San Marino', 16],
    ['Serbia', 16],
    ['Slovakia', 16],
    ['Slovenia', 16],
    ['Spain', 16],
    ['Sweden', 16],
    ['Switzerland', 16],
    ['Turkey', 16],
    ['Ukraine', 16],
    ['United Kingdom', 16],
    ['Vatican City', 16],

    // Asian Countries
    ['Armenia', -20],
    ['Azerbaijan', -20],
    ['Bahrain', -20],
    ['Bangladesh', -20],
    ['Bhutan', -20],
    ['Brunei', -20], 
    ['Cambodia', -20],
    ['China', -20],
    ['Cyprus', -20],
    ['Georgia', -20],
    ['India', -20],
    ['Indonesia', -20],
    ['Iran', -20],
    ['Iraq', -20],
    ['Israel', -20], 
    ['Japan', -20],
    ['Jordan', -20],
    ['Kazakhstan', -20],
    ['Kuwait', -20],
    ['Kyrgyzstan', -20],
    ['Laos', -20],
    ['Lebanon', -20],
    ['Malaysia', -20],
    ['Maldives', -20],
    ['Mongolia', -20],
    ['Myanmar', -20],
    ['Nepal', -20],
    ['North Korea', -20],
    ['Oman', -20],
    ['Pakistan', -20],
    ['Palestine', -20],
    ['Philippines', -20],
    ['Qatar', -20],
    ['Saudi Arabia', -20],
    ['Singapore', -20],
    ['South Korea', -20],
    ['Sri Lanka', -20],
    ['Syria', -20],
    ['Taiwan', -20],
    ['Tajikistan', -20],
    ['Thailand', -20],
    ['Timor Leste', -20],
    ['Turkey', -20],
    ['Turkmenistan', -20],
    ['United Arab Emirates', -20],
    ['Uzbekistan', -20],
    ['Vietnam', -20],
    ['Yemen', -20],
];


export default class Geochart extends Component {
    constructor(){
        super();
        this.state = {
            region: "Africa",
            news: ["Headline 1", "Headline 2", "Headline 3", "Headline 4", "Headline 5"]
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
                const country = data[selection[0].row + 1][0];
                axios.get(`/gnews?region=${country}`).then(response => {
                    superClass.setState({ news: response.data, region: country})
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
                            colorAxis: {colors: ['#FF0000', '', '#00FF00']},
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
                    <h3>{this.state.news[0]}</h3>
                    <h3>{this.state.news[1]}</h3>
                    <h3>{this.state.news[2]}</h3>
                    <h3>{this.state.news[3]}</h3>
                </div>

            </div>
        )
    }
}

