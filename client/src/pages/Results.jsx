import React, { useState } from 'react'
import Result from '../components/Result'
const DUMMy=[{
    date:"10 may",
    reportId:"1234"
},{
    date:"10 may",
    reportId:"1234"
}]
function Results() {

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
