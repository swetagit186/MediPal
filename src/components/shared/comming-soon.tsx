// import { Container, Heading, Image, Space, Text } from "@jds/core";

import Image from "next/image";
import {Typography} from '@mui/material'
export default function CommingSoon() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Image src="/assets/commingSoon.svg" alt="Comming Soon"  width={500} height={500}/>
      <Typography variant="h3">
        Coming Soon!
      </Typography>
      <div style={{height:"20px"}}>

      </div>
      <Typography variant="h5" color={"initial"} >
        We are still building this page.<br></br> Please check back later.
      </Typography>
    </div>
  );
}
