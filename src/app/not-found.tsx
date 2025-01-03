import Image from "next/legacy/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <Image src="/404.png" width={160} height={160} className="h-40 w-auto" alt="404 Error" />
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <div className="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-700 transition">
          Go Back Home
        </div>
      </Link>
    </div>
  );
}
