import React from "react";
import Electronics from "./Electronics";
import KidsWear from "./KidsWear";
import Kitchen from "./Kitchen";
import MensWear from "./MensWear";
import WomensWear from "./WomensWear";

const Products = () =>{
    return(
        <div>
            <Electronics/>
            <KidsWear/>
            <Kitchen/>
            <MensWear/>
            <WomensWear/>
        </div>
    )
}
export default Products;