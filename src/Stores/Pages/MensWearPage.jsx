import React from "react";
import Navbar from "../Components/Navbar";
import { mensWearData } from "../Data/MensWear";
import { Link } from "react-router-dom";

const MensWearPage = () => {
    return (
        <>
            <Navbar />
            <div className="pageSection">
                {
                    mensWearData.map((item) => {
                        return (
                            <Link to={`/menswear/${item.id}`}>
                            <div>
                               <div>
                                   <img src={item.image} alt="" />
                               </div>
                               <div>
                                   {item.title} , {item.price}
                               </div>
                           </div>
                           </Link>
                        )
                    })
                }

            </div>
        </>
    )
}
export default MensWearPage;