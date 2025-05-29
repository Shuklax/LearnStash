import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex flex-center gap-2.5 cursor-pointer">
                    <Image src="./images/logo.svg" alt="logo" width={46} height={44}></Image>
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <p>NavItems</p>
                <p>Sign In</p>
            </div>
        </nav>
    )
}
export default Navbar
