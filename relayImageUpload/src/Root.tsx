import React, { ReactNode, Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";

import { ScreenLoader } from "./components";

import { environment } from "./constants";

interface RootProps {
  children: ReactNode;
}

const Root = ({ children }: RootProps) => (
  <RelayEnvironmentProvider {...{ environment }}>
    <Suspense fallback={<ScreenLoader />}>{children}</Suspense>
  </RelayEnvironmentProvider>
);

export default Root;
