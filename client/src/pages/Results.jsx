import React from 'react'
import Result from '../components/Result'
import { useState ,useEffect} from 'react';
import {useSelector} from 'react-redux'
const DUMMy=[{
    date:"10 may",
    reportId:"1234"
},{
    date:"10 april",
    reportId:"1234"
}]
function Results() {
const currentUser=useSelector((state)=>state.auth.currentUser)
    const [resultData,setResultData]=useState([])
    useEffect(()=>{
  
        const getAllData=async()=>{
        const res=await fetch('http://localhost:4000/api/v1/heart/results',{
            method:'GET',
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${currentUser.token}`,
             
            }
        })
        const response= await res.json()
        console.log(response)
        return response
        }
        getAllData().then((res)=>{
            console.log(res.previousResults)
            setResultData(res.previousResults)
        }).catch((err)=>{
            console.log(err)
        })
        
            },[])
    const [openIndex,setOpenIndex]=useState(-1)
    const toggle=(index)=>{
        // console.log('index ',index)
        // console.log('openINdex',openIndex)
if(index===openIndex){
setOpenIndex(-1)
}
else{
    setOpenIndex(index)
}
// console.log('after openINdex',openIndex)
    }

      return (
<>
<h1>All Data</h1>
{DUMMy.map((data,index) => (<li className='list-none' key={index}><Result  toggleResult={toggle} index={index} show={index===openIndex}  date={data.data} reportId={data.reportId}/></li>))}
</>
  )
}

export default Results
