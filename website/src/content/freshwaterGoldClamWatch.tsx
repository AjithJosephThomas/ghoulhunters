import { Box, Typography } from '@mui/material';
import { BiodiversityCallout, InfoAlert } from '../components/common/Callouts';
import { Reveal } from '../components/common/Reveal';

export function FreshwaterGoldClamWatch() {
  return (
    <Box>
      <Reveal>
        <InfoAlert>
          <strong>Important:</strong> Queensland manages freshwater gold clam through{' '}
          <strong>surveillance and containment</strong>, not community eradication. This watch project focuses
          on <strong>education</strong>, <strong>biodiversity protection</strong>, and helping people report to
          Biosecurity Queensland the right way.
        </InfoAlert>
      </Reveal>

      <Reveal>
        <Typography variant="h5" gutterBottom>
          Overview
        </Typography>
        <Typography paragraph>
          The <strong>Bio Buddies Gold Clam Watch</strong> is a community response to an invasive species in
          the Brisbane River. We teach the community how to recognise the clam and report it without harming
          the environment.
        </Typography>
      </Reveal>

      <Reveal>
        <Typography variant="h5" gutterBottom>
          Project goals
        </Typography>
        <Box component="ul" sx={{ pl: 2.5 }}>
          <li>Increase awareness of invasive gold clam</li>
          <li>Help people identify the species from photos and facts</li>
          <li>Place <strong>posters with QR codes</strong> near the river (with permission)</li>
          <li>Always direct people to official reporting: <strong>13 25 23</strong></li>
        </Box>
      </Reveal>

      <Reveal>
        <Typography variant="h5" gutterBottom>
          Community role
        </Typography>
        <BiodiversityCallout>
          <Typography paragraph>Everyone can be a <strong>citizen scientist</strong>:</Typography>
          <Box component="ol" sx={{ pl: 2.5, m: 0 }}>
            <li>Learn what the clam looks like</li>
            <li>If you see one, <strong>do not move it</strong></li>
            <li>Take a photo and note the location</li>
            <li>Report to Biosecurity Queensland within 24 hours</li>
          </Box>
        </BiodiversityCallout>
      </Reveal>

      <Reveal>
        <Typography variant="h5" gutterBottom>
          Future vision (Phase 2)
        </Typography>
        <Box component="ul" sx={{ pl: 2.5 }}>
          <li>Bio Buddies mobile app — photograph, tag, and submit sightings directly</li>
          <li>Partnership conversations with Brisbane City Council</li>
          <li>More languages for river visitors</li>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          We will not ask volunteers to collect, kill, or transport clams — that is for authorised biosecurity
          officers only.
        </Typography>
      </Reveal>
    </Box>
  );
}
