import React, { Component } from 'react'

export default class AjouterProf extends Component {
    render() {
        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ajouter un ensiengnat dans le departement</h6>
                </div>
                <div className="card-body">

                    <form className="col-md-9 editAccount-Admin" method="PUT" onSubmit={this.onSubmit}>
                       
                        <div className="inputs row">
                            <div className="form-group col-6">
                                <label htmlFor="recipient-name" className="control-label">Email :</label>
                                <input className="form-control required"
                                    id="recipient-name" placeholder="Email" type="email"
                                    name="email" onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group col-6">
                                <label htmlFor="recipient-name" className="control-label">First Name:</label>
                                <input className="form-control required" id="recipient-name"
                                    placeholder="First Name" type="text"
                                    name="firstName" onChange={this.onChange} />
                            </div>

                            <div className="form-group col-6">
                                <label htmlFor="recipient-name" className="control-label">Password:</label>
                                <input className="form-control required" id="recipient-name"
                                    placeholder="Password" type="text" name="password"
                                    onChange={this.onChange} />
                            </div>

                            <div className="form-group col-6">
                                <label htmlFor="recipient-name" className="control-label">Repeat Password:</label>
                                <input className="form-control required" id="recipient-name"
                                    placeholder="Repeat Password" type="text" name="repPassword"
                                    onChange={this.onChange} />
                            </div>

                        </div>
                        <div className="btn-save">
                            <button className="btn btn-primary mb-4 float-right">Save</button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}
