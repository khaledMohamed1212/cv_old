import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, Icon, Box, Chip, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

// Styled component for the section title with a line underneath
const SectionTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(2),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: '#1E90FF',
  },
  '& svg': {
    marginRight: theme.spacing(1),
  },
}));

const TechnologyChip = styled(Chip)({
  margin: '4px',
  borderRadius: '5px',
  fontSize: '12px',
  backgroundColor: '#f0f0f0',
});

const StyledTabs = styled(Tabs)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    '& .MuiTabs-flexContainer': {
      flexDirection: 'column',
    },
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    minHeight: 'auto',
    padding: '12px 8px',
    fontSize: '1.5rem',
  },
  textTransform: 'none',
  fontWeight: 'bold',
  minWidth: 'auto',
  color: '#000',
  '&.Mui-selected': {
    color: '#2196f3', // Blue color for selected tab
  },
}));

function CompletedProjectsWidget({ categorizedProjects }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const projectCategories = Object.keys(categorizedProjects);

  return (
    <div className="widget">
      <Typography variant="h6" fontWeight="bold" className="mb-16">
        Completed Projects
      </Typography>
      <StyledTabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        orientation={isMobile ? "vertical" : "horizontal"}
        variant="fullWidth"
      >
        {projectCategories.map((category, index) => (
          <StyledTab 
            key={index} 
            label={category}
            style={{ whiteSpace: 'normal', textTransform: 'none' }}  // Allow text to wrap
          />
        ))}
      </StyledTabs>
      {projectCategories.map((category, index) => (
        <div key={category} style={{ display: selectedTab === index ? 'block' : 'none' }}>
          <Grid container spacing={2}>
            {categorizedProjects[category].map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card className="project-card">
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="div"
                      display="flex"
                      alignItems="center"
                    >
                      <Icon
                        sx={{
                          fontSize: 40,
                          color: '#1E90FF',
                          marginRight: 2,
                        }}
                      >
                        {project.iconName}
                      </Icon>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                    <Box mt={2}>
                      {project.technologies && project.technologies.map((tech, techIndex) => (
                        <TechnologyChip key={techIndex} label={tech} />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
}

export default CompletedProjectsWidget;
