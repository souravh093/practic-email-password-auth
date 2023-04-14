import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menu = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Login',
            path: '/login'
        },
        {
            name: 'Register',
            path: '/register'
        }

    ]
    return (
        <div className='bg-gray-700 py-5 px-52 flex items-center justify-between text-gray-100'>
            <div className='text-3xl font-semibold'>
                Fennecs
            </div>
            <div className='flex gap-10'>
                {
                    menu.map((menuItem, index) => <Link key={index} to={menuItem.path}>{menuItem.name}</Link>)
                }
            </div>
        </div>
    );
};

export default Header;