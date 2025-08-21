import React from "react";
import { Toaster, Sonner, ToastProvider } from "@/components/SimpleToast";
import { TooltipProvider } from "@/components/SimpleTooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DesignSystemProvider } from "./context/DesignSystemContext.jsx";
import { MuiThemeProvider } from "./components/providers/MuiThemeProvider";
import Sidebar from "./components/layout/Sidebar.jsx";
import MainContent, {
  WelcomeScreen,
} from "./components/layout/MainContent.jsx";
import ComponentPage from "./pages/ComponentPage.jsx";
import Documentation from "./pages/Documentation.jsx";
import Playground from "./pages/Playground.jsx";
import MuiDemo from "./pages/MuiDemo";
import Templates from "./pages/Templates";
import CompositionGuide from "./pages/CompositionGuide";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[var(--color-bg-primary)]">
      <Sidebar />
      <MainContent>{children}</MainContent>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ToastProvider>
          <Toaster />
          <Sonner />
          <DesignSystemProvider>
            <MuiThemeProvider>
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
              <Route
                path="/mui-demo"
                element={
                  <Layout>
                    <MuiDemo />
                  </Layout>
                }
              />
              <Route
                path="/templates"
                element={
                  <Layout>
                    <Templates />
                  </Layout>
                }
              />
              <Route
                path="/composition-guide"
                element={
                  <Layout>
                    <CompositionGuide />
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
        </MuiThemeProvider>
      </DesignSystemProvider>
        </ToastProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
