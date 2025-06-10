import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { AppstoreOutlined, ExperimentOutlined } from "@ant-design/icons";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ant Design Showcase
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore beautiful components and examples with vibrant colors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-pink-50 to-rose-100"
            onClick={() => navigate("/components")}
          >
            <div className="text-center p-8">
              <AppstoreOutlined className="text-6xl text-pink-500 mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                All Components
              </h2>
              <p className="text-gray-600 mb-6">
                Interactive showcase of Ant Design components with sound effects
              </p>
              <Button
                type="primary"
                size="large"
                className="bg-gradient-to-r from-pink-500 to-rose-500 border-0 hover:from-pink-600 hover:to-rose-600"
              >
                Explore Components
              </Button>
            </div>
          </Card>

          <Card
            className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-emerald-50 to-teal-100"
            onClick={() => navigate("/example")}
          >
            <div className="text-center p-8">
              <ExperimentOutlined className="text-6xl text-emerald-500 mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Example Page
              </h2>
              <p className="text-gray-600 mb-6">
                Complete example with header, footer, navigation and more
              </p>
              <Button
                type="primary"
                size="large"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 border-0 hover:from-emerald-600 hover:to-teal-600"
              >
                View Example
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
