import Sidebar from '../components/profile/Sidebar'



export default function ProfileLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow grid  grid-cols-1 md:grid-cols-[300px_1fr]">
            <Sidebar />
            <main>
              {children}
            </main>
          </div>
        </div>
    </>
  );
}