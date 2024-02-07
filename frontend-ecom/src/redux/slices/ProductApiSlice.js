import { apiSlice } from "./apiSlice";

export const productApiSlice= apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProduct:builder.query({
            query:()=>({
                url:'/api/v1/product/all-product',
                
            }),
            keepUnusedDataFor:5
        }),
        getSingleProduct:builder.query({
            query:(id)=>({
                url:`/api/v1/product/get-product/${id}`,
            
            }),
            keepUnusedDataFor:5
        }),
        createProduct:builder.mutation({
            query:(data)=>({
                url:'/api/v1/product/create-product',
                method:'POST',
                body:data
            })
        }),
        updateProduct:builder.mutation({
            query:(body,id)=>({
                url:`/api/v1/product/update-product/${id}`,
                method:'PUT',
                body
            })
        }),
        deleteProduct:builder.mutation({
            query:(id)=>({
                url:`/api/v1/product/delete-product/${id}`,
                method:'DELETE',
                
            })
        }),
        createReview:builder.mutation({
            query:(data)=>({
                url:`/api/v1/product/${data.productId}/reviews`,
                method:'POST',
                body:data
            })
        }),
        deleteReview:builder.mutation({
            query:(id)=>({
                url:`/api/v1/product/delete-review/${id}`,
                method:'DELETE',
              
            })
        }),
        getTopRatedProduct:builder.query({
            query:()=>({
                url:'/api/v1/product/top-product',
                
            }),
            keepUnusedDataFor:5
        }),
        
    })
});

export const {useGetProductQuery, useGetSingleProductQuery,useGetTopRatedProductQuery, useCreateReviewMutation, useDeleteReviewMutation}=productApiSlice;