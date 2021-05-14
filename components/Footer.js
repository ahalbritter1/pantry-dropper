import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import footerStyles from '../styles/Footer.module.css';

export default function SectionFooter() {
  return (
    <footer className={footerStyles.footer}>
    <p>Some footer nonsense!</p>
    <div className={footerStyles.footerIcons}>

<a href="www.facebook.com" target="_blank"><FacebookIcon /></a>
<a href="www.twitter.com" target="_blank"><TwitterIcon /></a>
<a href="www.linkedin.com" target="_blank"><LinkedInIcon /></a>
<a href="www.github.com" target="_blank"><GitHubIcon /></a>

</div>
  </footer>
    )
};