import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="max-w-4xl mx-auto p-4 mt-4 bg-gray-200 shadow rounded-full">
            <nav className="flex justify-between">
                <div className="ml-4">
                    <h1 className="text-2xl font-bold text-blue-800">
                        Blog
                    </h1>
                </div>
                <div className="flex gap-4 mr-4 text-blue-800 font-semibold hover:text-blue-900 items-center">
                    <Link href="/">Home</Link>
                    <Link href="/posts">Posts</Link>
                    <Link href="/users">Users</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;