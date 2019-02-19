// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { isPrivacyBannerClosed, onPrivacyBannerClosed } from '../../util';

import Close from '../../assets/images/cross_white.svg';

import styles from './index.module.scss';

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
    // trackEvent('Privacy', 'Privacy Banner Closed', '');

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
      <div className={`${styles.privacyBanner} ${hidden ? '' : styles.visible}`}>
        <div className="max-width-container">
          <div className={styles.innerContainer}>
            <p>
              We use cookies to give you the best experience possible. By continuing we’ll assume
              you’re on board with our
              <Link to="/privacy-policy">
                &nbsp;cookie policy.
              </Link>
            </p>
            <img src={Close} alt="Close" className={styles.acceptButton} onClick={this.closeButton} />
          </div>
        </div>
      </div>
    );
  }
}

export default PrivacyBanner;
