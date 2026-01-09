import "./global.css";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ScrollToHash } from "@/lib/scroll-to-hash";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CourseDetail from "./pages/CourseDetail";
import GetStarted from "./pages/GetStarted";
import AboutUs from "./pages/AboutUs";
import Instructors from "./pages/Instructors";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQs from "./pages/FAQs";
import Support from "./pages/Support";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      {/* Sonner MUST be top-level */}
      <Sonner />

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            {/* 🔑 REQUIRED for hash scrolling */}
            <ScrollToHash />

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/course/:courseId" element={<CourseDetail />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/instructors" element={<Instructors />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/support" element={<Support />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
}
