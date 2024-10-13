import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('/api/contact')
            .then((res) => res.json())
            .then((data) => setContacts(data));
    }, []);

    const handleDelete = async (id) => {
        const response = await fetch(`/api/contact/${id}`, {
            method: 'DELETE',
        });
    
        if (response.ok) {
            // Update the contacts state to remove the deleted comment
            setContacts((prevContacts) => prevContacts.filter((contact) => contact._id !== id));
        } else {
            console.error('Failed to delete comment');
        }
    };

    return (
        <div className="min-h-screen bg-white py-16 px-8">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Admin Dashboard</h1>
            <ul>
                 {contacts.map((contact) => (
                    <li key={contact._id} className="border-b py-2">
                         <p><strong>Name:</strong> {contact.name}</p>
                        <p><strong>Email:</strong> {contact.email}</p>
                        <p><strong>Message:</strong> {contact.message}</p>
                            <button
                         onClick={() => handleDelete(contact._id)} // Use _id here, not an index
                            className="bg-red-500 text-white py-1 px-4 rounded"
        >
            Delete
        </button>
    </li>
))}
            </ul>
        </div>
    );
};

export default AdminDashboard;