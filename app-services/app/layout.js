import "./globals.css";
import "@/app/asset/css/global.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>App Tranfer Token</title>
      </head>
      <body >
        {children}
      </body>
    </html>
  );
}
