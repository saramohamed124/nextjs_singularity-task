import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Data from '../components/Data';

const Category = styled.li `
    font-size: 1rem;
    padding: 10px 15px;
    background-color:#ddd;
    width:fit-content;
    border-radius:20px;
    font-weight: bold;
    `;

const YourComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/");
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    console.log(data)
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <ul style={{display:'flex',flexWrap:'wrap' ,gap:'20px', listStyle:'none'}}>
            {Object.entries(data).map(([key, value]) => (
                    <>
                        <Category key={key}>{key}</Category>
                    </>
            ))}
        </ul>
    );
}

export default YourComponent;
