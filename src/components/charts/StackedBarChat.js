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

let passRunStatusData =[
  [1147651200000,2],
  [1147737600000,3],
  [1147824000000,1],
  [1147910400000,3],
  [1147996800000,4],
  [1148256000000,3],
  [1148342400000,4],
  [1148428800000,2],
  [1148515200000,6],
  [1148601600000,3],
  [1148947200000,3],
  [1149033600000,4]
]
let failedRunStatusData = [
  [1147651200000,1],
  [1147737600000,3],
  [1147824000000,2],
  [1147910400000,2],
  [1147996800000,2],
  [1148256000000,3],
  [1148342400000,5],
  [1148428800000,1],
  [1148515200000,2],
  [1148601600000,6],
  [1148947200000,5],
  [1149033600000,2]
]

export default class StackedBarChat extends Component {
    render() {
        let graphConfig ={};
        graphConfig = {
          chart: {
              type: 'column',
              // zoomType: 'xy',
              spacingBottom: 10,
              spacingTop: 20,
              spacingLeft: 10,
              spacingRight: 10,
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
          exporting: { enabled: false },
          credits: { enabled: false },
          xAxis: {
              type: 'datetime'
          },
          yAxis: {
              tickInterval: 2,
              min: 0,
              title: {
                  text: 'Time (s)'
              },
              opposite:false,
          },
          legend: {
              enabled:true
          },
      
          plotOptions: {
              column: {
                  stacking: 'normal',
                  dataLabels: {
                      enabled: false
                  }
              },
              states: {
                  hover: {
                      marker: {
                          enabled: false
                      }
                  }
              },
              tooltip: {
                  headerFormat: '<b>{series.name}</b><br>',
                  pointFormat: 'Run Time : {point.y} s'
              }
          },
          series: [{
              name: 'Success',
              color: '#6fc981',
              data: passRunStatusData
      
          }, {
              name: 'Failed',
              color: '#f05e57',
              data: failedRunStatusData 
          }]
      }
          
        return (
            <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Stacked Bar Charts</h5>
              <h6 className="card-subtitle mb-2 text-muted">This chart shows how workflow runs that occured in each day.</h6>
              <div className="charts-outer run-status-graph">
                    <ReactHighcharts config={graphConfig} ref="overall-asstes-stats-graph"
                                    id="overall-asstes-stats-graph"></ReactHighcharts>
                    </div>
            </div>
          </div>
        )
    }
}
