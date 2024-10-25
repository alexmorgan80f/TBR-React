import React from 'react'

import { Helmet } from 'react-helmet'

import './desktop.css'

const Desktop = (props) => {
  return (
    <div className="desktop-container1">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="desktop-container2">
        <div className="desktop-container3">
          <img
            alt="image"
            src="/external/tiny%20blue%20rocket.svg"
            className="desktop-image1"
          />
        </div>
      </div>
      <div className="desktop-container4">
        <h1 className="desktop-text1">We have closed!</h1>
        <span className="desktop-text2">
          <span>Tiny Blue Rocket as a web agency has closed.</span>
          <br></br>
          <span>
            We are no longer about to help you get your perfect website.
          </span>
        </span>
      </div>
      <div className="desktop-container5">
        <img
          alt="image"
          src="/external/peopleworkingtogetherwebsite12001-lxf8-1200w.png"
          className="desktop-image2"
        />
      </div>
    </div>
  )
}

export default Desktop
