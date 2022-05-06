import React from "react"
import {Answer} from "./Answer"
import { useSelector } from "react-redux";

export function QuestionFlex({bold, answer, order}){


    return(
        <style.QuestionFlex>
            {[0, 1, 2, 3].map((i) => (
                <Answer 
                bold={bold[i]} 
                answer={answer[i]} 
                order={order} 
                select={i+1}
                key={i}
                />
            ))}
        </style.QuestionFlex>
    )
}
