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
    body: 'Spotters photograph pests, tag the suspected species, and submit sightings to the Bio Buddies server through the mobile app.',
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
    body: 'A user-friendly way for the community to report a finding — far simpler than the traditional approach of calling a hotline or manually uploading photos. Spotters open the app, take a picture, tag the suspected pest, and submit in seconds.',
  },
  {
    title: 'API backend',
    body: 'The backbone that connects all parts of the system. It receives submissions from the mobile app, passes them to the machine learning pipeline, and routes validated findings to the right volunteers — keeping everything running smoothly without manual coordination.',
  },
  {
    title: 'Web application',
    body: 'The public face of Bio Buddies. It gives the community access to species guides, watch program updates, and spotter rewards — and gives volunteers a queue to review uncertain findings and track real-world progress.',
  },
  {
    title: 'Volunteer & biosecurity workflow',
    body: 'Trained Bio Buddies volunteers step in where the app cannot — reviewing edge cases, confirming findings in the field, and working directly with Biosecurity Queensland to ensure pests are removed safely and officially.',
  },
];

const mlStack = [
  {
    title: 'Learning from real sightings',
    body: 'The machine learning model is trained on labelled photos of invasive species and look-alikes so it builds an accurate picture of what a genuine finding looks like — getting smarter as more sightings are submitted.',
  },
  {
    title: 'Identifying findings on the server',
    body: 'When a submission arrives, the server runs the trained model to determine whether the photo shows a genuine invasive species. This avoids incorrect findings reaching volunteers without requiring a human to manually check every report.',
  },
  {
    title: 'Spotting the pest in the photo',
    body: 'If the pest is small or partially hidden in a busy riverbank photo, an additional detection step locates and zooms in on it automatically — so the classifier always works with the clearest possible view.',
  },
  {
    title: 'Instant quality feedback on the phone',
    body: 'Before the photo is even submitted, the app gives the spotter a quick hint if something is obviously wrong — blurry, too dark, or nothing visible — so they can retake it on the spot rather than submitting an unusable image.',
  },
];

const reportFlowDiagram = {
  src: 'report-flow.svg',
  alt: 'Report flow',
  caption: 'Figure 1 — What to do when you see a suspected invasive species',
  title: 'Report flow',
  desc: 'Spot the pest, leave it in place, photograph and tag it in the Bio Buddies mobile app, then submit it to the Bio Buddies server — Bio Buddies handles reporting to Biosecurity Queensland.',
};

const diagrams = [
  {
    src: 'design-process.svg',
    alt: 'Community watch flow',
    caption: 'Figure 2 — The Bio Buddies community watch flow',
    title: 'Community watch flow',
    desc: 'Learn, spot, photograph, report, and help protect the environment.',
  },
  {
    src: 'system-context.svg',
    alt: 'System context diagram',
    caption: 'Figure 3 — How Bio Buddies connects the community',
    title: 'How each program connects',
    desc: 'River visitor → poster QR → website and mobile app → official reporting → healthier environment',
  },
  {
    src: 'execution-cycle.svg',
    alt: 'Program cycle',
    caption: 'Figure 4 — Ongoing Bio Buddies program cycle',
    title: 'Program cycle',
    desc: 'Educate, watch, identify, report, prevent, outreach — an ongoing cycle.',
  },
];

function DiagramFigure({ d }: { d: typeof reportFlowDiagram }) {
  return (
    <>
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
    </>
  );
}

export function BlueprintPage() {
  usePageTitle(
    'Blueprint & Process',
    'Bio Buddies Phase 2 blueprint — mobile app, PyTorch ML review, volunteer alerts, and Biosecurity Queensland coordination.',
  );

  return (
    <>
      <PageHero title="Blueprint & Process" subtitle="From poster to official report" />
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Reveal>
          <SectionTitle align="left">What is the blueprint?</SectionTitle>
          <Typography paragraph>
            The <strong>blueprint</strong> is the shared plan for every Bio Buddies watch program — connecting
            river visitors, education materials, official biosecurity reporting, and our proposed{' '}
            <strong>Phase 2 digital platform</strong>.
          </Typography>
        </Reveal>

        <Reveal sx={{ mt: 5 }}>
          <DiagramFigure d={reportFlowDiagram} />
        </Reveal>

        <Reveal sx={{ mt: 5 }}>
          <Chip label="Proposed — Phase 2" sx={{ mb: 2 }} />
          <SectionTitle align="left">Bio Buddies mobile app & platform</SectionTitle>
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
                Bio Buddies will report suspected pests to <strong>Biosecurity Queensland (13 25 23)</strong> — the Bio
                Buddies app does not replace official reporting.
              </li>
              <li>
                Volunteers report and work closely with Biosecurity Queensland experts to confirm the finding and to remove it according to safe and authorised processes.
              </li>
              <li>
                Today&apos;s programs focus on education and spotting; the flow below describes our proposed mobile app platform.
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
            <DiagramFigure d={d} />
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
