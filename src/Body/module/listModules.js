import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
const url = "http://127.0.0.1/php-react/back-end/api";
const urlDown = "http://127.0.0.1/php-react/back-end/uploads/modules/";

export class listModules extends Component {
    constructor(props) {
        super(props);
        this.state = {
            module: [],
            formation: ""
        }
    }

    deleteMod = (id) => {
        const pro = JSON.stringify({ id })
        Axios.post(`${url}/deleteModule.php`, pro)
            .then(res => {
                console.log(res.data);
                var newForms = this.state.module.filter((e) => {
                    return e.id !== id;
                })
                this.setState({ module: newForms });

            }).catch((error) => {
                console.log("Erooororor" + error);
                alert(error)
            });
    }

    componentDidMount = () => {
        Axios.get(`${url}/listModule.php`,
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
                        <h6 className="m-0 font-weight-bold text-primary">List des modules dans le departement</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Libelle du module</th>
                                        <th>semestre</th>
                                        <th>description</th>
                                        <th>Formation</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.module.map(module =>
                                        <tr key={module.id}>
                                            <td>{module.id}</td>
                                            <td>{module.libelle}</td>
                                            <td>{module.semestre}</td>
                                            <td>
                                                <a href={urlDown + module.description}
                                                    target="_blank"
                                                >
                                                    {module.description}
                                                </a>
                                            </td>
                                            <td>
                                                Formation
                                            </td>

                                            <td>
                                                <button type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => this.deleteMod(module.id)}
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

export default connect(mapStateToProps, mapDispatchToProps)(listModules)
