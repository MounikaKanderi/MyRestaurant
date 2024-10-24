import React from 'react';
import Layout from '../components/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{
          my: 10 ,
          ml: 5,
          "& h4": {
            fontWeight: 'bold',
            fontSize: '2rem',
            mb: 2,
          },
          "& p":{
            fontWeight: 'light',
            fontSize: '1rem',
          }
        }}>
          <Typography variant='h4'>
            Contact My Restaurant <AddIcCallIcon />
          </Typography>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quisquam dignissimos enim veniam harum rem ipsam libero nulla, esse corporis atque fuga ipsum soluta, beatae eos ratione iste tenetur iusto.
          </p>
        </Box>
        <Box sx={{m: 3, width: '600px', ml: 10, "@media (max-width: 600px)":{
          width: '300px',
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor: 'black', color: 'white'}} align='center'>
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'red'}}/> 1800-00-999 (tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{color:'skyblue'}}/> myrestaurant@mail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{color:'green'}}/> +91-98345 54673
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact