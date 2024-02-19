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
               // credentials: 'include'
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
            updateUserProfile: builder.mutation({
                query: (data) => ({
                url: "/api/v1/user/update-user",
                method: 'PUT',
                body: data,
                }),
            }),
            getAllUsers: builder.query({
                query: () => ({
                url: '/api/v1/user/all-users',
                }),
            }),
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
            updateUserRole: builder.mutation({
                query: (data) => ({
                url: `/api/v1/user/admin/${data.id}`,
                method: 'PUT',
                body: data,
                }),
            
            }),
            deleteUser: builder.mutation({
                query: (id) => ({
                url: `/api/v1/user/admin/delete-user/${id}`,
                method: 'DELETE',
                }),
            }),

        
    }),
});

export const { useLoginMutation , useRegisterMutation, useLogoutMutation, useGetUserProfileQuery, useUpdateUserProfileMutation,useGetAllUsersQuery, useDeleteUserMutation,useUpdateUserRoleMutation, useGetUserByIdQuery, useUpdateUserMutation } = userApiSlice;
