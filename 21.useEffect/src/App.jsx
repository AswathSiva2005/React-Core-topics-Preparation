import React, { useEffect, useState } from 'react'

const App = () => {
  // USEEFFECT = it runs compularsy when webpage refreshes
  //             used in fetching and displaying datas

  // useEffect(() => {}, []);

  const [num1, setNum1] = useState(100);

  useEffect(() => {
    setNum1(200);
    
  }, [])

  console.log(num1);

  return (
    <>
        <h3>{num1}</h3>
    </>
  )
}

export default App