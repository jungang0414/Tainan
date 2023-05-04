import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Video from './Video';
// import {Link} from 'react-router-dom';

function MyAccordion({dataArray}) {
  return (
    <div className='container mb-3'>
      {dataArray.map((item, index)=>
        <Accordion defaultActiveKey={['']} alwaysOpen>
          
        <Accordion.Item eventKey="0">
            <Accordion.Header>
              {item.name}
              </Accordion.Header>
            <Accordion.Body>
                <Video/>
                <a href='http://www.cityfm.tw/'>城市廣播</a>
                <br/>
                <a href='##'>Podcast</a>
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
      )}

    </div>
    
  );
}

export default MyAccordion