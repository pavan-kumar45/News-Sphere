import React, { useEffect, useState } from 'react' //rcc
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types' //impt
import InfiniteScroll from "react-infinite-scroll-component";




const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  // document.title = `${ capitalizeFirstLetter(props.category)}`;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }





  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);

  }

  useEffect(() => {
    document.title = `${ capitalizeFirstLetter(props.category)}`;
    updateNews();
  }, [])



  const fetchMoreData = async () => {
    

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    setArticles( articles.concat(parsedData.articles))

    setTotalResults(parsedData.totalResults)

  };


  const handlePrevClick = async () => {
    setPage(page-1)
    updateNews();

  }


  const handleNextClick = async () => {
    setPage(page+1)
    updateNews();
  }




  return (
    <>
      <h1 className="text-center" style={{ margin: '30px 0px' }}>NewsMonkey-Top HeadLines On { capitalizeFirstLetter(props.category)} Category</h1>
      { loading && <Spinner />}

      <InfiniteScroll
        dataLength={ articles.length}
        next={ fetchMoreData}
        hasMore={ totalResults !=  articles.length}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">

            { articles.map((element) => {

              return <div className="col-md-3" key={element.url}>
                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url}
                  author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>

            })}
          </div>
        </div>
      </InfiniteScroll>

    </>


  )

}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News