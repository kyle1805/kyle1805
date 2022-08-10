import React from "react";
// import CardList from "./components/Card/CardList";
import "./App.css";
// import Toggle from "./components/State/Toggle";
// import Counter from "./components/counter/Counter";
// import Game from "./components/TicTacToe/Game";
// import Button from "./components/Button/Button";
// import Card from "./components/Card/Card";
// import { GlobalStyles } from "./GlobalStyles";
// import Card2 from "./components/Card/Card2";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import HackerNews from "./components/news/HackerNews";
import HackerNewsWithHook from "./components/news/HackerNewsWithHook";
// import CardTaiwind from "./components/Card/CardTaiwind";
// import Photo from "./components/photo/Photo";
// import Counter from "./components/counter/Counter";
// import Timer from "./components/Timer";
// import Header from "./components/Header";
// import HackerReducer from "./components/news/HackerReducer";
// import Photo2 from "./components/photo/Photo2";
// import Test from "./components/useRef/Test";
// import Watch from "./components/useRef/Watch";
// import Input from "./components/Input";
// import TextAreaAutoResize from "./components/useRef/TextAreaAutoResize";
import DropDown from "./components/useRef/DropDown";
import SidebarMenu from "./components/SidebarMenu";
import useClickOutSide from "./hook/useClickOutSide";
import Form from "./components/form/Form";
import Form2 from "./components/form/Form2";
import MovieSearchApp from "./components/Movie/MovieSearchApp";
import SignUpForm from "./components/form/SignUpForm";
import SignUpFormV2 from "./components/form/SignUpFormV2";
import SignUpFormFinal from "./components/form/SignUpFormFinal";
import SignUpFormHook from "./components/form/SignUpFormHook";
// import Blog from "./components/custom/Blog";

const theme = {
  colors: {
    blue: "#2979ff",
    orange: "#ffa400",
  },
};

function App() {
  // const [show, setShow] = useState(false);
  //const [show, setShow] = useState(false);
  const {
    showDropDown: show,
    setShowDropDown: setShow,
    dropDownRef: nodeRef,
  } = useClickOutSide();
  return (
    <div className="p-5 ">
      {/* <button onClick={() => setShow(!show)}>Click me</button>
      {show && <HackerNews />} */}
      {/* <CartList>
        
      </CartList>
      <Toggle/>
      <Counter/> */}
      {/* <Game/> */}
      {/* <Button>Button 1</Button>
      <Button secondary>Button 2</Button> */}
      <ThemeProvider theme={theme}>
        {/* <GlobalStyles></GlobalStyles>
        <CardList>
          {Array(6)
            .fill()
            .map((items, index) => (
              <CardTaiwind
                key={index}
                primary={index % 2 === 0 ? true : false}
                fontSize="text-[20]"
              />
            ))}
        </CardList> */}
        {/* <Photo /> */}
        {/* <Counter />
        <Timer /> */}
        {/* <Header /> */}
        {/* <HackerNews /> */}
        {/* <HackerReducer /> */}
        {/* <Photo2 /> */}
        {/* <Test />
        <Watch /> */}
        {/* <Input /> */}
        {/* <TextAreaAutoResize /> */}

        {/* <Blog /> */}
        {/* <HackerNewsWithHook /> */}
        {/* <Form2 /> */}
        {/* <MovieSearchApp /> */}
        {/* <SignUpFormFinal /> */}
        <SignUpFormHook />
      </ThemeProvider>
      {/* <button
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"
      >
        Show Menu
      </button>
      <SidebarMenu show={show} ref={nodeRef} />
      <DropDown /> */}
    </div>
  );
}

export default App;
