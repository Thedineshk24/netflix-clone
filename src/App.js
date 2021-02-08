import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

// react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";

import {useDispatch,useSelector} from "react-redux";
import {selectUser, setEmail} from "./features/userSlice";

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			if(userAuth){
				dispatch(setEmail(userAuth.email))
			}else{

			}
		})
		return unsubscribe;
	},[]);
	return (
		<div className="app">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route exact path="/">
							<HomeScreen />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
