import { apiSlice } from "./apiSlice";

export const productApiSlice= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProduct:builder.query({
            query:()=>({
                url:'http://localhost:4000/api/products',
            }),
            keepUnusedDataFor:5
        })
    })
});

export const {useGetProductsQuery}=productApiSlice;