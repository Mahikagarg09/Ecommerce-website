import React from 'react';
import SlideCard from './SlideCard';

export default function Slider({theme}) {
  
  return (
    <>
        <section className='homeSlide contentWidth'>
            <div className="container">
                <SlideCard theme={theme}/>
            </div>
        </section>
    </>
  )
}
