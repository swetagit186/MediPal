import { Appointment } from "@/models/Appointment";
import {Modal ,TextField, Box,Stack, IconButton,Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Space from "./space";


const AppointmentCard = ({appointment} : {appointment : Appointment} )=>{

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
        <CardContent>
          <Stack>
            <Typography variant="h4" color="initial">
              {appointment.doctor_name}
            </Typography>
            <Typography variant="h4" color="initial">
              {appointment.user_name}
            </Typography>

            <Typography variant="h4" color="initial">
              {appointment.patient_problem}
            </Typography>
            <Typography variant="h4" color="initial">
              {appointment.patient_history}
            </Typography>
            <Typography variant="h4" color="initial">
              {appointment.date.toString()}
            </Typography>
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
        </CardContent>
      </Card>
    );

}

export default AppointmentCard;