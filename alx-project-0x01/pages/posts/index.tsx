import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import PostCard from "../../components/common/PostCard";


const PostsPage: React.FC = () => {
    return (
        <div className="p-6">
            <Header />
            <main className="flex flex-wrap gap-6 justify-center mt-20 mx-auto">
                <PostCard title="Sample Post" body="This is a sample post body." />
            </main>
            <Footer />
        </div>
    );
};


export default PostsPage;