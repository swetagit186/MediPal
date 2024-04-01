import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';import { useState } from 'react';

import styles from '@/styles/signup.module.scss';
import { Medication, Person } from '@mui/icons-material';
import { TextField, Button } from '@mui/material'
import Image from 'next/image';

const SignUp = ()=>{
    const [userType, setUserType] = useState<string | null>('patient');
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [rePassword , setRePassword] = useState('');
    const [phoneNumber , setPhoneNumber] = useState('');

  const handleUserType = (
    event: React.MouseEvent<HTMLElement>,
    newUserType: string | null,
  ) => {
    setUserType(newUserType);
  };

  return (
    <Card className={styles.mainContainer}>
      <Image
        src="/images/doc_pic1.png"
        alt="doctor image"
        width={"500"}
        height={500}
      />
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
            setName(event.target.value);
          }}
        />
        <TextField
          id="password"
          label="Password"
          value={password}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="re-password"
          label="Re Enter Password"
          value={rePassword}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="phone-number"
          label="Phone Number"
          value={phoneNumber}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <Button
        style={{
            borderRadius:"15px",
            height:"40px",
        }}
          variant="contained"
          color="primary" 
          
        >
          Sumbit
        </Button>
      </div>
    </Card>
  );
}

export default SignUp;