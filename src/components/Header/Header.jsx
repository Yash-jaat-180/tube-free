import React, { useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { icons } from "../../assets/Icons";
import Logout from "../Atom/Logout";
import Logo from "../Atom/Logo";

function Header() {
    let { userData, status: authStatus } = useSelector(({ auth }) => auth);
    const navigate = useNavigate();
    const searchInputRef = useRef();
    const smallSearchInputRef = useRef();

    function handleSearchQuery(input) {
        let searchQuery = input.trim();
        if (!searchQuery) {
            searchInputRef.current.focus();
            return;
        }
        navigate(`/results?search_query=${searchQuery}`);
    }

    const username = userData?.username;

    const HamburgerMenu = [
        {
            name: "Home",
            route: "",
            icon: icons.Home,
        },
        {
            name: "Liked Videos",
            route: "feed/liked",
            icon: icons.LikedVideo,
        },
        {
            name: "History",
            route: "feed/history",
            icon: icons.History,
        },
        {
            name: "Playlists",
            route: `/channel/${username}/playlists`,
            className: `${username ? "" : "hidden"} `,
            icon: icons.folder,
        },
        {
            name: "Admin",
            route: "/admin/dashboard",
            className: `${username ? "" : "hidden"}`,
            icon: icons.Admin,
        },
        {
            name: "Subscribers",
            route: "feed/subscribers",
            icon: icons.Subscribers,
        },
        {
            name: "Support",
            route: "support",
            icon: icons.Support,
        },
        {
            name: "Settings",
            route: "settings",
            className: `${username ? "" : "hidden"} `,
            icon: icons.Setting,
        },
    ];

    return (
        <header className="sticky inset-x-0 top-0 z-50 w-full border-b border-white bg-[#121212] px-4">
            <nav className="mx-auto flex items-center py-2 w-full">
                <Logo />
                {/* Search bar */}
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        handleSearchQuery(searchInputRef.current.value);
                    }}
                    className="hidden w-full max-w-lg mx-auto sm:inline-flex"
                >
                    <div className="relative w-full max-w-lg overflow-hidden">
                        <input
                            ref={searchInputRef}
                            className="w-full border focus:border-[#ae7aff] bg-transparent py-1 pl-8 pr-3 placeholder-white outline-none sm:py-2"
                            placeholder="Search..."
                        />
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className=" h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                ></path>
                            </svg>
                        </span>
                    </div>
                    <button
                        type="submit"
                        className=" border-r border-b border-t rounded-r-xl px-3 py-1 bg-transparent hover:text-[#ae7aff] hover:bg-gray-500/10"
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
                </form>

                {/* for small devices */}
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        handleSearchQuery(smallSearchInputRef.current.value);
                    }}
                    className="sm:hidden items-start w-full"
                >
                    <div className="relative w-full max-w-lg overflow-hidden">
                        <input
                            ref={smallSearchInputRef}
                            className="w-full border rounded-r-2xl focus:border-[#ae7aff] bg-transparent py-1 pl-2 pr-3 placeholder-white outline-none"
                            placeholder="Search"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 hover:text-[#ae7aff] top-1/2 inline-block -translate-y-1/2"
                        >
                            {icons.search}
                        </button>
                    </div>
                </form>

                {/*Search Button*/}
                {/* <button className="ml-auto sm:hidden">{icons.search}</button> */}

                {/* Hamburger Menu Style*/}
                <button className="group peer ml-4 flex w-6 shrink-0 flex-wrap gap-y-1.5 sm:hidden">
                    <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
                    <span className="block h-[2px] w-2/3 bg-white group-hover:bg-[#ae7aff]"></span>
                    <span className="block h-[2px] w-full bg-white group-hover:bg-[#ae7aff]"></span>
                </button>

                {/* Responsive Mobile View list */}
                <div className="fixed inset-y-0 right-0 flex w-full max-w-xs shrink-0 translate-x-full flex-col border-l border-white bg-[#121212] duration-300 hover:translate-x-0 peer-focus:translate-x-0 sm:static sm:ml-4 sm:w-auto sm:translate-x-0 sm:border-none">
                    <div className="relative flex w-full items-center justify-between border-b border-white px-4 py-2 sm:hidden">
                        <span className="inline-block w-12">{icons.roundCross}</span>
                    </div>
                    <ul className="my-4 flex w-full flex-wrap gap-2 px-4 sm:hidden">
                        {HamburgerMenu.map((item) => (
                            <li key={item.route} className={`${item.className} w-full`}>
                                <NavLink
                                    to={item.route}
                                    key={item.title}
                                    end
                                    className={({ isActive }) =>
                                        `${isActive && "text-[#ae7aff] sm:bg-[#ae7aff] sm:text-black"
                                        } flex flex-col items-center justify-center border-white py-1 focus:text-[#ae7aff] sm:w-full sm:flex-row sm:border sm:p-1.5 sm:hover:bg-[#ae7aff] sm:hover:text-white sm:focus:border-[#ae7aff] sm:focus:bg-[#ae7aff] sm:focus:text-black  lg:px-4`
                                    }
                                >
                                    <button className="flex w-full items-center justify-start gap-x-4 border border-white px-4 py-1.5 text-left hover:bg-[#ae7aff] hover:text-black focus:border-[#ae7aff] focus:bg-[#ae7aff] focus:text-black">
                                        <span className="inline-block w-full max-w-[20px] group-hover:mr-4 lg:mr-4">
                                            {item.icon}
                                        </span>
                                        <span>{item.name}</span>
                                    </button>
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Auth Status */}
                    {authStatus ? (
                        <>
                            <div className="mb-8 mt-auto px-4 sm:mb-0 sm:mt-0 sm:px-0">
                                <Link
                                    to={`/channel/${userData?.username}`}
                                    className="flex w-full gap-4 items-center justify-center sm:items-center"
                                >
                                    <img
                                        src={userData?.avatar}
                                        alt="avatar"
                                        className="h-12 w-12 shrink-0 rounded-full sm:h-12 sm:w-12 mr-3"
                                    />
                                    <div className="w-full pt-2 sm:hidden">
                                        <h6 className="font-semibold">{userData?.fullName}</h6>
                                        <p className="text-sm text-gray-300">@{userData?.username}</p>
                                    </div>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="mb-8 mt-auto flex w-full flex-wrap gap-4 px-4 sm:mb-0 sm:mt-0 sm:items-center sm:px-0">
                            <Link to={"/login"}>
                                <button className="w-full bg-[#383737] px-3 py-2 hover:bg-[#4f4e4e] sm:w-auto sm:bg-transparent">
                                    Log in
                                </button>
                            </Link>
                            <Link to={"/signup"}>
                                <button className="mr-1 w-full bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                                    Sign up
                                </button>
                            </Link>
                        </div>
                    )}
                </div>

                {authStatus && <Logout />}
            </nav>
        </header>
    );
}

export default Header;

// search bar
{
    /* <div className="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
    <div className="relative mx-auto hidden w-full max-w-md overflow-hidden sm:block">
      <input
        className="w-full border bg-transparent py-1 pl-8 pr-3 placeholder-white outline-none sm:py-2"
        placeholder="Search"
      />
      <span className="absolute left-2.5 top-1/2 inline-block -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className=" h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
      </span>
    </div>
    <button className=" border-r border-b border-t rounded-r-xl px-3 py-1 bg-transparent text-[#ae7aff] hover:bg-white/10 hover:text-[#ae7aff]">
      <div className=" size-6 sm:size-8 flex items-center ">
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
  </div>; */
}