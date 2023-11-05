import Layout from "../Layout/Layout"
import pic1 from "../assets/CyberPunk.jpg";

const GameData = () => {
  return (
    <Layout title="Buy Now" > 
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={pic1} className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">CyberPunk</h1>
                        <h3 className="pt-6" > Pricing in Taka </h3>
                        <h3 className="pt-6" > Rating </h3>
                        <h3 className="pt-6" > Category </h3>
                        <p className="py-6">This is a game that gives you a great access to the future roleplay opportunities and lets you indulge into the upcoming years before time</p>
                        <button className="btn btn-primary"> Get It Now </button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default GameData