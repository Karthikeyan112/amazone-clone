import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_8A_Dual/7499/V176845577_IN_WLME_Redmi_8A_Dual_LandingPage_3000x1200._CB406191253_.jpg"
        alt="" />
      <div className="home__row">
        <Product
          id={1}
          title="Amazon Brand - Solimo Wall Sticker for Living Room (Butterfly Garden, Ideal Size on Wall - 137 cm x 41 cm)"
          price={149}
          rating={5}
          image="https://m.media-amazon.com/images/I/61Mmf4mJwyL._AC_UL320_.jpg"
        />
        <Product
          id={2}
          title="Amazon Brand - Solimo Wall Sticker for Living Room (Butterfly Garden, Ideal Size on Wall - 137 cm x 41 cm)"
          price={149}
          rating={5}
          image="https://m.media-amazon.com/images/I/61Mmf4mJwyL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={3}
          title="Redux Analogue Blue Dial Men’s & Boy's Watch RWS0216S"
          price={299}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/41VloMir72L._AC_UL260_SR200,260_FMwebp_QL70_.jpg"
        />
        <Product
          id={4}
          title="Redux Analogue Blue Dial Men’s & Boy's Watch RWS0229S"
          price={289}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/4169PuEXFcL._AC_UL260_SR200,260_FMwebp_QL70_.jpg"
        />
        <Product
          id={5}
          title="REDUX Analogue Men's Watch (Blue Dial Blue Colored Strap)"
          price={331}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/51EmCDl0V4L._AC_UL260_SR200,260_FMwebp_QL70_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={6}
          title="Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)"
          price={9699}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Monitors/NCE_banner_1500x300.gif"
        />
      </div>
    </div>
  )
}

export default Home;