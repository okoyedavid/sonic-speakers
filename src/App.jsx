import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import "./App.css";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/weddings" element={<WeddingsPage />} />
          <Route path="/birthdays" element={<BirthdaysPage />} />
          <Route path="/naming-ceremonies" element={<NamingCeremoniesPage />} />
          <Route path="/end-of-year" element={<EndOfYearPage />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
          <Route path="/ceremonies" element={<CeremoniesPage />} /> */}
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
