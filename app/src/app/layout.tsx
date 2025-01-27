import type { ReactNode } from "react";
import { Provider } from "jotai";

import "./globals.css";

type LayoutProps = {
  children: ReactNode;
};

function AppLayout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <Provider>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default AppLayout;
