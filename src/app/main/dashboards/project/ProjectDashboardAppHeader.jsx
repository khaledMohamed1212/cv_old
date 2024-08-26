import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { darken } from '@mui/material/styles';
import { useState } from 'react';
import FuseLoading from '@fuse/core/FuseLoading';
import { selectUser } from 'src/app/auth/user/store/userSlice';
import { useAppSelector } from 'app/store/hooks';
import { useGetProjectDashboardProjectsQuery } from './ProjectDashboardApi';
import { Typography, Grid, Box, Divider, Chip, Link as MuiLink } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

/**
 * The ProjectDashboardAppHeader component.
 */

function Links() {
    const links = {
      linkedIn: "https://www.linkedin.com/in/khaled-hefnawy-b9b029a1/",
      github: "https://github.com/KHefnawy",
    };
  
    return (
      <Box mb={2}>
        <Box display="flex" mt={1}>
          <MuiLink href={links.linkedIn} target="_blank" rel="noopener" style={{ marginRight: 16 }}>
            <LinkedInIcon fontSize="large" />
          </MuiLink>
          <MuiLink href={links.github} target="_blank" rel="noopener">
            <GitHubIcon fontSize="large" />
          </MuiLink>
        </Box>
      </Box>
    );
  }
  

function ProjectDashboardAppHeader({ primaryTab, onPrimaryTabChange }) {
    const { data: projects, isLoading } = useGetProjectDashboardProjectsQuery();
    const user = useAppSelector(selectUser);
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    if (isLoading) {
        return <FuseLoading />;
    }

    return (
        <div className="flex flex-col w-full px-24 sm:px-32">
            <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0">
                <div className="flex flex-col items-center min-w-0 w-full">
                    <Avatar
                        sx={{
                            background: (theme) => darken(theme.palette.background.default, 0.05),
                            color: (theme) => theme.palette.text.secondary,
                            width: 128,
                            height: 128,
                        }}
                        alt="User Photo"
                        src={user?.data?.photoURL}
                    >
                        {user?.data?.displayName?.[0]}
                    </Avatar>
                    <Typography
                        className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate text-center"
                    >
                        {`Khaled Hefnawy`}
                    </Typography>
                    <Links/>
                </div>
            </div>

            {/* Full-Width Lines */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '3px',
                    backgroundColor: '#2196f3',
                     marginBottom: '-3px',
                }}
            ></div>

            {/* Tabs Section */}
            <div className="flex items-center justify-center ">
                <Tabs
                    value={primaryTab}
                    onChange={onPrimaryTabChange}
                    aria-label="Project Dashboard Tabs"
                    centered
                    TabIndicatorProps={{
                        sx: {
                            display: 'none', // Hide the default indicator
                        },
                    }}
                    sx={{
                        '.MuiTab-root': {
                            textTransform: 'none',
                            fontWeight: 'bold',
                            minWidth: 'auto',
                            color: '#000',
                            '&.Mui-selected': {
                                color: '#2196f3', // Blue color for selected tab
                            },
                        },
                    }}
                >
                    <Tab label="Info" />
                    <Tab label="Projects" />
                    {/* <Tab label="Skills" /> */}
                </Tabs>
            </div>

            {/* Full-Width Bottom Line */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '3px',
                    backgroundColor: '#2196f3',
                 }}
            ></div>

            {/* Content Based on Selected Tab */}
            <div className="flex items-center justify-center ">
                {selectedTab === 0 && <Typography></Typography>}
                {selectedTab === 1 && <Typography></Typography>}
                {selectedTab === 2 && <Typography></Typography>}
                {selectedTab === 3 && <Typography></Typography>}
            </div>
        </div>
    );
}

export default ProjectDashboardAppHeader;
