import { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { fetchWeather } from '../api/fetchWeather';

import SoMe from '../components/SoMe';
import { ButtonRegular } from '../components/buttons/ButtonRegular';

import { buttonColor, buttonHoverColor, whiteRegular } from '../constants/styles';
import heroWallpaper from '../assets/images/bg.avif';

const HeroSectionStyle = styled.section`
  /* ====== SECTION SETTINGS ====== */
    /* ~  (Section Syle)  ~ */
      --section-bg-s1-margin: 0 auto;
      --section-bg-s1-min_height: 100vh;
      --section-bg-s1-max_height: 100%;
      --section-bg-s1-padding: 0;
      --section-bg-s1-bg_color: rgba(0,0,0, 0.5);
      --section-bg-s1-bg_image: url(${heroWallpaper});
      --section-bg-s1-bg_attachment: fixed;
      --section-bg-s1-bg_position: center;
      --section-bg-s1-bg_repeat: no-repeat;
      --section-bg-s1-bg_blend_mode: darken;
      --section-bg-s1-bg_size: cover;
      --section-bg-s1-box_shadow: none;
      overflow: hidden;
    /* ----------~(end)~---------- */
    
    /* ~  (Section Title)  ~ */
      h1 {
        --section-text-margin: 0 auto;
        --section-text-padding: 20px;
        --section-text-display: block;
        --section-text-color: #fff;
        --section-font_family: 'Satoshi', sans-serif;
        --section-font_size: 4vmax;
        --section-font_weight: bold;
        --section-font_style: normal;
        --section-text_align: center;
        --section-text_decoration: none;
        --section-text_shadow: 1px 1px 1px #ffa500;
        --section-text-line_height: 1.5;
      }
    /* ----------~(end)~---------- */

    /* ~  (Section SubTitle)  ~ */
      h2 {
        --section-text-margin: 0 auto;
        --section-text-padding: 10px 10px;
        --section-text-display: inline-block;
        --section-text-color: #fff;
        --section-font_family: 'Satoshi', sans-serif;
        --section-font_size: 2vmax;
        --section-font_weight: normal;
        --section-font_style: normal;
        --section-text_decoration: none;
        --section-text_align: center;
        --section-text_shadow: 1px 1px 1px #666;
        --section-text-line_height: 1.3;
      }
    /* ----------~(end)~---------- */

    header {
      margin: 0 0 20px 0;
    }

    @media screen and (min-width: 1281px) {
      padding-top: 60px;
    }

  /* For more settings go to ["styles/index.scss"] */
  /* =================|END|================= */
`;

const MainPage = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const fetchData = async () => {
    const data = await fetchWeather(query);

    setWeather(data);
    setQuery('');

    console.log(data);
  };

  const search = async (e) => {
      if(e.key === 'Enter') {
        fetchData();
      }
  };

  return (
    <>
      <HeroSectionStyle className="grid section">
        <header className="grid-wrapper-column grid-col-center">
          <h1>
            What is the weather?
          </h1>
        </header>
        <div className="grid-col-4-8 search-pos">
          <input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
        </div>
        <div className="grid-col-8-10">
          <ButtonRegular type="button" onClick={fetchData} btnMargin="20px auto" btnColor={buttonHoverColor} btnHover={buttonColor} btnTextColor="#000" btnTextHoverColor={whiteRegular} btnText="Search city">
            <FontAwesomeIcon pull="right" icon={solid('search')} size="1x" />
          </ButtonRegular>
        </div>
          {weather.main && (
              <section className="grid-col-4-7 main-container city">
              <header>
                <h2 className="city-name">
                  <span>{weather.name}</span>
                  <sup>{weather.sys.country}</sup>
                </h2>
              </header>
              <div className="city-temp">
                {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>
              </div>
              <div className="info">
                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                <p>{weather.weather[0].description}</p>
              </div>
            </section>
          )}
          {weather.main && (
            <div className="grid-col-7-10">
              <iframe className="weather-map" title="weather map" src={`https://embed.windy.com/embed2.html?lat=${weather.coord.lat}&lon=${weather.coord.lon}&detailLat=${weather.coord.lat}&detailLon=${weather.coord.lon}&zoom=20&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`} frameBorder="0"></iframe>
            </div>
          )}
        <div className="grid-wrapper-column">
          <SoMe />
        </div>
      </HeroSectionStyle>
    </>
  );
};

export default MainPage;