import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock';
require('highcharts/highcharts-more.js')(ReactHighcharts.Highcharts)
require('highcharts/modules/no-data-to-display.js')(ReactHighcharts.Highcharts)



ReactHighcharts.Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: "\"Roboto\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif"
        }
    }
});

export default class LineCharts extends Component {
    render() {
        let graphConfig ={
            credits:false,
            title: {
                text: ''
            },
          };
            graphConfig = {
                chart: {
                    type: 'line',
                    // zoomType: 'xy',
                    spacingBottom: 10,
                    spacingTop: 20,
                    spacingLeft: 10,
                    spacingRight: 10,
                    height: 300
                },
                rangeSelector: {
                    enabled: false
                },
                navigator: {
                    enabled: false
                },
                
                credits: { enabled: false },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    opposite: false,
                    title: {
                        text: 'Temperature (°C)'
                    },
                },
                legend: {
                    enabled:true
                },
            
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: false
                        },
                    },
                },
                series: [{
                    color: '#6fc981',
                    name: 'Tokyo',
                    data:[
                        [Date.UTC(1970, 10, 25), 7.0],
                        [Date.UTC(1970, 11,  6), 6.9],
                        [Date.UTC(1970, 11, 20), 9.5],
                        [Date.UTC(1970, 11, 25), 14.5],
                        [Date.UTC(1971, 0,  4), 18.4],
                        [Date.UTC(1971, 0, 17), 21.5],
                        [Date.UTC(1971, 0, 24), 25.2],
                        [Date.UTC(1971, 1,  4), 20.5],
                        [Date.UTC(1971, 1, 14), 26.5],
                        [Date.UTC(1971, 2,  6),23.3],
                        [Date.UTC(1971, 2, 14),20.3],
                        [Date.UTC(1971, 2, 24),19.8],
                        [Date.UTC(1971, 3,  1), 18.9],
                        [Date.UTC(1971, 3, 11), 18.3],
                        [Date.UTC(1971, 3, 27), 18.0],
                        [Date.UTC(1971, 4,  4), 16.8],
                        [Date.UTC(1971, 4,  9), 15.8],
                        [Date.UTC(1971, 4, 14), 16.2],
                        [Date.UTC(1971, 4, 19), 14.5],
                        [Date.UTC(1971, 5,  4), 13.4],
                        [Date.UTC(1971, 5,  9),13.5],
                        [Date.UTC(1971, 5, 14), 13.9],
                        [Date.UTC(1971, 5, 19), 13.0],
                        [Date.UTC(1971, 5, 24), 10.5],
                        [Date.UTC(1971, 5, 29), 9.6],
                       
                    ]
                }],  
            }
        return (
            <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Line Charts</h5>
              <h6 className="card-subtitle mb-2 text-muted">This chart shows hows temperatures of Tokyo over a few months.</h6>
              <div className="charts-outer run-status-graph">
                    <ReactHighcharts config={graphConfig} ref="overall-asstes-stats-graph"
                                    id="overall-asstes-stats-graph"></ReactHighcharts>
                    </div>
            </div>
          </div>
        )
    }
}
