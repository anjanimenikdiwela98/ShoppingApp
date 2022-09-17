import React from "react";
import { Grid } from '@mui/material';

import Product from './Product/ProductSingle'
//for now
const product = [
    {id: 1, name : 'Shoes', description : 'Sport shoes', price : '$10'},
    {id: 2, name : 'Tshirt', description : 'Women tshirt ' , price : '$15'}
];
console.log(product)
const Products =()=>{
    return(
        <main>
            <Grid container justifyContent= 'center' spacing={4}>
                {product.map((product) => (
                    <Grid item key ={product.id} xs ={12} sm = {6} md = {4} lg = {3}> 
                        <Product product = {product} />
                    </Grid>
                ))}

            </Grid>
        
        </main>
    )
}


export default Products