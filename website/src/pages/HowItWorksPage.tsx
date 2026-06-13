import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DoNotTouchIcon from '@mui/icons-material/DoNotTouch';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import SellIcon from '@mui/icons-material/Sell';
import ShareIcon from '@mui/icons-material/Share';
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { InvasiveCallout } from '../components/common/Callouts';
import { IconBadge } from '../components/common/IconBadge';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { SectionTitle } from '../components/common/SectionTitle';
import { palette } from '../theme/palette';
import { usePageTitle } from '../hooks/usePageTitle';
import { siteConfig } from '../config';

const stepIcons = [SearchIcon, DoNotTouchIcon, CameraAltIcon, SellIcon, CloudUploadIcon];

const cycleSteps = [
  'Educate — share official government facts',
  'Watch — encourage the community to look',
  'Identify — help people recognise species',
  'Report — guide people to official biosecurity',
  'Prevent — check, clean, dry for boats and gear',
  'Outreach — posters, QR codes, awareness',
];

const tools = [
  { label: 'Website — species guides and reporting guidance', icon: MenuBookIcon },
  { label: 'Posters with QR code at access points', icon: ShareIcon },
  { label: 'Blueprint & process diagrams', icon: GroupsIcon },
  { label: 'Official reporting — 13 25 23', icon: PhoneIcon },
  { label: 'Check, clean, dry messaging', icon: SearchIcon },
  { label: 'Bio Buddies mobile app — photograph, tag, and submit', icon: CameraAltIcon },
];

export function HowItWorksPage() {
  const { site } = siteConfig;
  usePageTitle('How it works', `How ${site.name} community watch programs work.`);

  return (
    <>
      <PageHero title="How it works" subtitle={`${site.name} community invasive species watch`} />
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 5 } }}>
        <Reveal>
          <Chip label="Community watch · Environment · Biodiversity" sx={{ mb: 2 }} />
          <SectionTitle align="left">Our mission</SectionTitle>
          <Typography paragraph sx={{ lineHeight: 1.75 }}>
            We help people learn about <strong>invasive species</strong> in our region, report sightings safely,
            and protect local <strong>ecosystems</strong> — without moving pests.
          </Typography>
        </Reveal>

        <Reveal sx={{ mt: 4 }}>
          <SectionTitle align="left">How every program works</SectionTitle>
          <Stack spacing={1.5} sx={{ mt: 2 }}>
            {[
              { step: 'See', desc: 'spot a suspected pest in the river' },
              { step: 'Do not remove it', desc: 'leave the pest where it is — moving it can spread the species' },
              { step: 'Photo', desc: 'take a picture using the Bio Buddies mobile app' },
              { step: 'Tag', desc: 'tag the picture with the pest it is suspected to be' },
              { step: 'Submit', desc: 'send the picture to the Bio Buddies server' },
            ].map((item, i) => (
              <Box
                key={item.step}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                  bgcolor: palette.grey,
                  borderRadius: 2,
                  border: `1px solid ${palette.greyMid}`,
                }}
              >
                <IconBadge icon={stepIcons[i]} size="sm" colorIndex={i} />
                <Box>
                  <Typography sx={{ fontWeight: 800 }}>{item.step}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Reveal>

        <Reveal sx={{ mt: 4 }}>
          <SectionTitle align="left">Program cycle</SectionTitle>
          <Stack spacing={1} sx={{ mt: 2 }}>
            {cycleSteps.map((step, i) => (
              <Box
                key={step}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                  bgcolor: palette.white,
                  borderRadius: 2,
                  border: `1px solid ${palette.greyMid}`,
                  borderLeft: `4px solid ${palette.yellow}`,
                }}
              >
                <Typography
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: 1,
                    bgcolor: palette.yellow,
                    color: palette.ink,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    flexShrink: 0,
                    fontSize: '0.875rem',
                  }}
                >
                  {i + 1}
                </Typography>
                <Typography sx={{ lineHeight: 1.6 }}>{step}</Typography>
              </Box>
            ))}
          </Stack>
        </Reveal>

        <Reveal sx={{ mt: 4 }}>
          <SectionTitle align="left">Program tools</SectionTitle>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {tools.map((t, i) => (
              <Grid item xs={12} sm={6} key={t.label}>
                <Card sx={{ p: 2, height: '100%', display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconBadge icon={t.icon} size="sm" colorIndex={i} />
                  <Typography sx={{ fontWeight: 600, lineHeight: 1.5 }}>{t.label}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Reveal>

        <Reveal sx={{ mt: 4 }}>
          <InvasiveCallout title="What we do not do">
            <Box component="ul" sx={{ pl: 2.5, m: 0, lineHeight: 1.75 }}>
              <li>This system does <strong>not</strong> replace Biosecurity Queensland — they remain the official authority for pest management.</li>
              <li>Our volunteers will only work under the guidance of Biosecurity Queensland.</li>
              <li>Reporters or volunteers should <strong>not</strong> pick up or move invasive species without proper guidance from Biosecurity Queensland.</li>
            </Box>
          </InvasiveCallout>
        </Reveal>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }} justifyContent="center">
          <Button component={Link} to="/programs" variant="contained" color="primary">View programs</Button>
          <Button component={Link} to="/blueprint" variant="outlined" color="primary">See blueprint</Button>
          <Button component={Link} to="/who-we-are" variant="outlined" color="primary">Meet the team</Button>
        </Stack>
      </Container>
    </>
  );
}
