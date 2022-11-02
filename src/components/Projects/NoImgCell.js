import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const NoImgCell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={data.link}>{data.title}</a></h3>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
        <p className="published"> {data.date}</p>

      </header>
      <div className="description">
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
