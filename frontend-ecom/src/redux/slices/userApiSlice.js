import { apiSlice } from "./apiSlice";

export const userApiSlice= apiSlice.injectEndpoints({

    endpoints:(builder)=>({
      
        login: builder.mutation({
            query: (data) => ({
              url: "/api/v1/user/login",
              method: 'POST',
              body: data,
              credentials: 'include'
            }),
          }),
            register: builder.mutation({
                query: (data) => ({
                url: "/api/v1/user/register",
                method: 'POST',
                body: data,
                }),
            }),
            logout: builder.mutation({
                query: () => ({
                  url: "/api/v1/user/logout",
                  method: 'POST',
                }),
              }),
          
            // getUserProfile: builder.query({
            //     query: () => ({
            //     url: `${USERS_URL}/profile`,
            //     }),
            // }),
            // updateUserProfile: builder.mutation({
            //     query: (data) => ({
            //     url: `${USERS_URL}/profile`,
            //     method: 'PUT',
            //     body: data,
            //     }),
            // }),
            // getUsers: builder.query({
            //     query: () => ({
            //     url: `${USERS_URL}`,
            //     }),
            // }),
            // deleteUser: builder.mutation({
            //     query: (id) => ({
            //     url: `${USERS_URL}/${id}`,
            //     method: 'DELETE',
            //     }),
            // }),
            // getUserById: builder.query({
            //     query: (id) => ({
            //     url: `${USERS_URL}/${id}`,
            //     }),
            // }),
            // updateUser: builder.mutation({
            //     query: ({ id, ...data }) => ({
            //     url: `${USERS_URL}/${id}`,
            //     method: 'PUT',
            //     body: data,
            //     }),
            // }),

        
    }),
});

export const { useLoginMutation , useRegisterMutation, useLogoutMutation, useGetUserProfileQuery, useUpdateUserProfileMutation, useGetUsersQuery, useDeleteUserMutation, useGetUserByIdQuery, useUpdateUserMutation } = userApiSlice;
