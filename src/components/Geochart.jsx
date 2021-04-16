import { Chart } from 'react-google-charts';
import React from 'react';

function Geochart() {
    
    return (
        <Chart
            width={'70vw'}
            height={'94.5vh'}
            chartType="GeoChart"
            data={[
                ['Country', 'Average Temperature'],
                ['Algeria', 36], ['Angola', -8], ['Benin', 6], ['Botswana', -24],
                ['Burkina Faso', 12], ['Burundi', -3], ['Cameroon', 3],
                ['CG', 2], ['Cape Verde', 15],
                ['Central African Republic', 4], ['Ceuta', 35], ['Chad', 12],
                ['Comoros', -12], ['Ivory Coast', 6],
                ['CD', -3], ['Djibouti', 12],
                ['Egypt', 26], ['Equatorial Guinea', 3], ['Eritrea', 15],
                ['Ethiopia', 9], ['Gabon', 0], ['Gambia', 13], ['Ghana', 5],
                ['Guinea', 10], ['Guinea-Bissau', 12], ['Kenya', -1],
                ['Lesotho', -29], ['Liberia', 6], ['Libya', 32], ['Madagascar', -12], 
                ['Malawi', -14], ['Mali', 12], ['Mauritania', 18],
                ['Mauritius', -20],['Morocco', 32], ['Mozambique', -25], ['Namibia', -22],
                ['Niger', 14], ['Nigeria', 8], ['Republic of the Congo', -1],
                ['Rwanda', -2], ['Saint Helena', -16],
                ['São Tomé and Principe', 1], ['Senegal', 15],
                ['Seychelles', -5], ['Sierra Leone', 8], ['Somalia', 2],
                ['Sudan', 15], ['South Africa', -30], ['SS', 5],
                ['Swaziland', -26], ['Tanzania', -6], ['Togo', 6], ['Tunisia', 34],
                ['Uganda', 1], ['Western Sahara', 25], ['Zambia', -15],
                ['Zimbabwe', -18],
            ]}

            options = {{
                region: '002',
                colorAxis: {colors: ['#FF0000', 'FFFF00', '#00FF00']},
                backgroundColor: '#282c40',
                datalessRegionColor: '#282c40',
                defaultColor: '#ffffff',
            }}

  mapsApiKey=""
  rootProps={{ 'data-testid': '1' }}
/>
    )
}

export default Geochart;

