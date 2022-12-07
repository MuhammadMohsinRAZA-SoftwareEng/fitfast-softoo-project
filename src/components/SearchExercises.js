import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material'

import {exerciseOptions, exercisesData, fetchData} from '../utils/fetchData';

import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  },[])
/*this function is for handle change 
and it is async because we have to fetch data from it.
it will take sometime */
  const handleSearch = async()=>{
    if(search){
     const exercisesData = await fetchData
     ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

     const searchedExercises = exercisesData.filter(
      (exercise) => exercise.name.toLowerCase().includes(search)
      ||exercise.target.toLowerCase().includes(search)
      ||exercise.equipment.toLowerCase().includes(search)
      ||exercise.bodyPart.toLowerCase().includes(search)
     );
// once we done with search then first of all we want to clear the search so
     setSearch('');
     setExercises(searchedExercises);
    }
  }
  return (
    <Stack 
    alignItems="center"
    mt="37px"
    justifyContent="center"
    p="20px"
    >
     <Typography
     fontWeight={700} 
     sx={{fontSize:{lg:'44px',xs:'30px'}}}
     mb="50px"
     mt="100px"
     textAlign="center"
     >
      Awesome Exercises You <br/> Should Know</Typography>

    <Box position="relative" mb="72px">

      <TextField
      sx={{
          input:{
            fontWeight:'700',
            border:'none',
            borderRadius:'4px'},
            width:{lg:'800px', xs:'350x'},
            backgroundColor:'#fff',
            borderRadius:"4px"
      }}
      height="76px"
      value={search}
      /*purpose of this function is to ensure there is no difference
       between caps or small letter while searching*/
      onChange={(e)=>setSearch(e.target.value.toLowerCase())}
      placeholder="Search Exercises"
      type="text"
      />

      <Button
      className="search-btn"
      sx={{
        bgcolor: '#FF2625',
        color:'#fff',
        textTransform: 'none',
        width: {lg:'175px', xs:'80px'},
        fontSize: {lg:'20px', xs:'14px'},
        height:'56px',
        position:'absolute',
        right: '0'
      }}
      onClick={handleSearch}
      >Search</Button>


    </Box>

    <Box sx={{position:'relative', width:'100%', p:'20px'}}>
      <HorizontalScrollbar data={bodyParts}
      // these are those body parts which we are clicked on 
      bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
    </Box> 


    </Stack>
  )
}

export default SearchExercises
