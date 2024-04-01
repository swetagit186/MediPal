import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';import { useState } from 'react';

import styles from '@/styles/signup.module.scss';

import { Medication, Person } from '@mui/icons-material';
import { TextField, Button, Typography } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginIn = ()=>{
    const router = useRouter();

   
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const [feedback , setFeedback] = useState('');

  const handleLoginIn = async ()=>{
    
    if(email===null || email.length === 0){
        setFeedback("Please enter a Email address")
        return;
    }
    if(password===null || password.length <= 5){
        setFeedback("Please enter a Valid Password")
        return;
    }
    

    const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/api/auth/login/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            email,
            password,
          }),
        },
      );
  
      // Handle success response if needed
      const _data = await response.json();
      console.log(_data)
  
      if (!response.ok) {
        // setFeedback("")
        setFeedback(_data.error);
        // setCreatingVM(false);
        return;
      }
      setFeedback("")
      router.replace("/dashboard");
  }
  return (
    <Card className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <Image
          src="/images/doc_pic1.png"
          alt="doctor image"
          width={"500"}
          height={500}
          objectFit="cover"
        />
      </div>

      <div className={styles.rightContainer} style={{
        justifyContent: "center"
      }}> 
       
        <TextField
          id="email"
          label="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          id="password"
          label="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Typography variant="h6" color="red">{feedback}</Typography>
        <Button
          style={{
            borderRadius: "15px",
            height: "45px",
          }}
          variant="contained"
          color="primary"
          onClick={handleLoginIn}
        >
          LOGIN
        </Button>

        <div className={styles.row}>
          <text>Did not have an Account?</text>
          <span>
            <Link href={"/signup"}>SIGNUP Here</Link>
          </span>
        </div>
      </div>
    </Card>
  );
}

export default LoginIn;