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

export default class PieCharts extends Component {
    render() {
        let graphConfig ={
            credits:false,
            title: {
                text: ''
            },
          };
            graphConfig = {
                chart: {
                    type: 'pie',
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
                legend: {
                    enabled:true
                },
                enableMouseTracking: false,
                tooltip: { enabled: false },
                series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                        name: 'Chrome',
                        y: 61.41,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Internet Explorer',
                        y: 11.84
                    }, {
                        name: 'Firefox',
                        y: 10.85
                    }, {
                        name: 'Edge',
                        y: 4.67
                    }, {
                        name: 'Safari',
                        y: 4.18
                    }, {
                        name: 'Sogou Explorer',
                        y: 1.64
                    }, {
                        name: 'Opera',
                        y: 1.6
                    }, {
                        name: 'QQ',
                        y: 1.2
                    }, {
                        name: 'Other',
                        y: 2.61
                    }]
                }]
            }
        return (
            <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Pie Charts</h5>
              <h6 className="card-subtitle mb-2 text-muted">This chart shows which browser are mostly use by the people of Tokyo.</h6>
              <div className="charts-outer run-status-graph">
                    <ReactHighcharts config={graphConfig} ref="overall-asstes-stats-graph"
                                    id="overall-asstes-stats-graph"></ReactHighcharts>
                    </div>
            </div>
          </div>
        )
    }
}
