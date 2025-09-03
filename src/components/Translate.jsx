import { Button, Input, TextareaAutosize, TextField } from "@mui/material";
import { translate } from "@vitalets/google-translate-api";
import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

export default function Translate() {
  const [wordsToTranslate, setWordsToTranslate] = useState("");
  const [translatedWords, setTranslatedWords] = useState(
    "Translate to see result"
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleTextarea = (e) => {
    const { value } = e.target;
    setWordsToTranslate(value);
  };

  const handleTranslateWords = async (e) => {
    setIsLoading(true);
    try {
      if (wordsToTranslate.length !== 0) {
        await translate(wordsToTranslate, {
          to: "tl",
        }).then((data) => console.log(data));
      }
    } catch (e) {
      console.log("Error translating words: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Row>
        <h1 className="place-items-center text-center">
          Try translating any sentence to pampanga(kapampangan) language
        </h1>
      </Row>
      <Row>
        <Col>
          <TextareaAutosize
            className="w-100 h-100"
            onChange={handleTextarea}
            value={wordsToTranslate}
            minRows={25}
          />
        </Col>
        <Col>
          <TextareaAutosize
            value={translatedWords}
            disabled
            minRows={25}
            className="w-100 h-100"
          />
        </Col>
      </Row>
      <Row className="mt-2">
        <Button size="large" variant="outlined" onClick={handleTranslateWords}>
          {isLoading ? <Spinner /> : "Translate"}
        </Button>
      </Row>
    </Container>
  );
}
