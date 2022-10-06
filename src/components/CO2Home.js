import CO2NavBar from "./CO2NavBar";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';


function CO2Home() {
    return (
        <>
            <CO2NavBar />
            <div>
                <h4 style={{ textAlign: "center", marginTop: '50px', fontWeight: 'bold', fontSize: '200%' , marginBottom: '50px'}}>Welcome to Carbon Dashboard</h4>

                <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.corporateknights.com/wp-content/uploads/2022/09/11906295_s.jpg" />
      </Card>
      <Card>
        <Card.Img variant="top" style = {{height: "100%"}}src="https://static.tildacdn.com/tild3466-3230-4132-a462-303364623839/-/resize/504x/emissions2.jpg" />
      </Card>
      <Card>
        <Card.Img variant="top" style = {{height: "100%"}}src="https://images.labroots.com/content_article_profile_image_12168a3ee805b45f54fbb219863b1bea827d6ed9_964.jpg" />
      </Card>
      <Card>
        <Card.Img variant="top" style = {{height: "100%"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpjsBm6dun7F7TNKotjGMWRXi5J3pPhPL5fcR9h0wHpxazHqwusfCld10vytoa1YRMXo&usqp=CAU
" />
      </Card>
    </CardGroup>


            </div>

           
          <Card style = {{width: "100%", height: "100%", alignItems:"center"}}>
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
          </Card>

        </>
    );
}
export default CO2Home;
