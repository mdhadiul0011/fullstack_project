import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Emailverificationlink() {
  const navigate = useNavigate()
  const params = useParams()
  console.log(params.token);

  useEffect( ()=> {
    async function verification(){
      const userData = await axios.post('http://localhost:3000/api/v1/auth/tokenverify', {
        token: params.token,
      },
      navigate('/login')
      )
    }
    verification()
    
  },[])

  return (
    <div>
      <h2>loading..</h2>
    </div>
  )
}

export default Emailverificationlink
