import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/nav-bar";
import styles from "@/styles/dashboard.module.scss"

import {
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Profile from "@/components/shared/profile";
import { Appointment } from "@/models/Appointment";
import AppointmentCard from "@/components/shared/appointment-card";

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
    const user_id = user?.id;

    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/user/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email : user?.email || "",
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
    console.log(_data);

    if (!response.ok) {
    }else{
        user = _data.user;
    }
    const responseAppointment = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/appointments/${user_id}`,
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

    if (!response.ok) {

    }else{
        appointments = dataApp.data;
    }
    console.log(appointments);


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


const Dashboard = ({user , permission , orgainization, isAuthed , appointments}: any)=>{

  console.log(user , permission , orgainization, isAuthed , appointments);
    const userAppointment : [Appointment] = appointments
    return (
      <div className={styles.body}>
        <NavBar user={user} isAuthed={isAuthed} />

        <Profile user={user} isAuthed={isAuthed} />
        {userAppointment.map((appointment) => (
          <div key={appointment._id} >
            <AppointmentCard appointment={appointment}/>
          </div>
        ))}
        <Footer />
      </div>
    );
}

export default Dashboard;