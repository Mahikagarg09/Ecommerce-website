import React from 'react'
import Categories from './Categories'
import Slider from './Slider'
import "./Home.css";

export default function Home({theme}) {
  return (
    <>
        <section className="home">
            <div className="container d_flex">
                <Categories/>
                <Slider theme={theme}/>
            </div>
        </section>
    </>
  )
}
