import { Box } from '@mui/material';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getProgram } from '../../config';
import { Footer } from './Footer';
import { Header } from './Header';

export function AppLayout() {
  const { id, programId } = useParams();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const programIdFromPath = id ?? programId;
  const program = programIdFromPath ? getProgram(programIdFromPath) : undefined;
  const showProgramWarning =
    program && (location.pathname.startsWith('/species/') || location.pathname.startsWith('/watch/'));

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header warningMessage={showProgramWarning ? program?.doNotMoveWarning : undefined} />
      <Box component="main" sx={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Box
            key={location.pathname}
            component={motion.div}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </Box>
        </AnimatePresence>
      </Box>
      <Footer />
    </Box>
  );
}
