"use client";

import { MantineProvider } from "@mantine/core";
import { theme as baseTheme } from "@repo/ui/theme";
import { store } from "./store/app.store";
import { Provider } from "react-redux";
import Shell from '@repo/ui/shell'
export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={baseTheme}>
      <Provider store={store}>
        <body>
          <Shell children = {children}/>
        </body>
      </Provider>
    </MantineProvider>
  );
}
