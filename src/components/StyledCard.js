
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { styled } from '@mui/system';

  
export const StyledCard = styled(Card)({
    transform: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
  });
  
export default StyledCard;