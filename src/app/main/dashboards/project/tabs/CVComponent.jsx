import React from 'react';
import { Typography, Grid, Box, Divider, Chip, Link as MuiLink, useMediaQuery, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/system';

// Styled components
const VerticalDivider = styled(Divider)({
  height: '100%',
  alignSelf: 'stretch',
  margin: '0 16px',
  borderLeft: '2px solid #000', // to make it thicker like in your screenshot
});

const SectionTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  paddingBottom: theme.spacing(1), // Adds some space between the text and the line
  marginBottom: theme.spacing(2), // Adjusts space below the line
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px', // Adjust thickness of the line
    backgroundColor: '#1E90FF', // Change to the color you want, matching the image (dodger blue here)
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

const Minipage = styled(Box)(({ width, theme }) => ({
  width: width,
  display: 'inline-block',
  verticalAlign: 'top',
  marginRight: '2rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginRight: 0,
    marginBottom: '0.5rem',
  },
}));

function Objective() {
  return (
    <Box mb={4}>
      <Typography variant="h6" fontWeight="bold">Objective</Typography>
      <Typography variant="body1">
        A machine and deep learning engineer passionate about cutting-edge technologies for solving real-life problems. I have a demonstrated experience in building AI models for structured data, various computer vision, and Natural language processing tasks. I seek to build an exciting career and apply my skills in an innovative AI process. I enjoy working in a team and communicating data-driven results.
      </Typography>
    </Box>
  );
}

function Education() {
  const education = [
    {
      degree: "Masters in Artificial Intelligence",
      school: "University of Science and Technology (UST)",
      years: "2019-2024",
      gpa: "3.94/4.0",
      thesis: {
        title: "A Robust Framework for Automatic Recognition of Car License Plate Numbers at Security Gates: Zewail City's Campus as a Case Study",
        description: "A practical approach to recognizing Arabic license plates in surveillance footage, particularly when these plates are captured from high angles or elevations by surveillance cameras.",
        duties: [
          "Development of a robust framework for license plate recognition and a method for correction of tilt discrepancies",
          "Developed curated datasets and fixed their problems through automated analysis",
          "Real-world testing, evaluation, and recommendations from lessons learned"
        ],
        paperLink: "https://bit.ly/3xdFkOK"
      }
    },
    {
      degree: "Bachelor of Communication Engineering",
      school: "UST at Zewail City",
      years: "2013-2018",
      gpa: "3.54/4.0",
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {education.map((edu, index) => (
        <Box key={index} mb={3}>
          <Minipage width={isMobile ? "100%" : "12em"}>
            <Typography variant="body2">{edu.years}</Typography>
          </Minipage>
          <Minipage width={isMobile ? "100%" : "calc(100% - 12em - 4rem)"}>
            <Typography variant="body2" fontWeight="bold">{edu.degree}</Typography>
            <Typography variant="body2">{edu.school}</Typography>
            <Typography variant="body2">GPA: {edu.gpa}</Typography>
            {edu.thesis && (
              <Box mt={2}>
                <SectionTitle variant="h6"><LaptopMacIcon style={{ color: '#1E90FF' }}/> THESIS</SectionTitle>
                <Typography variant="body2" fontWeight="bold">{edu.thesis.title}</Typography>
                <Typography variant="body2">
                  <a href={edu.thesis.paperLink} target="_blank" rel="noopener noreferrer">Published paper</a>
                </Typography>
                <Typography variant="caption" display="block" mt={1}>{edu.thesis.description}</Typography>
                <Box mt={1}>
                  <Typography variant="body2" fontWeight="bold">Duties:</Typography>
                  <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
                    {edu.thesis.duties.map((duty, idx) => (
                      <li key={idx}><ArrowRightAltIcon fontSize="small" /> {duty}</li>
                    ))}
                  </ul>
                </Box>
              </Box>
            )}
          </Minipage>
        </Box>
      ))}
    </Box>
  );
}

function Experience() {
  const experience = [
    {
      role: "Senior Data Scientist",
      company: "Cognitro Analytics, Egypt",
      start: "June 2019",
      end: "Present",
      details: [
        "Led and developed 14 AI projects, including advanced applications in natural language processing (NLP), structured data, and computer vision (CV)",
        "Created over 25 AI-driven prototypes and interactive dashboards, demonstrating advanced analytical capabilities across various AI domains.",
        "Designed engineering pipelines for transformation and extraction of data, optimized and benchmarked ML algorithms for diverse AI projects.",
        "Utilized machine learning experiment tracking and management tools to improve the reproducibility and collaboration of AI projects. Led evaluation design processes"
      ],
      technologies: ["TensorFlow", "Keras", "PyTorch", "GPT", "Mlflow", "SQL", "Flask", "Django", "React", "AWS", "GCP", "Azure", "Docker", "Git"]
    },
    {
      role: "Research Assistant",
      company: "University of Science and Technology at Zewail City",
      start: "January 2020",
      end: "March 2023",
      details: [
       'Lead a team of 8 interns to build car analytics surveillance system. Distributed work and tasks across them',
       'Developed end-to-end car analytics module which includes car tracking, license plate detection and recognition'
      ]
    },
    {
      role: "Teaching Assistant",
      company: "University of Science and Technology at Zewail City",
      start: "January 2019",
      end: "June 2019",
      details: [
        "Taught Operating Systems, Computer Networks, Databases, and Algorithms and Data Structures."
      ]
    }
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {experience.map((exp, index) => (
        <Box key={index} mb={3}>
          <Minipage width={isMobile ? "100%" : "12em"}>
            <Typography variant="body2">{exp.start} - {exp.end}</Typography>
          </Minipage>
          <Minipage width={isMobile ? "100%" : "calc(100% - 12em - 4rem)"}>
            <Typography variant="body2" fontWeight="bold">{exp.role}</Typography>
            <Typography variant="body2">{exp.company}</Typography>
            <Box mt={1}>
              <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
                {exp.details.map((detail, detailIndex) => (
                  <li key={detailIndex}><ArrowRightAltIcon fontSize="small" /> {detail}</li>
                ))}
              </ul>
            </Box>
            {exp.technologies && (
              <Box mt={2}>
                {exp.technologies.map((tech, techIndex) => (
                  <TechnologyChip key={techIndex} label={tech} />
                ))}
              </Box>
            )}
          </Minipage>
        </Box>
      ))}
    </Box>
  );
}

function CVComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className=''>
      <Objective />
      <Grid container spacing={isMobile ? 4 : 10}>
        <Grid item xs={12} md={6}>
          <SectionTitle variant="h6"><WorkIcon style={{ color: '#1E90FF' }}/> WORK SUMMARY</SectionTitle>
          <Experience />
        </Grid>
        <Grid item xs={12} md={6}>
          <SectionTitle variant="h6"><SchoolIcon  style={{ color: '#1E90FF' }}/> EDUCATION</SectionTitle>
          <Education />
        </Grid>
      </Grid>
    </div>
  );
}

export default CVComponent;
