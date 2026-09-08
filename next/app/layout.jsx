// app/layout.js
export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>
              <header>le header du site</header>
              {children}
              <footer>2026 footer</footer>
            </body>
        </html>
    );
}