import React from 'react';

const btnStyle = {
    display: "inline-block",
    padding: "3px",
    cursor: "pointer",
  };
  
//   나오는거
  const box_active = {
    width: "300px",
    height: "200px",
    position: "absolute",
    background: "white",
    opacity: "1",
    transition: "opacity 500ms",
  };
  
//   숨김
  const box_hidden = {
    width: "300px",
    height: "200px",
    border: "1px solid black",
    position: "absolute",
    background: "grey",
    opacity: "0",
    visibility: "hidden",
    transition: "opacity 500ms , visibility 500ms",
  };
  
  class FadeInOut extends React.Component {
    state = {
      select: false,
    };
  
    handleClick = () => {
      this.setState((state) => ({
        select: !state.select,
      }));
    };

    render() {
      return (
        <div>
          <div className="section1">
            <div onMouseOver={this.handleClick} onMouseLeave={this.handleClick} style={btnStyle} color="black">
                {this.props.name}
            </div>
            <div style={this.state.select ? box_active : box_hidden}></div>
          </div>
          {/* <div className="section2">다음 섹션 내용</div> */}
          <div className="section2"></div>
        </div>
      );
    }
  }
  
  export default FadeInOut;

































































































































































































































































