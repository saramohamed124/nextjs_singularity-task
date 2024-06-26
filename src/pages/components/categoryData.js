import { useEffect, useState } from "react";
import styled from "styled-components";

// Style Type p
const Type = styled.p `
background-color: #ddd;
width: fit-content;
padding: 10px;
border-radius: 21px;
font-family: monospace;
`

function CategoryData(props) {
    // Create constant and make initial value and useState Hook
    const [data, setData] = useState(null);

    // Make Fetch API when load Page
    useEffect(() => {
        // Create async function To Fetch API
        const fetchData = async () => {
            try {
                // Fetch API and Store it in Constant
                const response = await fetch(props.data);
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

    // If NOt Data appear yet, show loading
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {/* No need to wrap data in an array */}
            <div>
                <li>{data.next}</li>
                <li>{data.count}</li>
                {/* Map directly over e.results */}
                <div  style={{display:"flex",gap:20,flexWrap:"wrap"}}>
                {data.results.map((item, index) => (
                    //provide unique key
                        <Type key={index}>
                        {item.name}
                        </Type>
                    ))}
                        </div>
            </div>
        </>
    );
}

export default CategoryData;
