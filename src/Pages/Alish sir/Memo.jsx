import React, { useMemo, useState } from 'react'

function Memo() {
  const [count,setCounter] = useState(0)
  const [countone,setCounterone] = useState(0)

  const Incrementone=()=>{
    setCounter(count+1)
  }
  const Incrementtwo=()=>{
    setCounterone(countone+1)
  }

  // const Incrementtwo = useCallback(() => {
  //   setCounter(count+1)
  // }, [countone]);


  // const isEven=()=>{
  //   let i = 0;
  //   while (i<2000000000) i++ ;
  //     return count%2===0;
  // }
 
  const isEven = useMemo(()=>{
    let i = 0;
    while (i<2000000000) i++ ;
      return count%2===0;
  },[count])


  return (
    <div>
      <button onClick={Incrementone}>counter {count}</button>
      {/* <span>{isEven()?"even":"odd"}</span> */}
      <span>{isEven?"even":"odd"}</span>
      <button onClick={Incrementtwo}>counter {countone}</button>
    </div>
  )
}

export default Memo