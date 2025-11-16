import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold text-green-800">{name}</h2>
            <p className="text-gray-700">{email}</p>

            <div className="mt-2 text-sm text-gray-600">
                <p><strong>Company:</strong> {company.name}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Website:</strong> {website}</p>
                <p><strong>City:</strong> {address.city}</p>
            </div>
        </div>
    );
};

export default UserCard;
