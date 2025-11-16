import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
    posts: UserProps[];
}

const Users = ({ posts }: UsersPageProps) => {
    return (
        <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(user => (
                <UserCard key={user.id} {...user} />
            ))}
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}


export default Users;