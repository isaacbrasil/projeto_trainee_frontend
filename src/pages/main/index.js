import React, { useEffect, useState } from "react";

import api from "../../services/api";
import "./styles.css";
const API_URL = 'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple';


function RenderApi() {

    const [questions, setQuestions] = useState([]);


    useEffect(() => {

        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data.results);
            });

    }, []);


    return questions.length > 0 ? (

        <div id="trivia-wrap">

            <div id="question">
                <h2 dangerouslySetInnerHTML={{ __html: questions[0].question }}></h2>
            </div>

            <div id="answers">
                <button id="answer1">
                    {questions[0].correct_answer}
                </button>
                <button id="answer2">
                    {questions[0].incorrect_answers[0]}

                </button>
                <button id="answer3">
                    {questions[0].incorrect_answers[1]}

                </button>
                <button id="answer4">
                    {questions[0].incorrect_answers[2]}

                </button>
            </div>
        </div>

    ) : (
            <div id="loading">
                <h1>Carregando Perguntas...</h1>
            </div>
        );

}
export default RenderApi;