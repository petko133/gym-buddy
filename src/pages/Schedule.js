import React from 'react';
import Banner from '../components/pages/Banner';
import ScheduleBody from '../components/pages/Schedule/ScheduleBody';

const Schedule = () => {
  return (
    <div>
      <Banner title={`Schedule by Day`} />
      <ScheduleBody />
    </div>
  );
};

export default Schedule;
