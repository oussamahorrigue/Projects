import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../NavBar/WikiLayout";
const Search = () => {
  const [term, setTerm] = useState("program");
  const [results, setresult] = useState([]);

  useEffect(() => {
    const response = async () => {
      const donnees = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setresult(donnees.data.query.search);
    };

    if (term && !results.length) {
      response();
    } else {
      const TimeroutId = setTimeout(() => {
        if (term) {
          response();
        }
      }, 500);
      return () => {
        clearTimeout(TimeroutId);
      };
    }
  }, [term]);
  const renderedItems = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            target="__blank"
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>

          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div className="ui form">
      <Layout setTerm={setTerm} />
      <div className="ui celled list">{renderedItems}</div>
    </div>
  );
};

export default Search;
