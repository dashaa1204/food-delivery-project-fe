import dynamic from "next/dynamic";

const SignIn = dynamic(() => import("../component/signIn"), { ssr: false });

const home = () => {
  return <SignIn />;
};

export default home;
