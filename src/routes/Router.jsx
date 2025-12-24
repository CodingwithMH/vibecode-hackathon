import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Index from "../pages/Index"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"",
          element:<Index/>
        },
      ]
    }
  ]
)

export default router
