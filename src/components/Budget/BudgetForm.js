import React from 'react';
import { Formik, Form, Field } from 'formik';

import { CATEGORIES } from '../../config';
import {
    StyledBasicWrapper,
    StyledTitle,
    StyledErrorMessage,
    StyledFormSection,
    StyledLabel,
    StyledRadioGroup,
    StyledRadio,
    StyledInput,
    StyledSelect,
    StyledButton
} from './styledComponents';

const BudgetForm = ({ onItemAdd }) => {
    const validateForm = values => {
        const errors = {};
        const requiredText = 'This field is required';
        const belowZeroText = 'Amount must be greater than 0';
        const noCategoryText = 'You must select a category';

        !values.name && (errors.name = requiredText);
        !values.categoryId && (errors.categoryId = noCategoryText);

        if (values.amount === '') {
            errors.amount = requiredText;
        } else if (values.amount <= 0) {
            errors.amount = belowZeroText;
        }

        return errors;
    };

    const submitForm = (values, { resetForm }) => {
        resetForm();
        onItemAdd(values);
    };

    const getCategoryOptions = type => {
        const options =  CATEGORIES[type].map(item => <option key={item.id} value={item.id}>{item.name}</option>);

        options.unshift(<option key="cat_0" value="" defaultValue>Select category...</option>);

        return options;
    };

    return (
        <StyledBasicWrapper>
            <StyledTitle>Add a budget item</StyledTitle>
            <Formik
                initialValues={{ name: '', categoryId: '', amount: 0, type: 'income' }}
                validate={validateForm}
                onSubmit={submitForm}
            >
                {({ values }) => (
                    <Form>
                        <StyledFormSection>
                            <StyledRadioGroup>
                                <StyledRadio type="radio" id="income" name="type" value="income"/>
                                <label htmlFor="income">Income</label>
                            </StyledRadioGroup>
                            <StyledRadioGroup>
                                <StyledRadio type="radio" id="outcome" name="type" value="outcome"/>
                                <label htmlFor="outcome">Outcome</label>
                            </StyledRadioGroup>
                            <StyledErrorMessage name="type" component="div"/>
                        </StyledFormSection>

                        <StyledFormSection>
                            <StyledLabel htmlFor="name">Name</StyledLabel>
                            <Field as={StyledInput} type="text" id="name" name="name" />
                            <StyledErrorMessage name="name" component="div"/>
                        </StyledFormSection>

                        <StyledFormSection>
                            <StyledLabel htmlFor="amount">Amount</StyledLabel>
                            <Field as={StyledInput} type="number" name="amount" id="amount" />
                            <StyledErrorMessage name="amount" component="div"/>
                        </StyledFormSection>

                        <StyledFormSection>
                            <StyledLabel htmlFor="categoryId">Category</StyledLabel>
                            <Field as={StyledSelect} name="categoryId">
                                {getCategoryOptions(values.type)}
                            </Field>
                            <StyledErrorMessage name="categoryId" component="div"/>
                        </StyledFormSection>

                        <StyledButton type="submit">Add</StyledButton>
                    </Form>
                )}
            </Formik>
        </StyledBasicWrapper>
    );
};

export default BudgetForm;
