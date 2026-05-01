import './globals.css';

export const metadata = {
  title: 'Ritik Kumar Bharti | Full Stack Developer',
  description: 'Professional portfolio of Ritik Kumar Bharti, a Full Stack Developer building scalable web applications and real-world solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
