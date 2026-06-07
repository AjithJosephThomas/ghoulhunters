import { Box, Button, Card, Chip, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BlueprintFlow } from '../components/blueprint/BlueprintFlow';
import { InvasiveCallout } from '../components/common/Callouts';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { SectionTitle } from '../components/common/SectionTitle';
import { palette } from '../theme/palette';
import { usePageTitle } from '../hooks/usePageTitle';

const phase2Highlights = [
  {
    title: 'Mobile application',
    body: 'Spotters photograph pests and submit sightings through the Nature Ninjas mobile app.',
  },
  {
    title: 'Machine learning review',
    body: 'ML and volunteers work together to keep genuine findings and remove incorrect reports.',
  },
  {
    title: 'Nearest volunteer alert',
    body: 'Groups of validated sightings in one area are sent to the closest trained volunteer.',
  },
  {
    title: 'Biosecurity Queensland consultation',
    body: 'Volunteers discuss grouped findings with QLD biosecurity experts before any collection is approved.',
  },
];

const systemLayers = [
  {
    title: 'Mobile app',
    body: 'React Native or Flutter app — capture photo, GPS, and time; optional on-device quality hints before upload.',
  },
  {
    title: 'API backend',
    body: 'Python FastAPI service — receives submissions, runs ML review, clusters genuine reports, and alerts volunteers.',
  },
  {
    title: 'Web application',
    body: 'Nature Ninjas website — species guides, volunteer review queue, progress statistics, and spotter rewards.',
  },
  {
    title: 'Volunteer & biosecurity workflow',
    body: 'Human review for uncertain cases; Biosecurity Queensland remains the authority for official reporting and collection approval.',
  },
];

const mlStack = [
  {
    title: 'Training — PyTorch + timm',
    body: 'Fine-tune vision models on labelled photos using transfer learning (EfficientNet-B0, EfficientNet-Lite, or MobileNetV3).',
  },
  {
    title: 'Serving — ONNX Runtime',
    body: 'Export trained models to ONNX for fast, consistent inference in the Python backend.',
  },
  {
    title: 'Optional detection — Ultralytics YOLO',
    body: 'Find and crop a clam or shell in busy riverbank photos before classification when the subject is small in frame.',
  },
  {
    title: 'On-device hints — TensorFlow Lite or ONNX Runtime Mobile',
    body: 'Light checks on the phone only (blur, darkness, “nothing visible”) — not final species identification.',
  },
];

const diagrams = [
  {
    src: 'design-process.svg',
    alt: 'Community watch flow',
    caption: 'Figure 1 — The Nature Ninjas community watch flow',
    title: 'Community watch flow',
    desc: 'Learn, spot, photograph, report, and help protect the environment.',
  },
  {
    src: 'system-context.svg',
    alt: 'System context diagram',
    caption: 'Figure 2 — How Nature Ninjas connects the community',
    title: 'How each program connects',
    desc: 'River visitor → poster QR → website and mobile app → official reporting → healthier environment',
  },
  {
    src: 'execution-cycle.svg',
    alt: 'Program cycle',
    caption: 'Figure 3 — Ongoing Nature Ninjas program cycle',
    title: 'Program cycle',
    desc: 'Educate, watch, identify, report, prevent, outreach — an ongoing cycle.',
  },
  {
    src: 'report-flow.svg',
    alt: 'Report flow',
    caption: 'Figure 4 — What to do when you see a suspected invasive species',
    title: 'Report flow',
    desc: 'What every spotter should do today — including reporting to Biosecurity Queensland within 24 hours.',
  },
];

