import React, { Component } from 'react'
import { connect } from 'react-redux'

export class listFormation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formation: []
        }
    }
    render() {
        return (
            <React.Fragment>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">List des formation dans le departement</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Libelle du formation</th>
                                    <th>Nombre du semestre</th>
                                    <th>description</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {this.state.profs.map(prof =>
                                    <tr key={prof.id}>
                                        <td>{prof.id}</td>
                                        <td>{prof.nom}</td>
                                        <td>{prof.prenom}</td>
                                        <td>{prof.email}</td>
                                        <td>
                                            <button type="button"
                                                className="btn btn-danger"
                                                onClick={() => this.deleteProd(prof.email)}
                                            >
                                                delete
                                                </button>
                                        </td>
                                    </tr>
                                )} */}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(listFormation)
