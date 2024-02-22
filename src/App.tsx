import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Promotion, { loadPromotionItems } from './components/Promotion';
import { HomeLayout } from './layouts/HomeLayout';
import MenuOffer, { loadMenuItems } from './pages/menu/MenuOffer';
import MenuError from './pages/menu/MenuError';
import MenuLayout from './layouts/MenuLayout';

// const appStyle: React.CSSProperties = {
//   width: "90%",
//   margin: "auto"
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Promotion/>,
        loader: loadPromotionItems
      },
      {
        path: "/menu",
        element: <MenuLayout/>,
        errorElement: <MenuError/>,
        children: [
          {
            path: ":meal",
            loader: loadMenuItems,
            element: <MenuOffer/>
          }
        ]
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;