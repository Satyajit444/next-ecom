const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <main className="flex-center h-full w-full">
      {children}
    </main>
  );
}
 
export default AuthLayout;