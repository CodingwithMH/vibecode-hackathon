const Infobar = () => {
  return (
    <>
     <div className="w-[90%] text-sm px-4 py-4 mx-auto flex items-center justify-around">
            <span className="flex items-center gap-2">
              <span>📦</span> Free click & collect
            </span>
            <span className="flex items-center gap-2">
              <span>🚚</span> Free delivery over £49*
            </span>
            <span className="flex items-center gap-2">
              <span>↩️</span> 30 Day returns
            </span>
          <div className="flex items-center gap-2">
            <img src="https://www.bellababy.co.uk/media/wysiwyg/feefo-score-icon.png" alt="" />
          </div>
      </div> 
    </>
  )
}

export default Infobar
