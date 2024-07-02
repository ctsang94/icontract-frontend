import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import FoundationOutlinedIcon from '@mui/icons-material/FoundationOutlined';
import './Timeline.scss';

export default function BasicTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <KitchenIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timeline__text'>2023 - 2024 Kitchen Remodeling</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <FoundationOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timeline__text'>2022 - 2023 Basement Remodeling</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <BathtubOutlinedIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent className='timeline__text'>2020 - 2021 Bathroom Remodeling</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
