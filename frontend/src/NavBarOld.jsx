import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Tooltip from '@mui/material/Tooltip';

import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import ClassIcon from '@mui/icons-material/Class';


const NavBarModel = ({title, menu, login}) => {
	// Adapted from https://react.school/material-ui/appbar/
	const icons = {
		"Login": <LoginIcon />,
		"Logout": <LogoutIcon />,
		"Home": <HomeIcon />,
    "Create": <AddIcon />,
    "View": <Class />,
	};


  return (
    <React.Fragment>
      <AppBar>	
        <Toolbar color="primary">
          <Typography variant="h6" className={classes.title}>
						{title}
            {title == 'Kamutiv Tech | Error' && '	\u{1F627}'}
          </Typography>
					{menu.map(menu => (
						<form action={menu.link} key={menu.key}>
							<Tooltip title={menu.name}>
			          <IconButton color="inherit" type="submit">
  			          {icons[menu.name]}
    			      </IconButton>
							</Tooltip>
						</form>
					))}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export const NavBar = () => {
  return (
    <Grid>
      <NavBarModel />
    </Grid>
  );
};
