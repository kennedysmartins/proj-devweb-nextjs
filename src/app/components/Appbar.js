import Image from 'next/image'
import Link from 'next/link';

function Appbar() {
  return (
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <Image
      src="/logo.png"
      width={200}
      height={500}
      alt="Picture of the author"
    />
     </a>
     <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
       <Link href="/post" className="mr-5">Home</Link>
       <Link href="/" className="mr-5">Home</Link>
       <Link href="/" className="mr-5">Home</Link>
       <Link href="/" className="mr-5">Home</Link>
     </div>
     <Link href="/login">
        <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0">Login</button>
     </Link>
  </div>
  )
}

export default Appbar;