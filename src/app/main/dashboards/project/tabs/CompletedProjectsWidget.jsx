import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, Icon, Box, Chip, Tabs, Tab } from '@mui/material';
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

function CompletedProjectsWidget({ categorizedProjects }) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const projectCategories = Object.keys(categorizedProjects);

  return (
    <div className="widget">
      <Typography variant="h6" fontWeight="bold" className="mb-16">
        Completed Projects
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        {projectCategories.map((category, index) => (
          <Tab key={index} label={category} />
        ))}
      </Tabs>
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
