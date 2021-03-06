import React, { useState, useEffect } from 'react';
import './style.css';
import Card from './Card';
import axios from 'axios';
import Button from './Button';
import Loader from './Loader';
import Switch from './Switch';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { solid } from '@fortawesome/fontawesome-svg-core/import';

export default function App() {
  const response = {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: '/wPU78OPN4BYEgWYdXyg0phMee64.jpg',
        genre_ids: [18, 80],
        id: 278,
        original_language: 'en',
        original_title: 'The Shawshank Redemption',
        overview:
          'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
        popularity: 82.069,
        poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        release_date: '1994-09-23',
        title: 'The Shawshank Redemption',
        video: false,
        vote_average: 8.7,
        vote_count: 21116,
      },
      {
        adult: false,
        backdrop_path: '/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg',
        genre_ids: [35, 18, 10749],
        id: 19404,
        original_language: 'hi',
        original_title: 'दिलवाले दुल्हनिया ले जायेंगे',
        overview:
          'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
        popularity: 24.104,
        poster_path: '/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
        release_date: '1995-10-20',
        title: 'Dilwale Dulhania Le Jayenge',
        video: false,
        vote_average: 8.7,
        vote_count: 3555,
      },
      {
        adult: false,
        backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
        genre_ids: [18, 80],
        id: 238,
        original_language: 'en',
        original_title: 'The Godfather',
        overview:
          'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
        popularity: 111.32,
        poster_path: '/n6PvMAKL66gavIFxOyRB6czAeQO.jpg',
        release_date: '1972-03-14',
        title: 'The Godfather',
        video: false,
        vote_average: 8.7,
        vote_count: 15779,
      },
      {
        adult: false,
        backdrop_path: '/v5CEt88iDsuoMaW1Q5Msu9UZdEt.jpg',
        genre_ids: [10749, 18],
        id: 730154,
        original_language: 'ja',
        original_title: 'きみの瞳が問いかけている',
        overview:
          "A tragic accident lead to Kaori's blindness, but she clings to life and the smaller pleasures it can still afford her. She meets Rui and begins to talk to him. Rui was once a promising kickboxer, but something happened in his past. Kaori's smile brings out a change in Rui. However, the two are connected in more than one way. Rui attempts to do what is right.",
        popularity: 12.463,
        poster_path: '/cVn8E3Fxbi8HzYYtaSfsblYC4gl.jpg',
        release_date: '2020-10-23',
        title: 'Your Eyes Tell',
        video: false,
        vote_average: 8.6,
        vote_count: 284,
      },
      {
        adult: false,
        backdrop_path: '/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg',
        genre_ids: [18, 36, 10752],
        id: 424,
        original_language: 'en',
        original_title: "Schindler's List",
        overview:
          'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
        popularity: 53.94,
        poster_path: '/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
        release_date: '1993-11-30',
        title: "Schindler's List",
        video: false,
        vote_average: 8.6,
        vote_count: 12604,
      },
      {
        adult: false,
        backdrop_path: '/i1GT0e6Crg6UezT3ibXnMS3pBAd.jpg',
        genre_ids: [16, 18, 10749],
        id: 652837,
        original_language: 'ja',
        original_title: 'ジョゼと虎と魚たち',
        overview:
          'With dreams of diving abroad, Tsuneo gets a job assisting Josee, an artist whose imagination takes her far beyond her wheelchair. But when the tide turns against them, they push each other to places they never thought possible, and inspire a love fit for a storybook.',
        popularity: 31.945,
        poster_path: '/z1D8xi9x4uEhyFruo7uEHXUMD4K.jpg',
        release_date: '2020-12-25',
        title: 'Josee, the Tiger and the Fish',
        video: false,
        vote_average: 8.6,
        vote_count: 206,
      },
      {
        adult: false,
        backdrop_path: '/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg',
        genre_ids: [18, 80],
        id: 240,
        original_language: 'en',
        original_title: 'The Godfather: Part II',
        overview:
          'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
        popularity: 61.718,
        poster_path: '/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
        release_date: '1974-12-20',
        title: 'The Godfather: Part II',
        video: false,
        vote_average: 8.6,
        vote_count: 9503,
      },
      {
        adult: false,
        backdrop_path: '/lp6SmwyNRspEYkkLXFEVuNlCw77.jpg',
        genre_ids: [16, 14, 10749, 18],
        id: 533514,
        original_language: 'ja',
        original_title: '劇場版 ヴァイオレット・エヴァーガーデン',
        overview:
          'As the world moves on from the war and technological advances bring changes to her life, Violet still hopes to see her lost commanding officer again.',
        popularity: 34.251,
        poster_path: '/bajajkoErDst0JxdFyBkABiF9rW.jpg',
        release_date: '2020-09-18',
        title: 'Violet Evergarden: The Movie',
        video: false,
        vote_average: 8.6,
        vote_count: 213,
      },
      {
        adult: false,
        backdrop_path: '/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg',
        genre_ids: [10749],
        id: 724089,
        original_language: 'en',
        original_title: "Gabriel's Inferno: Part II",
        overview:
          "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
        popularity: 11.153,
        poster_path: '/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg',
        release_date: '2020-07-31',
        title: "Gabriel's Inferno: Part II",
        video: false,
        vote_average: 8.6,
        vote_count: 1396,
      },
      {
        adult: false,
        backdrop_path: '/3RMLbSEXOn1CzLoNT7xFeLfdxhq.jpg',
        genre_ids: [10749, 16],
        id: 372754,
        original_language: 'ja',
        original_title: '同級生',
        overview:
          'Rihito Sajo, an honor student with a perfect score on the entrance exam and Hikaru Kusakabe, in a band and popular among girls, would have never crossed paths. Until one day they started talking at the practice for their school’s upcoming chorus festival. After school, the two meet regularly, as Hikaru helps Rihito to improve his singing skills. While they listen to each other’s voice and harmonize, their hearts start to beat together.',
        popularity: 14.65,
        poster_path: '/cIfRCA5wEvj9tApca4UDUagQEiM.jpg',
        release_date: '2016-02-20',
        title: 'Dou kyu sei – Classmates',
        video: false,
        vote_average: 8.6,
        vote_count: 217,
      },
      {
        adult: false,
        backdrop_path: '/w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg',
        genre_ids: [10749],
        id: 696374,
        original_language: 'en',
        original_title: "Gabriel's Inferno",
        overview:
          "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
        popularity: 9.621,
        poster_path: '/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg',
        release_date: '2020-05-29',
        title: "Gabriel's Inferno",
        video: false,
        vote_average: 8.6,
        vote_count: 2226,
      },
      {
        adult: false,
        backdrop_path: '/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg',
        genre_ids: [10749, 35],
        id: 761053,
        original_language: 'en',
        original_title: "Gabriel's Inferno: Part III",
        overview:
          "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
        popularity: 26.02,
        poster_path: '/uqmTxOP3gNl5MWRt1wlrUnzTphM.jpg',
        release_date: '2020-11-19',
        title: "Gabriel's Inferno: Part III",
        video: false,
        vote_average: 8.5,
        vote_count: 953,
      },
      {
        adult: false,
        backdrop_path: '/hZth9NCeXvvO7Xi98d8q34e1Ier.jpg',
        genre_ids: [16, 10751, 14],
        id: 129,
        original_language: 'ja',
        original_title: '千と千尋の神隠し',
        overview:
          'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
        popularity: 96.478,
        poster_path: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
        release_date: '2001-07-20',
        title: 'Spirited Away',
        video: false,
        vote_average: 8.5,
        vote_count: 12660,
      },
      {
        adult: false,
        backdrop_path: '/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg',
        genre_ids: [10749, 16, 18],
        id: 372058,
        original_language: 'ja',
        original_title: '君の名は。',
        overview:
          'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.',
        popularity: 208.001,
        poster_path: '/q719jXXEzOoYaps6babgKnONONX.jpg',
        release_date: '2016-08-26',
        title: 'Your Name.',
        video: false,
        vote_average: 8.5,
        vote_count: 8538,
      },
      {
        adult: false,
        backdrop_path: '/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
        genre_ids: [35, 53, 18],
        id: 496243,
        original_language: 'ko',
        original_title: '기생충',
        overview:
          "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        popularity: 98.073,
        poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        release_date: '2019-05-30',
        title: 'Parasite',
        video: false,
        vote_average: 8.5,
        vote_count: 13456,
      },
      {
        adult: false,
        backdrop_path: '/qqHQsStV6exghCM7zbObuYBiYxw.jpg',
        genre_ids: [18],
        id: 389,
        original_language: 'en',
        original_title: '12 Angry Men',
        overview:
          "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
        popularity: 27.419,
        poster_path: '/e02s4wmTAExkKg0yF4dEG98ZRpK.jpg',
        release_date: '1957-04-10',
        title: '12 Angry Men',
        video: false,
        vote_average: 8.5,
        vote_count: 6315,
      },
      {
        adult: false,
        backdrop_path: '/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg',
        genre_ids: [14, 18, 80],
        id: 497,
        original_language: 'en',
        original_title: 'The Green Mile',
        overview:
          "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
        popularity: 102.6,
        poster_path: '/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
        release_date: '1999-12-10',
        title: 'The Green Mile',
        video: false,
        vote_average: 8.5,
        vote_count: 13743,
      },
      {
        adult: false,
        backdrop_path: '/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg',
        genre_ids: [18, 28, 80, 53],
        id: 155,
        original_language: 'en',
        original_title: 'The Dark Knight',
        overview:
          'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
        popularity: 111.161,
        poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        release_date: '2008-07-14',
        title: 'The Dark Knight',
        video: false,
        vote_average: 8.5,
        vote_count: 27247,
      },
      {
        adult: false,
        backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
        genre_ids: [53, 80],
        id: 680,
        original_language: 'en',
        original_title: 'Pulp Fiction',
        overview:
          "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        popularity: 68.933,
        poster_path: '/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg',
        release_date: '1994-09-10',
        title: 'Pulp Fiction',
        video: false,
        vote_average: 8.5,
        vote_count: 22903,
      },
      {
        adult: false,
        backdrop_path: '/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg',
        genre_ids: [12, 14, 28],
        id: 122,
        original_language: 'en',
        original_title: 'The Lord of the Rings: The Return of the King',
        overview:
          "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
        popularity: 105.996,
        poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
        release_date: '2003-12-01',
        title: 'The Lord of the Rings: The Return of the King',
        video: false,
        vote_average: 8.5,
        vote_count: 19333,
      },
    ],
    total_pages: 492,
    total_results: 9836,
  };
  const [res, setRes] = useState({});
  const [pageNo, setPageNo] = useState(1);
  const [inputVal, setInputVal] = useState('');
  const [val, setVal] = useState('');

  async function fetchMovies(page) {
    const apiRes = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=d296f9125c5c7cacb5d98137b5dd8ded&language=en-US&page=${
        page || 1
      }`
    );
    setRes(apiRes);
  }

  async function fetchByQuery(query, page = 1) {
    const apiRes = await axios(
      `https://api.themoviedb.org/3/search/multi?api_key=d296f9125c5c7cacb5d98137b5dd8ded&language=en-US&query=${query}&page=${
        page || 1
      }&include_adult=false`
    );
    setRes(apiRes);
  }
  useEffect(function () {
    fetchMovies(pageNo);
  }, []);

  // component mount
  useEffect(
    function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
    [pageNo]
  );

  function showMovieList() {
    const movieList = res.data.results.map(function (singleMovie) {
      return (
        <Card
          cardDesign={val}
          rating={singleMovie.vote_average}
          title={singleMovie.title}
          description={singleMovie.overview}
          imgSrc={`https://image.tmdb.org/t/p/original${singleMovie.poster_path}`}
          year={singleMovie.release_date}
        />
      );
    });
    return movieList;
  }

  function getNextPageData() {
    console.log("i'm Next page");
    fetchMovies(pageNo + 1);
    setPageNo(pageNo + 1);
  }

  function getPreviousPageData() {
    console.log("i'm Previous page");
    fetchMovies(pageNo - 1);
    setPageNo(pageNo - 1);
  }
  function getPreviousPageDataQuery() {
    console.log('p-query');
    fetchByQuery(inputVal, pageNo - 1);
    setPageNo(pageNo - 1);
  }
  function getNextPageDataQuery() {
    console.log('n-query');
    fetchByQuery(inputVal, pageNo + 1);
    setPageNo(pageNo + 1);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    fetchByQuery(inputVal, 1);
    setPageNo(1);
  }

  function onInputChange(e) {
    const val = e.target.value; // m
    setInputVal(val); // m
  }
  function renderQueryBtn() {
    if (inputVal) {
      return (
        <div className="btn-wrapper">
          <Button
            text="Previous"
            variant="danger"
            onBtnClick={getPreviousPageDataQuery}
          />

          <Button
            text="Next"
            variant="danger"
            onBtnClick={getNextPageDataQuery}
          />
        </div>
      );
    }

    return (
      <div className="btn-wrapper">
        <Button
          text="Previous"
          variant="primary"
          onBtnClick={getPreviousPageData}
        />

        <Button text="Next" variant="primary" onBtnClick={getNextPageData} />
      </div>
    );
  }
  function toggleCard(event) {
    if (event.target.checked) {
      setVal('card1');
    } else {
      setVal('');
    }
  }

  if (!res.data) {
    return <Loader />;
  }

  return (
    <div>
      <div className="header-wrapper">
        <header>
          <form onSubmit={onFormSubmit}>
            <div className="inputWrapper">
              <input
                type="text"
                placeholder="Search.."
                name="Search"
                className="searchBox"
                value={inputVal}
                onChange={onInputChange}
              />
              <button type="submit" className="btn-search">
                <i className="fa-solid fa-magnifying-glass icon-search"></i>
              </button>
            </div>
          </form>
          <Switch onToggle={toggleCard} />
          {/* <div className="toggleCardSwitch-wrapper">
            <input
              className="toggleInput"
              onChange={toggleCard}
              type="checkbox"
              name="card-switch"
            />
            <label htmlFor="card-switch">Toggle Card View</label>
          </div> */}
        </header>
      </div>
      {/* <div className="movie-list-container"> */}
      <div className="movie-list-wrapper">{showMovieList()}</div>
      {inputVal && (
        <div className="btn-wrapper">
          <Button
            text="Previous"
            variant="danger"
            onBtnClick={getPreviousPageDataQuery}
            btnDisable={pageNo <= 1 ? true : false}
          />

          <Button
            text="Next"
            variant="danger"
            onBtnClick={getNextPageDataQuery}
            btnDisable={
              pageNo === res.data.total_pages || res.data.total_pages === 0
                ? true
                : false
            }
          />
        </div>
      )}
      {!inputVal && (
        <div className="btn-wrapper">
          <Button
            text="Previous"
            variant="primary"
            onBtnClick={getPreviousPageData}
            btnDisable={pageNo <= 1 ? true : false}
          />

          <Button
            text="Next"
            variant="primary"
            onBtnClick={getNextPageData}
            btnDisable={
              pageNo === res.data.total_pages || res.data.total_pages === 0
                ? true
                : false
            }
          />
        </div>
      )}
      {/* </div> */}
    </div>
  );
}
