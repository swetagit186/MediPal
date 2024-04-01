// components/DoctorCard.tsx
import React from 'react';
import {Stack, IconButton,Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { EmailOutlined, PhoneInTalk, PhonelinkLockOutlined } from '@mui/icons-material';
import { Doctor } from '@/types/doctor';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "6px",
        borderRadius : "25px"
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={ doctor.gender === "male" ? "/images/doctor_pic1.png" : "/images/doctor_pic2.png"}
        alt={doctor.name}
        style={{ borderRadius: "25px", marginBottom: "8px", objectFit: "fill" }}
      />
      <Stack style={{position: "absolute" , marginTop : "22%"}}  direction={"row"} gap={"10px"}>
        <IconButton
          color='default'
          style={{
            backgroundColor: "#3E8CFF",
            borderRadius: "10px",
            marginBottom: "8px",
          }}
        >
          <PhoneInTalk />
        </IconButton>
        <IconButton
          color='default'
          style={{
            backgroundColor: "#3E8CFF",
            borderRadius: "10px",
            marginBottom: "8px",
          }}
        >
          <EmailOutlined />
        </IconButton>
      </Stack>

      <CardContent sx={{margin : "0px 5%"}}>
        <Typography variant="h3" align="center" fontWeight={600} gutterBottom>
          {doctor.name}
        </Typography>
        <Typography variant="h5" color="primary" align="center" gutterBottom>
          {doctor.specialization} | {doctor.location}
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          {doctor.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
