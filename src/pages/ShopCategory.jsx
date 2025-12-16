import { useParams } from "react-router-dom"
import ShopHero from "../components/ShopHero"

const ShopCategory = () => {
  const {categoryName} = useParams();
  return (
    <>
    <ShopHero category={categoryName}/>
    </>
  )
}

export default ShopCategory
