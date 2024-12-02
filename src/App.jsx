import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { healthCheck } from './app/Slice/healthSlice.js';
import { getCurrentUser } from './app/Slice/authSlice.js';
import { Outlet } from 'react-router-dom';
import thin_loading from './assets/thin_loading.svg'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Add the host command in your package.json and run a cmmnd npm run host and then type thrd url in your mobile then it will start in the mobile browser

function App() {
  const dispatch = useDispatch();

  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    dispatch(healthCheck()).then(() => {
      dispatch(getCurrentUser()).then(() => {
        setInitialLoading(false);
      });
    });
    setInterval(() => {
      dispatch(healthCheck());
    }, 5 * 60 * 1000);
  }, []);

  if (initialLoading)
    return (
      <div className="h-screen w-full  overflow-y-auto bg-[#121212] text-white">
        <div className="flex flex-col items-center justify-center mt-64">
          <img src={thin_loading} alt="" className='w-28' />
          <h1 className="text-3xl text-center mt-8 font-semibold">Please wait...</h1>
          <h1 className="text-xl text-center mt-4">Refresh the page if it takes too long</h1>
        </div>
      </div>
    )

  return (
    <>
      <Outlet />
      <div id="popup-models" className="bg-purple-400 relative"></div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </>
  );
}

export default App
