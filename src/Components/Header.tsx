import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<div  className="bg-amber-600 text-2xl h-15"> 
  <ul className="flex justify-center hover:bg-teal-400 gap-8 bg-teal-600"> 
<li><Link href ="/Home"> Home</Link></li>
<li><Link href = "/About"> About</Link></li>
<li><Link href = "/Contact"> Contact</Link></li>
<li><Link href = "/Careers"> Careers</Link></li>
</ul>
</div>
  )
};