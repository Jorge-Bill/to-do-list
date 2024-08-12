import { Inter } from "next/font/google";
import { ReduxProvider } from './redux-provider';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jorge Mendes - To do's List",
  description: "Created with love by Jorge Mendes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
