import { useEffect, useState } from 'react'
import './App.css'
import axiox from './axios'







function App() {

  const [myData, setMyData] = useState([])
  const [isError, setIsError] = useState('')


  const getApiData = async () => {

    try {
      const res = await axiox.get('/posts')
      setMyData(res.data)


    }

    catch (error: any) {

      setIsError(error.message)
    }

  }



  useEffect(() => {
    getApiData();
  }, []);



  return (
    <>

      <h1 style={{ textAlign: "center" }}>Get API with the help of AXIOS</h1>

      {isError !== '' && <h2>{isError}</h2>}


      <div className="grid">

        {myData.slice(0, 16).map((post: any) => {


          const { id, title, body } = post;


          return (

            <div className='card' key={id}>

              <h2>{title.slice(0, 20)}</h2>
              <p>{body.slice(0, 100)}</p>

            </div>

          )


        })}


      </div>





    </>
  )
}

export default App
