import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Video from './Video';

function MyAccordion() {
  return (
    <div className='container mb-3'>
    <Accordion defaultActiveKey={['']} alwaysOpen>
        <Accordion.Item eventKey="0">
            <Accordion.Header>台南聽聽看 EP1</Accordion.Header>
            <Accordion.Body>
                <Video/>
                <a href='http://www.cityfm.tw/'>城市廣播</a>
                <br/>
                <a href='##'>Podcast</a>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
    
  );
}

export default MyAccordion