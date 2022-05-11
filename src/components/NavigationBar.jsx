import { Link, NavLink } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import "../utils/css/Global.css";
import LandingPage from "./LandingPage";
import logo from '../utils/img/logo.png'

export default function First(){

    // const NavLayout = () => (
    //     <>
    //       <NavigationBar />
    //       <Outlet />
    //     </>
    //   );

return (
 <header>
       <nav>
            <Link to="/">
                <div className='logo'>
                    
                        <img src={logo} alt="" />
                        <h1>Poke<span>dex</span></h1>
                </div>
           </Link>
           <input type="checkbox" id="check" />
           <label htmlFor="check" className='bar-btn'>
           <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.67 14.33-32 32-32h384c17.7 0 32 14.33 32 32c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm0 160c0-17.7 14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm416 192H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
           </label>
           
           <ul className="nav-menu">
            <li><NavLink to="/" > Home</NavLink></li>
            <li><NavLink to="/home" >Get started</NavLink></li>
            {/* <li><NavLink to="#" >About me</NavLink></li>
            <li><NavLink to="#" ></NavLink></li>
            <li><NavLink to="#" ></NavLink></li> */}
           </ul>
           
       </nav>
</header>
)
}