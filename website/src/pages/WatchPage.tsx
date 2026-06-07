import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getProgram, siteConfig } from '../config';
import { FreshwaterGoldClamWatch } from '../content/freshwaterGoldClamWatch';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { palette } from '../theme/palette';
import { usePageTitle } from '../hooks/usePageTitle';

function WatchContent({ id }: { id: string }) {
  if (id === 'freshwater-gold-clam') return <FreshwaterGoldClamWatch />;
  return <Typography>Watch program coming soon.</Typography>;
}

export function WatchPage() {
  const { id } = useParams<{ id: string }>();
  const program = id ? getProgram(id) : undefined;
  const { biosecurity } = siteConfig;

  usePageTitle(program?.watchProjectName ?? 'Watch', program?.watchMetaDescription);

  if (!program || program.status !== 'active') {
    return <Navigate to="/programs" replace />;
  }

  return (
    <>
      <PageHero title={program.watchProjectName} subtitle={program.watchSubtitle} compact />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <WatchContent id={program.id} />

        <Reveal sx={{ mt: 4 }}>
          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              bgcolor: palette.yellowLight,
              border: `2px solid ${palette.yellow}`,
              textAlign: 'center',
            }}
          >
            <PhoneInTalkIcon sx={{ fontSize: 40, color: palette.ink, mb: 1 }} />
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 800 }}>
              Report {program.reportLabel}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              Call {biosecurity.authority} within {biosecurity.reportHours} hours
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, color: palette.ink }}>
              {biosecurity.phone}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                href={biosecurity.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="secondary"
                size="large"
              >
                Report online
              </Button>
              <Button component={Link} to={`/species/${program.id}`} variant="outlined" color="primary" size="large">
                Species guide
              </Button>
            </Stack>
          </Box>
        </Reveal>
      </Container>
    </>
  );
}
