import Navbar from '../components/Layout/Navbar/Navbar';
import TopBar from '../components/Layout/TopBar/TopBar';
//todo tu mozesz sprówac sobie typowanie z PropsWithChildren
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex'>
      <Navbar />
      <div className='flex flex-col grow'>
        <TopBar />
        {children}
      </div>
    </div>
  );
}
