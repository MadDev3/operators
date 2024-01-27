import "./globals.css";
import StyledComponentsRegistry from './lib/registry'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </html>
  );
}
