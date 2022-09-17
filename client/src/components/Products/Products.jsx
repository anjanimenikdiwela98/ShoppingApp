import React from "react";
import { Grid } from '@mui/material';

import Product from './Product/ProductSingle'
//for now
const product = [
    {id: 1, name : 'Shoes', description : 'Sport shoes', price : '$10', image : 'https://cdn.shopify.com/s/files/1/0418/6000/6041/products/p1766356.jpg?v=1602067881'},
    {id: 2, name : 'Tshirt', description : 'Women tshirt ' , price : '$15', image : 'https://5.imimg.com/data5/FJ/OW/BN/SELLER-42499681/women-s-plain-t-shirt-500x500.jpg'}
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