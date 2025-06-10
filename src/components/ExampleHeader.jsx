import React, { useState } from "react";
import { Layout } from "@/components/ui/layout";
import { Menu } from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dropdown } from "@/components/ui/dropdown";
import { Space } from "antd";
import {
  HomeOutlined,
  ShopOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  UserOutlined,
  BellOutlined,
  SearchOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const ExampleHeader = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("home");

  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      key: "components",
      icon: <MenuOutlined />,
      label: "Components",
      onClick: () => navigate("/components"),
    },
    {
      key: "products",
      icon: <ShopOutlined />,
      label: "Products",
    },
    {
      key: "about",
      icon: <InfoCircleOutlined />,
      label: "About",
    },
    {
      key: "contact",
      icon: <PhoneOutlined />,
      label: "Contact",
    },
  ];

  const userMenuItems = [
    {
      key: "profile",
      label: "Profile",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "logout",
      label: "Logout",
    },
  ];

  return (
    <Header className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            ✨ AntD
          </span>
        </div>

        <Menu
          mode="horizontal"
          selectedKeys={[current]}
          items={menuItems}
          className="bg-transparent border-0 text-white flex-1 justify-center"
          style={{
            background: "transparent",
            color: "white",
          }}
          theme="dark"
          onClick={({ key }) => setCurrent(key)}
        />

        <Space size="large">
          <Button
            type="text"
            icon={<SearchOutlined />}
            className="text-white hover:bg-white hover:bg-opacity-20"
          />

          <Badge count={5} size="small">
            <BellOutlined className="text-white text-xl hover:text-yellow-300 cursor-pointer" />
          </Badge>

          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <Avatar
              icon={<UserOutlined />}
              className="bg-gradient-to-r from-green-500 to-teal-500 cursor-pointer hover:scale-110 transition-transform"
            />
          </Dropdown>
        </Space>
      </div>
    </Header>
  );
};

export default ExampleHeader;
