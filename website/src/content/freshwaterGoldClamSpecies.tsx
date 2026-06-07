import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import ParkIcon from '@mui/icons-material/Park';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SyncIcon from '@mui/icons-material/Sync';
import WaterIcon from '@mui/icons-material/Water';
import { Box, Card, Grid, Typography } from '@mui/material';
import { Program, programImage } from '../config';
import { BiodiversityCallout, InvasiveCallout } from '../components/common/Callouts';
import { Reveal } from '../components/common/Reveal';

interface Props {
  program: Program;
}

function PhotoFigure({
  program,
  src,
  alt,
  caption,
}: {
  program: Program;
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <Box component="figure" sx={{ m: 0 }}>
      <Box
        component="img"
        src={programImage(program, src)}
        alt={alt}
        loading="lazy"
        sx={{ width: '100%', borderRadius: 3, display: 'block' }}
      />
      <Typography component="figcaption" variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
        {caption} — © Queensland Government
      </Typography>
    </Box>
  );
}

export function FreshwaterGoldClamSpecies({ program }: Props) {
  return (
    <Box sx={{ '& section': { mb: 4 } }}>
      <Reveal>
        <BiodiversityCallout>
          <Typography>
            Freshwater gold clam is managed in Queensland as an <strong>established invasive pest</strong>.
            It was first detected in Australia at <strong>Colleges Crossing</strong> (west of Brisbane) in{' '}
            <strong>October 2023</strong>. Surveillance has confirmed it along a <strong>70 km+ stretch</strong>{' '}
            of the Brisbane River. Queensland works with partners across Australia and New Zealand on early
            detection, reporting, and preventing spread.
          </Typography>
        </BiodiversityCallout>
      </Reveal>

      <Reveal>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PhotoLibraryIcon color="secondary" /> What it looks like
        </Typography>
        <Typography paragraph>
          Also known as Asian clam, Asian golden clam, pygmy clam, Asiatic clam, prosperity clam, or golden
          clam. Clams range from <strong>pale yellow to gold</strong> but may also appear blackened.
        </Typography>
        <Box component="ul" sx={{ pl: 2.5 }}>
          <li>Inflated, round to triangular shell — yellowish brown to black with <strong>evenly spaced ridges</strong></li>
          <li>Usually under <strong>25 mm</strong>; can grow to <strong>50–65 mm</strong></li>
          <li>Often on sandy or muddy river beds; may see shells at the water&apos;s edge</li>
        </Box>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {[
            ['bq-closeup.jpg', 'Close-up of multiple freshwater gold clams', 'Close-up showing colour and size'],
            ['dpi-shell-closeup.jpeg', 'Shell close-up', 'Shell detail — Queensland DPI gallery'],
            ['bq-riverbank.jpg', 'Clams on river bank', 'Clams amongst rocks on a river bank'],
            ['dpi-colleges-crossing.jpeg', 'Specimens in containers', 'Specimens showing shell colour and ridges'],
          ].map(([file, alt, cap]) => (
            <Grid item xs={12} sm={6} key={file}>
              <PhotoFigure program={program} src={file} alt={alt} caption={cap} />
            </Grid>
          ))}
        </Grid>
      </Reveal>

      <Reveal>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <WaterIcon color="secondary" /> Habitat and distribution
        </Typography>
        <Typography paragraph>
          Optimal habitats are rivers with sandy bottoms and moderate flow, but the clam also lives in ponds,
          lakes, and rivers of all sizes. <strong>Known in Queensland:</strong> Colleges Crossing, Savages
          Crossing, Riverside Park, Somerset Dam.
        </Typography>
      </Reveal>

      <Reveal>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SyncIcon color="secondary" /> Life cycle
        </Typography>
        <Box component="ul" sx={{ pl: 2.5 }}>
          <li>Larvae live in plankton for up to <strong>55 days</strong> before settling</li>
          <li>Generally reproduces <strong>twice a year</strong></li>
          <li>A single clam can release hundreds of juveniles per day</li>
        </Box>
      </Reveal>

      <Reveal>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ParkIcon color="secondary" /> Why it harms biodiversity
        </Typography>
        <Typography paragraph>
          Highly invasive — can displace native clams, compete for food and habitat, and diminish water quality.
        </Typography>
      </Reveal>

      <Reveal>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <DirectionsBoatIcon color="secondary" /> How it spreads
        </Typography>
        <Box component="ul" sx={{ pl: 2.5 }}>
          <li>Attached to boats or carried in ballast water</li>
          <li>Used as bait or sold through the aquarium trade</li>
          <li>Accidentally moved on fishing gear, waders, and trailers</li>
        </Box>
        <Typography paragraph sx={{ mt: 1 }}>
          Vessel owners should thoroughly <strong>check, clean, and dry</strong> hulls and bilge systems.
        </Typography>
      </Reveal>

      <Reveal>
        <Typography variant="h5" gutterBottom>
          What to do
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2.5, height: '100%', borderTop: '4px solid', borderColor: 'moss.main' }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Do
              </Typography>
              <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                <li>Take a <strong>photo</strong> if safe</li>
                <li>Note your <strong>location</strong></li>
                <li>Report to <strong>Biosecurity Queensland within 24 hours</strong></li>
                <li><strong>Check, clean, dry</strong> boats and gear</li>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2.5, height: '100%', borderTop: '4px solid', borderColor: 'invasive.main' }}>
              <Typography variant="h6" color="invasive.main" gutterBottom>
                Don&apos;t
              </Typography>
              <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                <li>Pick up, move, keep, or release the clam</li>
                <li>Move water or mud to another river</li>
                <li>Use as bait or in aquariums</li>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Reveal>

      <Reveal>
        <InvasiveCallout title="Look-alikes — native Corbicula australis">
          <Typography paragraph>
            The invasive clam looks very similar to the native <em>Corbicula australis</em>.{' '}
            <strong>Identification should be done by a trained expert.</strong> If unsure, still report — never
            move what you find.
          </Typography>
          <PhotoFigure
            program={program}
            src="dpi-hand-specimen.png"
            alt="Freshwater gold clams held in a hand"
            caption="Specimens showing heavy concentric ridges"
          />
        </InvasiveCallout>
      </Reveal>

      <Reveal>
        <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ManageAccountsIcon color="secondary" /> Official management
        </Typography>
        <Typography>
          Queensland manages freshwater gold clam through surveillance, community reporting, and best-practice
          decontamination. The focus is on slowing spread and protecting river health.
        </Typography>
      </Reveal>
    </Box>
  );
}
