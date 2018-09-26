import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SocialIcons extends Component {
  render() {
    return (
      <div className="flex social-icons">
        <SocialIcon
          link='https://twitter.com/dylansheffer'
          icon={['fab', 'twitter']}
          label='View Twitter Page'
          className="social-icon__twitter"
        />
        <SocialIcon
          link='https://twitch.tv/dylansheffer'
          icon={['fab', 'twitch']}
          label='View Twitch Page'
          className="social-icon__twitch"
        />
        <SocialIcon
          link='https://github.com/dylansheffer/'
          icon={['fab', 'github']}
          label='View GitHub Page'
          className="social-icon__github"
        />
        <SocialIcon
          link='https://www.youtube.com/channel/UCMV62k2QwuAN3jumdmv4caQ'
          icon={['fab', 'youtube']}
          label='View Youtube Page'
          className="social-icon__youtube"
        />
      </div>
    )
  }
}

const SocialIcon = ({ link, icon, label, className }) => (
    <a className={`social-icon ${className}`} href={ link } aria-label={ label } >
        <FontAwesomeIcon icon={icon} />
    </a>
)
