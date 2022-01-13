import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  SearchBar,
  Rendered,
  Item,
  Go,
  Content,
} from "./style-wikipedia-content";
import Layout from "../NavBar/Layout";

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
  }, [term, results.length]);

  return (
    <div>
      <Container>
        <SearchBar>
          <label>Enter Search Term</label>
          <input
            placeholder="Search Wikipedia"
            onChange={(e) => setTerm(e.target.value)}
          />
        </SearchBar>
        <Layout setTerm={setTerm} />
        <Rendered>
          {results.map((result) => (
            <Item key={result.pageid}>
              <Go>
                <a
                  href={`https://en.wikipedia.org?curid=${result.pageid}`}
                  target="__blank"
                >
                  Go
                </a>
              </Go>
              <Content>
                <p>{result.title}</p>

                <span
                  dangerouslySetInnerHTML={{ __html: result.snippet }}
                ></span>
              </Content>
            </Item>
          ))}
        </Rendered>
      </Container>
    </div>
  );
};

export default Search;
