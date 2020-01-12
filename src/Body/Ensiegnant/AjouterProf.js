import React, { Component } from 'react'
import Axios from 'axios';
const url = "http://127.0.0.1/php-react/back-end/api";

export default class AjouterProf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            nom: "",
            prenom: "",
            tele: "",
            passwrd: ""
        }
    }
    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    onChangeNom = (e) => {
        this.setState({
            nom: e.target.value
        });
    }
    onChangePrenom = (e) => {
        this.setState({
            prenom: e.target.value
        });
    }
    onChangePass = (e) => {
        this.setState({
            passwrd: e.target.value
        });
    }
    onChangeTele = (e) => {
        this.setState({
            tele: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const data = { ...this.state };
        console.log(data);

        Axios.post(`${url}/addProf.php`, JSON.stringify(data))
            .then((result) => {
                console.log('====================================');
                console.log(result.data.message);
                console.log('====================================');
                alert(result.data.message);
                this.setState({
                    email: "",
                    nom: "",
                    prenom: "",
                    tele: "",
                    passwrd: ""
                })
            })
            .catch((error) => {
                alert("error" + error);
            });
    }
    render() {
        const { email, nom, prenom, tele, passwrd } = this.state;

        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ajouter un ensiengnat dans le departement</h6>
                </div>
                <div className="card-body">

                    <form className="col-md-9 editAccount-Admin" method="POST" onSubmit={this.onSubmit}>

                        <div className="inputs row">
                            <div className="form-group col-6 ">
                                <label htmlFor="recipient-name" className="control-label">Email :</label>
                                <input className="form-control required"
                                    placeholder="Email" value={email}
                                        
                                    name="email" onChange={this.onChangeEmail}
                                />
                            </div>

                            <div className="form-group col-6 ">
                                <label htmlFor="recipient-name" className="control-label">Nom :</label>
                                <input className="form-control required"
                                    placeholder="Nom" type="text" name="nom"
                                    value={nom} onChange={this.onChangeNom} />
                            </div>

                            <div className="form-group col-6 ">
                                <label htmlFor="recipient-name" className="control-label">Prenom:</label>
                                <input className="form-control required" name="prenom"
                                    placeholder="Prenom" type="text" value={prenom}
                                    onChange={this.onChangePrenom} />
                            </div>

                            <div className="form-group col-6">
                                <label htmlFor="recipient-name" className="control-label">Telephone:</label>
                                <input className="form-control required" name="tele"
                                    placeholder="Telephone" type="text" value={tele}
                                    onChange={this.onChangeTele} />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="recipient-name" className="control-label">Mot de passe:</label>
                                <input className="form-control required" name="passwrd"
                                    placeholder="Mot de passe" type="password" value={passwrd}
                                    onChange={this.onChangePass} />
                            </div>

                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="recipient-name" className="control-label"></label>
                            <button className="btn btn-primary mb-4 float-right">Save</button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}
