import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';
import { MinusCircle } from 'styled-icons/heroicons-outline/';


// common
export const red = '#c1392b';
export const green = '#27ad61';

export const StyledMainContainer = styled.div`
    width: 830px;
`;

export const StyledBasicWrapper = styled.div`
    padding: 15px;
    margin: 15px;
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    border: 1px solid #ddd;
    background-color: #fafafa;
`;

export const StyledTitle = styled.div`
    font-size: 22px;
    margin-bottom: 30px;
`;


// budget layout
export const StyledListsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
`;

export const StyledBudgetInfo = styled.div`
    margin-left: 15px;
    font-size: 32px;
`;

export const StyledTotal = styled.span`
    color: ${props => props.minus ? red : green};
`;


// budget form
export const StyledErrorMessage = styled(ErrorMessage)`
    color: ${red};
    font-size: 12px;
    margin: 3px 0 10px 100px;
`;

export const StyledFormSection = styled.div`
    margin-top: 20px;
`;

export const StyledLabel = styled.label`
    display: inline-block;
    width: 100px;
`;

export const StyledRadioGroup = styled.div`
    display: inline-block;
    margin-right: 20px;
`;

export const StyledRadio = styled(Field)`
    margin: 4px 5px 0 0;
`;

const fieldStyles = `
    width: 240px;
    padding: 5px 10px;
    outline: none;
    border: 1px solid #ccc;
`;

export const StyledInput = styled.input`
    ${fieldStyles}
`;

export const StyledSelect = styled.select`
    ${fieldStyles}
`;

export const StyledButton = styled.button`
    display: block;
    border-radius: 4px;
    border: none;
    outline: none;
    background-color: ${green};
    padding: 10px 0;
    margin-top: 30px;
    color: #fff;
    width: 120px;
    cursor: pointer;
`;


// budget list item
export const StyledListWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const StyledTile = styled.div`
    padding: 15px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    flex-grow: 1;
`;

export const StyledName = styled.div`
    font-size: 20px;
    max-width: 150px;
`;

export const StyledCategory = styled.div`
    color: #999999;
`;

export const StyledAmount = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: ${props => props.type === 'income' ? green : red};
    white-space: nowrap;
    margin-left: 10px;
`;

export const StyledRemoveButton = styled(MinusCircle)`
    width: 24px;
    height: 24px;
    color: #999;
    margin-left: 15px;
    cursor: pointer;
`;
