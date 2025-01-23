import Link from "next/link";

export default function Home() {
  return (
   <>
    home page <br />
    <Link href={'/signup'}>signup page</Link>
   </>
  );
}
