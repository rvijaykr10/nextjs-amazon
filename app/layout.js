import "../styles/globals.css";

export const metadata = {
  title: "Next JS | Amazon",
  description: "Amazon clone using Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
