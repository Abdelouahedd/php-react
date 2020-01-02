import React from 'react';
import { Link } from 'react-router-dom';
import { GoDashboard } from 'react-icons/go';
import { FaRegUser, FaUserFriends, FaUserPlus,FaRegCheckSquare, FaUniversity, FaUserGraduate } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'
import { MdLibraryAdd } from "react-icons/md";

const sideBar = () => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">

      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <div className="sidebar-brand-icon rotate-n-15">
          <GoDashboard />
        </div>
        <div className="sidebar-brand-text mx-3">Admin</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="/">
          &nbsp;  <FaRegUser /> &nbsp;
          <span>Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Ensiegnant</div>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/ajouterProf" >
          <FaUserPlus />  &nbsp;
          <span>Ajouter Ensiegnant</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link collapsed" to={"/listProf"} data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
          <FaUserFriends /> &nbsp;
          <span>Liste des ensiegnants</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="charts.html">
         <FaRegCheckSquare/> &nbsp;
          <span>valider les choix</span></Link>
      </li>
      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Formation</div>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="#" >
          <IoMdSchool/>&nbsp;
          <span>Ajouter formation</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" href="charts.html">
         <FaUniversity/>&nbsp;
          <span>List des formations</span></Link>
      </li>


      <hr className="sidebar-divider d-none d-md-block" />
      <div className="sidebar-heading">Module</div>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="#" >
          <MdLibraryAdd/>&nbsp;
          <span>Ajouter Module</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" href="charts.html">
         <FaUserGraduate/>&nbsp;  
          <span>List des Modules</span></Link>
      </li>


    </ul>
  );
}

export default sideBar;
