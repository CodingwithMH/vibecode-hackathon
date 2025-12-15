import { useState, useEffect } from "react"

const images = [
  "https://www.bellababy.co.uk/media/wysiwyg/banner/Maxi-cosi_desktop_uk_banner.jpg",
  "https://www.bellababy.co.uk/media/wysiwyg/banner/Cocoona_Baby_Desktop_UK_banner.jpg",
  "https://www.bellababy.co.uk/media/wysiwyg/banner/Uppa_baby_desktop_banner_uk.jpg",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="mx-auto py-8 w-full">
      <div className="relative h-[60vh] overflow-hidden rounded-base">

        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

      </div>
    </section>
  )
}
