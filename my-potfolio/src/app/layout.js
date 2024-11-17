import '../styles/globals.css'

import Link from 'next/link'; // Import Link for client-side navigation

export const metadata = {
  title: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='main'>
        <header>
          <nav className='navBar'>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>Footer Content</footer>
      </body>
    </html>
  );
}
