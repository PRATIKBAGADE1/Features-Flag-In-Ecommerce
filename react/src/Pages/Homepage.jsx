import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OriginalUI from './OriginalUI';
import ExperimentalUI from './ExperimentalUI';

const Homepage = ({ useExperimentalUI: propUseExperimentalUI }) => {
    // Initialize state with prop value if available, otherwise set to null
    const [useExperimentalUI, setUseExperimentalUI] = useState(() => {
        if (propUseExperimentalUI !== undefined) {
            return propUseExperimentalUI;
        }
        return null; // Will be set after the API call
    });
    useEffect(() => {
        if (propUseExperimentalUI === undefined) {
            axios.get(`http://localhost:5454/api/abtesting/experimental-ui`)
                .then(response => {
                    setUseExperimentalUI(response.data.useExperimentalUI );
                })
                .catch(error => {
                    console.error('Error fetching A/B testing status:', error);
                    setUseExperimentalUI(false);
                });
        }
    }, [propUseExperimentalUI]);
    
   

    // Render loading indicator or fallback UI while fetching status
    if (useExperimentalUI === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {useExperimentalUI ? <ExperimentalUI /> : <OriginalUI />}
        </div>
    );
};

export default Homepage;
