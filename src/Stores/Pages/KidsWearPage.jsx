import React, { useState } from "react";
import { kidsWearData } from "../Data/KidsWear";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const KidsWearPage = () =>{

    const [selectedProduct, setSelectedProduct] = useState([]);
    const onCategoryChange = (item) => {
        if(selectedProduct.includes(item)){
            setSelectedProduct(selectedProduct.filter(prod => prod !== item))
        }
        else{
            setSelectedProduct([...setSelectedProduct,item])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? 
    (kidsWearData) : (kidsWearData.filter((item) => selectedProduct.includes(item.category)));

   
    const uniqueCategories = kidsWearData.filter((obj, index) => {
        return index === kidsWearData.findIndex(o => obj.category === o.category);
      });
 
    return(
        <>
        <Navbar/>
        <div className="product_selected">
            {
                uniqueCategories.map((item) => {
                    return(
                        <div>
                            <label>
                                <input type="checkbox" key={item.category}
                                checked={selectedProduct.includes(item.category)}
                                onChange={() => onCategoryChange(item.category)}
                                />
                            </label>
                        
                            {item.category}
                            </div>
                    )
                })
            }

            </div>

            <div className="pageSection">
                {
                    filteredProduct.map((item) => {
                        return (
                            <Link to={`/kidswear/${item.id}`}>
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
export default KidsWearPage;