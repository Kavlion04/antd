import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Index from "./pages/Index";
import Components from "./pages/Components";
import Example from "./pages/Example";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6366f1",
          borderRadius: 8,
        },
      }}
    >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/components" element={<Components />} />
            <Route path="/example" element={<Example />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </ConfigProvider>
  </QueryClientProvider>
);

export default App;
