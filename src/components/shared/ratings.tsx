import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

interface DoctorRatingProps {
  initialValue: number; // Accepts only number
}

const DoctorRating: React.FC<DoctorRatingProps> = ({ initialValue }) => {

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="doctor-rating"
          value={initialValue}
          readOnly
        />
      </Box>
    </div>
  );
};

export default DoctorRating;
