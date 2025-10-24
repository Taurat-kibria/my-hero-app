import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/root/Root.jsx';
import Home from './pages/Home/Home.jsx';
import Apps from './pages/Apps/Apps.jsx';
import Installation from './pages/Installation/Installation.jsx';
import CardDetails from './components/CardDetails/CardDetails.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('/data8.json'),
        path: '/',
        Component: Home
      },
      {
        path: 'apps',
        loader: () => fetch('/data20.json'),
        Component: Apps
      },
      {
        path: 'installation',
        Component: Installation
      },
      {
        path: 'cardDetais/:Id',
        loader: ({ params }) => fetch('/data20.json')
          .then(res => res.json())
          // .then(data => console.log(params.Id, data))
          // .then(data => data.map(d=>console.log(d.id)))
          .then(datas => datas.find(data => data.id === parseInt(params.Id)))
        ,
        Component: CardDetails
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
