import styles from "./Footer.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import * as SOCIAL_LINKS from "../../constants/SocialLinks";

export function Footer() {
  // TODO: Do a reverse spin when in mouseLeave
  return (
    <footer className={styles.footerContainer}>
      <LinkedInIcon
        className={styles.footerContainerSocialIcon}
        fontSize="large"
        onClick={() => window.open(SOCIAL_LINKS.LINKEDIN_PROFILE_URL)}
      />
      <GitHubIcon
        className={styles.footerContainerSocialIcon}
        fontSize="large"
        onClick={() => window.open(SOCIAL_LINKS.GITHUB_PROFILE_URL)}
      />
    </footer>
  );
}
