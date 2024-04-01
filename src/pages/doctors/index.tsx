import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/nav-bar";
import {Grid,Stack,Box, Typography, FormControl, Select, InputLabel,SelectChangeEvent , MenuItem} from "@mui/material"
import styles from "@/styles/doctor.module.scss"
import Image from "next/image";
import { useState } from "react";
import DoctorCard from "@/components/doctor/doctor-card";
import { doctors } from "@/data/doctors";
import Space from "@/components/shared/space";

const Doctor = ()=>{

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
        <NavBar />
        
       
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
            <DoctorCard doctor={doctor} />
          </Grid>
        ))}
      </Grid>
        <Footer />
      </div>
    );
}

export default Doctor;