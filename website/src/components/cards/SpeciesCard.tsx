import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, alpha } from '@mui/material';
import { Link } from 'react-router-dom';
import { Program, programImage } from '../../config';
import { palette } from '../../theme/palette';
import { IconBadge } from '../common/IconBadge';
import { getIcon } from '../../utils/icons';

interface SpeciesCardProps {
  program: Program;
}

export function SpeciesCard({ program }: SpeciesCardProps) {
  const Icon = getIcon(program.cardIcon);

  return (
    <Card
      sx={{
        height: '100%',
        '&:hover': {
          transform: 'translateY(-8px)',
          '& .species-card__img': { transform: 'scale(1.06)' },
          '& .species-card__bar': { height: 8 },
        },
      }}
    >
      <Box
        className="species-card__bar"
        sx={{
          height: 5,
          background: `linear-gradient(90deg, ${palette.yellow}, ${palette.green}, ${palette.orange})`,
          transition: 'height 0.3s ease',
        }}
      />
      <CardActionArea component={Link} to={`/species/${program.id}`} sx={{ height: '100%' }}>
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <CardMedia
            className="species-card__img"
            component="img"
            height="190"
            image={programImage(program, program.thumbnail)}
            alt={program.name}
            sx={{ objectFit: 'cover', transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)' }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(180deg, transparent 55%, ${alpha(palette.ink, 0.35)} 100%)`,
            }}
          />
          <Box sx={{ position: 'absolute', bottom: 10, left: 10 }}>
            <IconBadge icon={Icon} size="sm" colorIndex={1} label={program.name} />
          </Box>
        </Box>
        <CardContent sx={{ bgcolor: palette.white }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 800, fontFamily: '"Nunito", sans-serif', color: palette.ink }}>
            {program.name}
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1, fontWeight: 600, color: palette.green }}>
            {program.scientificName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
            {program.cardDescription}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 2, fontWeight: 800, color: palette.green }}>
            Species guide <ArrowForwardIcon fontSize="small" />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
