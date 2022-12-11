import axios from 'axios'
import { useEffect,useState } from 'react';
const URL="http://localhost:3000/api/users/me"


export const UserData=()=> {
    const[phone,setPhone]=useState("")
    const[email,setEmail]=useState("")
    const[name,setName]=useState("")
    
    const token=localStorage.getItem('token');
    useEffect(() => {
        axios.get(`${URL}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        },
        ).then((response)=>{
            if(response.status===200){
                setPhone(response.data.phoneNumber)
                setEmail(response.data.email)

                setName(response.data.firstName)

            }
        }).catch((error)=>{
            console.log(error)
        })
    }, [])



  return (
    <div>
      <div>
        <textarea name="ph" value={phone} id="" cols="30" rows="2"></textarea>
        <textarea name="email" value={email} id="" cols="30" rows="2"></textarea>
        <textarea name="name" value={name} id="" cols="30" rows="2"></textarea>

      </div>
    </div>
  )
}
