import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

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
                <SignedOut>
                    <div className="flex gap-4">
                        <SignInButton>
                            <button className="btn-signin">Sign In</button>
                        </SignInButton>
                        <SignUpButton className="btn-signin"/>
                    </div>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}
export default Navbar
