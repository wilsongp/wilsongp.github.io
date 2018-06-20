import React from 'react';

import githubLogo from '../assets/github-logo.png';
import linkedinLogo from '../assets/linkedin-logo.png';

export const githubUrl = 'https://github.com/wilsongp';
export const linkedinUrl = 'https://www.linkedin.com/in/wilsongp/';

export const SocialLinks = (props) => (
  <div className="row">
    <div className="col-sm-6 p-3">
      <a href={githubUrl} target="_blank">
        <img src={githubLogo} />
      </a>
    </div>
    <div className="col-sm-6 p-3">
      <a href={linkedinUrl} target="_blank">
        <img src={linkedinLogo} />
      </a>
    </div>
  </div>
);
