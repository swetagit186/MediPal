import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/nav-bar";
import {Grid,Stack,Box, Typography, FormControl, Select, InputLabel,SelectChangeEvent , MenuItem} from "@mui/material"
import styles from "@/styles/services.module.scss"
import Image from "next/image";
import Space from "@/components/shared/space";
import ServiceCard from "@/components/service-card";
import services from "@/data/services";

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


const Services = ({user , permission , orgainization, isAuthed}: any)=>{

  console.log(user , permission , orgainization, isAuthed);

    const loadedServices = services;
    const handleSpecializationChange = (event: SelectChangeEvent) => {
        // setSelectedSpecialization(event.target.value as string);
    };
    return (
      <div className={styles.body}>
        <NavBar currentButton={2} isAuthed={isAuthed} />
        
       
        <Stack className={styles.medicalTeam}>
        <Box sx={{ backgroundImage: 'linear-gradient(rgba(0, 21, 52, .9), rgba(0, 21, 52, .9))', padding:"7% 10%"}}>

          <Stack direction={"row"} justifyContent={"center"}>
            <Image src="/assets/wave.svg" alt="Wave" height={20} width={100} />
            <Typography align="center" variant="h5" color="white">
              OUR SERVICES
            </Typography>
            <Image src="/assets/wave.svg" alt="Wave" height={20} width={100} />
          </Stack>
          <Space direction="v" value="20px"/>
          <Typography
            textAlign={"center"}
            variant="h2"
            fontWeight={900}
            color="white"
          >
            Experienced Doctors Across <br/> All Specialties
          </Typography>
          </Box>
        </Stack>
        
        <Grid container spacing={4} padding={"10% 10%"}>
        {loadedServices.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={4}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
        <Footer />
      </div>
    );
}

export default Services;