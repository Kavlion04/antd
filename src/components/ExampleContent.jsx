import React, { useState } from "react";
import { Row, Col } from "antd";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "antd";
import { Statistic } from "antd";
import { Progress } from "@/components/ui/progress";
import { Timeline } from "antd";
import { Table } from "@/components/ui/table";
import { Tag } from "@/components/ui/tag";
import { Rate } from "antd";
import { Space } from "antd";
import { Carousel } from "antd";
import { Tabs } from "antd";
import { Badge } from "@/components/ui/badge";
import {
  UserOutlined,
  ShopOutlined,
  DollarOutlined,
  RiseOutlined,
  HeartOutlined,
  StarOutlined,
  EyeOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const ExampleContent = () => {
  const [activeTab, setActiveTab] = useState("1");

  const statsData = [
    {
      title: "Total Users",
      value: 11280,
      icon: <UserOutlined className="text-blue-500" />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Total Sales",
      value: 45670,
      prefix: "$",
      icon: <DollarOutlined className="text-green-500" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Products",
      value: 2340,
      icon: <ShopOutlined className="text-purple-500" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Growth",
      value: 12.5,
      suffix: "%",
      icon: <RiseOutlined className="text-orange-500" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  const tableData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      status: "Active",
      tags: ["developer", "react"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      status: "Inactive",
      tags: ["designer", "ui/ux"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      status: "Active",
      tags: ["manager", "product"],
    },
  ];

  const tableColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <Text strong className="text-blue-600">
          {text}
        </Text>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => (
        <Badge
          status={status === "Active" ? "success" : "default"}
          text={status}
          className={status === "Active" ? "text-green-600" : "text-gray-600"}
        />
      ),
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <Space>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </Space>
      ),
    },
  ];

  const carouselItems = [
    {
      title: "Beautiful Design",
      description: "Create stunning interfaces with vibrant colors",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Fast Performance",
      description: "Lightning fast components and interactions",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Easy to Use",
      description: "Simple and intuitive component library",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const productList = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99",
      rating: 4.5,
      image: "🎧",
      views: 1234,
      likes: 89,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$299",
      rating: 4.8,
      image: "⌚",
      views: 2156,
      likes: 156,
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: "$49",
      rating: 4.2,
      image: "💻",
      views: 987,
      likes: 67,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="text-center mb-12">
        <Title
          level={1}
          className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Welcome to Our Amazing Platform
        </Title>
        <Paragraph className="text-lg text-gray-600 mb-8">
          Experience the power of modern design with vibrant colors and smooth
          animations
        </Paragraph>
        <Space size="large">
          <Button
            type="primary"
            size="large"
            className="bg-blue-600 border-0 hover:from-purple-600 hover:to-pink-600"
          >
            Get Started
          </Button>
          <Button
            size="large"
            
            className="border-blue-300 text-blue-300"
          >
            Learn More
          </Button>
        </Space>
      </div>

      <Row gutter={[24, 24]} className="mb-12">
        {statsData.map((stat, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card
              className={`hover:shadow-lg transition-shadow bg-gradient-to-br ${stat.color} text-white border-0`}
              hoverable
            >
              <div className="flex items-center justify-between">
                <div>
                  <Statistic
                    title={
                      <span className="text-white opacity-90">
                        {stat.title}
                      </span>
                    }
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    valueStyle={{ color: "white", fontWeight: "bold" }}
                  />
                </div>
                <div className="text-3xl opacity-80">{stat.icon}</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mb-8 border-0 shadow-lg">
        <Carousel autoplay effect="fade" className="rounded-lg overflow-hidden">
          {carouselItems.map((item, index) => (
            <div key={index}>
              <div
                className={`h-64 bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-center`}
              >
                <div>
                  <Title level={2} className="text-white mb-4">
                    {item.title}
                  </Title>
                  <Text className="text-lg opacity-90">{item.description}</Text>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </Card>

      {/* Tabs Section */}
      <Card className="mb-8 border-0 shadow-lg">
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          className="custom-tabs"
        >
          <TabPane tab="📊 Dashboard" key="1">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                <Card
                  title="📈 Monthly Progress"
                  className="border border-blue-200"
                >
                  <Space direction="vertical" className="w-full">
                    <div>
                      <Text>Sales Progress</Text>
                      <Progress
                        percent={75}
                        strokeColor={{
                          "0%": "#108ee9",
                          "100%": "#87d068",
                        }}
                      />
                    </div>
                    <div>
                      <Text>Customer Growth</Text>
                      <Progress
                        percent={60}
                        strokeColor={{
                          "0%": "#ffd666",
                          "100%": "#f759ab",
                        }}
                      />
                    </div>
                    <div>
                      <Text>Revenue Target</Text>
                      <Progress
                        percent={85}
                        strokeColor={{
                          "0%": "#ff7875",
                          "100%": "#ff4d4f",
                        }}
                      />
                    </div>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="🎯 Timeline" className="border border-purple-200">
                  <Timeline
                    items={[
                      {
                        color: "green",
                        children: "Create project 2024-01-01",
                      },
                      {
                        color: "blue",
                        children: "Launch beta version 2024-02-01",
                      },
                      {
                        color: "red",
                        children: "Release to production 2024-03-01",
                      },
                      {
                        color: "gray",
                        children: "Scale to 1M users 2024-06-01",
                      },
                    ]}
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tab="👥 Users" key="2">
            <Card
              title="👤 User Management"
              className="border border-green-200"
            >
              <Table
                dataSource={tableData}
                columns={tableColumns}
                pagination={{ pageSize: 5 }}
                className="custom-table"
              />
            </Card>
          </TabPane>

          <TabPane tab="🛍️ Products" key="3">
            <Row gutter={[24, 24]}>
              {productList.map((product) => (
                <Col xs={24} sm={12} lg={8} key={product.id}>
                  <Card
                    hoverable
                    className="border-0 shadow-md hover:shadow-xl transition-shadow"
                    cover={
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 flex items-center justify-center text-6xl">
                        {product.image}
                      </div>
                    }
                    actions={[
                      <Space>
                        <EyeOutlined className="text-blue-500" />
                        <Text className="text-blue-500">{product.views}</Text>
                      </Space>,
                      <Space>
                        <HeartOutlined className="text-red-500" />
                        <Text className="text-red-500">{product.likes}</Text>
                      </Space>,
                      <MessageOutlined className="text-green-500" />,
                    ]}
                  >
                    <Card.Meta
                      title={
                        <Text strong className="text-gray-800">
                          {product.name}
                        </Text>
                      }
                      description={
                        <Space direction="vertical">
                          <Text strong className="text-lg text-green-600">
                            {product.price}
                          </Text>
                          <Rate disabled defaultValue={product.rating} />
                        </Space>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default ExampleContent;
