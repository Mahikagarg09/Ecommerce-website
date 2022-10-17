import React from 'react'
import Fashion from '../categories-info/Fashion'
export default function Categories() {

    const data=[
        {
            cateName:"Fashion",
        },
        {
            cateName:"Electronic",
        },
        {
            cateName:"Home and Garden",
        },
        {
            cateName:"Gifts",
        },
        {
            cateName:"Music",
        },
        {
            cateName:"Beauty Products",
        },
        {
            cateName:"Groceries",
        },
        {
            cateName:"Books",
        },
    ]

  return (
    <>
        <div className="category">
            {data.map((value,index) =>  {
                return(
                    <div className="box f_flex" key={index}>
                        <button>{value.cateName}</button>
                    </div>
                    
                )
            })}
        </div>
    </>
  )
}
