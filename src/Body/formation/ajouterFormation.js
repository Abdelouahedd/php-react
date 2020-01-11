import React, { Component } from 'react'
import Axios from 'axios';
const url = "http://127.0.0.1/php-react/back-end/api";

export default class ajouterFormation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "Cycle d'ingénieur",
            libelle: "",
            nbrS: "",
            file: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("type", this.state.type);
        data.append("libelle", this.state.libelle);
        data.append("nbrS", this.state.nbrS);
        data.append("file", this.state.file);

        Axios.post(`${url}/addFormation.php`,
            data,
            { 'content-type': 'multipart/form-data' })
            .then(res => {
                console.log(res);
                alert(res.data.message)
            }).catch(err => {
                console.error(err);
                alert(err);
            })

    }

    onChangenbrSm = (e) => {
        this.setState({ nbrS: e.target.value })

    }
    onChangeFile = (e) => {
        //console.log(e.target.files[0]);
        let file = e.target.files[0];
        this.setState({ file: file })
        // let reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = (e) => {
        //     //console.log(e.target.result)
        //     this.setState({ file: e.target.result })
        // };

    }
    onChangeLibelle = (e) => {
        this.setState({ libelle: e.target.value });
    }
    getope = (e) => {
        this.setState({ type: e.target.value })
    }

    render() {
        return (

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ajouter une formation dans le département</h6>
                </div>
                <div className="card-body">
                    <form className="col-md-9 editAccount-Admin"
                        method="POST"
                        onSubmit={this.onSubmit}
                        encType="multipart/form-data"
                    >
                        <div className="inputs row">
                            <div className="form-group col-6 ">
                                <div className="form-group">
                                    <label htmlFor="">Type</label>
                                    <select className="form-control" name="type" id=""
                                        onChange={this.getope.bind(this)}
                                    >
                                        <option value="Cycle d'ingénieur">Cycle d'ingénieur</option>
                                        <option value="Master">Master</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-6 ">
                                <label htmlFor="recipient-name" className="control-label">Nombre du semestre :</label>
                                <input className="form-control required"
                                    placeholder="Nombre du semestre" type="number"
                                    name="nbrS"
                                    pattern="/^[0-9]"
                                    // value={nom}
                                    onChange={this.onChangenbrSm} />
                            </div>
                            <div className="form-group col-6 ">
                                <label htmlFor="recipient-name" className="control-label">Nom du formation :</label>
                                <input className="form-control required"
                                    placeholder="Nom du formation " type="text"
                                    name="libelle"
                                    // value={nom}
                                    onChange={this.onChangeLibelle} />
                            </div>
                            <div className="form-group col-6 ">
                                <div className="form-group">
                                    <label htmlFor="">Description</label>
                                    <input type="file" className="form-control-file"
                                        name="file"
                                        placeholder=""
                                        aria-describedby="fileHelpId"
                                        onChange={this.onChangeFile}
                                    />
                                </div>

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
