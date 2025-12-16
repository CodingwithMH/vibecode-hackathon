const ShopHero = ({category}) => {
  return (
    <>
     <div className="bg-linear-to-r from-gray-100 to-gray-200 rounded-lg p-8 mb-8 relative px-32">
          <h1 className="text-4xl text-center font-semibold text-gray-700 mb-4 capitalize">{category.replace("_"," ")}</h1>
          <div className="max-w-3xl">
            <h2 className="text-gray-600 text-lg mb-2">Prams and Pushchairs</h2>
            <p className="text-gray-600 mb-2">Find the Perfect Pram, Pushchair or Buggy at Bella Baby</p>
            <p className="text-gray-600 text-sm">
              Picking the perfect pram or pushchair for your little one can be overwhelming for new parents with so many
              different things to consider and
            </p>
            <button className="text-gray-600 text-sm underline mt-2">See more</button>
          </div> 
          </div>
    </>
  )
}

export default ShopHero
