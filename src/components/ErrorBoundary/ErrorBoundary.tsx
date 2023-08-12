import { ErrorBoundaryResetButton } from "../../styled/ErrorBoundaryResetButton";
import { ErrorMessage } from "../../styled/ErrorMessage";
import styles from "./ErrorBoundary.module.scss";

type ErrorBoundaryProps = {
  error: string;
  resetErrorBoundary: any;
};

export default function ErrorBoundary({ error, resetErrorBoundary }: ErrorBoundaryProps) {
  return (
    <div className={styles.errorBoundary}>
      <p className={styles.errorBoundaryText}>Oops, an error occured</p>
      <ErrorMessage>{error.toString()}</ErrorMessage>
      <ErrorBoundaryResetButton onClick={resetErrorBoundary} sx={{ marginTop: "30px" }}>
        Refresh
      </ErrorBoundaryResetButton>
    </div>
  );
}
