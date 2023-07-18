import styles from "./Footer.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import * as SOCIAL_LINKS from "../../constants/SocialLinks";

export function Footer() {
  const iconStyle = {
    color: "#ffffff",
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContainerIcons}>
        <LinkedInIcon
          className={styles.footerContainerSocialIcon}
          fontSize="large"
          onClick={() => window.open(SOCIAL_LINKS.LINKEDIN_PROFILE_URL)}
          sx={iconStyle}
        />
        <GitHubIcon
          className={styles.footerContainerSocialIcon}
          fontSize="large"
          onClick={() => window.open(SOCIAL_LINKS.GITHUB_PROFILE_URL)}
          sx={iconStyle}
        />
      </div>
      <span className={styles.footerContainerFullName}>Yan Eliyahu</span>
    </footer>
  );
}
