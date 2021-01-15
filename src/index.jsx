import * as React from "react";
import ReactDOM from "react-dom";
import './index.css'

import LoadPage from './Components/LoadPage'
const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.Suspense fallback={<LoadPage />} ><App /></React.Suspense>,
  document.getElementById("app"))