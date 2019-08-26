import React, { Component } from 'react'
import BSS from '../Images/bss-1.png'
import Hug from '../Images/hug.jpeg'

export class Broken extends Component {
  render() {
    return (
      <>
        <main>
          <h1 className="band-name">Broken Social Scene</h1>

          <div className="band-img">
            <img src={BSS} alt="Broken Social Scene" />
          </div>
          <div className="album-img">
            <img src={Hug} alt="Hug of Thunder" />
          </div>
          <footer>
            <h3 className="album"> Latest Album: Hug of Thunder (2017)</h3>
          </footer>
        </main>
      </>
    )
  }
}

export default Broken
