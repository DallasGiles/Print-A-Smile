import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; 
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Firestore functions

const AdminDashboard = () => {
    const [contacts, setContacts] = useState([]);

    // Fetch contacts from Firestore
    useEffect(() => {
        const fetchContacts = async () => {
            const querySnapshot = await getDocs(collection(db, 'contacts'));
            const contactList = querySnapshot.docs.map((doc) => ({
                id: doc.id,  // Firestore document ID
                ...doc.data(),  // Contact data (name, email, message)
            }));
            setContacts(contactList);
        };

        fetchContacts();
    }, []);

    // Handle delete contact
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'contacts', id));  // Delete document by ID
            setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
        } catch (error) {
            console.error('Failed to delete comment', error);
        }
    };

    return (
        <div className="min-h-screen bg-white py-16 px-8">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Admin Dashboard</h1>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id} className="border-b py-2">
                        <p><strong>Name:</strong> {contact.name}</p>
                        <p><strong>Email:</strong> {contact.email}</p>
                        <p><strong>Message:</strong> {contact.message}</p>
                        <button
                            onClick={() => handleDelete(contact.id)}
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