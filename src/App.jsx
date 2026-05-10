import React, { useState } from "react";
import {
  Timer,
  FilterSearchPagination,
  StopWatch,
  Pagination,
  LoveMessage,
  LoveSlider,
  ProgressBar,
  ScreenWidth,
  LoveSliderNew,
  ProductsApi,
  NavBar,
  HOC,
  HOCNew,
  ExampleApp,
  ToDo,
  DotNetApi,
} from "./Challenges";

import {
  LoveLetterScreen,
  ApologyScreens,
  HeartMessageScreen,
  VirtualLetterScreen,
  ForgivenessMeterScreen,
  BribeScreen,
  PeaceTreatyScreen,
} from "./Challenges/SorryApp";

export default function App() {
  const [screen, setScreen] = useState("heart");
  return (
    <>
      {/* <FilterSearchPagination /> */}
      {/* <Timer /> */}
      {/* <StopWatch /> */}
      {/* <Pagination /> */}
      {/* <LoveMessage /> */}
      {/* <LoveSlider /> */}
      {/* <ProgressBar /> */}
      {/* <ScreenWidth /> */}
      {/* <LoveSliderNew /> */}
      {/* <ProductsApi /> */}
      {/* <NavBar /> */}
      {/* <HOC /> */}
      {/* <HOCNew /> */}
      {/* <ExampleApp /> */}
      {/* <ToDo /> */}
      {/* <DotNetApi /> */}
      {/* SCREEN 1 */}

      {screen === "heart" && (
        <HeartMessageScreen onNext={() => setScreen("apology")} />
      )}

      {/* SCREEN 2 */}
      {screen === "apology" && (
        <ApologyScreens onFinish={() => setScreen("letter")} />
      )}

      {/* SCREEN 3 */}
      {screen === "letter" && (
        <LoveLetterScreen onOpen={() => setScreen("virtual")} />
      )}

      {/* SCREEN 4 */}
      {screen === "virtual" && (
        <VirtualLetterScreen onNext={() => setScreen("forgive")} />
      )}

      {/* SCREEN 5 */}
      {screen === "forgive" && (
        <ForgivenessMeterScreen onComplete={() => setScreen("bribe")} />
      )}

      {/* SCREEN 6 */}
      {screen === "bribe" && <BribeScreen onNext={() => setScreen("peace")} />}

      {/* SCREEN 7 */}
      {screen === "peace" && <PeaceTreatyScreen />}
    </>
  );
}
