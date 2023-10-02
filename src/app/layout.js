import Header from '../Components/Header/Header';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
