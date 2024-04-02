import Container from '@mui/material/Container'
import Card from '@mui/material/Card';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';import { use, useState } from 'react';

import styles from '@/styles/profile.module.scss';

import { Medication, Person, Verified } from '@mui/icons-material';
import { TextField, Button, Typography ,FormControl ,SelectChangeEvent, InputLabel , Select , MenuItem} from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { UserDocument } from '@/models/User';

const Profile = ({user , isAuthed} : {user : UserDocument , isAuthed : boolean})=>{
    const router = useRouter();
    // console.log(user)
    const [userType, setUserType] = useState<string | null>(user.user_type ?? 'patient');

    const [name , setName] = useState(user.name ?? "");
    const [email , setEmail] = useState(user.email ?? "");
    const [bio, setBio] = useState(user.bio ?? "");
    const [phoneNumber , setPhoneNumber] = useState(user.phone_number ??'');

    const [gender , setGender] = useState(user.gender ?? "Male");
    const [selectedSpecialization, setSelectedSpecialization] = useState(user.specialisation && user.specialisation.length ===0 ?"Cardiologist" : user.specialisation);

    const [feedback , setFeedback] = useState('');
    const handleSpecializationChange = (event: SelectChangeEvent) => {
      setSelectedSpecialization(event.target.value as string);
    };
  const handleUserType = (
    event: React.MouseEvent<HTMLElement>,
    newUserType: string | null,
  ) => {
    console.log(newUserType);
    setUserType(newUserType);
  };

  const handleEditProfile = async ()=>{
    if(name===null || name.length === 0){
        setFeedback("Please enter a name")
        return;
    }
    if(email===null || email.length === 0){
        setFeedback("Please enter a Email address")
        return;
    }
    if(bio===null || bio.length <= 5){
        setFeedback("Please write a Bio of minimum length 6")
        return;
    }
    // if(rePassword===null || rePassword.length === 0){
    //     setFeedback("Please Re enter the Password")
    //     return;
    // }
    // if(rePassword !== password){
    //     setFeedback("Please check and re enter the Password")
    //     return;
    // }
    if(phoneNumber===null || phoneNumber.length < 10){
        setFeedback("Please enter a Valid Phone Number")
        return;
    }
    

    const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/api/user/${user._id ?? user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            name,
            email,
            phone_number : phoneNumber,
            gender,
            _id : user._id || (Math.random()*10000).toString(),
            user_type : userType,
            verified : false,
            bio ,
            specialisation : selectedSpecialization
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
    //   router.replace("/dashboard");
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
          id="bio"
          label="Bio"
          value={bio}
        //   maxRows={4}
          multiline={true}
          sx={{
            alignContent: 'center',
          }}
          rows={2}
          onChange={(event) => {
            setBio(event.target.value);
          }}
        />
        {userType==="doctor" ? <FormControl >
          <InputLabel
            id="demo-simple-select-autowidth-label"
          >
            Specialization
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={selectedSpecialization}
            onChange={handleSpecializationChange}
            autoWidth
            label="Select Department"
          >
            <MenuItem value={"Cardiologist"}>Cardiologist</MenuItem>
            <MenuItem value={"Pulmonary"}>Pulmonary</MenuItem>
            <MenuItem value="Radiology">Radiology</MenuItem>
            <MenuItem value="Urology">Urology</MenuItem>
            <MenuItem value="Neurology">Neurology</MenuItem>
            <MenuItem value="Hypnotherapy">Hypnotherapy</MenuItem>
          </Select>
        </FormControl> : null}
        <FormControl sx={{ minWidth: 280,}}>
          <InputLabel
            id="demo-simple-select-autowidth-label"
          >
            Gender
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={gender}
            onChange={(event)=>{
                setGender(event.target.value)
            }}
            autoWidth
            label="Select Gender"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value="LGBTQ">LQBTQ</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="phone-number"
          label="Phone Number"
          value={phoneNumber}
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        />
        <Typography variant="h6" color="red">
          {feedback}
        </Typography>
        <Button
          style={{
            borderRadius: "15px",
            height: "45px",
          }}
          variant="contained"
          color="primary"
          onClick={handleEditProfile}
        >
          UPDATE PROFILE
        </Button>
      </div>
    </Card>
  );
}

export default Profile;