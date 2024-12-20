import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSubscription } from '../../app/Slice/subscriptionSlice';
import LoginPopup from '../Auth/LoginPopup';
import { Link } from 'react-router-dom';
import { formatSubscription } from '../../helper/formatFigures';

function SubscriptionUser({ profile }) {
  const dispatch = useDispatch();
  const loginPopupDialog = useRef();

  const { status: authStatus } = useSelector(({ auth }) => auth);

  const [isSubscribed, setIsSubscribed] = useState(profile.isSubscribed);

  async function handleToggleSubscription() {
    if (!authStatus) return loginPopupDialog.current?.open();
    dispatch(toggleSubscription(profile._id));
    setIsSubscribed((prev) => !prev);
  }

  return (
    <>
      <LoginPopup ref={loginPopupDialog} message="Sign in to Subscribe..." />
      <li key={profile._id} className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <div className="h-14 w-14 shrink-0">
            <Link to={`/user/${profile.username}`}>
              <img
                src={profile.avatar}
                alt={profile.username}
                className="h-full w-full rounded-full"
              />
            </Link>
          </div>
          <div className="block">
            <h6 className="font-semibold">
              <Link to={`/user/${profile.username}`}>{profile.fullName}</Link>
            </h6>
            <p className="text-sm text-gray-300">{formatSubscription(profile.subscribersCount)}</p>
          </div>
        </div>
        <div className="block">
          <button
            onClick={handleToggleSubscription}
            className={`px-3 py-2 text-black ${isSubscribed ? "bg-[#ae7aff]" : "bg-white"} `}
          >
            <span>{isSubscribed ? "Subscribed" : "Subscribe"}</span>
          </button>
        </div>
      </li>
    </>
  )
}

export default SubscriptionUser
