import { NavLink } from "react-router-dom";
import Layout from "../Layout/Layout"
import { useGameContext } from "../context/allData"


const GameCart = () => {

    const { purchase } = useGameContext();


    return (
        <Layout title={"Your Cart"}>
            <div className="container mx-auto mt-5" >
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date of Release</th>
                            <th> Price </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            purchase.map( buyData => <tr key={buyData._id} >
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={buyData.imgUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{ buyData.gameName }</div>
                                            <div className="text-sm opacity-50">{ buyData.genre?.gameGenre }</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    { buyData.releaseDate }
                                </td>
                                <td>{ buyData.gamePrice }</td>
                                <th>
                                    <NavLink to={`/games/${buyData._id}`} className="btn btn-ghost btn-xs">details</NavLink>
                                </th>
                            </tr> )
                        }
                    </tbody>

                </table>
            </div>
        </div>
        </Layout>
    )
}

export default GameCart