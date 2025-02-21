import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext.js';
import { db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Container, Table } from 'react-bootstrap';
import ball from './home/ball.png';
import './UserHistory.css'; // Ensure you import the CSS file

export default function UserHistory() {
    const { currentUser } = useContext(AuthContext);
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const q = collection(db, "users");
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log("Fetched data:", data);
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [currentUser]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="mt-5 back-ball" fluid>
            <h1 style={{color:'white'}}>User Data and History</h1>
            {userData.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>State</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.state}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>No data found</p>
            )}
            <img src={ball} className='ball-rout' alt="Rotating ball" />
        </Container>
    );
}
