import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { activePrograms, siteConfig } from '../config';
import { HomeHero } from '../components/home/HomeHero';
import { ReportBox } from '../components/common/ReportBox';
import { Reveal, StaggerGrid, StaggerItem } from '../components/common/Reveal';
import { SpeciesCard } from '../components/cards/SpeciesCard';
import { SectionTitle } from '../components/common/SectionTitle';
import { IconBadge } from '../components/common/IconBadge';
import { getIcon } from '../utils/icons';
import { palette } from '../theme/palette';
import { usePageTitle } from '../hooks/usePageTitle';
import { scrollToSection } from '../utils/scrollToSection';

const exploreCards = (siteName: string) => [
  { title: 'Programs', desc: 'Species guides and community watch projects', to: '/programs', icon: 'programs' },
  { title: 'How it works', desc: `How ${siteName} runs community watch programs`, to: '/how-it-works', icon: 'how_it_works' },
  { title: 'Who We Are', desc: `Meet the ${siteName} team`, to: '/who-we-are', icon: 'who_we_are' },
  { title: 'Blueprint', desc: 'Diagrams and process flow', to: '/blueprint', icon: 'blueprint' },
];

export function HomePage() {
  const { site, reporterRewards } = siteConfig;
  const programs = activePrograms();
  const location = useLocation();

  usePageTitle('Home', site.description);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    if (!id) return;
    const timer = window.setTimeout(() => scrollToSection(id), 150);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <>
      <HomeHero />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Reveal>
          <SectionTitle icon={<Box component="span" sx={{ fontSize: 32 }}>🐟</Box>}>Protecting our waterways</SectionTitle>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ maxWidth: 680, mx: 'auto', mb: 4, fontSize: '1.0625rem', lineHeight: 1.75 }}
          >
            Invasive species threaten <strong>biodiversity</strong>, river health, and the places we love.
            {site.name} helps kids, families, and neighbours <strong>learn</strong>, <strong>spot</strong>, and{' '}
            <strong>report</strong> safely — without touching or moving pests.
            {reporterRewards.enabled && (
              <>
                {' '}
                Active spotters can earn{' '}
                <Box component={Link} to="/spotter-rewards" sx={{ color: 'secondary.main', fontWeight: 700, textDecoration: 'underline' }}>
                  thank-you rewards
                </Box>
                .
              </>
            )}
          </Typography>
        </Reveal>

        <Box id="invasive-species" sx={{ mb: 6, scrollMarginTop: 88 }}>
          <Reveal>
            <SectionTitle icon={<Box component="span" sx={{ fontSize: 32 }}>🔍</Box>}>Invasive species</SectionTitle>
            <Typography textAlign="center" color="text.secondary" sx={{ mb: 3, maxWidth: 560, mx: 'auto' }}>
              Learn to recognise pests in our region. Select a species for photos, facts, and how to report safely.
            </Typography>
          </Reveal>
          <StaggerGrid>
            <Grid container spacing={3}>
              {programs.map((p) => (
                <Grid item xs={12} sm={6} md={4} key={p.id}>
                  <StaggerItem>
                    <SpeciesCard program={p} />
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerGrid>
          <Box textAlign="center" sx={{ mt: 3 }}>
            <Button component={Link} to="/programs" variant="outlined" color="primary" size="large">
              View all programs
            </Button>
          </Box>
        </Box>

        <Reveal>
          <SectionTitle icon={<Box component="span" sx={{ fontSize: 32 }}>🗺️</Box>} sx={{ mb: 2 }}>Explore {site.name}</SectionTitle>
        </Reveal>
        <StaggerGrid>
          <Grid container spacing={2}>
            {exploreCards(site.name).map((card, i) => {
              const Icon = getIcon(card.icon);
              return (
                <Grid item xs={12} sm={6} md={3} key={card.to}>
                  <StaggerItem>
                    <Card
                      sx={{
                        height: '100%',
                        bgcolor: palette.white,
                        '&:hover': { transform: 'translateY(-6px) rotate(-0.5deg)' },
                      }}
                    >
                      <CardActionArea component={Link} to={card.to} sx={{ height: '100%', p: 2 }}>
                        <CardContent sx={{ p: 0 }}>
                          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                            <IconBadge icon={Icon} size="md" colorIndex={i} />
                            <Typography variant="h6" sx={{ fontWeight: 800 }}>
                              {card.title}
                            </Typography>
                          </Stack>
                          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                            {card.desc}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 2, color: palette.green, fontWeight: 700 }}>
                            Explore <ArrowForwardIcon fontSize="small" />
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </StaggerItem>
                </Grid>
              );
            })}
          </Grid>
        </StaggerGrid>

        <ReportBox />
      </Container>
    </>
  );
}
