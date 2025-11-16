import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";


const UsersPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="p-6">
                <h1 className="text-3xl font-bold mb-4">Users</h1>
                <p>List of users will appear here.</p>
            </main>
            <Footer />
        </div>
    );
};


export default UsersPage;