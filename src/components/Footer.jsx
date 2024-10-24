import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
        <Box className='text-center text-white p-3' sx={{bgcolor:'#1A1A19', width: '100vw'}}>
            <Box className='my-3' sx={{"& svg":{
                fontSize: '60px',
                cursor:'pointer',
                mr:2
            },
            "& svg:hover":{
                color: '#DAA520',
                transform:'translateX(5px)',
                transition:'all 400ms'
            }}}>
                {/* Icons */}
                <InstagramIcon /> 
                <TwitterIcon />
                <GitHubIcon />
                <YouTubeIcon />
            </Box>
            <Typography sx={{
                "@media (max-width : 600px)" : {
                    fontSize: '1rem',
                },
            }}>
                All Rights Reserved &copy; Techinfo YT
            </Typography>
        </Box>
    </>
  )
}

export default Footer