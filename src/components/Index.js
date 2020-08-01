import React, { Component } from 'react'
import logo from './logo.png'
import LineCharts from './charts/LineCharts'
import PieCharts from './charts/PieCharts'
import SplineCharts from './charts/SplineChart'
import Gauge from './charts/Gauge'
import Donuts from './charts/Donuts'
import BarCharts from './charts/BarCharts'
import ColumnCharts from './charts/ColumnCharts'
import StackedBarCharts from './charts/StackedBarChat'
export default class ChartsIndex extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container-fluid">
                        <section >
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6">
                                    <div className="heading">
                                        <a><img  src={logo} alt="logo" style={{height:"70px"}}/>Highcharts Dashboard</a>
                                    </div>
                                </div>
                            </div>
                        </section> 
                        <section>
                                <div>
                                    <div className="row">
                                        <div className="col-12 col-sm-7">
                                            <LineCharts />
                                        </div>
                                        <div className="col-12 col-sm-5">
                                            <PieCharts />
                                        </div>
                                        <div className="col-12 col-sm-3 ">
                                            <SplineCharts />
                                        </div>
                                        <div className="col-12 col-sm-3">
                                            <Gauge />
                                        </div>
                                        <div className="col-12 col-sm-3">
                                            <Donuts />
                                        </div>
                                        <div className="col-12 col-sm-3">
                                            <BarCharts />
                                        </div>
                                        <div className="col-12 col-sm-5">
                                            <ColumnCharts />
                                        </div>
                                        <div className="col-12 col-sm-7" style={{marginBottom:"2em"}}>
                                            <StackedBarCharts />
                                        </div>
                                    </div>
                                </div>    
                        </section>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}
