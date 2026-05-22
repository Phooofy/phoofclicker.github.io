export const metadata = {
  title: "Network settings",
  description: "My game site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}