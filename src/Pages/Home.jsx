import React from 'react';
import Layout from '../components/Layout';
import '../styles/HomeStyles.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Banner from '../assets/Banner.jpeg';

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${Banner})`}}>
          <div className="headerContainer">
            <h1 className="text-4xl font-bold align-middle justify-center">Food Website</h1>
            <p className='font-light p-0 mt-[15px]'>Best food in India</p>
            <Link to={'/menu'}>
              <Button className='mt-[20px] h-[50px] w-[180px]'>
                ORDER NOW
              </Button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home