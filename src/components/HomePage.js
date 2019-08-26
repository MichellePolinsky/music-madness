import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HomePage extends Component {
  render() {
    return (
      <>
        <div className="h1">
          <h1>Music Madness!!!</h1>
        </div>
        <h2 className="h2">Three of my Favorite Bands</h2>

        <ul className="band-info">
          <li>
            <Link to="/rainbow">Rainbow Kitten Surprise</Link>
            <p>
              Rainbow Kitten Surprise is an alternative rock indie band,
              featuring lead vocalist Sam Melo, Darrick “Bozzy” Keller (guitar,
              backup vocals), Ethan Goodpaster (electric guitar), Jess Haney
              (drums), and Charlie Holt (bass). Members hail from Boone, North
              Carolina as well as Robbinsville, North Carolina (Jess Haney and
              Ethan Goodpaster). The music of Rainbow Kitten Surprise, also
              known as “RKS,” is known for its harmonies, instrumentation and
              lyrics, and its sound has been influenced by artists Modest Mouse,
              Kings of Leon, Frank Ocean and Schoolboy Q.
            </p>
          </li>
          <li>
            <Link to="/broken">Broken Social Scene</Link>
            <p>
              Broken Social Scene is a Canadian indie rock band, a musical
              collective including as few as six and as many as nineteen
              members, formed by Kevin Drew and Brendan Canning.[1] Most of its
              members play in various other groups and solo projects, mainly in
              the city of Toronto. These associated acts include Metric, Feist,
              Stars, Apostle of Hustle, Do Make Say Think, KC Accidental, Emily
              Haines & The Soft Skeleton, Amy Millan, and Jason Collett.[2] The
              group's sound combines elements of all of its members' respective
              musical projects, and is occasionally considered baroque pop. It
              includes grand orchestrations featuring guitars, horns, woodwinds,
              and violins, unusual song structures, and an experimental, and
              sometimes chaotic production style from David Newfeld, who
              produced the second and third albums.
            </p>
          </li>
          <li>
            <Link to="/fleet">Fleet Foxes</Link>
            <p>
              Fleet Foxes is an American rock band formed in Seattle,
              Washington.[5] Their first two albums were released by Sub Pop and
              Bella Union, with their third by Nonesuch and Bella Union. The
              band came to prominence in 2008 with the release of their second
              EP, Sun Giant, and their self-titled debut album. Both received
              much critical praise and reviewers often noted the band's use of
              refined lyrics and vocal harmonies. Fleet Foxes' second studio
              album, Helplessness Blues, was released on May 3, 2011, and their
              third album, Crack-Up, was released on June 16, 2017.
            </p>
          </li>
        </ul>
      </>
    )
  }
}
export default HomePage
