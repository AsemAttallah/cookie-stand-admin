import Link from "next/link";
export default function Header() {
    return (
        <>
      <header className="p-5 bg-green-500 text-3xl flex justify-between items-center">
        <h1>Cookie Stand Admin</h1>
        <Link href={"overview"}>
            <button className="text-2xl">overview</button>
        </Link>
      </header>
      </>
    )
  }