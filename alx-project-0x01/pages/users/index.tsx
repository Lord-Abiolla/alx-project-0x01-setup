import { useState } from "react";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

interface UsersPageProps {
    posts: UserData[];
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await response.json();

    return { props: { posts } };
}

export default function Users({ posts }: UsersPageProps) {
    const [users, setUsers] = useState(posts);
    const [openModal, setOpenModal] = useState(false);

    const handleAddUser = (newUser: Partial<UserData>) => {
        setUsers([
            ...users,
            { id: users.length + 1, ...newUser } as UserData,
        ]);
    };

    return (
        <div className="max-w-6xl mx-auto mt-6">
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setOpenModal(true)}
                    className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                >
                    Add User
                </button>
            </div>

            {/* Modal */}
            <UserModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                onSubmit={handleAddUser}
            />

            {/* Users Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <UserCard key={user.id} {...user} />
                ))}
            </div>
        </div>
    );
}
