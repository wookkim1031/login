import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Spinner from '../components/Spinner.js';


//lazy importing page components
const Layout = lazy(() => import('../layout/Layout.js'));

const LoginForm = lazy(() => import('../pages/LoginForm.js'));

const MainPage = lazy(() => import('../pages/MainPage.js'));

const ErrorPage = lazy(() => import('../pages/ErrorPage.js'));

const SubPage = lazy(() => import('../pages/SubPage.js'));

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
                <Route path='subPage' element={<SubPage />} />
                {/* error page */}
                <Route
                  path='*'
                  element={<ErrorPage text={'Page not found!'} />}
                />
                
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
    </React.StrictMode>
  );
};

export default Router;