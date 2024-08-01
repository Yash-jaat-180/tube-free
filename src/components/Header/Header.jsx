import React, { useRef } from 'react'
import { icons } from '../../assets/Icons'
import Logout from '../Atom/Logout'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate, Link } from 'react-router-dom'

function Header() {
    const { userData, status: authstatus } = useSelector(({ auth }) => auth)

    const navigate = useNavigate();
    const searchInputRef = useRef();
    const smallSearchInputRef = useRef();

    const username = userData?.username;

    function handleSearchQuery(input) {
        let searchQuery = input.trim();
        if (!searchQuery) {
            searchInputRef.current.focus();
            return;
        }
        navigate(`/results?search_query=${searchQuery}`);
    }

    const sideMenu = [
        {
            name: "Home",
            route: "/",
            logo: icons.Home
        },
        {
            name: "Tweets",
            route: "/tweets",
            logo: icons.Tweets
        },
        {
            name: "Liked Video",
            route: "/liked-video",
            logo: icons.LikedVideo
        },
        {
            name: "History",
            route: "/history",
            logo: icons.History
        },
        {
            name: "Playlists",
            route: `channal/${username}/playlists`,
            className: `${username ? "" : "hidden"}`,
            logo: icons.Playlists
        },
        {
            name: "Admin",
            route: "/admin/dashboard",
            className: `${username ? "" : "hidden"}`,
            logo: icons.Admin
        },
        {
            name: "Subscribers",
            route: "/subscribers",
            logo: icons.Subscribers
        },
        {
            name: "Support",
            route: "/support",
            isActive: true,
            logo: icons.Support,
        },
        {
            name: "Setting",
            route: "/setting",
            logo: icons.Setting,
        },

    ]
    return (
        <div className="h-screen overflow-y-auto bg-[#121212] text-white">
            <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] ">
                <nav className="flex mx-auto items-center py-2 px-4">
                    <Logo />
                    <form
                        className='w-full hidden max-w-lg mx-auto sm:inline-flex'
                        onSubmit={(event) => {
                            event.preventDefault();
                            handleSearchQuery(searchInputRef.current.value);
                        }}
                    >
                        <div className="relative hidden w-full max-w-md overflow-hidden sm:block ">
                            <input
                                ref={searchInputRef}
                                className="w-full border bg-transparent py-1 pl-8 pr-3 placeholder-white outline-none sm:py-2 focus:border-[#ae7aff]"
                                placeholder="Search" />
                            <span className="absolute left-2.5 top-1/2 inline-block -translate-y-1/2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-4">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                                </svg>
                            </span>
                        </div>
                        <button
                            type='submit'
                            className='border-r border-b border-t rounded-r-xl px-3 py-1 bg-transparent hover:text-[#ae7aff] hover:bg-gray-500/10'
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 size-full">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                            </svg>
                        </button>
                    </form>

                    {/* For Small Devices search form  */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSearchQuery(smallSearchInputRef.current.value)
                        }}
                        className='sm:hidden items-start w-full border rounded-r-2xl'
                    >
                        <div className="relative w-full max-w-lg overflow-hidden ">
                            <input
                                ref={smallSearchInputRef}
                                className="w-full  bg-transparent py-1 pl-2 pr-3 placeholder-white outline-none focus:border-[#ae7aff]"
                                placeholder="Search"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 hover:text-[#ae7aff] top-1/2 inline-block -translate-y-1/2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-6 w-6 size-full">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                                </svg>
                            </button>
                        </div>
                    </form>

                    <button className="group peer ml-4 flex w-6 shrink-0 flex-wrap gap-y-1.5 sm:hidden">
                        <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
                        <span className="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
                        <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
                    </button>
                    {/* When clicked on sidemenu icon  */}
                    <div
                        className="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col border-l border-white bg-[#121212] duration-200 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
                        <div className="relative flex w-full items-center justify-between border-b border-white px-4 py-2 sm:hidden">
                            <span className="inline-block w-12">
                                <svg
                                    style={{ width: "100%" }}
                                    viewBox="0 0 63 64"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z"
                                        stroke="#E9FCFF"
                                        strokeWidth="1.38962"
                                        strokeMiterlimit="10"></path>
                                    <path
                                        d="M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z"
                                        stroke="url(#paint0_linear_53_10115)"
                                        strokeWidth="6.99574"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"></path>
                                    <path
                                        d="M18.1915 27.6963C20.1641 27.6963 21.7285 28.7066 21.7285 30.9021C21.7285 33.0976 20.1621 34.2433 18.1915 34.2433H16.8854V37.8677H14.1733V27.6984H18.1915V27.6963Z"
                                        fill="#E9FCFF"></path>
                                    <path
                                        d="M25.2053 27.6963V35.4868H28.484V37.8657H22.4932V27.6963H25.2053Z"
                                        fill="#E9FCFF"></path>
                                    <path
                                        d="M35.3142 27.6963L39.4553 37.8657H36.5328L35.9162 36.1763H32.1939L31.5773 37.8657H28.6548L32.7959 27.6963H35.3101H35.3142ZM34.9143 33.5663L34.2144 31.7832C34.1582 31.6395 33.954 31.6395 33.8978 31.7832L33.1979 33.5663C33.1541 33.6767 33.2354 33.7975 33.3562 33.7975H34.756C34.8747 33.7975 34.958 33.6767 34.9143 33.5663Z"
                                        fill="#E9FCFF"></path>
                                    <path
                                        d="M40.9491 27.6963L42.8592 30.5188L44.7694 27.6963H48.0355L44.2132 33.2559V37.8657H41.5011V33.2559L37.6787 27.6963H40.9449H40.9491Z"
                                        fill="#E9FCFF"></path>
                                    <path
                                        d="M16.894 32.1396V29.9129C16.894 29.8212 16.9982 29.7671 17.0732 29.8191L18.6771 30.9315C18.7417 30.9773 18.7417 31.0731 18.6771 31.1189L17.0732 32.2313C16.9982 32.2834 16.894 32.2313 16.894 32.1375V32.1396Z"
                                        fill="#232323"></path>
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_53_10115"
                                            x1="2.23416"
                                            y1="20.3361"
                                            x2="26.863"
                                            y2="44.9649"
                                            gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#007EF8"></stop>
                                            <stop
                                                offset="1"
                                                stopColor="#FF4A9A"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>

                            {/* <button className="inline-block w-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </button> */}
                        </div>
                        <ul className="my-4 flex w-full flex-wrap gap-2 px-4 sm:hidden">
                            {sideMenu.map((item, index) => (
                                <li key={index} className={`${item.className} w-full`}>
                                    <NavLink
                                        to={item.route}
                                        key={item.name}
                                        end
                                        className={({ isActive }) => {
                                            `${isActive && "text-[#ae7aff] sm:bg-[#ae7aff] sm:text-black"} flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-white sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black  lg:px-4`
                                        }}
                                    >
                                        <button
                                            className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                                            <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                                                {item.logo}
                                            </span>
                                            <span>{item.name}</span>
                                        </button>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {authstatus ? (
                            <div className='mb-8 mt-auto px-4 sm:mb-0 sm:mt-0 sm:px-0'>
                                <Link
                                    to={`/channal/${userData.username}`}
                                    className='flex w-full gap-4 text-left sm:items-center'
                                >
                                    <img
                                        src={userData.avatar}
                                        alt="avatar"
                                        className='h-16 w-16 shrink-0 rounded-full sm:h-12 sm:w-12'
                                    />
                                    <div className="w-full pt-2 sm:hidden">
                                        <h6 className="font-semibold">{userData.fullName}</h6>
                                        <p className="text-sm text-gray-300">@{userData.username}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                            : (

                                <div className="mb-8 mt-auto flex w-full flex-wrap gap-4 px-4 sm:mb-0 sm:mt-0 sm:items-center sm:px-0">
                                    <Link
                                        to={"/login"}
                                    >
                                        <button className="w-full bg-[#383737] px-3 py-2 hover:bg-[#4f4e4e] sm:w-auto sm:bg-transparent">Log in</button>
                                    </Link>
                                    <Link to={"/signup"}>
                                        <button
                                            className="mr-1 w-full bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                                            Sign up
                                        </button>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                    {authstatus && <Logout/>}
                </nav>
            </header>
            <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
                <aside
                    className="group fixed inset-x-0 bottom-0 z-40 w-full shrink-0 border-t border-white bg-[#121212] px-2 py-2 sm:absolute sm:inset-y-0 sm:max-w-[70px] sm:border-r sm:border-t-0 sm:py-6 sm:hover:max-w-[250px] lg:sticky lg:max-w-[250px]">
                    <ul className="flex justify-around gap-y-2 sm:sticky sm:top-[106px] sm:min-h-[calc(100vh-130px)] sm:flex-col">
                        { sideMenu.map((item,index) => (
                            <Link
                            to={index}
                            route={item.route}
                            >
                            <li key={item.route} className="">
                            <button
                                className="flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-black sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black sm:group-hover:justify-start sm:group-hover:px-4 lg:justify-start lg:px-4">
                                <span className="inline-block w-5 shrink-0 sm:group-hover:mr-4 lg:mr-4">
                                    {item.logo}
                                </span>
                                <span className="block sm:hidden sm:group-hover:inline lg:inline">{item.name}</span>
                            </button>
                        </li>
                        
                        </Link>
                        ))}
                        
                    </ul>
                </aside>
            </div>
        </div >

    )
}

export default Header
