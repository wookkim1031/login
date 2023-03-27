import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner.js';
import Protected from '../components/Protected';


//lazy importing page components
const Layout = lazy(() => import('../layout/Layout.js'));


const MainPage = lazy(() => import('../pages/MainPage.js'));

const ErrorPage = lazy(() => import('../pages/ErrorPage.js'));

const AboutUs = lazy(() => import('../pages/AboutUs.js'));

const Signin = lazy(() => import('../pages/Signin.jsx'));

const Notice = lazy(() => import('../pages/Notice.js'));

const Account = lazy(() => import('../pages/Account'));

const Router = () => {

  return (
    <React.StrictMode>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route
                path='/'
                element={<Layout />}
              >
                
                <Route index element={<MainPage />} exact />
                <Route path='aboutus' element={<AboutUs />} />
                <Route path='notice' element={<Notice />} />
                <Route path='login' element={<Signin />} />
                <Route path='account' 
                element={
                <Protected>
                    <Account /> 
                </Protected>} 
                />
              </Route>
              {/* no matching route */}
              <Route
                  path='*'
                  element={<ErrorPage text={'Page not found!'} />}
                />
            </Routes>
          </Suspense>
        </BrowserRouter>
    </React.StrictMode>
  );
};

export default Router;