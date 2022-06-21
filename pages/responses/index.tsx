import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "components";
import { Tabs, Tab } from "components/Tabs";
import { EmployeeResponsesTab } from "./components/EmployeeResponsesTab";
import { MyResponsesTab } from "./components/MyResponsesTab";

const ResponsesPage: NextPage = () => {
  const [tabValue, setTabValue] = useState(1);
  return (
    <Layout headerVariant="miniLogoBurger">
      <Head>
        <title>Отклики</title>
      </Head>
      <Tabs mb={20}>
        <Tab onClick={() => setTabValue(1)} active={tabValue === 1}>
          Отклики исполнителей
        </Tab>
        <Tab onClick={() => setTabValue(2)} active={tabValue === 2}>
          Мои отклики
        </Tab>
      </Tabs>

      {tabValue == 1 && <EmployeeResponsesTab />}
      {tabValue == 2 && <MyResponsesTab />}
    </Layout>
  );
};

export default ResponsesPage;
