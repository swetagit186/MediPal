import { Appointment } from "@/models/Appointment";
import {Rating ,TextField, Box,Stack, IconButton,Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Space from "./space";
import Image from "next/image";
import { useEffect, useState } from "react";


const AppointmentCard = ({appointment} : {appointment : Appointment} )=>{
    const appointmentDate = new Date(appointment.date).toLocaleString();
    // const isButtonActive = appointment.date.be
    const gender  = parseInt(appointment.doctor_id)%2  === 0 ? "Male" : "Female";
    // const gender = "Male";
    // const doctor_rating = parseInt(appointment.doctor_id);
    // console.log(doctor_rating);
    const [hydrated, setHydrated] = useState(false);
        useEffect(() => {
        setHydrated(true);
        }, []);
    return (
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "6px",
          borderRadius: "25px",
          margin: "2% 10%",
          backgroundColor: "var(--color-background)",
        }}
      >
        <CardContent>
          <Stack direction={"row"} gap={"30px"}>
            <Card sx={{ borderRadius: "20px" }}>
              { hydrated&& gender === "Male" ? (
                <Image
                  style={{ objectFit: "cover" }}
                  src="/images/doctor_pic1.png"
                  height={350}
                  width="300"
                  alt="Doctor Img"
                />
              ) : null}
              {hydrated && gender === "Female" ? (
                <Image
                  style={{ objectFit: "cover" }}
                  src="/images/doctor_pic2.png"
                  height={350}
                  width="300"
                  alt="Doctor Img"
                />
              ) : null}
            </Card>
            <Stack gap={"10px"}>
              <Typography variant="h3" fontWeight={700} color="initial">
                {appointment.doctor_name}
              </Typography>
              <Typography variant="h5" fontWeight={500} color="initial">
                {appointment.doctor_specialization}
              </Typography>

              <Rating
                name="simple-controlled"
                value={parseInt(appointment.doctor_id)%5}
                readOnly
                // disabled={true}
              />
              <Typography variant="h4" color="initial" fontWeight={700}>
                Patient Info
              </Typography>
              <Typography variant="h5" color="initial" fontWeight={500}>
                PROBLEM : {appointment.patient_problem}
              </Typography>
              <Typography variant="body1" color="initial" fontWeight={500}>
                HISTORY : {appointment.patient_history}
              </Typography>
              {hydrated ? <Typography variant="h5" color="initial" fontWeight={600}>
                TIME : {appointmentDate}
              </Typography>  : null}
              <Space direction="v" value="10px" />
              <Button
                style={{
                  borderRadius: "15px",
                  height: "45px",
                }}
                variant="contained"
                color="primary"
                //   onClick={handleEditProfile}
              >
                CONSULT NOW
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    );

}

export default AppointmentCard;