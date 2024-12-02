import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import FeedVideos from './pages/FeedVideos.jsx'
import Feed from './components/Feed.jsx'
import AuthLayout from './components/Auth/AuthLayout.jsx'
import GuestTweets from './components/GuestPages/GuestTweets.jsx'
import FeedTweets from './pages/FeedTweets.jsx'
import PlaylistVideos from './components/Playlist/PlaylistVideos.jsx'
import Channel from './pages/Channel.jsx'
import ChannelVideos from './components/Video/ChannelVideos.jsx'
import ChannelPlaylist from './components/Playlist/ChannelPlaylist.jsx'
import ChannelTweets from './components/Tweet/ChannelTweets.jsx'
import ChannelSubscribed from './components/Subscription/ChannelSubscribed.jsx'
import AboutChannel from './components/Channel/AboutChannel.jsx'
import GuestComponent from './components/GuestPages/GuestComponent.jsx'
import SearchResult from './pages/SearchResult.jsx'
import GuestHistory from './components/GuestPages/GuestHistory.jsx'
import History from './pages/History.jsx'
import GuestLikedVideos from './components/GuestPages/GuestLikedVideos.jsx'
import LikedVideos from './pages/LikedVideos.jsx'
import GuestSubscribers from './components/GuestPages/GuestSubscribers.jsx'
import Setting from './pages/Setting.jsx'
import Support from './pages/Support.jsx'
import VideoDetail from './pages/VideoDetail.jsx'
import GuestAdmin from './components/GuestPages/GuestAdmin.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './components/Auth/Login.jsx'
import Signup from './components/Auth/Signup.jsx'
import PageNotFound from './components/Atom/PageNotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}>
        <Route path='' element={<Feed />}>

          {/* Home page feet videos  */}
          <Route path='' element={<FeedVideos />} />

          {/* Home page tweet tweets  */}
          <Route
            path='tweets'
            element={
              <AuthLayout authentication guestComponent={<GuestTweets />}>
                <FeedTweets />
              </AuthLayout>
            }
          />

          {/* a specific playlist videos  */}
          <Route path='playlist/:playlistId' element={<PlaylistVideos />} />

          {/* All Other Channel  */}
          <Route path='user/:username' element={<Channel />}>
            <Route path="" element={<ChannelVideos owner={false} />} />
            <Route path="playlists" element={<ChannelPlaylist owner={false} />} />
            <Route path="tweets" element={<ChannelTweets />} owner={false} />
            <Route path="subscribed" element={<ChannelSubscribed owner={false} />} />
            <Route path="about" element={<AboutChannel owner={false} />} />
          </Route>

          {/* Owning my channel(currently logged in user)  */}
          <Route
            path="channel/:username"
            element={
              <AuthLayout authentication guestComponent={<GuestComponent />}>
                <Channel owner />
              </AuthLayout>
            }
          >
            <Route path="" element={<ChannelVideos owner />} />
            <Route path="tweets" element={<ChannelTweets owner />} />
            <Route path="playlists" element={<ChannelPlaylist owner />} />
            <Route path="subscribed" element={<ChannelSubscribed owner />} />
            <Route path="about" element={<AboutChannel owner />} />
          </Route>

          {/* Search Results  */}
          <Route path='/results' element={<SearchResult />} />

          {/* User Feed history  */}
          <Route
            path="feed/history"
            element={
              <AuthLayout authentication guestComponent={<GuestHistory />}>
                <History />
              </AuthLayout>
            }
          />

          {/* Liked Videos  */}
          <Route
            path="feed/liked"
            element={
              <AuthLayout authentication guestComponent={<GuestLikedVideos />}>
                <LikedVideos />
              </AuthLayout>
            }
          />

          {/* <Subscribers /> */}
          <Route
            path="feed/subscribers"
            element={
              <AuthLayout authentication guestComponent={<GuestSubscribers />}>
                <ChannelSubscribed owner isSubscribers />
              </AuthLayout>
            }
          />

          {/* Settings */}
          <Route
            path="settings"
            element={
              <AuthLayout authentication>
                <Setting />
              </AuthLayout>
            }
          />

          {/* Support */}
          <Route path="support" element={<Support />} />
        </Route>

        {/* Video Watching  */}
        <Route path="/watch/:videoId" element={<VideoDetail />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <AuthLayout authentication guestComponent={<GuestAdmin />}>
              <Dashboard />
            </AuthLayout>
          }
        />
      </Route>

      {/* Login  */}
      <Route
        path="/login"
        element={
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        }
      />

      {/* Sign up */}
      <Route
        path="/signup"
        element={
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        }
      />

      {/* 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

