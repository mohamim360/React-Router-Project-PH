import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

const data = [
  { subject: 'Assignment 1', score: 60 },
  { subject: 'Assignment 2', score: 59 },
  { subject: 'Assignment 3', score: 60 },
  { subject: 'Assignment 4', score: 60 },
  { subject: 'Assignment 5', score: 56 },
  { subject: 'Assignment 6', score: 60 },
  { subject: 'Assignment 7', score: 59 },
];

const Statistics = () => {
  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Assignments" dataKey="score" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Tooltip />
    </RadarChart>
  );
};

export default Statistics;
