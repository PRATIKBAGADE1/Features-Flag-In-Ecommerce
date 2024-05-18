// src/Admin/Components/ABTesting/ABTesting.jsx
import {
    Avatar,
    Box,
    Button,
    Card,
    CardHeader,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Pagination,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  
import React, { useState, useEffect } from 'react';
import { Switch } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateABTestingStatus } from '../../../Redux/Admin/ABTesting/Action';

const HomepageABTestingToggle = () => {
    const [useExperimentalUI, setUseExperimentalUI] = useState(null);
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');

    useEffect(() => {
        axios.get('http://localhost:5454/api/abtesting/experimental-ui')
            .then(response => {
                setUseExperimentalUI(response.data.useExperimentalUI);
            })
            .catch(error => console.error('Error fetching A/B testing status:', error));
    }, []);

    const handleToggle = () => {
        axios.post(
            'http://localhost:5454/api/abtesting/toggle-ui',
            null,
            { 
                headers: { Authorization: `Bearer ${jwt}` },
                params: { isUseExperimentalUI: !useExperimentalUI }
            }
        )
        .then(response => {
            setUseExperimentalUI(response.data.useExperimentalUI);
            dispatch(updateABTestingStatus(response.data.useExperimentalUI));
        })
        .catch(error => {
            console.error('Error toggling A/B testing:', error);
        });
    };
    const handleToggles = () =>{};
    const handleTogle = () =>{};

    return (
        <div>
            <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                
                <TableCell sx={{ textAlign: "center" }}>Feature Name</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Switch UI Toggle</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
             
                <TableRow
                 
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  
                >
                  
                  
                  <TableCell sx={{ textAlign: "center" }}>Homepage Ui</TableCell>
                  
                  <TableCell sx={{ textAlign: "center" }}>
                  <Switch checked={useExperimentalUI} onChange={handleToggle} />
                  </TableCell>
                </TableRow>
                <TableRow
                 
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  
                >
                  
                  
                  <TableCell sx={{ textAlign: "center" }}>ProductPage Ui</TableCell>
                  
                  <TableCell sx={{ textAlign: "center" }}>
                  <Switch  onChange={handleToggle} />
                  </TableCell>
                </TableRow>
                <TableRow
                 
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  
                >
                  
                  
                  <TableCell sx={{ textAlign: "center" }}>Product Detail Ui</TableCell>
                  
                  <TableCell sx={{ textAlign: "center" }}>
                  <Switch  onChange={handleToggle} />
                  </TableCell>
                </TableRow>
            
            </TableBody>
          </Table>
        </TableContainer>
           
             
        </div>
        
        
    );
};

export default HomepageABTestingToggle;
