import { NavLink } from "react-router-dom"

export default function menu () {

    return(
        <div className="menu">
          <ul>
               <li><NavLink to="/" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Home</NavLink></li>
               <li> <NavLink to ="/add"className={({isActive}) => (isActive ? "activeLink" : undefined)}>Add Techno</NavLink></li>
               <li><NavLink to="/list" className={({isActive}) => (isActive ? "activeLink" : undefined)}>All technos</NavLink></li>
           </ul>
        </div>
    )
}

