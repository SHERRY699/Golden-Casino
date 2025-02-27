import { SideNav } from "@/components/side-nav/SideNav";
import { Header } from "@/components/header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-1 flex-col min-h-screen w-full bg-black">
      <div>
        <Header />
      </div>
      <div className='w-full flex flex-row'>
        <div className="w-[18%]">
          <SideNav />
        </div>
        {children}
      </div>
    </main>
  );
}
