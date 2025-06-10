import React from "react";
import { Layout } from "@/components/ui/layout";
import ExampleHeader from "../components/ExampleHeader";
import ExampleContent from "../components/ExampleContent";
import ExampleFooter from "../components/ExampleFooter";

const { Content } = Layout;

const Example = () => {
  return (
    <Layout className="min-h-screen">
      <ExampleHeader />
      <Content className="bg-gradient-to-br from-blue-50 to-purple-50">
        <ExampleContent />
      </Content>
      <ExampleFooter />
    </Layout>
  );
};

export default Example;
