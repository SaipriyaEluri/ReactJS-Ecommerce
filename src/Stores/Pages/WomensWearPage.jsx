import React from "react";
import Navbar from "../Components/Navbar";
import { womensWearData } from "../Data/WomensWear";
import {Link} from "react-router-dom";

const WomenswearPage = () => {
    return (
        <>
            <Navbar />
            <div className="pageSection">
                {
                    womensWearData.map((item) => {
                        return (
                            <Link to={`/womenswear/${item.id}`}>
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
export default WomenswearPage;