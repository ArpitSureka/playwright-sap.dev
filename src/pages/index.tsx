import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Any browser \u2022 Any platform \u2022 One API",
    description: <>
      <p>
        <b>Cross-browser.</b> Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.
      </p>
      <p>
        <b>Cross-platform.</b> Test on Windows, Linux, and macOS, locally or on CI, headless or headed.
      </p>
      <p>
        <b>Cross-language.</b> Use the Playwright API in <a
        href="https://playwright.dev/docs/intro">TypeScript</a>, <a
        href="https://playwright.dev/docs/intro">JavaScript</a>, <a
        href="https://playwright.dev/python/docs/intro">Python</a>, <a
        href="https://playwright.dev/dotnet/docs/intro">.NET</a>, <a
        href="https://playwright.dev/java/docs/intro">Java</a>.
      </p>
      <p>
        <b>Test Mobile Web.</b> Native mobile emulation of Google Chrome for Android and Mobile Safari. The same rendering engine works on your Desktop and in the Cloud.
      </p>
    </>,
  },
  {
  },
  {
  },
  {
    title: "Resilient \u2022 No flaky tests",
    description: (
      <>
        <p>
          <b>Auto-wait.</b> Playwright waits for elements to be actionable prior to performing
          actions. It also has a rich set of introspection events. The combination of the two
          eliminates the need for artificial timeouts - the primary cause of flaky tests.
        </p>
        <p>
          <b>Web-first assertions.</b> Playwright assertions are created specifically for the
          dynamic web. Checks are automatically retried until the necessary conditions are met.
        </p>
        <p>
          <b>Tracing.</b> Configure test retry strategy, capture execution trace, videos, screenshots
          to eliminate flakes.
        </p>
      </>
    ),
  },
  {
    title: "No trade-offs \u2022 No limits",
    description: (
      <>
        <p>
          Browsers run web content belonging to different origins in different processes.
          Playwright is aligned with the modern browsers architecture and runs tests out-of-process.
          This makes Playwright free of the typical in-process test runner limitations.
        </p>
        <p>
          <b>Multiple everything.</b> Test scenarios that span multiple <b>tabs</b>, multiple <b>origins</b> and multiple <b>users</b>.
          Create scenarios with different contexts for different users and run them against your server, all in one test.
        </p>
        <p>
          <b>Trusted events.</b> Hover elements, interact with dynamic controls, produce trusted events.
          Playwright uses real browser input pipeline indistinguishable from the real user.
        </p>
        <p>
          <b>Test frames, pierce Shadow DOM.</b> Playwright selectors pierce shadow DOM and
          allow entering frames seamlessly.
        </p>
      </>
    ),
  },
  {
  },
  {
  },
  {
    title: "Full isolation \u2022 Fast execution",
    description: (
      <>
        <p>
          <b>Browser contexts.</b> Playwright creates a browser context for each test. Browser
          context is equivalent to a brand new browser profile. This delivers full test isolation
          with zero overhead. Creating a new browser context only takes a handful of milliseconds.
        </p>
        <p>
          <b>Log in once.</b> Save the authentication state of the context and reuse it in all the tests.
          This bypasses repetitive log-in operations in each test, yet delivers full isolation of independent tests.
        </p>
      </>
    ),
  },
  {
    title: "Powerful Tooling",
    description: (
      <>
        <p>
          <b><a href="docs/codegen">Codegen.</a></b> Generate tests by recording your actions. Save them into any language.
        </p>
        <p>
          <b><a href="docs/debug#playwright-inspector">Playwright inspector.</a></b> Inspect page, generate selectors, step through the test execution, see click points, explore execution logs.
        </p>
        <p>
          <b><a href="docs/trace-viewer-intro">Trace Viewer.</a></b> Capture all the information to investigate the test failure. Playwright trace
          contains test execution screencast, live DOM snapshots, action explorer, test source, and many more.
        </p>
      </>
    ),
  },
];

type FeatureProps = {
  imageUrl?: string
  title?: string
  description?: React.ReactElement
}

const Feature: React.FC<FeatureProps> = ({ imageUrl, title, description }) => {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--6", styles.feature)} style={{ marginTop: 40 }}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  );
}

type FeatureRowProps = {
  title: string
  description: string
  videoUrl: string
  isImageLeft: boolean
}

const FeatureRow: React.FC<FeatureRowProps> = ({ title, description, videoUrl, isImageLeft }) => {
  const textColumn = (
    <div className={"col col--5"}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
  const imageColumn = (
    <div className={"col col--7"}>
      <video muted controls loop>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
  return (
    <section
      className={clsx(!isImageLeft ? styles.featureContainerAlt : undefined)}
    >
      <div className={"container"}>
        <div
          className={clsx(
            "row",
            styles.featureRow,
            !isImageLeft ? styles.featureRowAlt : undefined
          )}
        >
          {imageColumn}
          {textColumn}
        </div>
      </div>
    </section>
  );
}


const Home: React.FC = () => {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  return (
    <Layout
      title={siteConfig.tagline}
      description="Cross-browser end-to-end testing for modern web apps"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            <span className={styles.highlight}>Playwright-SAP</span> enables
            reliable end-to-end testing and automation for SAP S4.
          </h1>
          <div className={styles.buttons}>
            <Link
              className={styles.getStarted}
              to={useBaseUrl("/intro")}
            >
              Get started
            </Link>
          </div>
        </div>
      </header>
      <br></br>
      <main>
        <br></br>
        <br></br>
        <div style={{textAlign: 'center'}}>
          <img style={{verticalAlign: 'middle'}} src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg" height="120" alt="Browsers (Chromium, Firefox, WebKit)" />
          <img style={{verticalAlign: 'middle'}} src="img/B_OpenUI5_V.svg" height="150" alt="Browsers (Chromium, Firefox, WebKit)" />
          {/* WEBGUI pseudo-logo */}
          <div
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              marginLeft: 40,
              padding: '12px 20px',
              background: 'linear-gradient(135deg,#53B8DE,#054a91)',
              borderRadius: 8,
              color: '#fff',
              fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
            aria-label="SAP GUI for HTML (WEBGUI)"
          >
            <div style={{fontSize: 42, fontWeight: 700, letterSpacing: 1}}>WEBGUI</div>
            <div style={{fontSize: 14, fontWeight: 400, letterSpacing: 1.5, textTransform: 'uppercase', opacity: 0.9}}>sap gui for HTML</div>
          </div>
        </div>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}

export default Home;