export function BlueprintPage() {
  usePageTitle(
    'Blueprint & Process',
    'Nature Ninjas Phase 2 blueprint — mobile app, PyTorch ML review, volunteer alerts, and Biosecurity Queensland coordination.',
  );

  return (
    <>
      <PageHero title="Blueprint & Process" subtitle="From poster to official report" />
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Reveal>
          <SectionTitle align="left">What is the blueprint?</SectionTitle>
          <Typography paragraph>
            The <strong>blueprint</strong> is the shared plan for every Nature Ninjas watch program — connecting
            river visitors, education materials, official biosecurity reporting, and our proposed{' '}
            <strong>Phase 2 digital platform</strong>.
          </Typography>
        </Reveal>

        <Reveal>
          <Chip label="Proposed — Phase 2" sx={{ mb: 2 }} />
          <SectionTitle align="left">Nature Ninjas mobile app & platform</SectionTitle>
          <Typography paragraph>
            Our proposed Phase 2 plan connects the <strong>mobile application</strong>,{' '}
            <strong>web application</strong>, <strong>machine learning</strong>, trained volunteers, and the{' '}
            <strong>spotter rewards</strong> program — always alongside official reporting to Biosecurity
            Queensland.
          </Typography>
          <Stack spacing={1.5} sx={{ mb: 2 }}>
            {phase2Highlights.map((item) => (
              <Box key={item.title}>
                <Typography sx={{ fontWeight: 800, lineHeight: 1.4 }}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {item.body}
                </Typography>
              </Box>
            ))}
          </Stack>
          <BlueprintFlow />
          <InvasiveCallout title="Important — collection and official reporting">
            <Box component="ul" sx={{ pl: 2.5, m: 0, lineHeight: 1.75 }}>
              <li>
                Always report suspected pests to <strong>Biosecurity Queensland (13 25 23)</strong> — the Nature
                Ninjas app does not replace official reporting.
              </li>
              <li>
                Volunteers <strong>do not collect</strong> pests unless Biosecurity Queensland experts confirm
                it is safe and authorised.
              </li>
              <li>
                Today&apos;s programs focus on education and spotting; the flow below describes our{' '}
                <strong>proposed</strong> Phase 2 platform.
              </li>
            </Box>
          </InvasiveCallout>
          <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 2 }}>
            Genuine spotters can earn thank-you rewards —{' '}
            <Box component={Link} to="/spotter-rewards" sx={{ color: 'secondary.main', fontWeight: 700 }}>
              learn about spotter rewards
            </Box>
            .
          </Typography>
        </Reveal>

        <Reveal sx={{ mt: 5 }}>
          <Chip label="Technical — Phase 2 proposal" sx={{ mb: 2 }} />
          <SectionTitle align="left">Proposed system architecture</SectionTitle>
          <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.75 }}>
            The platform is designed as a <strong>hybrid pipeline</strong>: mobile capture, server-side machine
            learning, volunteer review, and official biosecurity coordination. ML supports spotters — it does not
            replace human judgement or government reporting.
          </Typography>
          <Stack spacing={1.5} sx={{ mb: 4 }}>
            {systemLayers.map((layer) => (
              <Card
                key={layer.title}
                variant="outlined"
                sx={{ p: 2, bgcolor: palette.grey, borderColor: palette.greyMid }}
              >
                <Typography sx={{ fontWeight: 800, mb: 0.5 }}>{layer.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {layer.body}
                </Typography>
              </Card>
            ))}
          </Stack>

          <SectionTitle align="left" sx={{ fontSize: '1.35rem' }}>
            Machine learning stack
          </SectionTitle>
          <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.75 }}>
            Recommended engines for invasive-species photo review with limited training data:
          </Typography>
          <Stack spacing={1.5}>
            {mlStack.map((item) => (
              <Card
                key={item.title}
                variant="outlined"
                sx={{
                  p: 2,
                  bgcolor: palette.white,
                  borderColor: palette.greyMid,
                  borderLeft: `4px solid ${palette.green}`,
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 0.5 }}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {item.body}
                </Typography>
              </Card>
            ))}
          </Stack>
        </Reveal>

        {diagrams.map((d) => (
          <Reveal key={d.src} sx={{ mt: 5 }}>
            <SectionTitle align="left" sx={{ fontSize: '1.5rem' }}>
              {d.title}
            </SectionTitle>
            <Typography color="text.secondary" paragraph>
              {d.desc}
            </Typography>
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}images/diagrams/${d.src}`}
              alt={d.alt}
              sx={{
                width: '100%',
                borderRadius: 3,
                boxShadow: '0 8px 32px rgba(26,107,124,0.12)',
              }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1, textAlign: 'center' }}>
              {d.caption}
            </Typography>
          </Reveal>
        ))}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 5 }}>
          <Button component={Link} to="/programs" variant="contained">
            View programs
          </Button>
          <Button component={Link} to="/how-it-works" variant="outlined">
            How it works
          </Button>
          <Button component={Link} to="/" variant="outlined">
            Home
          </Button>
        </Stack>
      </Container>
    </>
  );
}
