import React from "react";
import axios from "axios";
// import PropTypes from "prop-types";


// 클래스 컴포넌트 만들기
class App extends React.Component {
  // 클래스 컴포넌트가 필요한 이유는 state 때문
  state = {
    isLoding: true,
    movie: []
  };
  // state에 데이터는 변한다.

  getMovies = async () => {
    // 동기화 될때까지 기다려줘 -뭘? -악시오스 -OK
    const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");

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
    const {isLoding} = this.state;


    return(
      // 리턴 안쪽에 html들어가고 js는 {}안에 들어감

      <div>
        {isLoding ? "Loding" : "We r ready"}
     </div>

    )
  }

};

export default App;
