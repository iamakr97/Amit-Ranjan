import React from 'react'
import './Educations.css';
import { educatins } from '../../Data/EducationData';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdCastForEducation } from "react-icons/md";
import Contacts from '../Contacts/Contacts';

function Educations() {
  return (
    <div id='education' className='education-section'>
      <h1 className='education-heading'>Education</h1>
      <p className='education-desc'>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
      <VerticalTimeline className='timeline-container'>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#191924', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: '#854CE6', color: '#fff' }}
          icon={<MdCastForEducation />}
          layout="2-columns"
          lineColor="black"
        >
          <div className='education-logo-container'>
            <img src={educatins[0].img} alt="NITRR-Logo" className='education-logo' />
            <div>
              <h3 className="vertical-timeline-element-title">{educatins[0].degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">{educatins[0].school}</h4>
            </div>
          </div>

          <p>
            {educatins[0].desc}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="myclass"
          contentStyle={{ background: '#191924', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: '#854CE6', color: '#fff' }}
          icon={<MdCastForEducation />}
          layout="2-columns"
          lineColor="black"
        >
          <div className='education-logo-container'>
            <img src={educatins[1].img} alt="BRABU-Logo" className='education-logo' />
            <div>
              <h3 className="vertical-timeline-element-title">{educatins[1].degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">{educatins[1].school}</h4>
            </div>
          </div>

          <p>
            {educatins[1].desc}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="myclass"
          contentStyle={{ background: '#191924', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: '#854CE6', color: '#fff' }}
          icon={<MdCastForEducation />}
          layout="2-columns"
          lineColor="black"
        >
          <div className='education-logo-container'>
            <img src={educatins[2].img} alt="BRABU-Logo" className='education-logo' />
            <div>
              <h3 className="vertical-timeline-element-title">{educatins[2].degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">{educatins[2].school}</h4>
            </div>
          </div>
          <p>
            {educatins[2].desc}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="myclass"
          contentStyle={{ background: '#191924', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: '#854CE6', color: '#fff' }}
          icon={<MdCastForEducation />}
          layout="2-columns"
          lineColor="black"
        >
          <div className='education-logo-container'>
            <img src={educatins[3].img} alt="BRABU-Logo" className='education-logo' />
            <div>
              <h3 className="vertical-timeline-element-title">{educatins[3].degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">{educatins[3].school}</h4>
            </div>
          </div>
          <p>
            {educatins[3].desc}
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <Contacts />
    </div>
  );
}

export default Educations;