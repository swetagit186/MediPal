// components/DoctorCard.tsx
import React, { useState } from 'react';
import {Modal ,TextField, Box,Stack, IconButton,Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { EmailOutlined, PhoneInTalk, PhonelinkLockOutlined } from '@mui/icons-material';
import { Doctor } from '@/types/doctor';
import Space from '../shared/space';
import BasicDateTimePicker from '../shared/basic-date-time-picker';
import dayjs, { Dayjs } from 'dayjs';
import { UserDocument } from '@/models/User';

interface DoctorCardProps {
  doctor: Doctor;
  user : UserDocument
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor , user}) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
  const [modalOpen , setModalOpen] =  useState(false)
  const [patientName , setPatientName] = useState("")
  const [patientProblem , setPatientProblem] = useState("")
  const [patientHistory , setPatientHistory] = useState("")
  const [dateTime, setDateTime] = useState<Dayjs | null>(null);

  const [feedback , setFeedback] = useState("");


  const handleAppointmentBookNow = async () => {
    if(patientName === null || patientName.length === 0){
      setFeedback("Please enter a patient name");
      return;
    }
    if(patientProblem === null || patientProblem.length === 0){
      setFeedback("Please enter a patient Problem");
      return;
    }
    if(dateTime === null || dateTime.isBefore(dayjs()) || dateTime.isAfter(dayjs().add(7, 'day'))){
      setFeedback("Please enter a Valid Date. Date must be between today and 7 days from now.");
    }

    try {
      const response = await fetch( process.env.NEXT_PUBLIC_BASE_URL +`/api/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          doctor_id: doctor.id ?? (Math.random()*1000).toString(),
          user_id: user._id,
          patient_name: patientName,
          patient_problem: patientProblem,
          patient_history: patientHistory,
          date: dateTime?.format(),
          doctor_name: doctor.name,
          doctor_specialization: doctor.specialization,
          user_name: user.name,
        }),
      });

      const data = await response.json();
      console.log(data);
      
      setModalOpen(false);
      if (response.ok) {
        setFeedback('Appointment created successfully');
      } else {
        setFeedback(data.error || 'Failed to create appointment');
      }
    } catch (error) {
      setFeedback('An error occurred. Please try again.');
    }
  };


  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "6px",
        borderRadius: "25px",
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={
          doctor.gender === "male"
            ? "/images/doctor_pic1.png"
            : "/images/doctor_pic2.png"
        }
        alt={doctor.name}
        style={{ borderRadius: "25px", marginBottom: "8px", objectFit: "fill" }}
      ></CardMedia>
      <Stack
        style={{ position: "absolute", marginTop: "22%" }}
        direction={"row"}
        gap={"10px"}
      >
        <IconButton
          color="default"
          style={{
            backgroundColor: "#3E8CFF",
            borderRadius: "10px",
            marginBottom: "8px",
          }}
        >
          <PhoneInTalk />
        </IconButton>
        <IconButton
          color="default"
          style={{
            backgroundColor: "#3E8CFF",
            borderRadius: "10px",
            marginBottom: "8px",
          }}
        >
          <EmailOutlined />
        </IconButton>
      </Stack>

      <CardContent sx={{ margin: "0px 5%" }}>
        <Typography variant="h3" align="center" fontWeight={600} gutterBottom>
          {doctor.name}
        </Typography>
        <Typography variant="h5" color="primary" align="center" gutterBottom>
          {doctor.specialization} | {doctor.location}
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          {doctor.description}
        </Typography>
        <Space direction="v" value="10px" />
        <Button
          sx={{
            display: "flex",
            padding: "2px 10px",
            height: "40px",
            borderRadius: "10px",
            borderBottom: "3px solid",
            // justifyItems:"center"
          }}
          // href={"/book-appointment"}
          variant="outlined"
          color="primary"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <Typography variant="h6" fontWeight={600} color="primary">
            Book Appointment
          </Typography>
        </Button>
       
      </CardContent>
      <Modal
          open={modalOpen}
          onClose={() => {
            setFeedback("");
            setModalOpen(false);
            setPatientName("");
            setPatientHistory("");
            setPatientProblem("");
            setDateTime(null)
          }}
        >
          <Box sx={{ ...style, width: "30%", borderRadius: "20px" , padding : "5% 10%"}}>
            <Stack sx={{justifyContent :"center" }} gap={"20px"}>
              <Typography variant="h2" fontWeight={700} color="secondary">
                Confirm Appointment
              </Typography>
              <Space direction="v" value="10px" />
              <Typography variant="h3" color="secondary" fontWeight={600}>
               {doctor.name}
              </Typography>
              <Typography variant="h5" color="secondary" fontWeight={600}>
               {doctor.specialization}
              </Typography>
              <BasicDateTimePicker value={dateTime} setValue={setDateTime} />
              <TextField
                id="patient-name"
                label="Resipent Name"
                value={patientName}
                onChange={(event) => {
                  setPatientName(event.target.value);
                }}
              />
              <TextField
                id="Problem"
                label="Patient Problem"
                value={patientProblem}
                onChange={(event) => {
                  setPatientProblem(event.target.value);
                }}
              />
              <TextField
                id="patient-history"
                label="Patient History"
                value={patientHistory}
                onChange={(event) => {
                  setPatientHistory(event.target.value);
                }}
              />
              <Typography variant="h6" color="red">{feedback}</Typography>
              <Button
                sx={{
                  display: "flex",
                  // padding: "2px 10px",
                  alignSelf: "center",
                  height: "60px",
                  width:"100%",
                  borderRadius: "10px",
                  border: "2px solid",
                }}
                // href={"/book-appointment"}
                variant="outlined"
                color="primary"
                onClick={handleAppointmentBookNow}
              >
                <Typography variant="h5" fontWeight={600} color="primary">
                  Book Now
                </Typography>
              </Button>
            </Stack>
          </Box>
        </Modal>
    </Card>
  );
};

export default DoctorCard;
