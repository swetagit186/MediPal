import { Stack, Typography,Container,Grid,Box } from '@mui/material';
import Image from 'next/image';


const About=()=>{
    return(
        <Container style={{ backgroundColor: '#f0f0f0', height: '100vh',width:'100vw' }}>
      <Grid container spacing={2} style={{ height: '100%', width:"full" }}>
        {/* Left side with image */}
        <Grid item xs={6}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh" >
            <Image src="/images/doctorImage" alt="Image" width={100} height={100}/>
          </Box>
        </Grid>
        {/* Right side with text */}
        <Grid item xs={6} container alignItems="center">
          <Typography variant="h6" align="center">
            Heading
          </Typography>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Typography>
        </Grid>
      </Grid>
    </Container>
    )
}

export default About;