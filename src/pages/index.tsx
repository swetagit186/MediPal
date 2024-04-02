
import { GetServerSideProps } from 'next';
import LandingPage from '@/components/shared/landingPage';



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






export default function Home({user , permission , orgainization, isAuthed}: any) {
  return (
      <div>
        <LandingPage user = {user} isAuthed= {isAuthed} />
      </div>
  );
}
