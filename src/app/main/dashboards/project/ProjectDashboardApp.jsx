import React, { useState } from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import FuseLoading from '@fuse/core/FuseLoading';
import ProjectDashboardAppHeader from './ProjectDashboardAppHeader';
import CVComponent from './tabs/CVComponent';
import CompletedProjectsWidget from './tabs/CompletedProjectsWidget';
import { useGetProjectDashboardWidgetsQuery } from './ProjectDashboardApi';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
  },
  '& .FusePageSimple-wrapper': {
    backgroundColor: 'white',
  },
}));

const categorizedProjects = {
  Vision: [
    {
      id: 1,
      name: 'COVIX',
      description: 'AI-on-Edge system for large-scale people counting and detection of social distancing and mask-wearing violations in public spaces.',
      iconName: 'people',
    },
    {
      id: 2,
      name: 'DeepBins',
      description: 'Real-time mobile localization and categorization system for street waste, providing smart waste management solutions.',
      iconName: 'delete',
    },
    {
      id: 3,
      name: 'Staff Uniform Detection and Robust People Counting',
      description: 'Developed a system for detecting staff uniforms and accurately counting people in real-time, enhancing security and compliance monitoring in large-scale environments.',
      iconName: 'groups',
    },
    {
      id: 4,
      name: 'Vision Training for YOLO on Forklifts',
      description: 'Implemented vision-based training using YOLO to improve object detection accuracy on forklift operations in industrial settings.',
      iconName: 'construction',
    },
    {
      id: 5,
      name: 'Multiple Object Tracking Algorithms',
      description: 'Researched and developed advanced multiple object tracking algorithms as part of a Master\'s thesis, focusing on real-time tracking in dynamic environments.',
      iconName: 'track_changes',
    },
    {
      id: 6,
      name: 'License Plate Recognition Algorithms',
      description: 'Designed and optimized license plate recognition algorithms, contributing to the development of a high-accuracy system for vehicle identification as part of a Master\'s thesis.',
      iconName: 'directions_car',
    },
    
  ],
  NLP: [
    {
      "id": 3,
      "name": "NLP Project",
      "description": "Implemented an NLP model for sentiment analysis.",
      "iconName": "textsms"
    },
    {
      "id": 4,
      "name": "Arabic OCR for Handwritten Legal Documents",
      "description": "Developed OCR for Arabic handwritten legal documents with the Saudi Ministry of Justice, focusing on accurate text recognition and legal document processing.",
      "iconName": "gavel"
    },
    {
      "id": 5,
      "name": "Semantic Understanding Document management system",
      "description": "Developed a platform for semantic understanding that searches a database based on semantic similarity, improving information retrieval and contextual matching.",
      "iconName": "search"
    },
    {
      "id": 6,
      "name": "LLM Development",
      "description": "Expertise in developing and fine-tuning both closed and open-source large language models like ChatGPT and LLAMA, with a focus on few-shot learning. Automating their pipelines and integrating in various web applications",
      "iconName": "language"
    },
    {
      "id": 7,
      "name": "LLMs Benchmarking",
      "description": "Benchmarked various quantization models including LLAMA and Mistral, focusing on performance, efficiency, and accuracy improvements in large language models.",
      "iconName": "bar_chart"
    },
    {
      "id": 8,
      "name": "RAG System Development",
      "description": "Built a Retrieval-Augmented Generation (RAG) system from scratch, integrating advanced retrieval techniques with generative models to enhance information retrieval and response generation.",
      "iconName": "build"
    }
]
,
  StructuredData: [
    {
      id: 8,
      name: 'SSD Failure Prediction',
      description: 'Developed a machine learning model to predict the failure of SSDs based on historical performance and health data, enhancing data center reliability and reducing maintenance costs.',
      iconName: 'storage',
    },
    {
      id: 9,
      name: 'Big Data Strategy',
      description: 'Optimization of telecommunication backoffice calls pressure using models to predict call reasons and automatically solve them. This project involved big data processing and feature extraction.',
      iconName: 'call',
    },
    {
      id: 10,
      name: 'Purebred Horses Quality Prediction',
      description: 'ML-based statistical model for predicting the long-term performance of newly born thoroughbred racing horses based on pedigree information.',
      iconName: 'insights',
    },
    {
      id: 11,
      name: 'Ziggy',
      description: 'A metaheuristic-based fleet management solution for smart scheduling and route planning, featuring route optimization and extensive testing on large datasets.',
      iconName: 'commute',
    },
  ],
  WebDevelopment: [
	{
		id: 16,
		name: 'Store Management System',
		description: 'Frontend and backend solution in React and Django for managing stores, products, employee hierarchies, and permissions.',
		iconName: 'store',
	},
	{
		id: 17,
		name: 'AWS Surveillance System',
		description: 'Real-time detection surveillance system using AWS Rekognition for detecting faces, emotions, objects, and text, with reports stored in S3 and DynamoDB, frontend built in Vue.js.',
		iconName: 'camera_alt',
	},
],
};

function ProjectDashboardApp() {
  const { isLoading } = useGetProjectDashboardWidgetsQuery();
  const [primaryTab, setPrimaryTab] = useState(0);

  function handleChangePrimaryTab(event, value) {
    setPrimaryTab(value);
  }

  if (isLoading) {
    return <FuseLoading />;
  }

  return (
    <Root
      header={<ProjectDashboardAppHeader primaryTab={primaryTab} onPrimaryTabChange={handleChangePrimaryTab} />}
      content={
        <div className="w-full px-24 sm:px-32 pt-16 sm:pt-24 lg:ltr:pr-0 lg:rtl:pl-0 bg-white">
          {primaryTab === 0 && <CVComponent />}
          {primaryTab === 1 && <CompletedProjectsWidget categorizedProjects={categorizedProjects} />}
        </div>
      }
    />
  );
}

export default ProjectDashboardApp;
