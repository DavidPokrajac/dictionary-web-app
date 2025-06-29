import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';

const inconsolata = localFont({
  src: '../../public/assets/fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.woff2',
  variable: '--font-inconsolata-serif'
});

const inter = localFont({
  src: '../../public/assets/fonts/inter/Inter-VariableFont_slnt,wght.woff2',
  variable: '--font-inter-sans'
});

const lora = localFont({
  src: [
    {
      path: '../../public/assets/fonts/lora/Lora-VariableFont_wght.woff2',
      style: 'normal'
    },
    {
      path: '../../public/assets/fonts/lora/Lora-Italic-VariableFont_wght.woff2',
      style: 'italic'
    }
  ],
  variable: '--font-lora-mono'
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Dictionary web app',
  description: 'A frontend project from Frontend Mentor website'
};

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html
      lang="en"
      className={`${inconsolata.variable} ${inter.variable} ${lora.variable} antialiased transition dark:bg-(--clr-primary-800)`}>
      <body className="text-center grid gap-5 sm:gap-10 justify-center">
        {children}
      </body>
    </html>
  );
}
