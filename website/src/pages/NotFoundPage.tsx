import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import { PageHero } from '../components/common/PageHero';
import { usePageTitle } from '../hooks/usePageTitle';

export function NotFoundPage() {
  const { site } = siteConfig;
  usePageTitle('Page not found');

  return (
    <>
      <PageHero title="Page not found" subtitle={`This page doesn't exist — head back to ${site.name}.`} compact />
      <Container maxWidth="sm" sx={{ py: { xs: 5, md: 6 }, textAlign: 'center' }}>
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
