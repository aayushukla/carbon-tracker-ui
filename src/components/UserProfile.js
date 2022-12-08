import React, { useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session'

import CO2NavBar from './CO2NavBar';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,

} from 'mdb-react-ui-kit';

import { Card, Button } from 'react-bootstrap';


// const [user, setUser] = useState(ReactSession.get("user"))


function UserProfile() {

  const user = ReactSession.get("user")
  console.log("ReactSession: ", ReactSession.get("user"))
  console.log("User profile: ", user)

  return (

    <>
      <CO2NavBar />
      <Card className="text-center" style={{ marginTop: '20px' }}>
        <Card.Header style={{ backgroundImage: "linear-gradient(130deg,#632fff,#23afff)" }}>
          <MDBCardImage
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className="rounded-circle"
            style={{ width: '100px' }}
            fluid />
          <h3 className="mb-1" style={{ marginTop: '5px', color: 'white' }}>John Miller</h3>

        </Card.Header>
        <Card.Body>
          <Card.Title>Details</Card.Title>

          <MDBRow>
            <MDBCol lg="8">

              <MDBCard className="mb-1" style={{ width: '50em', marginLeft: '35%', marginTop: '5px' }}>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">John Miller</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">johnmiller@vendia.csus.edu</MDBCardText>
                    </MDBCol>
                  </MDBRow>

                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="6">

                </MDBCol>

                <MDBCol md="6">

                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>



          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>

        <Card.Footer className="text-muted" style={{ backgroundImage: "linear-gradient(130deg,#6304ff,#23adf3)" }}></Card.Footer>
      </Card>


    </>

  )
}

export default UserProfile;