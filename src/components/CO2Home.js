import CO2NavBar from "./CO2NavBar";

function CO2Home() {
    return (

        <div >
            <CO2NavBar />
            <h4 style={{ textAlign: "center" }}>Welcome To CO2 Tracker</h4>
            <img
                src="images/co2_main.png"
                className="img"
            />

        </div>
    );
}

export default CO2Home;