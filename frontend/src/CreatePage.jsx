import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CMTextField } from "./CMTextField";
import { getHeaderConfig } from "./API_header_config";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectUser } from "./redux/userSlice";
import { API_URLS } from "./APIs";
import { ROUTE_PATH } from "./routePath";
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/userSlice";

const CreateModel = ({}) => {
  const [context, setContext] = useState("");
  const [prompt, setPrompt] = useState("");
  const [helperText, setHelperText] = useState({
    context: "Test",
    prompt: "",
    userRole: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const HEADER_CONFIG = getHeaderConfig(user);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    dispatch(loginUser({}));
  }, []);

  const onInputChange = (value, setDetails) => {
    setErrorMessage("");
    setHelperText({ context: "", prompt: "" });
    setDetails(value);
  };

  const onClickLogin = () => {
    if (!prompt || !answer || !selectedUser) {
      setHelperText({
        username: prompt ? "" : "Please enter username",
        answer: answer ? "" : "please enter answer",
        userRole: selectedUser ? "" : "Please select the user",
      });

      return;
    }

    let payload = {
      prompt: prompt,
      answer: answer,
      userRole: selectedUser,
    };

    return axios
      .post(API_URLS.ON_LOGIN, payload, HEADER_CONFIG)
      .then((response) => {
        let resp = response.data;
        if (resp.success) {
          dispatch(loginUser(resp.user));
          if (resp.user.role == "System Admin") {
            navigate(ROUTE_PATH.ADMIN_DASHBOARD);
          } else {
            navigate(ROUTE_PATH.DASHBOARD);
          }
        } else {
          setErrorMessage(resp.message);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (

    <React.Fragment>
    <Container component="section" sx={{ mt: 8, mb: 4, width: '50%', float: 'left' }}>
      <CMTextField fullWidth multiline label="Context" id="context" sx={{ mb: 4 }}
        onChange={(event) => { onInputChange(event.target.value, setContext); }}
        placeholder={"Tepli/vkidezumab traces its roots to a New Jersey drug company called Ortho Pharmaceutical. There, scientists generated an early version of the antibody, dubbed OKT3.\' Originally sourced from mice, the molecule was able to bind to the surface of T cells and limit their cell-killing potential. In 1986, it was approved to help prevent organ rejection after kidney transplants, making it the first therapeutic antibody allowed for human use."}
        helperText={"Enter any additional information that helps the model understand the broader scenario or background"}
        inputProps={{ minRows: 3 }} />
      <CMTextField fullWidth multiline label="Prompt" id="Prompt" sx={{ mb: 4 }}
        onChange={(event) => { onInputChange(event.target.value, setPrompt); }}
        placeholder={"What was OKT3 originally sourced from?"}
        helperText={"Specific information or data you want the model to process"}
        inputProps={{ minRows: 3 }} />
      <TextField fullWidth multiline label="Expected Answer" id="Answer" sx={{ mb:4 }}
        onChange={(event) => { onInputChange(event.target.value, setAnswer); }}
        placeholder={"Mice."}
        helperText={"The expected response or elements of the response from the LLM"}
        inputProps={{ minRows: 3 }} />
      <Button variant="contained" sx={{ float: 'right' }} endIcon={<SendIcon />}
        onClick={onClickLogin}>
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
                backgroundColor: `${image.url}`,
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
};

export const CreatePage = () => {
  return (
    <Grid>
      <CreateModel />
    </Grid>
  );
};

const styles = {
  container: {
    display: "flex",
    flexFlow: "row",
    marginX: "auto",
    mt: "130px",
    borderRadius: "10px",
  },
  loginHeading: {
    pb: "20px",
  },
  internalContainer: {
    padding: "15px",
    paddingTop: "35px",
    paddingBottom: "25px",
    borderRight: "1px solid",
    borderRightColor: "#dad2d2",
  },
};

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
    url: '#f0e0d0',
    title: 'Zero-Shot Prompting',
    width: '33%',
    link: 'technique1',
  },
  {
    url: '#e7ceb9',
    title: 'In-Context Learning',
    width: '34%',
    link: 'technique1',
  },
  {
    url: '#e7ceb9',
    title: 'Chain-of-Thought (CoT)',
    width: '33%',
    link: 'technique1',
  },
  {
    url: '#d69264',
    title: 'Role-playing',
    width: '33%',
    link: 'technique1',
  },
  {
    url: '#c3592b',
    title: 'Feedback Loops',
    width: '34%',
    link: 'technique1',
  },
  {
    url: '#e1be9b',
    title: 'Adaptive Prompting',
    width: '33%',
    link: 'technique1',
  },
  {
    url: '#e7ceb9',
    title: 'Multimodal Prompting',
    width: '33%',
    link: 'technique1',
  },
  {
    url: '#d69264',
    title: 'ReAct',
    width: '34%',
    link: 'technique1',
  },
  {
    url: '#f0e0d0',
    title: 'Self-Consistency',
    width: '33%',
    link: 'technique1',
  },
];
