import React  from "react";
import toast from 'react-hot-toast';
import { FcSearch } from 'react-icons/fc';
import PropTypes from "prop-types";
import { Header, Form, ButtonSearch, Field, ErrorMessage } from "./Searchbar.styled";
import { Formik } from "formik";
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  search : Yup.string().min(3, 'Too Short!').max(20, 'Too Long!'),
});

export const Searchbar = ({onSubmit}) => {
  return (
    <Header >
      <Formik
        initialValues={{
          search: '',
        }}  
        validationSchema = { ContactSchema }
        onSubmit = {(values, actions) => {
          if (!values.search.toLowerCase().trim()) {
            return toast.error('Заповніть поле');
          }
          onSubmit(values.search.toLowerCase().trim());
          actions.resetForm();
        } }>
        <Form>
          <ButtonSearch type="submit">
            <FcSearch/>
            {/* <span>Search</span> */}
          </ButtonSearch>

          <Field
            name="search"
            type="text"
            placeholder="Search images and photos"
          />
          <ErrorMessage name="search" component='span'/>
        </Form>
      </Formik>
    </Header>
  )
}

PropTypes.Searchbar = {
  onSubmit: PropTypes.func.isRequired, 
};




