"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="shell error-state">
      <p className="eyebrow">Something went wrong</p>
      <h1>Unable to render the portfolio right now.</h1>
      <p>
        {error.message ||
          "An unexpected rendering error occurred. Please try again."}
      </p>
      <button className="button button-primary" onClick={reset} type="button">
        Try Again
      </button>
    </main>
  );
}
