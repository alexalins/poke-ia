import './globals.css';

export const metadata = {
  title: 'PokeIA',
  description: 'Pokedex digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
