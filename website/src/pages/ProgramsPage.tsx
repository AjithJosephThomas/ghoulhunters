import { Box, Button, Chip, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import { SpeciesCard } from '../components/cards/SpeciesCard';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { SectionTitle } from '../components/common/SectionTitle';
import { usePageTitle } from '../hooks/usePageTitle';

export function ProgramsPage() {
  const { programs } = siteConfig;
  const active = programs.filter((p) => p.status === 'active');
  const comingSoon = programs.filter((p) => p.status === 'coming-soon');

  usePageTitle('Programs', 'Nature Ninjas invasive species watch programs.');

  return (
    <>
      <PageHero title="Programs" subtitle="Species guides and community watch projects along our waterways" />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Reveal>
          <Typography
            paragraph
            sx={{ maxWidth: 740, mx: 'auto', textAlign: 'center', mb: 5, fontSize: '1.05rem', lineHeight: 1.8 }}
          >
            Nature Ninjas runs <strong>community watch programs</strong> for invasive species in our region.
            Each program includes a species guide and a watch project page.
          </Typography>
        </Reveal>

        <SectionTitle>Active programs</SectionTitle>
        <Grid container spacing={3}>
          {active.map((p) => (
            <Grid item xs={12} sm={6} md={4} key={p.id}>
              <Reveal>
                <SpeciesCard program={p} />
                <Box sx={{ display: 'flex', gap: 1, mt: 1.5, justifyContent: 'center' }}>
                  <Button component={Link} to={`/watch/${p.id}`} size="small" color="secondary" variant="outlined">
                    {p.watchProjectName}
                  </Button>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>

        {comingSoon.length > 0 && (
          <Reveal sx={{ mt: 6 }}>
            <SectionTitle align="left">Coming soon</SectionTitle>
            {comingSoon.map((p) => (
              <Chip key={p.id} label={p.name} sx={{ mr: 1, mb: 1 }} />
            ))}
          </Reveal>
        )}
      </Container>
    </>
  );
}
