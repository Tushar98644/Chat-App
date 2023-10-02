
const Layout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <div className="h-screen w-screen bg-blue-900 flex items-center">
            {children}
        </div>
     );
}
 
export default Layout;