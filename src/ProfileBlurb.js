import React from 'react'

const ProfileBlurb = (props) => {
  return (
    <div className="ProfileBlurb">
      <h1 className="Name">{props.person.name}</h1>
      <p className="Bio">{props.person.biography}</p>
      {/* <div className="Quote">
      <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
      <div className="byline">&mdash; {this.props.quote.source}</div>
      </div> */}
    </div>
)

}
export default ProfileBlurb;