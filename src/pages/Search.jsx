import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Search() {
  const { search } = useLocation();
  const searchInput = new URLSearchParams(search).get('q');
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    getData();
  }, [searchInput]);
  async function getData() {
    const url =
      'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchKeyword'; /*URL*/
    let queryParams =
      '?' +
      encodeURIComponent('serviceKey') +
      '=' +
      'Ss%2BzE1jEo4tYUao2rKGQWuJ8fRMakLMPpTSzHAK%2FUIbxFKubAjPEBOFgNxcKAW69%2Bc4mTwLsanTFS7y1AoN9IQ%3D%3D'; /*Service Key*/
    queryParams +=
      '&' +
      encodeURIComponent('MobileApp') +
      '=' +
      encodeURIComponent('AppTest'); /**/
    queryParams +=
      '&' +
      encodeURIComponent('MobileOS') +
      '=' +
      encodeURIComponent('ETC'); /**/
    queryParams +=
      '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams +=
      '&' +
      encodeURIComponent('numOfRows') +
      '=' +
      encodeURIComponent('10'); /**/
    queryParams +=
      '&' +
      encodeURIComponent('keyword') +
      '=' +
      encodeURIComponent(searchInput); /**/
    const res = await axios.get(url + queryParams);
    const data = res.data;
    console.log(data.response.body.items.item);
    setSearchData(data.response.body.items.item);
  }
  return (
    <div>
      <ul>
        {searchData.map((data) => (
          <li key={data.contentid}>
            <h3>{data.title}</h3>
            <img src={data?.firstimage} alt="" />
            <p>{data.addr1 + data.addr2}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
