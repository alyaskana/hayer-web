import type { NextPage } from "next";
import { Layout } from "@shared/components";
import { useState } from "react";
import Step1 from "features/registration/Step1";
import Step2 from "features/registration/Step2";
import Step3 from "features/registration/Step3";

const SignupPage: NextPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [userId, setUserId] = useState<number | string>();
  const [userEmail, setUserEmail] = useState<string>();

  console.log("user info --- ", userId, userEmail);

  return (
    <Layout>
      {formStep == 1 && (
        <Step1
          setFormStep={setFormStep}
          setUserId={setUserId}
          setUserEmail={setUserEmail}
        />
      )}
      {formStep == 2 && userId && userEmail && (
        <Step2 setFormStep={setFormStep} id={userId} email={userEmail} />
      )}
      {formStep == 3 && <Step3 />}
    </Layout>
  );
};

export default SignupPage;
