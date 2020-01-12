import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
const url = "http://127.0.0.1/php-react/back-end/api";

export class ajouterModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formation: [],
            libelle: "",
            semestre: "",
            description: "",
            idFormation: ""
        }
        this.getope = this.getope.bind(this);
    }
    componentDidMount() {
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



    onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("idFormation", this.state.idFormation);
        data.append("libelle", this.state.libelle);
        data.append("semestre", this.state.semestre);
        data.append("description", this.state.description);

        Axios.post(`${url}/AddModule.php`,
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

    onChangeLibelle = (e) => {
        this.setState({ libelle: e.target.value })
    }

    onChangeSemestre = (e) => {
        this.setState({ semestre: e.target.value })
    }

    onChangeDescription = (e) => {
        let file = e.target.files[0];
        this.setState({ description: file });
    }

    getope = (e) => {
        console.log(e.target.value);
        this.setState({ idFormation: e.target.value });
    }

    render() {

        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ajouter un module dans le département</h6>
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
                                    <label htmlFor="">Formation</label>
                                    <select className="form-control"
                                        value={this.state.idFormation}
                                        onChange={this.getope}
                                    // defaultValue={this.state.formation[0].id}
                                    >


                                        {

                                            this.state.formation.map(f => {
                                                return <option key={f.id} value={f.id}>{f.libelle}</option>
                                            })
                                        }
                                    </select>

                                </div>
                            </div>
                            <div className="form-group col-6 ">
                                <label htmlFor="recipient-name" className="control-label">Numero du semestre :</label>
                                <input className="form-control required"
                                    placeholder="Numero du semestre" type="number"
                                    pattern="/^[0-9]"
                                    min="1"
                                    max="6"
                                    // value={nom}
                                    onChange={this.onChangeSemestre} />
                            </div>
                            <div className="form-group col-6 ">
                                <label htmlFor="recipient-name" className="control-label">Nom du module :</label>
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
                                        name="description"
                                        placeholder=""
                                        aria-describedby="fileHelpId"
                                        onChange={this.onChangeDescription}
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


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ajouterModule)
