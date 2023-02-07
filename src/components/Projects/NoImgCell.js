import React from 'react';
import PropTypes from 'prop-types';

const NoImgCell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <p className="published"> {data.date}</p>
      </header>
      <div style={{ width: '100%', margin: '-1%' }} />
      <div className="description" style={{ display: 'contents' }}>
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

NoImgCell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoImgCell;
