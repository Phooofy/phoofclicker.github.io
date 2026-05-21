export const metadata = {
  title: "Cookie Site",
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