import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Container,
  Paper,
  Grid,
  IconButton,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, selectUser, loginUser } from './redux/userSlice';
import { getHeaderConfig } from './API_header_config';
import { API_URLS } from './APIs';
import { ROUTE_PATH } from './routePath';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const PromptCard = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    boxShadow: theme.shadows[5],
  },
}));

const DisplayBox = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(4, 0),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  position: 'relative', // Added for absolute positioning of buttons
}));

export const CommunityPage = () => {
  const [open, setOpen] = useState(true);
  const [prompts, setPrompts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(loginUser({}));
    }
    fetchPrompts();
  }, [dispatch, isAuthenticated]);

  const fetchPrompts = async () => {
    try {
      const HEADER_CONFIG = getHeaderConfig(user);
      const response = await axios.get(API_URLS.FETCH_PROMPTS, HEADER_CONFIG);
      setPrompts(response.data); // Assume this data is in the format that your backend sends
    } catch (error) {
      console.error('Error fetching prompts:', error);
    }
  };

  const handlePromptSelect = (promptId) => {
    navigate(`${ROUTE_PATH.PROMPT_DETAILS}/${promptId}`);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader />
        <Divider />
        <List>
          {['Groups', 'Categories', 'Prompty Techniques', 'Downloads'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Container>
          <Typography variant="h4" gutterBottom component="h1">
            The Open Prompt Project
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Education / Medicine / In-Context Prompting
          </Typography>
  
          { }

          {/* Display Box for Prompt 1 */}
          <DisplayBox elevation={3}>
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Typography variant="h5" component="h3" gutterBottom>
      Prompt 2:
    </Typography>
    <Box>
      <IconButton aria-label="upward">
        <ArrowUpwardIcon />
      </IconButton>
      <IconButton aria-label="downward">
        <ArrowDownwardIcon />
      </IconButton>
    </Box>
  </Box>
  <Typography variant="body1" gutterBottom>
    Context: Teplizumab traces its roots to a New Jersey drug company called Ortho Pharmaceutical. There, scientists generated an early version of the antibody, dubbed OKT3. Originally sourced from mice, the molecule was able to bind to the surface of T cells and limit their cell-killing potential. In 1986, it was approved to help prevent organ rejection after kidney transplants, making it the first therapeutic antibody allowed for human use.
  </Typography>
  <Typography variant="body1" component="span" gutterBottom style={{ fontWeight: 'bold' }}>
    Prompt: 
  </Typography>
  <Typography variant="body1" component="span" gutterBottom>
    When was it approved?
  </Typography>
</DisplayBox>

          {/* Display Box for Prompt 2 */}
          <DisplayBox elevation={3}>
  <Box display="flex" justifyContent="space-between" alignItems="center">
    <Typography variant="h5" component="h3" gutterBottom>
      Prompt 2:
    </Typography>
    <Box>
      <IconButton aria-label="upward">
        <ArrowUpwardIcon />
      </IconButton>
      <IconButton aria-label="downward">
        <ArrowDownwardIcon />
      </IconButton>
    </Box>
  </Box>
  <Typography variant="body1" gutterBottom>
    Context: Teplizumab traces its roots to a New Jersey drug company called Ortho Pharmaceutical. There, scientists generated an early version of the antibody, dubbed OKT3. Originally sourced from mice, the molecule was able to bind to the surface of T cells and limit their cell-killing potential. In 1986, it was approved to help prevent organ rejection after kidney transplants, making it the first therapeutic antibody allowed for human use.
  </Typography>
  <Typography variant="body1" component="span" gutterBottom style={{ fontWeight: 'bold' }}>
    Prompt: 
  </Typography>
  <Typography variant="body1" component="span" gutterBottom>
    When was OKT3 originally sourced from?
  </Typography>
</DisplayBox>
  
          {/* ... (Grid for mapping prompts) */}
        </Container>
      </Main>
    </Box>
  );
};

export default CommunityPage;