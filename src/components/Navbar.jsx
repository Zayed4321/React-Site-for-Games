import { NavLink } from 'react-router-dom';
import zayedImg from '../assets/Zayed.jpg';
import gameIcon from '../../public/game.png';
import { useGameContext } from '../context/allData';

const Navbar = () => {

    const { purchase } = useGameContext();

    console.log(purchase.length)


    return (
        <div>
            <div className="navbar bg-accent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 z-[999] p-2 shadow bg-accent rounded-box w-52">
                            <NavLink to={"/"} className={"px-3 pb-3 text-xl text-center hover:bg-base-200 hover:rounded-md transition-all duration-300"} > Homepage  </NavLink>
                            <NavLink to={"/games"} className={"px-3 pb-3 text-xl text-center hover:bg-base-200 hover:rounded-md transition-all duration-300"} > Games  </NavLink>
                            <NavLink to={"/genre"} className={"px-3 pb-3 text-xl text-center hover:bg-base-200 hover:rounded-md transition-all duration-300"} > Genre  </NavLink>
                            <NavLink to={"/contact"} className={"px-3 pb-3 text-xl text-center hover:bg-base-200 hover:rounded-md transition-all duration-300"} > Contact Us  </NavLink>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-3xl"> <img className='w-8' src={gameIcon} alt="Sorry" /> The Ultimate Game Shop by Zayed </a>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item"> {purchase.length} </span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[9999] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg"> {purchase.length} Items</span>
                                <NavLink to={"/cart"} className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={zayedImg} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[999] p-2 shadow menu menu-sm dropdown-content bg-accent rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar