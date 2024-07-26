import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <section className='hero-container'>
      <div className="hero-slogan">
        <span>Bu sezonda en iyisini bul</span>
        <h2>Herkese özel koleksiyon</h2>
        <a href="#">Şimdi keşfet</a>
      </div>
      <div className="hero-image-container">
        <img className='hero-image' src="/images/hero.png" alt="" />
      </div>
    </section>
  )
}

export default Hero
