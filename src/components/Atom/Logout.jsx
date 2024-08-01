import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../../app/Slice/authSlice';

function Logout() {
    const navigate = useNavigate();
    const { authStatus: status } = useSelector(({auth}) => auth);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        console.log(dispatch);
        dispatch(logout());
        navigate('/');
    }
    return (
        <button
            onClick={logoutHandler}
            class="mr-1 w-full bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
            Logout
        </button>
    )
}

export default Logout
