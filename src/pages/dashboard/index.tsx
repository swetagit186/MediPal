import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/nav-bar";
import styles from "@/styles/dashboard.module.scss"

import {
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Profile from "@/components/shared/profile";
import { Appointment } from "@/models/Appointment";
import AppointmentCard from "@/components/shared/appointment-card";
import { useEffect, useState } from "react";
import { UserDocument } from "@/models/User";

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
  console.log('loginUser', loginUser);

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
      <div style={{width:"100%" , alignContent:"center" , alignItems:"center"}}>
        Loding...
      </div>
    )
  }

  console.log(user , permission , orgainization, isAuthed , appointments );
    const userAppointment : [Appointment] = appointments ?? [];
    return (
      <div className={styles.body}>
        <NavBar user={user} isAuthed={isAuthed} />

        <Profile user={loginUser} isAuthed={isAuthed} />
        <div>Deployment check 2</div>
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