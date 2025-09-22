import Link from "next/link";
import UserProfile from "../../UserProfile";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
          Shop
        </Link>
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
      </div>
      <UserProfile />
    </nav>
  );
}