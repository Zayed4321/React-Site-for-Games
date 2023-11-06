import Layout from "../Layout/Layout"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../components/GenreSlider.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { useGameContext } from "../context/allData";
import Loader from "../components/Loader";

const Genre = () => {

  const { genre, loading } = useGameContext();

  return (
    <Layout title={"Genre"}>
      <div className="flex justify-center mt-32" >

        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper">

          {
            loading && <Loader />
          }

          {
            genre.map(gre => <SwiperSlide key={gre._id} >
              <img src={gre.greImg} alt="Sorry" />
            </SwiperSlide>)
          }

        </Swiper>

      </div>
    </Layout>
  )
}

export default Genre