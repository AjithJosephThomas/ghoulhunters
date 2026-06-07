import { Alert, Button, Container, Stack, Typography } from '@mui/material';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getProgram } from '../config';
import { FreshwaterGoldClamSpecies } from '../content/freshwaterGoldClamSpecies';
import { PageHero } from '../components/common/PageHero';
import { HeroStory } from '../components/species/HeroStory';
import { Reveal } from '../components/common/Reveal';
import { usePageTitle } from '../hooks/usePageTitle';

function SpeciesContent({ id }: { id: string }) {
  if (id === 'freshwater-gold-clam') return <FreshwaterGoldClamSpecies program={getProgram(id)!} />;
  return <Typography>Species guide coming soon.</Typography>;
}

export function SpeciesPage() {
  const { id } = useParams<{ id: string }>();
  const program = id ? getProgram(id) : undefined;

  usePageTitle(program?.name ?? 'Species', program?.metaDescription);

  if (!program || program.status !== 'active') {
    return <Navigate to="/programs" replace />;
  }

  return (
    <>
      <PageHero title={program.name} subtitle={program.scientificName} compact>
        <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic', opacity: 0.8 }}>
          {program.aliases}
        </Typography>
      </PageHero>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <HeroStory />

        <Reveal>
          <Alert severity="warning" sx={{ mb: 4, borderRadius: 3 }}>
            <strong>{program.doNotMoveWarning}</strong>
          </Alert>
        </Reveal>

        <SpeciesContent id={program.id} />

        <Reveal sx={{ mt: 4 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button component={Link} to={`/watch/${program.id}`} variant="contained" color="primary">
              {program.watchProjectName}
            </Button>
            {program.externalLinks.map((l) => (
              <Button
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                variant={l.primary ? 'contained' : 'outlined'}
                color="secondary"
              >
                {l.label}
              </Button>
            ))}
          </Stack>
        </Reveal>
      </Container>
    </>
  );
}
