import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('/api/contact');
                if (response.ok) {
                    const data = await response.json();
                    setContacts(data);
                } else {
                    console.error('Failed to fetch contacts');
                }
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchContacts();
    }, []);

    const handleDelete = async (index) => {
        const response = await fetch(`/api/contact/${index}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Update the contacts state to remove the deleted comment
            setContacts((prevContacts) => prevContacts.filter((_, i) => i !== index));
        } else {
            console.error('Failed to delete comment');
        }
    };


    return (
        <div className="min-h-screen bg-white py-16 px-8">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Admin Dashboard</h1>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index} className="border-b py-2">
                        <p><strong>Name:</strong> {contact.name}</p>
                        <p><strong>Email:</strong> {contact.email}</p>
                        <p><strong>Message:</strong> {contact.message}</p>
                        <button
                            onClick={() => handleDelete(index)}
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