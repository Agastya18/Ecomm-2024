import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
    const {userInfo} = useSelector((state) => state.auth)
    //console.log(userInfo)
   return userInfo && userInfo.user.isAdmin ? <Outlet/> : <Navigate to="*"/>
}
export default AdminRoute