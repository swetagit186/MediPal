import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/nav-bar";
import {Grid,Stack,Box, Typography, FormControl, Select, InputLabel,SelectChangeEvent , MenuItem} from "@mui/material"
import styles from "@/styles/dashboard.module.scss"
import Image from "next/image";
import Space from "@/components/shared/space";
import ServiceCard from "@/components/service-card";
import services from "@/data/services";

import {
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import SignUp from "../signup";

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
  const user = await getUser();
  const isAuthed = await isAuthenticated();

  return {
    props: {
      user,
      permissions,
      organization,
      isAuthed,
    },
  };
}


const Dashboard = ({user , permission , orgainization, isAuthed}: any)=>{

  console.log(user , permission , orgainization, isAuthed);

    const loadedServices = services;
    const handleSpecializationChange = (event: SelectChangeEvent) => {
        // setSelectedSpecialization(event.target.value as string);
    };
    return (
      <div className={styles.body}>
        <NavBar user={user} isAuthed={isAuthed} />
        
       <SignUp/>
        
        
        <Footer />
      </div>
    );
}

export default Dashboard;