import React, { Component } from 'react'
import RKS from '../Images/kitty.jpg'
import How from '../Images/how.jpeg'

export class Rainbow extends Component {
  render() {
    return (
      <>
        <main>
          <h1 className="band-name">Rainbow Kitten Surprise</h1>

          <div className="band-img">
            <img src={RKS} alt="Rainbow Kitten Surprise" />
          </div>
          <div className="album-img">
            <img className="album" src={How} alt="album cover" />
          </div>
          <footer>
            <h3 className="album">
              Latest Album: How To: Friend, Love, Freefall (2018)
            </h3>
          </footer>
        </main>
      </>
    )
  }
}

export default Rainbow
