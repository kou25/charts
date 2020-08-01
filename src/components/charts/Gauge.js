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

export default class Gauge extends Component {

  function (chart) {
    setInterval(function () {
        if (chart.axes) { // not destroyed
            var point = chart.series[0].points[0],
                newVal,
                inc = Math.round((Math.random() - 0.5) * 20);

            newVal = point.y + inc;
            if (newVal < 0 || newVal > 200) {
                newVal = point.y - inc;
            }

            point.update(newVal);
        }
    }, 3000);

}  
    render() {
        let graphConfig ={
            credits:false,
            title: {
                text: ''
            },
          };
            graphConfig ={
              chart: {
                type: 'gauge',
                alignTicks: false,
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false,
                spacingBottom: 10,
                spacingTop: 20,
                spacingLeft: 10,
                spacingRight:10,
                height: 300

            },
            
            title: {
                text: ''
            },
            rangeSelector: {
              enabled: false
          },
          navigator: {
              enabled: false
          },
          
          credits: { enabled: false },
            pane: {
                startAngle: -150,
                endAngle: 150
            },
        
            yAxis: [{
                min: 0,
                max: 200,
                lineColor: '#339',
                tickColor: '#339',
                minorTickColor: '#339',
                offset: -25,
                lineWidth: 2,
                labels: {
                    distance: -20,
                    rotation: 'auto'
                },
                tickLength: 5,
                minorTickLength: 5,
                endOnTick: false
            }, {
                min: 0,
                max: 124,
                tickPosition: 'outside',
                lineColor: '#933',
                lineWidth: 2,
                minorTickPosition: 'outside',
                tickColor: '#933',
                minorTickColor: '#933',
                tickLength: 5,
                minorTickLength: 5,
                labels: {
                    distance: 12,
                    rotation: 'auto'
                },
                offset: -20,
                endOnTick: false
            }],
        
            series: [{
                name: 'Speed',
                data: [80],
                dataLabels: {
                    formatter: function () {
                        var kmh = this.y,
                            mph = Math.round(kmh * 0.621);
                        return '<span style="color:#339">' + kmh + ' km/h</span><br/>' +
                            '<span style="color:#933">' + mph + ' mph</span>';
                    },
                    backgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#DDD'],
                            [1, '#FFF']
                        ]
                    }
                },
                tooltip: {
                    valueSuffix: ' km/h'
                }
            }]
          }
        return (
            <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Gauge Chart</h5>
              <h6 className="card-subtitle mb-2 text-muted">This chart shows average speed of vehicle used by the people of Tokyo.</h6>
              <div className="charts-outer run-status-graph">
                    <ReactHighcharts config={graphConfig} ref="overall-asstes-stats-graph"
                                    id="overall-asstes-stats-graph"></ReactHighcharts>
                    </div>
            </div>
          </div>
        )
    }
}
