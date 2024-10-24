import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my:15,
          textAlign:'center',
          p:2,
          "& h4":{
            fontWeight: 'bold',
            my: 2,
            fontSize: '2rem',
          },
          "& p":{
            fontWeight: 'light',
            textAlign: 'justify',
            fontSize: '1rem',
          },
          "@media (max-width: 600px)":{
            mt: 0,
            "& h4":{
              fontSize:'1rem',
            },
            "& p":{
              fontSize: '0.8rem'
            },
          }
        }}>
          <Typography variant='h4'>
            Welcome to My Restaurant!
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat quod asperiores tempora ratione veritatis distinctio amet voluptate. Ab error saepe incidunt quidem dolores ut. Dolor quia quisquam tempore ducimus praesentium ipsam ipsum, at architecto, harum veritatis aperiam iusto! Dolor nesciunt illum commodi qui atque sit corporis modi cum quos, impedit, odio iure nemo. Optio dolor nam temporibus placeat, ex nihil quia porro explicabo quos voluptatem, ullam, magni quidem excepturi aliquid nisi necessitatibus. Doloribus recusandae rem doloremque facilis nulla dicta culpa earum. Animi quaerat quidem vitae iste incidunt doloremque necessitatibus esse veniam qui a. Autem dolore ipsam, assumenda quo laudantium architecto!
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repudiandae numquam hic excepturi, illum quibusdam vitae odio consequuntur, provident quaerat perferendis nam dolore, cupiditate sed! Illo sunt reprehenderit modi. Obcaecati corporis earum qui molestias modi. Dolores unde error explicabo dolorum, voluptatum quis at sit laudantium ipsam officia saepe architecto id, et omnis vitae voluptas? A, corporis, impedit blanditiis dolore tenetur sed sapiente mollitia magni numquam voluptates maiores error distinctio, nostrum eaque vitae animi magnam accusantium temporibus labore omnis sint? Maxime suscipit beatae accusantium doloribus ad consequuntur quasi voluptate dolore laudantium laborum harum fugit repellendus expedita, tempora ab. Dolores, vitae repellendus! 
          </p>
        </Box>
    </Layout>
  )
}

export default About