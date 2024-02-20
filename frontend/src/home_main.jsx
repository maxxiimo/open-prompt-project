import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from "@material-ui/core/Typography";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '20vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: '/img/technique1.jpg',
    title: 'Technique 1',
    width: '33%',
    link: 'technique1',
  },
  {
    url: '/img/technique1.jpg',
    title: 'Technique 2',
    width: '34%',
    link: 'technique1',
  },
  {
    url: '/img/technique1.jpg',
    title: 'Technique 3',
    width: '33%',
    link: 'technique1',
  },
  {
    url: '/img/technique1.jpg',
    title: 'Technique 4',
    width: '33%',
    link: 'technique1',
  },
  {
    url: '/img/technique1.jpg',
    title: 'Technique 5',
    width: '34%',
    link: 'technique1',
  },
  {
    url: '/img/technique1.jpg',
    title: 'Technique 6',
    width: '33%',
    link: 'technique1',
  },
  {
    url: '/img/technique1.jpg',
    title: 'Technique 7',
    width: '33%',
    link: 'technique1',
  },
  {
    url: '/img/technique1.jpg',
    title: 'Technique 8',
    width: '34%',
    link: 'technique1',
  },
  {
    url: '/img/technique1.jpg',
    title: 'Technique 9',
    width: '33%',
    link: 'technique1',
  },
];

export default function HomePage() {
const HomeModel = ({}) => {
  return (
    <React.Fragment>
    <Container component="section" sx={{ mt: 8, mb: 4, width: '50%', float: 'left' }}>
      <TextField fullWidth multiline label="Context" id="Context" sx={{ mb: 4 }}
        inputProps={{ minRows: 3 }} />
      <TextField fullWidth multiline label="Prompt" id="Prompt" sx={{ mb: 4 }}
        inputProps={{ minRows: 3 }} />
      <TextField fullWidth multiline label="Expected Answer" id="Answer" sx={{ mb:4 }}
        inputProps={{ minRows: 3 }} />
      <Button variant="contained" sx={{ float: 'right' }} endIcon={<SendIcon />}>
        Submit
      </Button>
    </Container>
    <Container disableGutters component="section" sx={{ mt: 0, mb: 4, width: '50%', float: 'right' }}>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            href={image.link}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
    </React.Fragment>
  );
}

export const HomePage = () => {
  return (
    <Grid>
      <HomeModel />
    </Grid>
  );
};
