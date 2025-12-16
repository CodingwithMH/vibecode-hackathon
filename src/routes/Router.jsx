import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Shop from "../pages/ShopCategory"
import LandingPage from "../pages/LandingPage"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"",
          element:<LandingPage/>
        },
        {
          path:"/category/:categoryName",
          element:<Shop/>
        }
      ]
    }
  ]
)

export default router
