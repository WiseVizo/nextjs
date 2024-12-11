import '../../../styles/globals.css'

import Link from 'next/link'; // Import Link for client-side navigation

export const metadata = {
  title: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <>
        {children}
        <h2>Featured blogs</h2>
      </>
  );
}
