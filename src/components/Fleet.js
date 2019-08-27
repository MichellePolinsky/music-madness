import React, { Component } from 'react'
import Foxes from '../Images/FLEET-jumbo.jpg'
import Crack from '../Images/cu.jpeg'

export class Fleet extends Component {
  render() {
    return (
      <>
        <main className="fleet-main">
          <h1 className="band-name">Fleet Foxes</h1>

          <div className="band-img">
            <img src={Foxes} alt="Fleet Foxes" />
          </div>
          <div className="album-img">
            <img src={Crack} alt="Crack-Up" />{' '}
          </div>
          <footer>
            <h3 className="album"> Latest Album: Crack-Up (2017)</h3>
          </footer>
        </main>
      </>
    )
  }
}

export default Fleet
