import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Box,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { palette } from '../../theme/palette';

const steps = [
  {
    title: 'Spot & photograph',
    body:
      'A spotter sees a suspected invasive species and uses the Nature Ninjas mobile app to take a photo from a safe distance — without touching or moving the pest.',
  },
  {
    title: 'Send to web app',
    body:
      'The photo, GPS location, and time are sent securely from the mobile app to the Nature Ninjas web application for review.',
  },
  {
    title: 'Verify genuine findings',
    body:
      'A two-stage ML pipeline runs on the server (PyTorch/timm models exported to ONNX): first check photo quality, then classify the species against known look-alikes. Volunteers review uncertain results so incorrect reports are removed and genuine sightings are kept.',
  },
  {
    title: 'Alert nearest volunteer',
    body:
      'When several validated reports cluster in the same area, the system groups them and alerts the closest trained Nature Ninjas volunteer.',
  },
  {
    title: 'Consult Biosecurity QLD',
    body:
      'The volunteer discusses the grouped genuine findings with Biosecurity Queensland experts to confirm what was seen and whether any next steps are appropriate.',
  },
  {
    title: 'Collect if authorised',
    body:
      'Collection only happens when Biosecurity Queensland confirms it is safe and authorised. The volunteer then follows strict biosecurity precautions — never collect without official guidance.',
  },
  {
    title: 'Track progress',
    body:
      'The mobile app and web application record outcomes, report statistics, and community progress so spotters and volunteers can see the impact of genuine findings.',
  },
];

export function BlueprintFlow() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2, md: 3 },
        bgcolor: palette.grey,
        borderRadius: 2,
        border: `1px solid ${palette.greyMid}`,
        my: 3,
      }}
    >
      <Stepper
        activeStep={active}
        alternativeLabel
        sx={{
          display: { xs: 'none', lg: 'flex' },
          mb: 3,
          '& .MuiStepIcon-root.Mui-active': { color: palette.yellowDark },
          '& .MuiStepIcon-root.Mui-completed': { color: palette.green },
          '& .MuiStepLabel-label': { mt: 0.5 },
        }}
      >
        {steps.map((step) => (
          <Step key={step.title}>
            <StepLabel sx={{ '& .MuiStepLabel-label': { fontWeight: 600, fontSize: '0.8rem' } }}>
              {step.title}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ display: { xs: 'flex', lg: 'none' }, gap: 1, flexWrap: 'wrap', mb: 2 }}>
        {steps.map((step, i) => (
          <Box
            key={step.title}
            onClick={() => setActive(i)}
            sx={{
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              bgcolor: i === active ? palette.yellow : palette.white,
              color: palette.ink,
              border: `1px solid ${palette.greyMid}`,
            }}
          >
            {i + 1}. {step.title}
          </Box>
        ))}
      </Box>

      <AnimatePresence mode="wait">
        <Box
          key={active}
          component={motion.div}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'flex-start',
            p: 2.5,
            bgcolor: palette.white,
            borderRadius: 2,
            border: `1px solid ${palette.greyMid}`,
            borderLeft: `4px solid ${palette.yellow}`,
          }}
        >
          <CheckCircleIcon sx={{ color: palette.green, fontSize: 32, mt: 0.5 }} />
          <Box>
            <Typography variant="overline" sx={{ fontWeight: 800, color: palette.stone }}>
              Step {active + 1} of {steps.length}
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 800 }}>
              {steps[active].title}
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>{steps[active].body}</Typography>
          </Box>
        </Box>
      </AnimatePresence>
    </Paper>
  );
}
