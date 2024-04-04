import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/nav-bar";
import styles from "@/styles/dashboard.module.scss"
import {Grid,Stack,Box, Typography, FormControl, Select, InputLabel,SelectChangeEvent , MenuItem} from "@mui/material"

import {
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Profile from "@/components/shared/profile";
import { Appointment } from "@/models/Appointment";
import AppointmentCard from "@/components/shared/appointment-card";
import { useEffect, useState } from "react";
import { UserDocument } from "@/models/User";
import Image from "next/image";
import Space from "@/components/shared/space";

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

  let appointments = [] ;
  if(isAuthed && user) {
    const fullName = user?.given_name + " " + user?.family_name;
    const id = user?.id;
    console.log(fullName, id);

    if(process.env.NEXT_PUBLIC_BASE_URL !== null || process.env.NEXT_PUBLIC_BASE_URL !== undefined ) {
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
      // console.log('_data' , _data);

      // if (response.ok) {
      //   // user = _data.user;
      //   loginUserData = _data.user;
      // }else{
      //   loginUserData = _data.error;
      // }
      const responseAppointment = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/api/appointments/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle success response if needed
      const dataApp = await responseAppointment.json();
      console.log(dataApp);

      if (responseAppointment.ok) {
        appointments = dataApp.data;
      }
      console.log(appointments);
    }

  }

  return {
    props: {
      user,
      permissions,
      organization,
      isAuthed,
      appointments,
    },
  };
}


const Dashboard = ({user , permission , orgainization, isAuthed, appointments  }: any)=>{

  const [loginUser , setLoginUserData] = useState<UserDocument| null>(null);
  // console.log('loginUser', loginUser);

  useEffect(()=>{
      // console.log('user' , user);
      const fetchUserData = async ()=>{
        const fullName = (user?.given_name + " " + user?.family_name) ?? "" ;
        const id = user?.id;
        console.log(fullName, id);

        const response = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL + `/api/user/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: fullName,
              email: user?.email || "",
              phone_number: "",
              gender: "",
              _id: user.id,
              user_type: "patient",
              verified: false,
              bio: "",
              specialisation: null,
            }),
          }
        );
  
        // Handle success response if needed
        const _data = await response.json();
        console.log('_data' , _data);
  
        if (response.ok) {
          // user = _data.user;
          setLoginUserData(_data.user);
        }
      }
      fetchUserData();
      
  },[user])

  if(!loginUser){
    return (
      <div style={{width:"100%", height:"100vh" , display:"flex", justifyContent:"center" , alignItems:"center"}}>
        <Typography variant="h4" color="initial" fontWeight={800}>Loading...</Typography>
      </div>
    )
  }

  console.log(user , permission , orgainization, isAuthed , appointments );
    const userAppointment : [Appointment] = appointments ?? [];
    return (
      <div className={styles.body}>
        <NavBar currentButton={1} isAuthed={isAuthed} />

        <Profile user={loginUser} isAuthed={isAuthed} />

        <Stack className={styles.medicalTeam}>
          <Box
            sx={{
              backgroundImage:
                "linear-gradient(rgba(0, 21, 52, .9), rgba(0, 21, 52, .9))",
              padding: "7% 10%",
            }}
          >
            <Stack direction={"row"} justifyContent={"center"}>
              <Image
                src="/assets/wave.svg"
                alt="Wave"
                height={20}
                width={100}
              />
              <Typography align="center" variant="h5" color="white">
               BOOKING
              </Typography>
              <Image
                src="/assets/wave.svg"
                alt="Wave"
                height={20}
                width={100}
              />
            </Stack>
            <Space direction="v" value="20px" />
            <Typography
              textAlign={"center"}
              variant="h2"
              fontWeight={800}
              color="white"
            >
              Upcomming Appointments
            </Typography>
          </Box>
        </Stack>
        {userAppointment.length > 0 && userAppointment.map((appointment) => (
          <div key={appointment._id} >
            <AppointmentCard appointment={appointment}/>
          </div>
        ))}
        <Footer />
      </div>
    );
}

export default Dashboard;