import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {


    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }



  return (
    <div className='header'> 
    

        <div className="header_left">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAYFBMVEUCdLP///8Ab7GLsNKBqs8AcrOHrdAAaq6px98AX6lpnshLjcD1+/0AbbAAZ62nwtwAZKxSkcLN3uxyoMlimMXD1+idvdi0zeLc6fLj7vU1hLspf7mZuNbr9Pl4ps1Cib5ZTvxnAAAC7ElEQVRoge3b7XKiMBQG4CQYY5WED0EQCt7/XRZ0Vcg5tHQ8iZ2dvDvtHyjPJEJOkhXGr8mTyE+S/Aay8deOKS38RCtW3d1CSeYvUhU3t9Ae1TG6GN1EeWYZU8ng+uzjeyRnpf/mDg0u2cn3pztGn9hWvMEVW7Z5i7sJbnC9unIoHs6GskVX63a/6S9Cu6EXXKE/z9fqHFeN8eeafcwf2bkYv1HXRHya3MEAjrniyOcp6bsacyW3Q/+oIa7eATcmbzDiihi4/EjdYOjKA2R5RX1PQ1dHiFtTdzTinhCX/ANG3E/E7dy7okfc3P3nK1vETaiHLOz5raF7oa5K2PNrD5NDN6fELDpOGtBg8ubi4zOzRqwtfSVE66BouhnroPLjdV+K6qHWB291f4hpT/XQ2+cqS51MsBbndVKbdPjnagPiD86fg/tnXSmUUnr8+el2xMcNO5OrSPvY84iWl82uHFIlUca+X+Ggbr+30jwvfrGPtf8uZLJyNsrVu4tZ7knUBfUoepyiKvtYNjZLpn0H/orX+4+lNq+btz+3fBSYXI+uapCafZXbhQkDiWs2uDok3uOjO4VrsBnoIz0KE7gpNgGdBN3tfd09FN+zvGuRm+t1t0GWU/NUyLzhdXfhTp4GmZ697q4I0mAvLnfRz2sCt5r9uDnoaD8ud+h2dZ7n9cJDdbDvaCq3LFqhjJFNhNSlaUEjdc/FvdRKxXLkBLDnR+J202onsXUsWLeTuNnsCtjC/WwvZClce5PJlPAcF65dbyRSoewHicCtQWE30LVrMIEL91zS8499QuD2YPCFk04XbgOqK7LlZ59E4MJ5G7Ll58D9AK6AW6v2AO3G3Xpw4+AGN7jBDW5wgxvc4AY3uMH9b93f/T/OuvVgtsZlcp5fHFw6ac0+oY8EN7jBJXHBHrwXN3rb+wvk351bE5UzDgZP95GD6uYLzt9nKGtD1Tv6htXx9r7V0fP7VuM3B69VvvL5fln7eL+Mv+F9ui9i2zhyS9fQTwAAAABJRU5ErkJggg==" alt="" />

            <div className="header_search">
            <SearchIcon />
                <input placeholder='Search' type="text" />
            </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption avatar={true}
            title="me" onClick={logoutOfApp}/>
        </div>

    </div>
  )
}

export default Header