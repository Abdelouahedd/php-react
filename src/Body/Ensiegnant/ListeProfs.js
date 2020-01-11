import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux';
const url = "http://127.0.0.1/php-react/back-end/api";

export class ListeProfs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profs: []
        }
    }
    deleteProd = (emailP) => {
        /*  { headers: { "Authorization": `Bearer ${this.props.user.idToken}` } }*/
        // var newProfs = this.state.profs.filter((e) => {
        //     return e.email !== emailP;
        // })
        // console.log(newProfs);
        // this.setState({ profs: newProfs });
        const pro = JSON.stringify({emailP})
        Axios.post(`${url}/deleteProf.php`,pro)
            .then(res => {
                console.log(res.data);
                var newProfs = this.state.profs.filter((e) => {
                    return e.email !== emailP;
                })
                this.setState({ profs: newProfs });
               
            }).catch((error) => {
                console.log("Erooororor" + error);
                alert(error)
            });
    }

    componentDidMount = () => {
        Axios.get(`${url}/listProfs.php`,
          /*  { headers: { "Authorization": `Bearer ${this.props.user.idToken}` } }*/)
            .then(res => {
                console.log(res.data.message);
                this.setState({ profs: res.data.message });
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
                        <h6 className="m-0 font-weight-bold text-primary">List des ensiengnats dans le departement</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>nom</th>
                                        <th>prenom</th>
                                        <th>email</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.profs.map(prof =>
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


function mapStateToProps(state) {
    return { user: state.reducer };
}

export default (connect(mapStateToProps, null)(ListeProfs));
//export default (ListeProfs)
