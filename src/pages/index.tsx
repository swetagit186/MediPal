
import Button from '@mui/material/Button'
import { GetServerSideProps } from 'next';
import dbConnect from '../lib/dbConnect';
import LandingPage from '@/components/shared/landingPage';


export const getServerSideProps: GetServerSideProps = async () => {
  // const response =   await dbConnect();
  // console.log(response);

  /* find all the data in our database */
  // const result = await Pet.find({});

  // /* Ensures all objectIds and nested objectIds are serialized as JSON data */
  // const pets = result.map((doc) => {
  //   const pet = JSON.parse(JSON.stringify(doc));
  //   return pet;
  // });

  return { props: { } };
};




export default function Home() {
  return (
      <div>
        <LandingPage/>
      </div>
  );
}
