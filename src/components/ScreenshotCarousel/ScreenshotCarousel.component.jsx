import React, { useState } from "react"

import "./ScreenshotCarousel.styles.scss"

export const ScreenshotCarousel = ({ images }) => {
  const [displayArr, setDisplayArr] = useState([0, 1, 2])

  const scrollCarousel = n => {
    const updatedDisplay = displayArr.map(i => {
      return i + n
    })

    setDisplayArr(updatedDisplay)
  }

  return (
    <div className="screenshot-carousel">
      <button
        className="carousel-arrow-left"
        type="button"
        onClick={() => scrollCarousel(-1)}
      />
      <span className="carousel-content">
        {displayArr.map(el => {
          return (
            <figure>
              <div
                className="carousel-element"
                style={{
                  backgroundImage: `url(${images[el % images.length]}.png)`,
                }}
              />
            </figure>
          )
        })}
      </span>
      <button
        className="carousel-arrow-right"
        type="button"
        onClick={() => scrollCarousel(1)}
      />
    </div>
  )
}
