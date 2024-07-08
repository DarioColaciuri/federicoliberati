import { useState } from 'react';
import indexesData from '../utils/indexes.json';
import "./IndexList.css"

const IndexListES = () => {
  const [indexes, setIndexes] = useState(indexesData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const sortIndexes = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    const sortedIndexes = [...indexes].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setIndexes(sortedIndexes);
    setSortConfig({ key, direction });
  };

  return (
    <div id='project'>
      <div className="sort-buttons">
        <button className='container-year button' onClick={() => sortIndexes('year')}><p className='text-button'>A</p></button>
        <button className='container-index button' onClick={() => sortIndexes('index')}><p className='text-button'>I</p></button>
        <button className='container-title button' onClick={() => sortIndexes('title')}><p className='text-button'>T</p></button>
        <button className='container-type button' onClick={() => sortIndexes('type')}><p className='text-button'>T</p></button>
        <button className='container-status button' onClick={() => sortIndexes('status')}><p className='text-button'>E</p></button>
      </div>
      <div className="index">
        {indexes.map((index) => (
          index.link ? (
            <a key={index.index} href={`/es/project/${index.link}`} className="project">
              <div className="container-year">
                <h1 className='text'>{index.year}</h1>
                </div>
              <div className="container-index">
                <h1 className='text'>{index.index}</h1>
              </div>
              <div className="container-title">
                <h1 className='text'>{index.title}</h1>
              </div>
              <div className="container-type">
                <h1 className='text'>{index.type}</h1>
              </div>
              <div className="container-status">
                <h1 className='text'>{index.status}</h1>
              </div>
              {index.thumbnail ? (
                <img
                  className="index-img"
                  src={`/${index.thumbnail}`}
                  alt={index.title}
                />
              ) : null}
            </a>
          ) : (
            <div className="project" key={index.index}>
              <div className="container-year">
                <h1 className='text'>{index.year}</h1>
              </div>
              <div className="container-index">
                <h1 className='text'>{index.index}</h1>
              </div>
              <div className="container-title">
                <h1 className='text'>{index.title}</h1>
              </div>
              <div className="container-type">
                <h1 className='text'>{index.type}</h1>
              </div>
              <div className="container-status">
                <h1 className='text'>{index.status}</h1>
              </div>
              {index.thumbnail ? (
                <img
                  className="index-img"
                  src={`/${index.thumbnail}`}
                  alt={index.title}
                />
              ) : null}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default IndexListES;