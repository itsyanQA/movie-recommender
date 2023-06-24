import styles from "./Footer.module.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Footer() {
  // TODO: Do a reverse spin when in mouseLeave
  return (
    <footer className={styles.footerContainer}>
      <LinkedInIcon
        className={styles.footerContainerSocialIcon}
        fontSize="large"
        onClick={() => window.open(process.env.REACT_APP_LINKEDIN)}
      />
      <GitHubIcon
        className={styles.footerContainerSocialIcon}
        fontSize="large"
        onClick={() => window.open(process.env.REACT_APP_GITHUB)}
      />
    </footer>
  );
}
