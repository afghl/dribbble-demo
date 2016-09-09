import React, { Component } from 'react'
import { connect } from 'react-redux'

class ShotDetail extends Component {
  render() {
    return (
      <div className="shot-detail">
        {this.renderTitle()}
        <div className="main-shot zoomable">
          {this.renderShotImage()}
          <div className="screenshot-info-wrapper">
            <div className="screenshot-conversation">
              {this.renderDesc()}
              {this.renderComments()}
            </div>
            <div className="screenshot-meta">
              {this.renderShotStats()}
              {this.renderRelatedPlayerShots()}
              {this.renderTagSession()}
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderTitle() {
    return (
      <div id="screenshot-title-section" className="full">
        <div className="slat-header user ">
          <h1>Become Seller</h1>

          <h2 className="shot-byline">
            <span className="attribution ">
              <span className="shot-byline-user">
                by <a className="url hoverable" rel="contact" href="javascript:;">Barthelemy Chalvet</a>
              </span>
            </span>

            <span className="attribution">
              <span className="shot-byline-project">
                in <a href="/BarthelemyChalvet/projects/311677-MarketMe">MarketMe</a>
              </span>
            </span>

            <span className="shot-byline-date">
              on <a href="/shots?date=2016-09-08">Sep 8, 2016</a>
            </span>
          </h2>

        </div>
      </div>
    )
  }

  renderShotImage() {
    return (
      <div className="the-shot" >
        <div className="single group">
          <div className="single-grid">
            <div className="single-img">
              <img src="https://d13yacurqjgara.cloudfront.net/users/57127/screenshots/2950378/becomeseller2.gif" alt="Becomeseller2"/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderDesc() {
    return (
      <div className="shot-desc">
        <p>Hello dribbblers,</p>
        <p>Become a seller at MarketMe and enjoy many incredible features created to give you the best experience. One of them is the Dashboard that you can use to manage your products, your sales and track the feedbacks.</p>
        <p><a href="http://www.market-me.fr/" rel="nofollow noreferrer">MarketMe V3</a></p>
      </div>
    )
  }

  renderComments() {
    return (
      <div id="comments-section">
        <h2 className="count section ">
          7 Responses
        </h2>
        <div className="comments-sort">
            <a className="oldest selected" href="/shots/2950378-Become-Seller?comments_sort=oldest">oldest</a>
            <a className="newest " href="/shots/2950378-Become-Seller?comments_sort=newest">newest</a>
            <a className="liked " href="/shots/2950378-Become-Seller?comments_sort=liked">liked</a>
        </div>
        <ol id="comments" className="comments">
          <li id="comment-5558831" className="response comment group " data-user-id="499731">
            <h2>
              <a className="url hoverable" rel="contact" href="/kalee"><img className="photo" src="https://d13yacurqjgara.cloudfront.net/users/499731/avatars/small/0c0c6bcc5b08375cf9cd57e6f449e1e2.png?1463147584"/> Ka Lee</a>
            </h2>
            <div className="comment-body">
              <p>This is beautiful! Great flow! </p>
            </div>
            <span className="comment-meta-likes">
              <a className="likes-list" href="/comments/5558831/likes">2</a><span className="hide">likes</span>
            </span>
            <p className="comment-meta">
            <a href="#comment-5558831" className="posted">about 12 hours ago</a>
              <span className="sep">|</span>
                <a className="likes" href="/comments/5558831/likes">Like?</a>
            </p>
          </li>
          <li id="comment-5559013" className="response comment group " data-user-id="371472">
            <h2>
              <a className="url hoverable" rel="contact" href="/borderbabe2412"><img className="photo" src="https://d13yacurqjgara.cloudfront.net/users/371472/avatars/small/a4160ddac21f0f65b96b8871e32a43c0.jpg?1453169928"/> Tayler Dea</a>
            </h2>
            <div className="comment-body">
              <p>Its beautiful!</p>
            </div>
            <span className="comment-meta-likes">
              <a className="likes-list" href="/comments/5559013/likes">1</a><span className="hide">likes</span>
            </span>
            <p className="comment-meta">
              <a href="#comment-5559013" className="posted">about 11 hours ago</a>
              <span className="sep">|</span>
              <a className="likes" href="/comments/5559013/likes">Like?</a>
            </p>
          </li>
        </ol>
      </div>
    )
  }

  renderShotStats() {
    return (
      <ul className="shot-stats">
        <li>
          <a className="stats-action like-shot" data-fav-toggle="shot" title="Like this shot" href="/afghlhellp/likes?screenshot_id=2950860-Sun-Scouts-Unite">
            <img src="https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-like-6a1e9e9db48b9b788639f05a658379b7bb027a75d256127f812bf9392664396f.png" alt="Icon shotstat like"/>
            <span className="stats-label">Like?</span>
          </a>
          <a className="likes-count stats-num" href="/shots/2950860-Sun-Scouts-Unite/fans">
            209
            <span className="stats-num-label">
              likes
            </span>
          </a>
        </li>
        <li className="shot-stats-share">
          <a href="#" className="stats-action share-shot">
            <img src="https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-share-128ae71c26985fc7325ac5362aba434686f12fdfffa45ed874262a19f923b071.png" alt="Icon shotstat share"/>
            <span className="stats-label">Share</span>
          </a>
          <span className="views-count stats-num">
            2,466
            views
          </span>
        </li>
        <li data-bucket-container="true">
          <a className="stats-action bucket-shot" data-bucket-add="true" href="/shots/2950860-Sun-Scouts-Unite/bucketings/new">
            <img src="https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-bucket-18e67c2d1dc7d2d6ad6f863b1c34e685ed23da9be0cb204f16598ed149e20b9e.png" alt="Icon shotstat bucket"/>
            <span className="stats-label">Bucket</span>
          </a>
          <a className="buckets-count stats-num" href="/shots/2950860-Sun-Scouts-Unite/buckets">
            5
            <span className="stats-num-label">
              buckets
            </span>
          </a>
      </li>
      <li className="shot-stats-colors">
        <a rel="tipsy" className="stats-action" href="/shots/2950860-Sun-Scouts-Unite/colors.aco" original-title="Download this color palette (.aco)"><img width="20" height="20 " src="https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-drop-0152bfcbd3cb7ed50e73b830df47c754f061a376a662eac8841ad45316598d97.png" alt="Icon shotstat drop"/></a>
          <ul className="color-chips group">
            <li className="color"><span>#FFFFFF</span></li>
            <li className="color"><span>#FFD21F</span></li>
            <li className="color"><span>#F89B23</span></li>
            <li className="color"><span>#686A47</span></li>
            <li className="color"><span>#EE524E</span></li>
            <li className="color"><span>#9F9FB9</span></li>
            <li className="color"><span>#FDE4D1</span></li>
            <li className="color"><span>#F8D39B</span></li>
          </ul>
        </li>
      </ul>
    )
  }

  renderRelatedPlayerShots() {
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

  renderTagSession() {
    return (
      <div className="tags-section">
        <h3 className="meta-head">Tags</h3>
        <ol id="tags" className="popular-tags">
          <li id="tag-li-501" className="tag">badge</li>
          <li id="tag-li-7093" className="tag">boy</li>
          <li id="tag-li-40797" className="tag">cub</li>
          <li id="tag-li-1296" className="tag">happy</li>
          <li id="tag-li-225" className="tag">illustration</li>
          <li id="tag-li-6539" className="tag">scout</li>
          <li id="tag-li-713" className="tag">smile</li>
          <li id="tag-li-3907" className="tag">sun</li>
        </ol>
      </div>
    )
  }
}

export default connect()(ShotDetail)
