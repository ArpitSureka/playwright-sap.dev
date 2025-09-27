import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

// Any SAP UI • Any Platform • One API
// Native support for SAP UI5, WebGUI, and Fiori apps without extra setup.
// Works everywhere: Windows, Linux, macOS, in the cloud or on CI/CD.
// Familiar Playwright API across TypeScript, JavaScript, Python, .NET, Java.
// 100% open source, no vendor lock-in, no hidden license costs.

// SAP-Native Locators • Smarter Codegen
// Purpose-built locators for UI5 controls and WebGUI elements — no brittle XPath.
// Enhanced Codegen that generates SAP-aware selectors automatically.
// Ships with a UI5 extension and helpers for auto login and session handling.
// Supports code styles similar to WDI5 and even SAP GUI scripting, so teams can reuse skills.

// Reliable • Flake-Free • CI-Ready
// Understands SAP rendering cycles — auto-wait means fewer flaky tests.
// Save and reuse authentication state. Log in once, test many flows.
// Browser contexts deliver full isolation and fast, parallel execution.
// Designed for modern CI/CD pipelines — run thousands of SAP tests at scale.

// Powerful • Cost-Saving Tooling
// Inspector: debug SAP pages, locators, and step through execution.
// Trace Viewer: screenshots, DOM snapshots, action explorer for failures.
// All the tooling you expect from Playwright, tuned for SAP.
// No need to pay for Tricentis, Worksoft, or other costly SAP test tools — Playwright-SAP is free.


const features = [
  {
    title: "Any SAP UI • Any Platform • One API",
    description: (
      <>
        <p>Native support for SAP UI5, WebGUI, and Fiori apps without extra setup.</p>
        <p>Works everywhere: Windows, Linux, macOS, in the cloud or on CI/CD.</p>
        <p>Familiar Playwright API across TypeScript, JavaScript, Python, .NET, Java.</p>
        <p>100% open source, no vendor lock-in, no hidden license costs.</p>
      </>
    ),
  },
  {
    title: "SAP-Native Locators • Smarter Codegen",
    description: (
      <>
        <p>Purpose-built locators for UI5 controls and WebGUI elements — no brittle XPath.</p>
        <p>Enhanced Codegen that generates SAP-aware selectors automatically.</p>
        <p>Ships with a UI5 extension and helpers for auto login and session handling.</p>
        <p>Supports code styles similar to WDI5 and even SAP GUI scripting, so teams can reuse skills.</p>
      </>
    ),
  },
  {
    title: "Reliable • Flake-Free • CI-Ready",
    description: (
      <>
        <p>Understands SAP rendering cycles — auto-wait means fewer flaky tests.</p>
        <p>Save and reuse authentication state. Log in once, test many flows.</p>
        <p>Browser contexts deliver full isolation and fast, parallel execution.</p>
        <p>Designed for modern CI/CD pipelines — run thousands of SAP tests at scale.</p>
      </>
    ),
  },
  {
    title: "Powerful • Cost-Saving Tooling",
    description: (
      <>
        <p>Inspector: debug SAP pages, locators, and step through execution.</p>
        <p>Trace Viewer: screenshots, DOM snapshots, action explorer for failures.</p>
        <p>All the tooling you expect from Playwright, tuned for SAP.</p>
        <p>No need to pay for Tricentis, Worksoft, or other costly SAP test tools — Playwright-SAP is free.</p>
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
        <div style={{ 
          textAlign: 'center', 
          marginTop: 5, 
          marginBottom: 5,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          padding: '0 20px'
        }}>
          <img 
            style={{ 
              height: 'clamp(80px, 15vw, 110px)',
              maxWidth: '100%',
              objectFit: 'contain'
            }} 
            src="https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg" 
            alt="SAP Logo" 
          />
          <img 
            style={{ 
              height: 'clamp(100px, 18vw, 140px)',
              maxWidth: '100%',
              objectFit: 'contain'
            }} 
            src="img/B_OpenUI5_V.svg" 
            alt="OpenUI5 Logo" 
          />
          {/* WEBGUI pseudo-logo */}
          <div
            style={{
              padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 20px)',
              background: 'linear-gradient(135deg,#53B8DE,#054a91)',
              borderRadius: 8,
              color: '#fff',
              fontFamily: 'Segoe UI, Roboto, Helvetica, Arial, sans-serif',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              minWidth: 'fit-content'
            }}
            aria-label="SAP GUI for HTML (WEBGUI)"
          >
            <div style={{ 
              fontSize: 'clamp(24px, 6vw, 42px)', 
              fontWeight: 700, 
              letterSpacing: 1 
            }}>
              WEBGUI
            </div>
            <div style={{ 
              fontSize: 'clamp(10px, 2.5vw, 14px)', 
              fontWeight: 400, 
              letterSpacing: 1.5, 
              textTransform: 'uppercase', 
              opacity: 0.9 
            }}>
              sap gui for HTML
            </div>
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