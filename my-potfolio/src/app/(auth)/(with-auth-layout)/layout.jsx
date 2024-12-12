
export default function RootLayout({ children }) {
    return (
      <>
        <h2>Inner Layout</h2>
          {children}
        </>
    );
  }