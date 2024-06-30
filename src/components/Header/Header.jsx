import Input from '../Input'
import React from 'react'
import Button from '../Button'
import { icons } from '../../assets/Icons'

const sideMenu = [
    {
        name: "Home",
        route: "/",
        isActive: true,
        logo: icons.Home
    },
    {
        name: "Tweets",
        route: "/tweets",
        isActive: true,
        logo: icons.Tweets
    },
    {
        name: "Subscribers",
        route: "/subscribers",
        isActive: true,
        logo: icons.Subscribers
    },
    {
        name: "Liked Video",
        route: "/liked-video",
        isActive: true,
        logo: icons.LikedVideo
    },
    {
        name: "History",
        route: "/history",
        isActive: true,
        logo: icons.History
    },
    {
        name: "Subscriptions",
        route: "subscriptions",
        isActive: true,
        logo: icons.Subscription
    },
    {
        name: "My Content",
        route: "/my-content",
        isActive: true,
        logo: icons.MyContent
    },
    {
        name: "Playlists",
        route: "/playlists",
        isActive: true,
        logo: icons.Playlists
    },
    {
        name: "Admin",
        route: "/admin",
        isActive: true,
        logo: icons.Admin
    },
    {
        name: "Support",
        route: "/support",
        isActive: true,
        logo: icons.Admin,
        bottom: true
    },
    {
        name: "Setting",
        route: "/setting",
        isActive: true,
        logo: icons.Admin,
        bottom: true
    },
    
]

const header = [
    {
        name: "Signup",
        route: "/signup",
        isActive: true
    },
    {
        name: "Login",
        route: "/login",
        isActive: true
    },
    {
        name: "Profile",
        route: "/profile",
        isActive: false
    },
    {
        name: "Logout",
        route: "/logout",
        isActive: false
    },
]

function Header() {
    return (
        <nav>
            <div className='flex justify-between p-1 border-white border-[1px] h-[12vh]'>
                <svg
                    viewBox="0 0 63 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M47.25 47.458C55.9485 38.7595 55.9485 24.6565 47.25 15.958C38.5515 7.25952 24.4485 7.25952 15.75 15.958C7.05151 24.6565 7.05151 38.7595 15.75 47.458C24.4485 56.1565 38.5515 56.1565 47.25 47.458Z"
                        stroke="#E9FCFF"
                        strokeWidth="1.38962"
                        strokeMiterlimit="10"
                    ></path>
                    <path
                        d="M10.5366 47.7971V17.5057C10.5366 16.9599 11.1511 16.6391 11.599 16.9495L33.4166 32.0952C33.8041 32.3639 33.8041 32.9368 33.4166 33.2076L11.599 48.3533C11.1511 48.6657 10.5366 48.3429 10.5366 47.7971Z"
                        stroke="url(#paint0_linear_53_10115)"
                        strokeWidth="6.99574"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                    ></path>
                    <path
                        d="M18.1915 27.6963C20.1641 27.6963 21.7285 28.7066 21.7285 30.9021C21.7285 33.0976 20.1621 34.2433 18.1915 34.2433H16.8854V37.8677H14.1733V27.6984H18.1915V27.6963Z"
                        fill="#E9FCFF"
                    ></path>
                    <path
                        d="M25.2053 27.6963V35.4868H28.484V37.8657H22.4932V27.6963H25.2053Z"
                        fill="#E9FCFF"
                    ></path>
                    <path
                        d="M35.3142 27.6963L39.4553 37.8657H36.5328L35.9162 36.1763H32.1939L31.5773 37.8657H28.6548L32.7959 27.6963H35.3101H35.3142ZM34.9143 33.5663L34.2144 31.7832C34.1582 31.6395 33.954 31.6395 33.8978 31.7832L33.1979 33.5663C33.1541 33.6767 33.2354 33.7975 33.3562 33.7975H34.756C34.8747 33.7975 34.958 33.6767 34.9143 33.5663Z"
                        fill="#E9FCFF"
                    ></path>
                    <path
                        d="M40.9491 27.6963L42.8592 30.5188L44.7694 27.6963H48.0355L44.2132 33.2559V37.8657H41.5011V33.2559L37.6787 27.6963H40.9449H40.9491Z"
                        fill="#E9FCFF"
                    ></path>
                    <path
                        d="M16.894 32.1396V29.9129C16.894 29.8212 16.9982 29.7671 17.0732 29.8191L18.6771 30.9315C18.7417 30.9773 18.7417 31.0731 18.6771 31.1189L17.0732 32.2313C16.9982 32.2834 16.894 32.2313 16.894 32.1375V32.1396Z"
                        fill="#232323"
                    ></path>
                    <defs>
                        <linearGradient
                            id="paint0_linear_53_10115"
                            x1="2.23416"
                            y1="20.3361"
                            x2="26.863"
                            y2="44.9649"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#007EF8"></stop>
                            <stop offset="1" stopColor="#FF4A9A"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <form className='flex m-[1vw] justify-center items-center border-white border-[1px] rounded-r-md'>
                    <div className='flex justify-center items-center'>
                        <div>
                            <svg
                                fill="black"
                                viewBox="0 0 16 16"
                                height="1em"
                                width="2em"
                            >
                                <path className='fill-white w-7' d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder='Search'
                            className='outline-none bg-transparent p-[0.7vw] text-white w-[25vw]'
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="border-l-[1px] border-white px-[0.7vw] py-[0.3vw] bg-transparent hover:text-[#ae7aff] hover:bg-gray-500/10 text-white"
                        >
                            <div className="size-6 sm:size-8 flex items-center ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="size-full"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    ></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </form>
                <div className='flex items-center justify-center px-[0.4vw]'>
                    <div className='w-[3vw] h-[6.7vh] bg-white rounded-full mr-[0.6vw]'>

                    </div>
                    <Button
                        content={"Logout"}
                        textColor={"black"}
                        className='bg-[#ae7aff] hover:bg-[#F87171] text-[1.2vw] font-bold mr-[0.6vw] rounded-sm'
                    />
                </div>
            </div>
            <div className='w-[18vw] h-screen bg-transparent border-[1px] border-white py-[0.7vw] px-[0.5vw]' >
                {sideMenu.map((value, index) => (
                    value.isActive && value.bottom === undefined ?
                        <ul>
                            <div className='bg-transparent text-white border-white border-[1px] py-[0.5vw] px-[0.8vw] my-[0.6vw] flex items-center'>
                                <div className='mr-[0.4vw]'>{value.logo}</div>
                                <li key={index}>
                                    {value.name}
                                </li>
                            </div>

                        </ul> : null
                        
                ))}

            </div>
        </nav>
    )
}

export default Header
