import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
import { height } from '@mui/system'
const bodyPart = ({item, bodyPart, setBodyPart}) => {
  return (
    <Stack
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    sx={
     
    {
      borderTop: bodyPart === item ? '4px solid #ff2625' : '',
      backgroundColor: '#fff',
      borderBottomLeftRadius: '20px',
      width: '270px',
      height: '270px',
      cursor: 'pointer',
      gap: '47px'
    }}
    >
      <img src={Icon} alt='dumbell' style={{width: '40px', height: '40px'}}/>
      <Typography 
      fontSize='24px'
      textTransform='capitalize'
      fontWeight='bold'
      color='#3a1212' 
      >{item}</Typography>
    </Stack>
  )
}

export default bodyPart