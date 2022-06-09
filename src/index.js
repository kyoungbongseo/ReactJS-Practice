//import React, { useEffect } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";

const root = ReactDOM.createRoot(document.getElementById("root"));

//{{ <React.StrictMode> is replaced with <React.Fragment> to check results without redundancy.
// Strict mode is for highlighting potential problems in an application so lifecycles of methods in the mode is double-invoked. Strict mode can be applied only to development mode.
/*
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
*/
/*
root.render(
	<React.Fragment>
		<App />
	</React.Fragment>
);
*/
root.render(
	<>
		<hr color="blue" />
		<h1>App</h1>
		<App />
		<hr color="blue" />
		<h1>App2</h1>
		<App2 />
		<hr color="blue" />
		<h1>App3</h1>
		<App3 />
		<hr color="blue" />
		<h1>App4</h1>
		<App4 />
		<hr color="blue" />
		<h1>App5</h1>
		<App5 />
	</>
);
///////////////////////////}}
