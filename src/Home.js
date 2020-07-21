import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />

      <div className="home_row">
        <Product
          id="12321341"
          title="The Lean Startup"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51exm14dfBL._SX331_BO1,204,203,200_.jpg"
        ></Product>
        <Product
          id="08732858"
          title="Fit-Bit"
          price={20.5}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        ></Product>
      </div>
      <div className="home_row">
        <Product
          id="67814252"
          title="Samsung 138 cm (55 Inches) Ultra HD LED Smart TV "
          price={1250.6}
          rating={5}
          image="https://cdn.vox-cdn.com/thumbor/y-NbDKKMqMTg4TSlilKskUtA6XY=/0x0:1280x853/1200x800/filters:focal(538x325:742x529)/cdn.vox-cdn.com/uploads/chorus_image/image/64015212/Samsung_TV_iTunes_Movies_and_TV_shows.0.jpg"
        ></Product>
      </div>
      <div className="home_row">
        <Product
          id="38761293"
          title="Bluetooth Speakers"
          price={250.34}
          rating={3}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        ></Product>
        <Product
          id="18726309"
          title="Fossil Machine"
          price={120.0}
          rating={5}
          image="https://www.watch4u.com/media/2018/12/5/7/fossil-hodinky-fs4774-56957.jpg"
        ></Product>
        <Product
          id="90245876"
          title="PS4 Controller"
          price={75.5}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/814h4%2BeRucL._SX466_.jpg"
        ></Product>
      </div>
    </div>
  )
}

export default Home
