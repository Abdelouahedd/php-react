import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';

const url = "http://127.0.0.1/php-react/back-end/api";

export class validerChoix extends Component {
    constructor(props) {
        super(props);
        this.state = {
            module: []
        }
    }
    valider = (idModule) => {
        const pro = JSON.stringify({ idModule })
        Axios.post(`${url}/validerModules.php`, pro)
            .then(res => {
                console.log(res.data);
                var newModule = this.state.module.filter((e) => {
                    return e.idModule !== idModule;
                })
                this.setState({ module: newModule });

            }).catch((error) => {
                console.log("Erooororor" + error);
                alert(error)
            });
    }

    componentDidMount = () => {
        Axios.get(`${url}/listModuleNonValide.php`,
        /*  { headers: { "Authorization": `Bearer ${this.props.user.idToken}` } }*/)
            .then(res => {
                console.log(res.data.message);
                this.setState({ module: res.data.message });
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
                        <h6 className="m-0 font-weight-bold text-primary">List choix</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Libelle du module</th>
                                        <th>Nom du prof</th>
                                        <th>semestre</th>
                                        <th>Valider</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.module.map(module =>
                                        <tr key={module.nom}>
                                            <td>{module.nom}</td>
                                            <td>{module.libelle}</td>
                                            <td>{module.semestre}</td>
                                            <td>
                                                <button type="button"
                                                    className="btn btn-success"
                                                    onClick={() => this.valider(module.idModule)}
                                                >
                                                    valider
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

export default connect(mapStateToProps, mapDispatchToProps)(validerChoix)
