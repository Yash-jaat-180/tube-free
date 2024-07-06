import React from 'react'
import Button from '../Atom/Button'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../app/Slice/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    }
    return (
        <div>
            <Button
            content={'Logout'}
            textColor={'black'}
            onClick={logoutHandler}
            className='bg-[#ae7aff]'
            />
        </div>
    )
}

export default Logout
