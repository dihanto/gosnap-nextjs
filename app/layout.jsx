import { Gabarito } from "next/font/google";
import "./globals.css";
import { Provider } from "./components/login/provider";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Gosnap",
  description: "Unleash yourself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={gabarito.className}>{children}</body>
      </Provider>
    </html>
  );
}
