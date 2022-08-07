import React from 'react'
import { FilterSort } from '../Components/FilterSort'
import MusicRecords from './MusicRecords'
 import styled from "styled-components"
// import '../App.css';

export const HomePage = () => {
  return (
    <div className='HomePageWrapper'>
      <HomePageWrapper>
        <FilterSortWrapper>
        <FilterSort />
        </FilterSortWrapper>
       
       <MusicRecordsWrapper>
       <MusicRecords/>
       </MusicRecordsWrapper>
        
      </HomePageWrapper>
       
      
    </div>
  )
}
const HomePageWrapper=styled.div`
display:flex
`

const FilterSortWrapper=styled.div`
width:200px;
border:1px red solid;
height: 100vh;

`
const MusicRecordsWrapper=styled.div`
width:100%;
border:1px  solid blue;


`
   
 

