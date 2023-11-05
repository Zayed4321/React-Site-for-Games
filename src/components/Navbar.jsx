import { NavLink } from 'react-router-dom';
import zayedImg from '../assets/Zayed.jpg';
import gameIcon from '../../public/game.png';

const Navbar = () => {
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
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
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