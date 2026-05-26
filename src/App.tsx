import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // added Navigate
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Void from "./pages/Void";
import VoidSeries from "./pages/VoidSeries";
import Works from "./pages/Works";
import WorksSeries from "./pages/WorksSeries";
import Eyes from "./pages/Eyes";
import EyesSeries from "./pages/EyesSeries";
import Writing from "./pages/Writing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* new path */}
            <Route path="/void-body" element={<Void />} />
            <Route path="/void-body/:slug" element={<VoidSeries />} />

            {/* redirects from old paths */}
            <Route path="/void" element={<Navigate to="/void-body" replace />} />
            <Route path="/void/:slug" element={<Navigate to="/void-body/:slug" replace />} />

            <Route path="/works" element={<Works />} />
            <Route path="/works/:slug" element={<WorksSeries />} />
            <Route path="/all-seeing-eyes" element={<Eyes />} />
            <Route path="/all-seeing-eyes/:slug" element={<EyesSeries />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
