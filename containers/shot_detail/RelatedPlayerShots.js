import React, { Component } from 'react'

export default class ShotDetailRelatedPlayerShots extends Component {
  render() {
    return (
      <div className="related-player-shots">
        <h3 className="meta-head">
          <a href="/JustinMezzell">
            More from Justin Mezzell
          </a>
        </h3>
        <ol className="more-thumbs">
          <li className="multi-thumb">
            <a href="/shots/2948321-Super-Team-Deluxe-Super-Club">
              <img alt="Super™ Team™ Deluxe™ Super Club™™" src="https://d13yacurqjgara.cloudfront.net/users/13774/screenshots/2948321/superclub_teaser.png"/>
            </a>
          </li>
          <li className="multi-thumb">
            <a href="/shots/2917372-Super-Team-Deluxe-I-Choose-You">
              <img alt="Super Team Deluxe: I Choose You" src="https://d13yacurqjgara.cloudfront.net/users/13774/screenshots/2917372/std-ichooseyou_teaser.jpg"/>
            </a>
          </li>
          <li className="multi-thumb">
            <a href="/shots/2908884-I-Saw-It-On-Twitch-Pokedex">
              <img alt="I Saw It On Twitch: Pokedex" src="https://d13yacurqjgara.cloudfront.net/users/13774/screenshots/2908884/pokedex-dribbble_teaser.png"/>
            </a>
          </li>
          <li className="multi-thumb">
            <a href="/shots/2908014-On-Sticker-Mule-Marketplace">
              <img alt="On Sticker Mule Marketplace" src="https://d13yacurqjgara.cloudfront.net/users/13774/screenshots/2908014/stickers_teaser.png"/>
            </a>
          </li>
        </ol>
      </div>
    )
  }
}
