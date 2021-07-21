import React from 'react'
import axios from "axios";
import Movie from "../componets/Movie";
import './Home.css';


// 클래스 컴포넌트 만들기
class Home extends React.Component {
    // 클래스 컴포넌트가 필요한 이유는 state 때문
    state = {
      isLoding: true,
      movies: []
    };
    // state에 데이터는 변한다.
  
    getMovies = async () => {
      // 동기화 될때까지 기다려줘 -뭘? -악시오스 -OK
      const {
        data: {
          data: {movies}
        }
      } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState( {movies, isLoding: false });
  // this.setState( {movies : movies})
  // state의 movies: axios의  movies 줄여서 this.setState( {movies})
  
    };
  
  
   componentDidMount() {
      // 렌더가 된 다음에 한번 첫번째로 실행된다. 
      this.getMovies();
    }
    componentDidUpdate () {
      //컴포넌트딛마운트 후에 컴포넌트가 업데이트 될 떄마다 실행
    }
  
  
    render() {
      // 렌더 함수 안에 리턴()이 들어감
      // 함수는 여기에
      const {isLoding, movies} = this.state;
  
  
      return(
        // 리턴 안쪽에 html들어가고 js는 {}안에 들어감
  
  
        
        <section className="container">
          {isLoding ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          )  : (
            <div className="movies">{
              movies.map( movie => (
  
                <Movie 
                    key={movie.id}
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    />
                ))
    
              }
            </div>
          )
  
          }
       </section>
  
      )
    }
  
  };
  
  export default Home;
  