import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import SimilarExercises from '../components/SimilarExercises'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'


import { fetchData, exerciseOptions } from '../utils/fetchData'
import { Details } from '@mui/icons-material'


const ExerciseDetail = () => {
  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail