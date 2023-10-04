
const Layout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <div className="h-screen bg w-screen bg-blue-900 flex items-center justify-center">
            {children}
        </div>
     );
}
 
export default Layout;