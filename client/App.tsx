import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DesignSystemProvider } from "./context/DesignSystemContext.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import MainContent, {
  WelcomeScreen,
} from "./components/layout/MainContent.jsx";
import ComponentPage from "./pages/ComponentPage.jsx";
import Documentation from "./pages/Documentation.jsx";
import Playground from "./pages/Playground.jsx";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <MainContent>{children}</MainContent>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <DesignSystemProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <WelcomeScreen />
                  </Layout>
                }
              />
              <Route
                path="/components/:category/:name"
                element={
                  <Layout>
                    <ComponentPage />
                  </Layout>
                }
              />
              <Route
                path="/documentation"
                element={
                  <Layout>
                    <Documentation />
                  </Layout>
                }
              />
              <Route
                path="/playground"
                element={
                  <Layout>
                    <Playground />
                  </Layout>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route
                path="*"
                element={
                  <Layout>
                    <NotFound />
                  </Layout>
                }
              />
            </Routes>
          </BrowserRouter>
        </DesignSystemProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
