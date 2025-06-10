import React from "react";
import { Layout } from "@/components/ui/layout";
import { Row, Col } from "antd";
import { Typography } from "antd";
import { Space } from "antd";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  HeartFilled,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const ExampleFooter = () => {
  return (
    <Footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <Row gutter={[48, 32]}>
          <Col xs={24} md={6}>
            <div className="mb-6">
              <Title level={3} className="text-white mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  ✨ AntD Showcase
                </span>
              </Title>
              <Text className="text-gray-300">
                Beautiful, vibrant components that make your web applications
                shine. Built with love using Ant Design and modern React.
              </Text>
            </div>

            <Space size="large">
              <Button
                type="text"
                icon={<TwitterOutlined />}
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-900 hover:bg-opacity-20"
                size="large"
              />
              <Button
                type="text"
                icon={<FacebookOutlined />}
                className="text-blue-500 hover:text-blue-400 hover:bg-blue-900 hover:bg-opacity-20"
                size="large"
              />
              <Button
                type="text"
                icon={<InstagramOutlined />}
                className="text-pink-400 hover:text-pink-300 hover:bg-pink-900 hover:bg-opacity-20"
                size="large"
              />
              <Button
                type="text"
                icon={<LinkedinOutlined />}
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-900 hover:bg-opacity-20"
                size="large"
              />
              <Button
                type="text"
                icon={<GithubOutlined />}
                className="text-gray-300 hover:text-white hover:bg-gray-700"
                size="large"
              />
            </Space>
          </Col>

          <Col xs={24} md={6}>
            <Title level={4} className="text-white mb-4">
              Quick Links
            </Title>
            <Space direction="vertical" size="small">
              <Link className="text-gray-300 hover:text-white transition-colors">
                🏠 Home
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors">
                🧩 Components
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors">
                📚 Documentation
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors">
                🎨 Examples
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors">
                📞 Support
              </Link>
            </Space>
          </Col>

          <Col xs={24} md={6}>
            <Title level={4} className="text-white mb-4">
              Resources
            </Title>
            <Space direction="vertical" size="small">
              <Link className="text-gray-300 hover:text-white transition-colors">
                📖 Getting Started
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors">
                🎯 Best Practices
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors">
                🔧 API Reference
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors">
                🎨 Design System
              </Link>
              <Link className="text-gray-300 hover:text-white transition-colors">
                💡 Community
              </Link>
            </Space>
          </Col>

          <Col xs={24} md={6}>
            <Title level={4} className="text-white mb-4">
              Contact Us
            </Title>
            <Space direction="vertical" size="small">
              <Text className="text-gray-300">📧 hello@antdshowcase.com</Text>
              <Text className="text-gray-300">📱 +1 (555) 123-4567</Text>
              <Text className="text-gray-300">
                📍 123 Design Street, UI City
              </Text>
              <Button
                type="primary"
                className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 mt-4"
              >
                Get in Touch
              </Button>
            </Space>
          </Col>
        </Row>

        <Divider className="border-gray-600 my-8" />

        <Row justify="space-between" align="middle">
          <Col xs={24} md={12}>
            <Text className="text-gray-400">
              © 2024 AntD Showcase. Made with{" "}
              <HeartFilled className="text-red-500 mx-1" />
              using Ant Design & React
            </Text>
          </Col>
          <Col xs={24} md={12} className="text-right">
            <Space split={<span className="text-gray-600">|</span>}>
              <Link className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link className="text-gray-400 hover:text-white">Cookies</Link>
            </Space>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default ExampleFooter;
