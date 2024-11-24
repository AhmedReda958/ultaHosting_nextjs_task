import Link from "next/link";

function NavBar() {
  return (
    <nav className="container mx-auto py-4 px-6">
      <div className="flex justify-end items-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}

export default NavBar;
