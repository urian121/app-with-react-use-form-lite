import { Inter, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/globals.css";
import "../assets/css/spinner.css";


// Importa Inter en vez de Geist Sans
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "react-use-form-lite",
  description: "Un Custom Hook moderno, intuitivo, liviano y flexible para manejar formularios en React sin dependencias adicionales. Permite una implementación rápida y sin complicaciones, con soporte para inputs, selects, radios, checkboxes, archivos ¡y mucho más!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Un Custom Hook moderno, intuitivo, liviano y flexible para manejar formularios en React sin dependencias adicionales." />
        <meta name="keywords" content="React, formularios, custom hook, liviano, flexible, inputs, selects, checkboxes" />
        <meta name="author" content="Urian Viera" />
        <meta property="og:title" content="react-use-form-lite" />
        <meta property="og:description" content="Un Custom Hook moderno, intuitivo, liviano y flexible para manejar formularios en React sin dependencias adicionales." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://react-use-form-lite.vercel.app" />
        <meta property="og:image" content="https://react-use-form-lite.vercel.app/vercel.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="react-use-form-lite" />
        <meta name="twitter:description" content="Un Custom Hook moderno, intuitivo, liviano y flexible para manejar formularios en React sin dependencias adicionales." />
        <meta name="twitter:image" content="https://react-use-form-lite.vercel.app/vercel.svg" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="9TeFPJ3zVrzEe3QuHvmXgzbrlbZArTV6xt_FiEk5Of0" />
        <title>react-use-form-lite</title>
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}