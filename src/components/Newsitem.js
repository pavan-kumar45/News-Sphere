import React from 'react' //rcc

const Newsitem = (props) => {



  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (

    <div className='my-3'>

      <div className="card" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '84%', zIndex: '1' }}>
          {source}
        </span>
        {/* badges */}
        <img src={!imageUrl ? "https://t4.ftcdn.net/jpg/04/94/61/61/360_F_494616192_iCcgJmWhxOAks5O8zIKZokvCswCVkzPx.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div >
  )

}

export default Newsitem


