import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="flex gap-4 md:gap-2 md:text-gray-800 text-sm">
        <Link href="/" aria-label="home menu link">Home</Link>
        <Link href="about/" aria-label="about us menu link">About</Link>
        <Link href="contact/" aria-label="contact menu link">Contact us</Link>
    </nav>
  )
}

export default NavBar