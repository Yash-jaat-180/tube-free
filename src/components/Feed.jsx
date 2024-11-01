import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

function Feed() {
    return (
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
            <Aside />
            <Outlet />
        </div>
    );
}

export default Feed;