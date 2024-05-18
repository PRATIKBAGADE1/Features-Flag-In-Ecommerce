// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { Avatar, CardHeader, Pagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';




const FeaturesManagement = () => {
    const handleBroadcast= () => {
        // Here you can implement the logic to generate and download the PDF
        // For example, you can use a library like jsPDF
        // For demonstration purposes, let's assume a simple alert for now
        alert('Broadcasting message to all users...');
      };
    
  return (
    <Box >

    <div style={{ textAlign: 'center',  padding: '16px', backgroundColor: '#CC99FF' }}>
      <h3 >Broadcast Message To All Users</h3>
      <Button sx={{padding: '10px', margin : '5px' }} variant="contained" onClick={handleBroadcast}>
        Broadcast
      </Button>
      <Button sx={{padding: '10px', margin : '5px' }} variant="contained" onClick={handleBroadcast}>
        Update Massage
      </Button>
    </div>
    <div  style={{ textAlign: 'center',  padding: '16px', backgroundColor: '#33FF99' }}>
      <h3 >Broadcast Message To All Users</h3>
      <Button sx={{padding: '10px', margin : '5px' }} variant="contained" onClick={handleBroadcast}>
        Broadcast
      </Button>
      <Button sx={{padding: '10px', margin : '5px' }} variant="contained" onClick={handleBroadcast}>
        Update Massage
      </Button>
    </div>

  </Box>
  
);
};

export default FeaturesManagement;
