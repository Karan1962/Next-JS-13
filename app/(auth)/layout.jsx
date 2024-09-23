const Layout = ({ children }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center text-4xl text-red-500">
      {children}
    </main>
  );
};

export default Layout;
