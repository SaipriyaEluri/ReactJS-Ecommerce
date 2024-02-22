import React, {useState} from "react";
import { electronicsData } from "../Data/Electronics";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "./pages.css";

const ElectronicsPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([]);

    const onCategoryChange = (item) => {    

        if(selectedProduct.includes(item)){
            setSelectedProduct(selectedProduct.filter( prod => prod !== item))
        }
        else{
            setSelectedProduct([...selectedProduct, item])
        }
    }

    const filteredProduct = selectedProduct.length === 0 ? 
    (electronicsData) : (electronicsData.filter((item) => selectedProduct.includes(item.category)));

   
    const uniqueCategories = electronicsData.filter((obj, index) => {
        return index === electronicsData.findIndex(o => obj.category === o.category);
      });
 

    return (
        <>
            <Navbar />

            <div className="container">
        <div className="row">
        <div className="col-3">
        <div className="product_selected">
                <aside>
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
         </aside>
            </div>
        </div>

        <div className="col-9">
        <div className="pageSection">
                {
                    filteredProduct.map((item) => {
                        return (
                            <Link to={`/electronics/${item.id}`}>
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
        </div>
            

        </div>
            </div>



         
        </>
    )
}
export default ElectronicsPage;