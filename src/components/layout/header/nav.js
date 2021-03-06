import { isEmpty } from 'lodash';
import Link from 'next/link';
import { useState } from 'react';

const Nav = ({ header, headerMenu }) => {

    if ( isEmpty( headerMenu ) ) {
        return null;
    }

    const [ isMenuVisible, setMenuVisibility ] = useState( false );

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button 
                            type="button"
                            onClick={ () => setMenuVisibility( !isMenuVisible ) }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto mr-4" src={header?.siteLogoUrl} alt="Workflow" width="48" />
                            <img className="hidden lg:block h-8 w-auto mr-4" src={header?.siteLogoUrl} alt="Workflow" />
                            <div className="flex flex-col text-white">
                                <span className="font-semibold text-xl tracking-tight">{ header?.siteTitle }</span>
                                <span>{ header?.siteTagLine }</span>
                            </div>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            {headerMenu?.length ? (
                                <div className="flex space-x-4">
                                    { headerMenu?.map( menu => (
                                        <Link key={ menu?.node?.id } href={menu?.node?.path}>
                                            <a className="text-white px-3 py-2 rounded-md text-sm font-medium">{ menu?.node?.label }</a>
                                        </Link>
                                    ) ) }
                                </div>
                            ) : null }
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${ isMenuVisible ? 'max-h-full' : 'h-0' } overflow-hidden sm:hidden`} id="mobile-menu">
                {headerMenu?.length ? (
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        { headerMenu?.map( menu => (
                            <Link key={ menu?.node?.id } href={menu?.node?.path}>
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{ menu?.node?.label }</a>
                            </Link>
                        ) ) }
                    </div>
                ) : null }
            </div>
        </nav>
    );
}

export default Nav;