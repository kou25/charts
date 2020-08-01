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

export default class Donuts extends Component {

    render() {
        let graphConfig ={
            credits:false,
            
            title: {
                text: ''
            },
          };
            graphConfig ={
              chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
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
            title: {
                text: 'Browser<br>shares<br>2017',
                align: 'center',
                verticalAlign: 'middle',
                y: 60
            },
            tooltip: { enabled: false },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '110%'
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '50%',
                data: [
                    ['Chrome', 58.9],
                    ['Firefox', 13.29],
                    ['Internet Explorer', 13],
                    ['Edge', 3.78],
                    ['Safari', 3.42],
                    {
                        name: 'Other',
                        y: 7.61,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            }]
          }
        return (
            <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Donuts Charts</h5>
              <h6 className="card-subtitle mb-2 text-muted">This chart shows how browser are shared by the people of Tokyo.</h6>
              <div className="charts-outer run-status-graph">
                    <ReactHighcharts config={graphConfig} ref="overall-asstes-stats-graph"
                                    id="overall-asstes-stats-graph"></ReactHighcharts>
                    </div>
            </div>
          </div>
        )
    }
}
