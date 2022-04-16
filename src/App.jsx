import { Routes, Route } from "react-router-dom";
import Home from "./compenents/Home";
import Slider from "./compenents/Slider";
function App() {
	const MainComponent=()=>{
		return (
			<>
				<Home />
				<Slider />
			</>
		);
	}
	return (
		<Routes>
			<Route path="/" element={<MainComponent />} />
			<Route path="/slider" element={<Slider />} />
		</Routes>
	);
}

export default App;
