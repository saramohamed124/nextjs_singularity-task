import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Data from '../components/categoryData';
import CategoryData from '../components/categoryData';

// Styled Categories li
const Category = styled.li `
    font-size: 1rem;
    padding: 10px 15px;
    background-color:#ddd;
    width:fit-content;
    border-radius:20px;
    font-weight: bold;
    `;

// Create Categories Component
const Categories = () => {
    // Create constant and make initial value and useState Hook
    const [data, setData] = useState(null);

    // Make Fetch API when load Page
    useEffect(() => {
        // Create async function To Fetch API
        const fetchData = async () => {
            try {
                // Fetch API and Store it in Constant
                const response = await fetch("https://pokeapi.co/api/v2/");
                // Return response to Json and Store it in Constant
                const responseData = await response.json();
                // set value of responseData in data
                setData(responseData);
                // Catch error if any errors happen
            } catch (error) {
                // Print Error in Console
                console.error('Error fetching data:', error);
            }
        };
        // Call Function of fetchData()
        fetchData();
    }, []);
        // If NOt Data appear yet, show loading loading
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <ul style={{display:'flex',flexWrap:'wrap' ,gap:'20px', listStyle:'none'}}>
            {/* Loop on Entries of data object to return key and value */}
            {Object.entries(data).map(([key, value]) => (
                    <>
                        <Category key={key} >{key}</Category>
                        <CategoryData data={value}/>
                    </>
))}
        </ul>
    );
}

export default Categories;
