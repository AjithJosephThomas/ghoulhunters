import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { IconBadge } from '../components/common/IconBadge';
import { RiverBridgeIcon } from '../components/common/RiverBridgeIcon';
import { usePageTitle } from '../hooks/usePageTitle';

export function NotFoundPage() {
  usePageTitle('Page not found');

  return (
    <>
      <PageHero title="Page not found" subtitle="This page doesn't exist — head back to Nature Ninjas." compact />
      <Container maxWidth="sm" sx={{ py: { xs: 5, md: 6 }, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <IconBadge icon={RiverBridgeIcon} size="lg" colorIndex={4} />
        </Box>
        <Typography color="text.secondary" paragraph sx={{ lineHeight: 1.75, mb: 3 }}>
          Lost your way along the riverbank? Our home page has everything you need.
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary" size="large">
          Go home
        </Button>
      </Container>
    </>
  );
}
