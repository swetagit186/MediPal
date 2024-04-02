// components/ServiceCard.tsx
import React from 'react';
import { Typography, Button } from '@mui/material';
import styles from "@/styles/service-card.module.scss";
import { url } from 'inspector';
import Image from 'next/image';
import Space from './shared/space';
import { Service } from '@/types/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    
  return (
    <div
      style={{
        backgroundColor : "#f3faff"
      }}
      className={styles.serviceCard}
    >
      <div className={styles.serviceIcon}>
        {/* <Image src={""} alt=""/> */}
        <Image 
          width={50}
          height={50}
          src={service.imageUrl}
          alt="Service Icon"
        />
      </div>
      <Typography className={styles.serviceLink} variant="h3">{service.specialization}</Typography>
      <Space direction="v" value="20px" />
      <Typography variant="h5">
       {service.description}
      </Typography>
      <Button sx={{
        position :"absolute",
        bottom : "5%",
        left : "25%",
        right : "25%",
        // width: "150px",
        borderBottom : "3px solid"
      }} href={service.href} variant="text" color="primary">
        <Typography variant="h6" fontWeight={600} color="primary">+ Read More</Typography>
      </Button>
    </div>
  );
};

export default ServiceCard;
