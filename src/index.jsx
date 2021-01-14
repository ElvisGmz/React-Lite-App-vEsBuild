import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import './index.css'
import LoadPage from './Components/LoadPage'
const App = lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<LoadPage />} ><App /></Suspense>,
  document.getElementById("app"))