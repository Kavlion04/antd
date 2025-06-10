import React from "react";
import { Button } from "@/components/ui/button";
import { Row, Col, Typography, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ComponentShowcase from "../components/ComponentShowcase";

const { Title } = Typography;

const Components = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate("/")}
            className="mb-4"
          >
            Back to Home
          </Button>
          <Title level={1} className="text-center mb-2">
            Ant Design Components
          </Title>
          <p className="text-center text-gray-600 text-lg">
            Click on any component to hear a sound and see it in action!
          </p>
        </div>

        <ComponentShowcase />
      </div>
    </div>
  );
};

export default Components;
