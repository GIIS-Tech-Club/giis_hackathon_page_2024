import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GIIS Hackathon 2024",
  description: "GIIS Hackathon 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-[#000000] via-[#2B2D42] to-[#3A0CA3] text-gray-950 relative pt-28 sm:pt-36 dark:bg-gradient-to-br dark:from-[#000000] dark:via-[#2B2D42] dark:to-[#3A0CA3] dark:text-gray-50 dark:text-opacity-90`}
      >
      
        <div
          className="absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
          style={{ backgroundColor: 'rgba(186, 104, 200, 0.7)' }} // Adjusted opacity and color
        ></div>
        <div
          className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
          style={{ backgroundColor: 'rgba(103, 58, 183, 0.5)' }} // Adjusted opacity and color
        ></div>
            {children}
            <Footer />
  
            <Toaster position="top-right" />
      </body>
    </html>
  );
  
}
