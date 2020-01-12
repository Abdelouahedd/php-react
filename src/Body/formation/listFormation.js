import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
const url = "http://127.0.0.1/php-react/back-end/api";

export class listFormation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formation: []
        }
        this.deleteForm.bind(this);
    }
    deleteForm = (id) => {

        const pro = JSON.stringify({id})
        Axios.post(`${url}/deleteFormation.php`, pro)
            .then(res => {
                console.log(res.data);
                var newForms = this.state.formation.filter((e) => {
                    return e.id !== id;
                })
                this.setState({ formation: newForms });

            }).catch((error) => {
                console.log("Erooororor" + error);
                alert(error)
            });
    }
    componentDidMount = () => {
        Axios.get(`${url}/listFormation.php`,
          /*  { headers: { "Authorization": `Bearer ${this.props.user.idToken}` } }*/)
            .then(res => {
                console.log(res.data.message);
                this.setState({ formation: res.data.message });
            }).catch((error) => {
                console.log("Erooororor" + error);
                alert(error)
            });
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
                                        <th>Type</th>
                                        <th>Libelle du formation</th>
                                        <th>Nombre du semestre</th>
                                        <th>description</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.formation.map(formation =>
                                        <tr key={formation.id}>
                                            <td>{formation.id}</td>
                                            <td>{formation.type}</td>
                                            <td>{formation.libelle}</td>
                                            <td>{formation.nbrSemestre}</td>
                                            <td>{formation.description}</td>


                                            <td>
                                                <button type="button"
                                                    className="btn btn-danger"
                                                    onClick={()=>this.deleteForm(formation.id)}
                                                >
                                                    delete
                                                </button>
                                            </td>
                                        </tr>
                                    )}


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
