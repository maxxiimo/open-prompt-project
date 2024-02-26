import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';

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
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  lineHeight: '60px',
}));

const AboutModel = ({}) => {

  return (

    <React.Fragment>
      <Container disableGutters component="section" sx={{ mt: 0, pt: '2%', width: '100%' }} style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Item elevation={8} height={100} lineHeight={'100px'}>
          <Typography variant="h1" style={{ lineHeight: 0.5, paddingTop: '3%' }}>
            OPP + RAI
          </Typography>
          <Typography variant="p">
            (The Open Prompt Project + Responsible AI)
          </Typography>
        </Item>
        <br/>
        <Item elevation={8} height={100} lineHeight={'100px'} style={{ paddingTop: '3%', paddingBottom: '3%' }}>
          <Typography variant="h4">
            We have two missions.
          </Typography> <br/>
          <Typography variant="h6">
            Advance AI in the field of LLM. <br/>
            Develop LLMs responsibly.
          </Typography>
        </Item> <br/>
        <Item elevation={8} height={100} lineHeight={'100px'} style={{ paddingTop: '3%', paddingBottom: '3%' }}>
          <Typography variant="h4">
            Resources to give context to what we do
          </Typography><br/>
          <Typography variant="h6" style={{ lineHeight: 2.5, paddingLeft: 16, paddingRight: 16 }}>
            An <a href="https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/">Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence</a> from the White House "places the highest urgency on governing the development and use of AI safely and responsibly, and is therefore advancing a coordinated, Federal Government-wide approach to doing so." <br/>
            The <a href="https://www.nist.gov/artificial-intelligence">NIST AI Framework</a> "contributes to the research, standards and data required to realize the full promise of artificial intelligence (AI) as a tool that will enable American innovation, enhance economic security and improve our quality of life".<br/>
            The <a href="https://pulitzercenter.org/journalism/initiatives/ai-accountability-network">AI Accountability Network</a>, spearheaded by the Pulitzer Center on Crisis Reporting, "seeks to address the knowledge imbalance on artificial intelligence that exists in the journalism industry and to create a multidisciplinary and collaborative ecosystem that enables journalists to report on this fast-evolving topic with skill, nuance, and impact".<br/>
          </Typography>
        </Item>
        <br/>
        <Item elevation={8} height={100} lineHeight={'100px'} style={{ paddingTop: '3%', paddingBottom: '3%' }}>
          <Typography variant="h4">
            Responsibility Metrics
          </Typography> <br/>
            <Button sx={{ ml: 4, mr: 4 }} variant="contained" href="https://unsceb.org/principles-ethical-use-artificial-intelligence-united-nations-system">United Nations</Button>
            <Button sx={{ ml: 4, mr: 4 }} variant="contained" href="https://ai.google/responsibility/responsible-ai-practices/">Google</Button>
            <Button sx={{ ml: 4, mr: 4 }} variant="contained" href="https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai?view=azureml-api-2">Microsoft</Button>
        </Item> <br/>
      </Container>
    </React.Fragment>
  );
};

export const AboutPage = () => {
  return (
    <Grid>
      <AboutModel />
    </Grid>
  );
};
