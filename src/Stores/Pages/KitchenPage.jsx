import React from "react";
import { electronicsData } from "../Data/Electronics";
import Navbar from "../Components/Navbar";
import { kitchenData } from "../Data/Kitchen";
import { Link } from "react-router-dom";

const KitchenPage = () => {
    return (
        <>
            <Navbar />
            <div className="pageSection">
                {
                    kitchenData.map((item) => {
                        return (
                           <Link to={`/kitchen/${item.id}`}>
                            <div>
                                <div>
                                <img src={item.image} alt="kitche_image" 
                                style={{height:'100px', width:"200px"}}/>
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
export default KitchenPage;