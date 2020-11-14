import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import BudgetList from './BudgetList';
import BudgetForm from './BudgetForm';
import { StyledMainContainer, StyledListsWrapper, StyledBudgetInfo, StyledTotal } from './styledComponents';

const initialIncomeData = [
    {
        id: '33f401ca-9e47-40c1-9b1a-ccb1cebeae88',
        name: 'Income 1',
        categoryId: 'cat_income_1',
        amount: 4500
    },
    {
        id: '53e0cecd-ad0e-4c29-b3f3-d445191854db',
        name: 'Income 2',
        categoryId: 'cat_income_3',
        amount: 123.6
    }
];

const initialOutcomeData = [
    {
        id: 'ceb0388d-c5e3-4093-90d5-7873af94edef',
        name: 'Outcome 1',
        categoryId: 'cat_outcome_2',
        amount: 1500
    }
];

const countTotalBudget = ({ income, outcome }) => {
    const totalIncome = income.reduce((memo, item) => memo + item.amount, 0);
    const totalOutcome = outcome.reduce((memo, item) => memo + item.amount, 0);

    return totalIncome - totalOutcome;
};

const Budget = () => {
    const [ total, setTotal ] = useState(countTotalBudget({ income: initialIncomeData, outcome: initialOutcomeData }));
    const [ budgetData, setBudgetData ] = useState({
        income: [...initialIncomeData],
        outcome: [...initialOutcomeData]
    });

    const updateData = data => {
        setBudgetData(data);
        setTotal(countTotalBudget(data));
    };

    const handleItemRemove = (type, id) => {
        const newData = {
            income: budgetData.income,
            outcome: budgetData.outcome
        };

        newData[type] = budgetData[type].filter(item => item.id !== id);

        updateData(newData);
    };

    const handleItemAdd = ({ type, name, categoryId, amount }) => {
        const newData = {
            income: budgetData.income,
            outcome: budgetData.outcome
        };

        newData[type].push({
            name,
            categoryId,
            amount,
            id: uuidv4()
        });

        updateData(newData);
    };

    return (
        <StyledMainContainer>
            <BudgetForm  onItemAdd={handleItemAdd} />
            <StyledListsWrapper>
                <BudgetList type="income" data={budgetData.income} onItemRemove={handleItemRemove} />
                <BudgetList type="outcome" data={budgetData.outcome} onItemRemove={handleItemRemove} />
            </StyledListsWrapper>
            <StyledBudgetInfo>Total budget: <StyledTotal minus={total < 0}>{total.toFixed(2)}</StyledTotal></StyledBudgetInfo>
        </StyledMainContainer>
    );
};

export default Budget;
