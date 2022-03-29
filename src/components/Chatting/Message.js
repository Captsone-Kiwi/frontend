import React from 'react';
import * as style from "./styles";

import ReactEmoji from 'react-emoji';

const Message = ({message : { text, user }, username }) => {
    let isSentByCurrentUser = false;
    const trimmedName = username.toString().trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
        ? (
            <style.WrapColumn style={{padding: '15px', alignItems:'start'}}>
                <style.WrapRow>
                    <style.Span>{trimmedName}</style.Span>
                    <style.Span> ➔  Everyone :</style.Span>
                </style.WrapRow>
                <style.Span style={{color:'black', marginBottom:'16px'}}>{ReactEmoji.emojify(text)}</style.Span>
            </style.WrapColumn>
    )
        : (
            <style.WrapColumn style={{padding: '15px', alignItems:'start'}}>
                <style.WrapRow>
                    <style.Span>{user}</style.Span>
                    <style.Span> ➔  Everyone :</style.Span>
                </style.WrapRow>
                <style.Span style={{color:'black', marginBottom:'16px'}}>{ReactEmoji.emojify(text)}</style.Span>
            </style.WrapColumn>
        )
    )
}

export default Message;
