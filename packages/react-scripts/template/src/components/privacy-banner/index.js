// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { trackEvent } from 'react-with-analytics';
import { isPrivacyBannerClosed, onPrivacyBannerClosed } from '../../util';

import Close from '../../assets/images/cross_white.svg';

import './index.css';

interface Props {
}

interface State {
  hidden: boolean,
}

class PrivacyBanner extends React.Component<Props, State> {
  state = {
    hidden: isPrivacyBannerClosed(),
  };

  closeButton = () => {
    trackEvent('Privacy', 'Privacy Banner Closed', '');

    onPrivacyBannerClosed();

    this.setState({
      hidden: true,
    });
  };

  render() {
    const {
      hidden,
    } = this.state;

    return (
      <div className={`privacy-banner ${hidden ? '' : 'visible'}`}>
        <div className="max-width-container grid-container">
          <div className="col-full inner-container">
            <p className="privacy-text">
              We use cookies to give you the best experience possible. By continuing we’ll assume
              you’re on board with our
              <Link to="/privacy-policy">
                &nbsp;cookie policy.
              </Link>
            </p>
            <img src={Close} alt="close" className="accept-btn" onClick={this.closeButton} />
          </div>
        </div>
      </div>
    );
  }
}

export default PrivacyBanner;
