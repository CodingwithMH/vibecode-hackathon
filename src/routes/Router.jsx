import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Index from "../pages/Index"
import UploadPage from "../pages/UploadPage"
import QuizzesPage from "../pages/QuizzesPage"

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
        {
          path:"/upload",
          element:<UploadPage/>
        },
        {
          path:"/quizzes",
          element:<QuizzesPage/>
        },
      ]
    }
  ]
)

export default router
