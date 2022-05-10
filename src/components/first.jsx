import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrueba } from "../redux/slices/pokemons";
import logo from '../utils/img/logo.png'

export default function First(){

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPrueba('Hola'))
    }, [dispatch])
    
    let {prueba} = useSelector((state) => state.pokemons)
return (

    <>
    <header>

       <nav>
           <div>
                <img src={logo} alt="" className="logo" />
           </div>
           <input type="checkbox" id="check" />
           <label htmlFor="check" className='bar-btn'>
           <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.67 14.33-32 32-32h384c17.7 0 32 14.33 32 32c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm0 160c0-17.7 14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32zm416 192H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
           </label>
           <ul className="nav-menu">
           <li><a className='active' href="#">Home</a></li>
           <li><a href="#">Details</a></li>
           <li><a href="#">About me</a></li>
           <li><a href="#"></a></li>
           <li><a href="#"></a></li>
           </ul>
       </nav>

    </header>
    
    </>

)
}