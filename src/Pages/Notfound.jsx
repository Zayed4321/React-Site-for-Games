import { Helmet } from "react-helmet"
import errorImg from '../assets/error.jpg';

const Notfound = () => {
  return (

      <div>
        <Helmet>
          <title>
            404 ERROR
          </title>
        </Helmet>

        <img src={errorImg} alt="Sorry" />
        
      </div>
  )
}

export default Notfound