import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="navbar">
            <link href="/">
                <div>
                    <Image src="./images/logo.svg" alt="logo" width={46} height={44}></Image>
                </div>
            </link>
            <div className="flex items-center gap-8">
                <p>Home</p>
                <p>Companions</p>
                <p>Learning Path</p>
                <p>Sign In</p>
            </div>
        </nav>
    )
}
export default Navbar
