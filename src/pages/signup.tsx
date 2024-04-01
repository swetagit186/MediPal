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

const SignUp = ()=>{
    const router = useRouter();

    const [userType, setUserType] = useState<string | null>('patient');
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [rePassword , setRePassword] = useState('');
    const [phoneNumber , setPhoneNumber] = useState('');
    const [feedback , setFeedback] = useState('');

  const handleUserType = (
    event: React.MouseEvent<HTMLElement>,
    newUserType: string | null,
  ) => {
    setUserType(newUserType);
  };

  const handleSignUp = async ()=>{
    if(name===null || name.length === 0){
        setFeedback("Please enter a name")
        return;
    }
    if(email===null || email.length === 0){
        setFeedback("Please enter a Email address")
        return;
    }
    if(password===null || password.length <= 5){
        setFeedback("Please enter a Valid Password of minimum length 6")
        return;
    }
    if(rePassword===null || rePassword.length === 0){
        setFeedback("Please Re enter the Password")
        return;
    }
    if(rePassword !== password){
        setFeedback("Please check and re enter the Password")
        return;
    }
    if(phoneNumber===null || phoneNumber.length < 10){
        setFeedback("Please enter a Valid Phone Number")
        return;
    }

    const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/api/auth/signup/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            name,
            email,
            password,
            phoneNumber,
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

      <div className={styles.rightContainer}>
        <ToggleButtonGroup
          value={userType}
          exclusive
          onChange={handleUserType}
          aria-label="text alignment"
        >
          <ToggleButton
            value="patient"
            aria-label="left aligned"
            className={styles.toggleButton}
          >
            <div className={styles.row}>
              <Person />
              <text>Patient</text>
            </div>
          </ToggleButton>
          <ToggleButton
            value="doctor"
            aria-label="centered"
            className={styles.toggleButton}
          >
            <div className={styles.row}>
              <Medication />
              <text>Doctor</text>
            </div>
          </ToggleButton>
        </ToggleButtonGroup>
        <TextField
          id="name"
          label="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
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
        <TextField
          id="re-password"
          label="Re Enter Password"
          value={rePassword}
          onChange={(event) => {
            setRePassword(event.target.value);
          }}
        />
        <TextField
          id="phone-number"
          label="Phone Number"
          value={phoneNumber}
          onChange={(event) => {
            setPhoneNumber(event.target.value);
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
          onClick={handleSignUp}
        >
          SIGNUP
        </Button>

        <div className={styles.row}>
          <text>Already Registered?</text>
          <span>
            <Link href={"/login"}>Login here</Link>
          </span>
        </div>
      </div>
    </Card>
  );
}

export default SignUp;