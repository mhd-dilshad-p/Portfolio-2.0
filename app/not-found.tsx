import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell error-state">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p>The page you requested does not exist in this portfolio.</p>
      <Link className="button button-primary" href="/">
        Return Home
      </Link>
    </main>
  );
}
