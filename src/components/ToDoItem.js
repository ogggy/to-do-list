import React from 'react'
import Button from '@atlaskit/button'
import styled, {css} from 'styled-components'
import CheckIcon from '@atlaskit/icon/glyph/check'

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;

    &, &:hover {
        ${p => 
            p.iscompleted === 'true'  &&
            css`
                text-decoration: line-through;
                background-color: #e2e2e2;
            `    
        }
    }

    &:hover {
        .check-icon {
            display: inline-block;
        }
    }

    .check-icon {
         ${p => 
            p.iscompleted === 'false' &&
            css`
                display: none;
            `
        }
        
        &:hover {
            background-color: #e2e2e2;
            border-radius: 3px;
        }
    }

`

export default function ToDoItem({item, onCheckButtonClick}) {
  return (
    <ButtonStyled
        key={item.id}
        shouldFitContainer
        iconAfter= {
            <span className='check-icon' onClick={() => onCheckButtonClick(item.id)}><CheckIcon primaryColor='#4fff4f'/></span>}
        iscompleted={item.isCompleted.toString()}
    >{item.name}</ButtonStyled>
  )
}
