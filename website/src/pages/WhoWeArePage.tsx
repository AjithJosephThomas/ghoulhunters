import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import GroupsIcon from '@mui/icons-material/Groups';
import ParkIcon from '@mui/icons-material/Park';
import WaterIcon from '@mui/icons-material/Water';
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config';
import { BiodiversityCallout } from '../components/common/Callouts';
import { IconBadge } from '../components/common/IconBadge';
import { PageHero } from '../components/common/PageHero';
import { Reveal, StaggerGrid, StaggerItem } from '../components/common/Reveal';
import { SectionTitle } from '../components/common/SectionTitle';
import { categoryColors } from '../theme/palette';
import { usePageTitle } from '../hooks/usePageTitle';

const team = [
  { name: 'Ava Bethel', logo: 'tree', color: 0 },
  { name: "Darcy O'Dempsey", logo: 'river', color: 1 },
  { name: 'Emilie Rose Joseph', logo: 'tree', color: 2 },
  { name: 'Esther Rose Joseph', logo: 'river', color: 3 },
];

export function WhoWeArePage() {
  const { site } = siteConfig;

  usePageTitle('Who We Are', `Meet the ${site.name} team — protecting biodiversity from invasive species.`);

  return (
    <>
      <PageHero title="Who We Are" subtitle={`${site.schoolYearLevel} students protecting biodiversity`} />
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 5 } }}>
        <Reveal>
          <Chip label="Community watch · Kedron" sx={{ mb: 2 }} />
          <SectionTitle align="left" icon={<IconBadge icon={GroupsIcon} size="sm" colorIndex={1} />}>
            About us
          </SectionTitle>
          <Typography paragraph sx={{ lineHeight: 1.75 }}>
            <strong>{site.name}</strong> is a <strong>{site.schoolYearLevel}</strong> community project from{' '}
            <strong>{site.schoolName}</strong> in <strong>{site.schoolSuburb}</strong>. We run invasive species
            watch programs and help neighbours protect <strong>nature</strong> and <strong>biodiversity</strong>.
          </Typography>
          <Typography paragraph sx={{ lineHeight: 1.75 }}>
            We are <strong>{site.name}</strong> — kids and neighbours who look out for each other and our river,
            spotting invasive pests, reporting safely, and helping experts keep Queensland&apos;s environment healthy.
          </Typography>
        </Reveal>

        <Reveal sx={{ mt: 4 }}>
          <SectionTitle align="left" icon={<IconBadge icon={EmojiNatureIcon} size="sm" colorIndex={2} />}>
            Why we care
          </SectionTitle>
          <BiodiversityCallout>
            <Typography>
              Local rivers and habitats are part of our home. Invasive species can hurt native animals, plants,
              and the whole food web. We want everyone to know what to do — and what <em>not</em> to do — so we
              can be guardians of our environment.
            </Typography>
          </BiodiversityCallout>
        </Reveal>

        <Reveal sx={{ mt: 4 }}>
          <SectionTitle align="left">Our team</SectionTitle>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            We are four enthusiastic friends from Grade 5 O.
          </Typography>
        </Reveal>

        <StaggerGrid>
          <Grid container spacing={2} justifyContent="center">
            {team.map((member) => {
              const colors = categoryColors[member.color];
              return (
                <Grid item xs={12} sm={6} md={5} lg={4} key={member.name}>
                  <StaggerItem>
                    <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                      <Avatar
                        sx={{
                          width: 64,
                          height: 64,
                          mx: 'auto',
                          mb: 1.5,
                          bgcolor: colors.bg,
                          color: colors.fg,
                          fontWeight: 900,
                          fontSize: '1.5rem',
                        }}
                      >
                        {member.logo === 'tree' ? <ParkIcon sx={{ fontSize: 34 }} /> : <WaterIcon sx={{ fontSize: 34 }} />}
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 800 }}>{member.name}</Typography>
                    </Card>
                  </StaggerItem>
                </Grid>
              );
            })}
          </Grid>
        </StaggerGrid>

        <Box textAlign="center" sx={{ mt: 5 }}>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Contact us through <strong>{site.schoolName}</strong>, {site.schoolSuburb}.
          </Typography>
          <Button component={Link} to="/programs" variant="contained" color="primary" size="large">
            Our programs
          </Button>
        </Box>
      </Container>
    </>
  );
}
