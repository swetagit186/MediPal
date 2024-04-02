import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/nav-bar";
import {Grid,Stack,Box, Typography, FormControl, Select, InputLabel,SelectChangeEvent , MenuItem} from "@mui/material"
import styles from "@/styles/doctor.module.scss"
import Image from "next/image";
import { useState } from "react";
import DoctorCard from "@/components/doctor/doctor-card";
import { doctors } from "@/data/doctors";
import Space from "@/components/shared/space";


import {
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

export async function getServerSideProps({
  req,
  res,
}: {
  req: Request;
  res: Response;
}) {
  const {
    getUser,
    getPermissions,
    getOrganization,
    isAuthenticated,
  } = getKindeServerSession(req, res);

  const organization = await getOrganization();
  const permissions = await getPermissions();
  let user = await getUser();
  const isAuthed = await isAuthenticated();

  if(isAuthed && user) {
    const fullName = user?.given_name + " " + user?.family_name;
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      // const response = await fetch(
      //   process.env.NEXT_PUBLIC_BASE_URL + `/api/user/`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       name: fullName,
      //       email: user?.email || "",
      //       phone_number: "",
      //       gender: "",
      //       _id: user.id,
      //       user_type: "patient",
      //       verified: false,
      //       bio: "",
      //       specialisation: null,
      //     }),
      //   }
      // );

      // // Handle success response if needed
      // const _data = await response.json();
      // console.log(_data);

      // if (!response.ok) {
      // } else {
      //   user = _data.user;
      // }
    }
  }
  return {
    props: {
      user,
      permissions,
      organization,
      isAuthed,
    },
  };
}


const Doctor = ({user , permission , orgainization, isAuthed}: any)=>{

    const [selectedSpecialization, setSelectedSpecialization] = useState("All");

    const filteredDoctors = selectedSpecialization
        ? selectedSpecialization === "All" ? doctors : doctors.filter(
            (doctor) => doctor.specialization === selectedSpecialization
        )
        : doctors;

    const handleSpecializationChange = (event: SelectChangeEvent) => {
        setSelectedSpecialization(event.target.value as string);
    };
    return (
      <div className={styles.body}>
        <NavBar user={user} isAuthed={isAuthed} />
        
       
        <Stack className={styles.medicalTeam}>
        <Box sx={{ backgroundImage: 'linear-gradient(rgba(0, 21, 52, .9), rgba(0, 21, 52, .9))', padding:"7% 10%"}}>

          <Stack direction={"row"} justifyContent={"center"}>
            <Image src="/assets/wave.svg" alt="Wave" height={20} width={100} />
            <Typography align="center" variant="h5" color="white">
              MEDICAL TEAM
            </Typography>
            <Image src="/assets/wave.svg" alt="Wave" height={20} width={100} />
          </Stack>
          <Space direction="v" value="20px"/>
          <Typography
            textAlign={"center"}
            variant="h2"
            fontWeight={800}
            color="white"
          >
            The Doctorate Crew
          </Typography>
          </Box>
        </Stack>
        
        <FormControl sx={{ m: 1, minWidth: 280 , padding : "2% 10%"}}>
          <InputLabel style={{padding : "7% 35%"}} id="demo-simple-select-autowidth-label">Specialization</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={selectedSpecialization}
            onChange={handleSpecializationChange}
            autoWidth
            label="Select Department"
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Cardiologist"}>Cardiologist</MenuItem>
            <MenuItem value={"Pulmonary"}>Pulmonary</MenuItem>
            <MenuItem value="Radiology">Radiology</MenuItem>
            <MenuItem value="Urology">Urology</MenuItem>
            <MenuItem value="Neurology">Neurology</MenuItem>
            <MenuItem value="Hypnotherapy">Hypnotherapy</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={2} padding={"3% 10%"}>
        {filteredDoctors.map((doctor) => (
          <Grid item key={doctor.id} xs={12} sm={6} md={4}>
            <DoctorCard doctor={doctor} user={user} />
          </Grid>
        ))}
      </Grid>
        <Footer />
      </div>
    );
}

export default Doctor;