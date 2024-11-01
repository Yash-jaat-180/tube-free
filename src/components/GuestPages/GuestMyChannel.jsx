import React from "react";
import GuestComponent from "./GuestComponent";
import { icons } from "../../assets/Icons";
function GuestMyChannel() {
    return (
        <GuestComponent
            title="Create Your Own Channel"
            subtitle="Share your voice with the world. Sign in to get started."
            icon={<span className="w-full h-full flex items-center p-2">{icons.MyContent}</span>}
            route="/"
        />
    );
}

export default GuestMyChannel;