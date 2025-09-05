import { Typography } from "@mui/material";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";

export default function LandingPage() {
  return (
    <div className="h-100 p-2 ">
      <Typography variant="h3" className="mb-2">
        Welcome to Group 4 Kapampanpangan lexicon
      </Typography>
      <Typography variant="body">
        We have created a web page that will display resources on kapampangan
        dialect. We want to share on how the kapampangan language has been
        shaped by its patterns on how the words are created and on how sentences
        are formed during a conversation.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        distinctio blanditiis ex consequatur placeat vitae dolore porro magnam,
        earum possimus nihil consequuntur culpa maxime expedita eveniet
        explicabo aliquam? Temporibus, vitae.
      </Typography>

      <Container>
        <Col>
          <Row>
            <Typography variant="h2" className="mt-5">
              How Words Are Created
            </Typography>
          </Row>
          <Row>
            <Typography variant="body">Explain how words were form.</Typography>
            <Typography variant="body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              totam id pariatur repudiandae odio eaque doloremque porro quam
              explicabo eum reprehenderit dicta rerum, ducimus officia
              accusantium illo sed ex quas.
            </Typography>
          </Row>
          <Row>
            <Typography variant="h2" className="mt-5">
              Patterns
            </Typography>
          </Row>
          <Row>
            <Typography variant="body">
              Explain Patterns found during words.
            </Typography>
            <Typography variant="body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              totam id pariatur repudiandae odio eaque doloremque porro quam
              explicabo eum reprehenderit dicta rerum, ducimus officia
              accusantium illo sed ex quas.
            </Typography>
          </Row>
        </Col>
      </Container>

      <Typography variant="h5" className="mt-5">
        Check out some of the resources we have created to make understanding
        kapampangan good:
      </Typography>
      <div className="d-flex flex-row w-100 justify-content-start px-5 gap-2">
        <Card
          border="secondary"
          className="mt-4"
          style={{ maxWidth: "320px", height: "100%" }}
        >
          <CardBody>
            <CardTitle>Kapampangan Words</CardTitle>
            <CardText>
              Words in kapampangan with its corresponding meaning in english
            </CardText>
            <Button variant="primary">Learn More...</Button>
          </CardBody>
        </Card>
        <Card
          border="secondary"
          className="my-4"
          style={{ maxWidth: "320px", height: "100%" }}
        >
          <CardBody>
            <CardTitle>Translate Words into Kapampangan</CardTitle>
            <CardText>Try Translating certain words into kapampangan</CardText>
            <Button variant="primary">Give it a try...</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
