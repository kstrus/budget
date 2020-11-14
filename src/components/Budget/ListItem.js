import React from 'react';

import { CATEGORIES } from '../../config';
import {
    StyledListWrapper,
    StyledTile,
    StyledName,
    StyledCategory,
    StyledAmount,
    StyledRemoveButton
} from './styledComponents';

const getCategoryNameById = (type, id) => CATEGORIES[type].find(item => item.id === id).name;

const ListItem = ({ type, data: { categoryId, name, amount, id }, onItemRemove }) => {
    const sign = type === 'income' ? '' : '- ';

    return (
        <StyledListWrapper>
            <StyledTile>
                <div>
                    <StyledName>{name}</StyledName>
                    <StyledCategory>{getCategoryNameById(type, categoryId)}</StyledCategory>
                </div>
                <StyledAmount type={type}>{sign}{amount.toFixed(2)}</StyledAmount>
            </StyledTile>
            <StyledRemoveButton onClick={() => onItemRemove(type, id)} />
        </StyledListWrapper>
    );
};

export default ListItem;
