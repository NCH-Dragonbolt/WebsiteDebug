import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Awards/Degree';

const Awards = ({ data }) => (
  <div className="education">
    <div className="link-to" id="awards" />
    <div className="title">
      <h3>Awards & Scholarships</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

Awards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Awards.defaultProps = {
  data: [],
};

export default Awards;
