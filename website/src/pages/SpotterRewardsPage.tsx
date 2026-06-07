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
import { siteConfig } from '../config';
import { IconBadge } from '../components/common/IconBadge';
import { PageHero } from '../components/common/PageHero';
import { Reveal, StaggerGrid, StaggerItem } from '../components/common/Reveal';
import { SectionTitle } from '../components/common/SectionTitle';
import { getIcon } from '../utils/icons';
import { palette } from '../theme/palette';
import { usePageTitle } from '../hooks/usePageTitle';

export function SpotterRewardsPage() {
  const { reporterRewards } = siteConfig;

  usePageTitle(reporterRewards.heading, reporterRewards.pageMetaDescription);

  return (
    <>
      <PageHero title={reporterRewards.heading} subtitle={reporterRewards.lead} />
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 5 } }}>
        <Reveal>
          <Card sx={{ p: { xs: 3, md: 4 }, border: `1px solid ${palette.greyMid}` }}>
            <Chip label={reporterRewards.badge} sx={{ mb: 2 }} />
            <Typography paragraph sx={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
              {reporterRewards.body}
            </Typography>

            <SectionTitle sx={{ mt: 2, mb: 2, fontSize: '1.25rem' }}>Thank-you gifts</SectionTitle>
            <StaggerGrid>
              <Grid container spacing={2} sx={{ mb: 3 }}>
                {reporterRewards.rewards.map((reward, i) => {
                  const Icon = getIcon(reward.icon);
                  return (
                    <Grid item xs={6} sm={3} key={reward.label}>
                      <StaggerItem>
                        <Box
                          sx={{
                            textAlign: 'center',
                            p: 2,
                            borderRadius: 2,
                            bgcolor: palette.grey,
                            border: `1px solid ${palette.greyMid}`,
                          }}
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                            <IconBadge icon={Icon} size="md" colorIndex={i} />
                          </Box>
                          <Typography variant="body2" fontWeight={700}>
                            {reward.label}
                          </Typography>
                        </Box>
                      </StaggerItem>
                    </Grid>
                  );
                })}
              </Grid>
            </StaggerGrid>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 800 }}>
              {reporterRewards.eligibilityHeading}
            </Typography>
            <Typography paragraph color="text.secondary" sx={{ lineHeight: 1.75 }}>
              {reporterRewards.eligibility}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              {reporterRewards.note}
            </Typography>
          </Card>
        </Reveal>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <Button component={Link} to="/programs" variant="contained" color="primary" size="large">
            Our programs
          </Button>
          <Button component={Link} to="/#invasive-species" variant="outlined" color="primary" size="large">
            Invasive species
          </Button>
        </Stack>
      </Container>
    </>
  );
}
