import CO2NavBar from "./CO2NavBar";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { Carousel } from "react-bootstrap";
import { HomeImage } from "./HomeImage";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'


function CO2Home() {
  const [current, setCurrent] = useState(0);
  const length = HomeImage.length;

  if (!Array.isArray(HomeImage) || length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  console.log("current: ", current)
  return (
    <div style={{ height: '100vh', background: "linear-gradient(-45deg, #6304ff,#23adf3, transparent 26%), linear-gradient(135deg, #6304ff,#23adf3, transparent 27%)" }}>
      <CO2NavBar />
      <div style={{ backgroundImage: "https://www.azocleantech.com/images/Article_Images/ImageForArticle_1109_15971493455431726.png" }}>


        <div>
          <h4 style={{ textAlign: "center", marginTop: '2%', fontWeight: 'bold', fontSize: '200%', marginBottom: '1%' }}>Welcome to Carbon Dashboard</h4>
        </div>
        {/* <marquee style={{ fontSize: "20px" }}>
          Carbon dashboard for Hornet Power Tools (HPT) that will calculate the total CO2 emissions from the Motor Supplier, Battery Supplier, Sea Transport and Road Transport. Over time as suppliers increase efficiency the CO2 value should go down for newer tools. This web application provides individual dashboards according to the requested suppliers and does not reveal any additional details other than their own supplier information. The CO2 emitted from all the suppliers is calculated by taking HPT Serial Number as the input, the users get to see breakdown of CO2 according to the suppliers.
        </marquee> */}

        <section className="slider">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          {/* onClick={prevSlide}/> */}
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          {/* onClick={nextSlide}/> */}
          {
            HomeImage.map((img, key) => {
              return (
                <div className={key === current ? 'slide active' : 'slide'}>
                  {key === current && (
                    <>
                      <a href = {img.link} style={{textDecoration: 'none'}}>
                        <img className="home-image" src={img.image} alt="co2 component" key={key} />
                      <p style = {{marginLeft: '32%',marginTop: '0.5%', fontSize: '20px'}}><b>{img.info}</b></p>
                      </a>
                    </>
                  )}

                </div>
              )
            })
          }
        </section>
        

        {/* <Card style = {{width: "100%", height: "100%", alignItems:"center", backgroundImage:"linear-gradient(130deg,#23cff3,#6304ff)"}}>
            <Card.Body>
              <Card.Title style={{fontWeight: "bold"}}>Carbon Dashboard</Card.Title>
              <Card.Text style={{fontSize: "20px"}}>
            Carbon dashboard for Hornet Power Tools (HPT) that will calculate the total CO2 emissions from the Motor Supplier, Battery Supplier, Sea Transport and Road Transport. Over time as suppliers increase efficiency the CO2 value should go down for newer tools. This web application provides individual dashboards according to the requested suppliers and does not reveal any additional details other than their own supplier information. The CO2 emitted from all the suppliers is calculated by taking HPT Serial Number as the input, the users get to see breakdown of CO2 according to the suppliers.
              </Card.Text>

            </Card.Body>
            <img
                    src="images/co2home.PNG"
                    className="co2HomeImg"
                />
          </Card> */}
      </div>
      {/* <p style={{ fontSize: "20px" }}>
          Carbon dashboard for Hornet Power Tools (HPT) that will calculate the total CO2 emissions from the Motor Supplier, Battery Supplier, Sea Transport and Road Transport. Over time as suppliers increase efficiency the CO2 value should go down for newer tools. This web application provides individual dashboards according to the requested suppliers and does not reveal any additional details other than their own supplier information. The CO2 emitted from all the suppliers is calculated by taking HPT Serial Number as the input, the users get to see breakdown of CO2 according to the suppliers.
        </p> */}

    </div>
  );
}
export default CO2Home;
