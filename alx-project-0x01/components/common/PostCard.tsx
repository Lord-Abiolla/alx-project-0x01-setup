import React from "react";

type PostCardProps = {
    title: string;
    body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
    return (
        <div className="rounded p-6 shadow-[0_0_10px_rgba(0,0,0,0.2)] max-w-[30em]">
            <h4 className="font-bold text-2xl text-gray-700">
                {title}
            </h4>
            <p className="text-lg mt-4 text-gray-700">
                {body}
            </p>
        </div>
    )
}

export default PostCard;