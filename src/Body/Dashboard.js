import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileDownload, FaUsers, FaClipboardList } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';
import Calendar from 'react-calendar';

class Dashboard extends React.Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })
    render() {
        return (
            <React.Fragment>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <Link href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><FaFileDownload /> &nbsp;Generate Report</Link>
                </div>

                <div className="row">

                    <div className="col-xl-4 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Nombre des ensiegnats</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">40</div>
                                    </div>
                                    <div className="col-auto">
                                        <FaUsers size="25" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Nombre des formations</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">3</div>
                                    </div>
                                    <div className="col-auto">
                                        <IoMdSchool size="30" />&nbsp;
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Semstre</div>
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">90%</div>
                                            </div>
                                            <div className="col">
                                                <div className="progress progress-sm mr-2">
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: 90 + "%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <FaClipboardList size="25" />&nbsp;
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="row">

                    <div className="col-xl-7 col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                            </div>
                            <div className="card-body">
                                <Calendar calendarType="US"
                                    onChange={this.onChange}
                                    value={this.state.date}
                                />
                                <div className="chart-area">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">Calendar</h6>
                            </div>

                            <div className="card-body">
                                <Calendar className="card-body"
                                    onChange={this.onChange}
                                    value={this.state.date}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default Dashboard;
