import React from 'react'
import Fashion from "./Fashion";

export const FashionCard = () => {
    return (
        <>
            {Fashion.map((value, index) => {
                return (
                    <div className="card mb-3" style="max-width: 540px;" key={index}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{value.type}</h5>
                                    <button className="btn btn-primary">See Products</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </>
    )
}
