import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard.tsx";
import MarketAnalysis from "./pages/MarketAnalysis";
import WorkInProgress from "./pages/WorkInProgress";
import AuthPage from "./pages/AuthPage";
import AdminPanel from "./pages/AdminPanel";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import AdminProtectedRoute from "./components/auth/AdminProtectedRoute";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { MainLayout } from "@/components/layout/MainLayout";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ProfileSettings } from "./pages/ProfileSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/landing" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route element={<ProtectedRoute />}>
              <Route 
                path="/dashboard"
                element={
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                }
              />
              <Route 
                path="/market-analysis"
                element={
                  <MainLayout>
                    <MarketAnalysis />
                  </MainLayout>
                }
              />
              <Route 
                path="/work-in-progress"
                element={
                  <MainLayout>
                    <WorkInProgress />
                  </MainLayout>
                }
              />
              <Route 
                path="/work-in-progress/ghostview"
                element={
                  <MainLayout>
                    <WorkInProgress />
                  </MainLayout>
                }
              />
              <Route 
                path="/work-in-progress/central-bank-whisperer"
                element={
                  <MainLayout>
                    <WorkInProgress />
                  </MainLayout>
                }
              />
              <Route 
                path="/work-in-progress/market-psychology"
                element={
                  <MainLayout>
                    <WorkInProgress />
                  </MainLayout>
                }
              />
              <Route 
                path="/work-in-progress/charts"
                element={
                  <MainLayout>
                    <WorkInProgress />
                  </MainLayout>
                }
              />
              <Route 
                path="/work-in-progress/markets"
                element={
                  <MainLayout>
                    <WorkInProgress />
                  </MainLayout>
                }
              />
              <Route 
                path="/work-in-progress/portfolio"
                element={
                  <MainLayout>
                    <WorkInProgress />
                  </MainLayout>
                }
              />
              <Route 
                path="/profile-settings"
                element={
                  <MainLayout>
                    <ProfileSettings />
                  </MainLayout>
                }
              />
              <Route element={<AdminProtectedRoute />}>
                <Route
                  path="/admin"
                  element={
                    <MainLayout>
                      <AdminPanel />
                    </MainLayout>
                  }
                />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
