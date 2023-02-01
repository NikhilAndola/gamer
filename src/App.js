import "./App.css";
import {
  BrowserRouter,
  // unstable_HistoryRouter as HistoryRouter,
  // Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import HomeComp from "./components/HomeComp";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme";
import Game from "./components/Game";

function App() {
  // const history = createBrowserHistory();

  return (
    // <BrowserRouter>
    //     {/* <Home/> */}
    //     <Routes>
    //     <Route index element={<Home />} />
    //     <Route path="home" element={<Home />} />
    //       <Route path="comp1" element={<Comp1/>} />
    //       <Route path="about" element={<About />} />
    //     {/* <Route path="*" element={<NoMatch />} /> */}
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeComp />} />
          <Route path="/login/*" element={<About />} />
          <Route path="/game/*" element={<Game />} />
        </Route>
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
