import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, Suspense } from "solid-js";
import "./app.css";
import ErrorComponent from "./components/Error";

export default function App() {
  return (
    <Router
      root={props => (
        <ErrorBoundary fallback={errorThrown => <ErrorComponent code={errorThrown}/>}>
          <MetaProvider>
            <Title>SolidStart - Basic</Title>
            <a href="/">Index</a>
            <a href="/about">About</a>
            <Suspense fallback="Navigating...">{props.children}</Suspense>
          </MetaProvider>
        </ErrorBoundary>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
