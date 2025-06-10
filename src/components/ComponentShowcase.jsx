import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { DatePicker } from "@/components/ui/datePicker";
import { TimePicker } from "@/components/ui/timePicker";
import { Progress } from "@/components/ui/progress";
import { Tag } from "@/components/ui/tag";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Rate} from "@/components/ui/rate"
import { Tooltip } from "@/components/ui/tooltip";
import { Alert } from "antd";
import { Spin } from "@/components/ui/spin";
import { Row, Col } from "antd";
import { Space } from "antd";
import { Typography } from "antd";
import { Divider } from "@/components/ui/divider";
import {
  HeartOutlined,
  StarOutlined,
  UserOutlined,
  BellOutlined,
  DownloadOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { TextArea } = Input;
const { Title, Text } = Typography;

const ComponentShowcase = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(30);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(1);
  const [rateValue, setRateValue] = useState(3);

  const ComponentCard = ({ title, children, color = "blue" }) => (
    <Card
      title={title}
      className={`mb-4 hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-${color}-50 to-${color}-100`}
      hoverable
    >
      <div className="flex flex-wrap gap-4 items-center">{children}</div>
    </Card>
  );

  return (
    <div className="space-y-6">
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12} lg={8}>
          <ComponentCard title="Buttons" color="blue">
            <Button
              type="primary"
              className="bg-gradient-to-r from-blue-500 to-indigo-500"
            >
              Primary
            </Button>
            <Button type="default">Default</Button>
            <Button type="dashed" className="border-purple-400 text-purple-600">
              Dashed
            </Button>
            <Button type="primary" danger>
              Danger
            </Button>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              className="bg-gradient-to-r from-green-500 to-emerald-500"
            >
              Download
            </Button>
          </ComponentCard>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <ComponentCard title="Inputs" color="green">
            <Input
              placeholder="Basic input"
              className="border-green-300 focus:border-green-500"
            />
            <Input.Password
              placeholder="Password input"
              className="border-green-300 focus:border-green-500"
            />
            <TextArea
              rows={2}
              placeholder="Textarea"
              className="border-green-300 focus:border-green-500"
            />
          </ComponentCard>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <ComponentCard title="Select & Options" color="purple">
            <Select
              placeholder="Select option"
              style={{ width: 150 }}
              value={selectedValue}
              onChange={setSelectedValue}
              className="border-purple-300"
            >
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
              <Option value="option3">Option 3</Option>
            </Select>
            <DatePicker className="border-purple-300" />
            <TimePicker className="border-purple-300" />
          </ComponentCard>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <ComponentCard title="Checkbox & Radio" color="pink">
            <Space direction="vertical">
              <Checkbox
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
                className="text-pink-600"
              >
                Checkbox Option
              </Checkbox>
              <Radio.Group
                value={radioValue}
                onChange={(e) => setRadioValue(e.target.value)}
              >
                <Radio value={1} className="text-pink-600">
                  Radio A
                </Radio>
                <Radio value={2} className="text-pink-600">
                  Radio B
                </Radio>
              </Radio.Group>
            </Space>
          </ComponentCard>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <ComponentCard title="Switch & Slider" color="orange">
            <Space direction="vertical" className="w-full">
              <Switch
                checked={switchChecked}
                onChange={setSwitchChecked}
                className="bg-orange-200"
              />
              <Slider
                value={sliderValue}
                onChange={setSliderValue}
                className="text-orange-500"
                style={{ width: 200 }}
              />
            </Space>
          </ComponentCard>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <ComponentCard title="Rate & Progress" color="yellow">
            <Space direction="vertical">
              <Rate
                value={rateValue}
                onChange={setRateValue}
                className="text-yellow-500"
              />
              <Progress
                percent={sliderValue}
                strokeColor={{
                  "0%": "#fbbf24",
                  "100%": "#f59e0b",
                }}
              />
            </Space>
          </ComponentCard>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <ComponentCard title="Tags & Badges" color="red">
            <Space wrap>
              <Tag color="magenta">Magenta</Tag>
              <Tag color="red">Red</Tag>
              <Tag color="volcano">Volcano</Tag>
              <Tag color="orange">Orange</Tag>
              <Badge count={5} className="bg-red-500">
                <Avatar shape="square" icon={<UserOutlined />} />
              </Badge>
              <Badge dot>
                <BellOutlined className="text-xl text-red-500" />
              </Badge>
            </Space>
          </ComponentCard>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <ComponentCard title="Icons & Actions" color="teal">
            <Space>
              <Tooltip title="Like">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<LikeOutlined />}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500"
                />
              </Tooltip>
              <Tooltip title="Share">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<ShareAltOutlined />}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500"
                />
              </Tooltip>
              <Tooltip title="Favorite">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<HeartOutlined />}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500"
                />
              </Tooltip>
              <Tooltip title="Star">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<StarOutlined />}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500"
                />
              </Tooltip>
            </Space>
          </ComponentCard>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <ComponentCard title="Alerts & Loading" color="indigo">
            <Space direction="vertical" className="w-full">
              <Alert
                message="Success Alert"
                type="success"
                showIcon
                className="border-green-300 bg-green-50"
              />
              <Alert
                message="Warning Alert"
                type="warning"
                showIcon
                className="border-yellow-300 bg-yellow-50"
              />
              <Spin size="large" className="text-indigo-500" />
            </Space>
          </ComponentCard>
        </Col>
      </Row>

      <Divider />

      <Card className="text-center bg-gradient-to-r from-purple-100 to-pink-100">
        <Title level={3} className="text-purple-700">
          🎵 Click any component above to hear a sound! 🎵
        </Title>
        <Text className="text-purple-600">
          All components are interactive and feature vibrant colors and smooth
          animations.
        </Text>
      </Card>
    </div>
  );
};

export default ComponentShowcase;
