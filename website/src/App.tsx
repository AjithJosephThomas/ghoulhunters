import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { BlueprintPage } from './pages/BlueprintPage';
import { HomePage } from './pages/HomePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { SpeciesPage } from './pages/SpeciesPage';
import { SpotterRewardsPage } from './pages/SpotterRewardsPage';
import { WatchPage } from './pages/WatchPage';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="programs" element={<ProgramsPage />} />
            <Route path="species/:id" element={<SpeciesPage />} />
            <Route path="watch/:id" element={<WatchPage />} />
            <Route path="how-it-works" element={<HowItWorksPage />} />
            <Route path="blueprint" element={<BlueprintPage />} />
            <Route path="who-we-are" element={<WhoWeArePage />} />
            <Route path="spotter-rewards" element={<SpotterRewardsPage />} />

            {/* Legacy static URLs */}
            <Route path="program.html" element={<Navigate to="/how-it-works" replace />} />
            <Route path="programs.html" element={<Navigate to="/programs" replace />} />
            <Route path="index.html" element={<Navigate to="/" replace />} />
            <Route path="who-we-are.html" element={<Navigate to="/who-we-are" replace />} />
            <Route path="blueprint.html" element={<Navigate to="/blueprint" replace />} />
            <Route path="spotter-rewards.html" element={<Navigate to="/spotter-rewards" replace />} />
            <Route
              path="species.html"
              element={<Navigate to="/species/freshwater-gold-clam" replace />}
            />
            <Route
              path="watch.html"
              element={<Navigate to="/watch/freshwater-gold-clam" replace />}
            />
            <Route
              path="asian-gold-clam.html"
              element={<Navigate to="/species/freshwater-gold-clam" replace />}
            />
            <Route
              path="eradication-project.html"
              element={<Navigate to="/watch/freshwater-gold-clam" replace />}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
