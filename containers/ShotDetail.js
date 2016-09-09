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
      <div class="the-shot" >
        <div class="single group">
          <div class="single-grid">
            <div class="single-img">
              <img src="https://d13yacurqjgara.cloudfront.net/users/57127/screenshots/2950378/becomeseller2.gif" alt="Becomeseller2"/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderDesc() {
    return (
      <div class="shot-desc">
        <p>Hello dribbblers,</p>
        <p>Become a seller at MarketMe and enjoy many incredible features created to give you the best experience. One of them is the Dashboard that you can use to manage your products, your sales and track the feedbacks.</p>
        <p><a href="http://www.market-me.fr/" rel="nofollow noreferrer">MarketMe V3</a></p>
      </div>
    )
  }

  renderComments() {
    return (
      <div id="comments-section">
        <h2 class="count section ">
          7 Responses
        </h2>
        <div class="comments-sort">
            <a class="oldest selected" href="/shots/2950378-Become-Seller?comments_sort=oldest">oldest</a>
            <a class="newest " href="/shots/2950378-Become-Seller?comments_sort=newest">newest</a>
            <a class="liked " href="/shots/2950378-Become-Seller?comments_sort=liked">liked</a>
        </div>
        <ol id="comments" class="comments">
          <li id="comment-5558831" class="response comment group " data-user-id="499731">
            <h2>
              <a class="url hoverable" rel="contact" href="/kalee"><img class="photo" src="https://d13yacurqjgara.cloudfront.net/users/499731/avatars/small/0c0c6bcc5b08375cf9cd57e6f449e1e2.png?1463147584"/> Ka Lee</a>
            </h2>
            <div class="comment-body">
              <p>This is beautiful! Great flow! </p>
            </div>
            <span class="comment-meta-likes">
              <a class="likes-list" href="/comments/5558831/likes">2</a><span class="hide">likes</span>
            </span>
            <p class="comment-meta">
            <a href="#comment-5558831" class="posted">about 12 hours ago</a>
              <span class="sep">|</span>
                <a class="likes" href="/comments/5558831/likes">Like?</a>
            </p>
          </li>
          <li id="comment-5559013" class="response comment group " data-user-id="371472">
            <h2>
              <a class="url hoverable" rel="contact" href="/borderbabe2412"><img class="photo" src="https://d13yacurqjgara.cloudfront.net/users/371472/avatars/small/a4160ddac21f0f65b96b8871e32a43c0.jpg?1453169928"/> Tayler Dea</a>
            </h2>
            <div class="comment-body">
              <p>Its beautiful!</p>
            </div>
            <span class="comment-meta-likes">
              <a class="likes-list" href="/comments/5559013/likes">1</a><span class="hide">likes</span>
            </span>
            <p class="comment-meta">
              <a href="#comment-5559013" class="posted">about 11 hours ago</a>
              <span class="sep">|</span>
              <a class="likes" href="/comments/5559013/likes">Like?</a>
            </p>
          </li>
        </ol>
      </div>
    )
  }

  renderShotStats() {
    return (
      <ul class="shot-stats">
        <li>
          <a class="stats-action like-shot" data-fav-toggle="shot" title="Like this shot" href="/afghlhellp/likes?screenshot_id=2950860-Sun-Scouts-Unite">
            <img src="https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-like-6a1e9e9db48b9b788639f05a658379b7bb027a75d256127f812bf9392664396f.png" alt="Icon shotstat like"/>
            <span class="stats-label">Like?</span>
          </a>
          <a class="likes-count stats-num" href="/shots/2950860-Sun-Scouts-Unite/fans">
            209
            <span class="stats-num-label">
              likes
            </span>
          </a>
        </li>
        <li class="shot-stats-share">
          <a href="#" class="stats-action share-shot">
            <img src="https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-share-128ae71c26985fc7325ac5362aba434686f12fdfffa45ed874262a19f923b071.png" alt="Icon shotstat share"/>
            <span class="stats-label">Share</span>
          </a>
          <span class="views-count stats-num">
            2,466
            views
          </span>
        </li>
        <li data-bucket-container="true">
          <a class="stats-action bucket-shot" data-bucket-add="true" href="/shots/2950860-Sun-Scouts-Unite/bucketings/new">
            <img src="https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-bucket-18e67c2d1dc7d2d6ad6f863b1c34e685ed23da9be0cb204f16598ed149e20b9e.png" alt="Icon shotstat bucket"/>
            <span class="stats-label">Bucket</span>
          </a>
          <a class="buckets-count stats-num" href="/shots/2950860-Sun-Scouts-Unite/buckets">
            5
            <span class="stats-num-label">
              buckets
            </span>
          </a>
      </li>
      <li class="shot-stats-colors">
        <a rel="tipsy" class="stats-action" href="/shots/2950860-Sun-Scouts-Unite/colors.aco" original-title="Download this color palette (.aco)"><img width="20" height="20 " src="https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-drop-0152bfcbd3cb7ed50e73b830df47c754f061a376a662eac8841ad45316598d97.png" alt="Icon shotstat drop"/></a>
          <ul class="color-chips group">
            <li class="color"><span>#FFFFFF</span></li>
            <li class="color"><span>#FFD21F</span></li>
            <li class="color"><span>#F89B23</span></li>
            <li class="color"><span>#686A47</span></li>
            <li class="color"><span>#EE524E</span></li>
            <li class="color"><span>#9F9FB9</span></li>
            <li class="color"><span>#FDE4D1</span></li>
            <li class="color"><span>#F8D39B</span></li>
          </ul>
        </li>
      </ul>
    )
  }

  renderRelatedPlayerShots() {
    return (
      <div class="related-player-shots">
        <div class="follow-prompt compact">
          <a class="follow" rel="tipsy" href="/JustinMezzell/followers" original-title="Follow Justin Mezzell">
            <span>Follow</span>
          </a>
          <a class="unfollow" rel="tipsy" href="/JustinMezzell/followers/JustinMezzell" original-title="Unfollow Justin Mezzell">
            <span>Following</span>
          </a>
          <a class="unblock" data-hover="Unblock" href="/blocks/JustinMezzell">
            Blocked
          </a>
        </div>
        <h3 class="meta-head">
          <a href="/JustinMezzell">
            More from Justin Mezzell
          </a>
        </h3>
        <ol class="more-thumbs">
          <li class="multi-thumb">
            <a href="/shots/2948321-Super-Team-Deluxe-Super-Club">
              <img alt="Super™ Team™ Deluxe™ Super Club™™" src="https://d13yacurqjgara.cloudfront.net/users/13774/screenshots/2948321/superclub_teaser.png"/>
            </a>
          </li>
          <li class="multi-thumb">
            <a href="/shots/2917372-Super-Team-Deluxe-I-Choose-You">
              <img alt="Super Team Deluxe: I Choose You" src="https://d13yacurqjgara.cloudfront.net/users/13774/screenshots/2917372/std-ichooseyou_teaser.jpg"/>
            </a>
          </li>
          <li class="multi-thumb">
            <a href="/shots/2908884-I-Saw-It-On-Twitch-Pokedex">
              <img alt="I Saw It On Twitch: Pokedex" src="https://d13yacurqjgara.cloudfront.net/users/13774/screenshots/2908884/pokedex-dribbble_teaser.png"/>
            </a>
          </li>
          <li class="multi-thumb">
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
      <div class="tags-section">
        <h3 class="meta-head">Tags</h3>
        <ol id="tags" class="popular-tags">
          <li id="tag-li-501" class="tag"><strong>badge</strong></li>
          <li id="tag-li-7093" class="tag"><strong>boy</strong></li>
          <li id="tag-li-40797" class="tag"><strong>cub</strong></li>
          <li id="tag-li-1296" class="tag"><strong>happy</strong></li>
          <li id="tag-li-225" class="tag"><strong>illustration</strong></li>
          <li id="tag-li-6539" class="tag"><strong>scout</strong></li>
          <li id="tag-li-713" class="tag"><strong>smile</strong></li>
          <li id="tag-li-3907" class="tag"><strong>sun</strong></li>
        </ol>
      </div>
    )
  }
}

export default connect()(ShotDetail)
