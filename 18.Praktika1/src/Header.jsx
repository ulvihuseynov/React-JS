 function Header(){
    return (
       <header className="container mx-auto my-8">
       <nav className="flex justify-between items-center">
       <div>
            <h1 className="text-4xl font-bold">Shopping<span className="text-red-700">Center</span></h1>
        </div>
        <div>
            <ul className="flex gap-10 text-xl">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div className="flex gap-6 text-xl justify-center items-center">
            <a className="bg-black rounded-md text-white py-2 px-6
            " href="">Login</a>
            <a className="bg-black rounded-md text-white py-2 px-6
            " href="">Sign in</a>

        </div>
       </nav>
       </header>
    )
 }


 export default Header