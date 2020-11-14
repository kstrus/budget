import React from 'react';

import ListItem from './ListItem';
import { StyledBasicWrapper, StyledTitle } from './styledComponents';

const BudgetList = ({ data, type, onItemRemove }) => {
    const title = type === 'income' ? 'My incomes' : 'My outcomes';

    return (
        <StyledBasicWrapper width={400}>
            <StyledTitle>{title}</StyledTitle>
            {data.map((item, key) => {
                return <ListItem
                    key={`${type}_${key}`}
                    data={item}
                    type={type}
                    onItemRemove={onItemRemove}
                />
            })}
        </StyledBasicWrapper>
    )
};

export default BudgetList;
