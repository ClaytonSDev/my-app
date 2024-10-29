import React, { useEffect, useState } from "react";

import axios from "axios";

import "./styles/App.css";

import { Navbar } from "./components/Navbar/Navbar";

import { Article } from "./components/Article/Article";

import { ThreeDots } from "react-loader-spinner";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadnews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const newsData = response.data;

      setNews(newsData);
    }

    loadnews();

  }, []);

    return (
    <>
     {/*<Counter />*/}
      <Navbar />
      
      <section id="articles">
        {news.length === 0 ? (
          <div 
          style={{
            height: '400px', 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
          }}
          >
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="white"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
        </div>
          ) : (
            news.map((article) => {
              return (
                <Article
                  key={article.id}
                  title={article.title}
                  provider={article.newsSite}
                  description={article.summary} 
                  thumbnail={article.imageUrl}
                />
              );
            })          
          )
        }
      </section>         
    </>
  );
}

export default App;
