import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup";
// import 'yup-phone';

// phone: Yup.string()
//   .phone(null, true, 'Invaild phone number')
//   .required('This field is required'),

export default function HeroForm() {
  return (
    <Formik
      initialValues={{fullName: '', email: '', phone: '', message: ''}}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Full name is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Valid email is required'),
        phone: Yup.string()
          .matches(
            /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
            'Invaild phone number'
          )
          .required('Valid phone number is required'),
        message: Yup.string()
           .max(200, 'Must be 200 characters or less.')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="form">
        <label htmlFor="fullName" className="invisible">Please enter your name.</label>
        <Field 
          name="fullName" 
          type="text" 
          className="form__input" 
          placeholder="Name" 
        />
        <ErrorMessage name="fullName" className="form__error" />

        <label htmlFor="email" className="invisible">Please enter your email address.</label>
        <Field 
          name="email" 
          type="email" 
          className="form__input" 
          placeholder="Email Address"  
        />
        <ErrorMessage name="email" className="form__error" />

        <label htmlFor="phone" className="invisible">Please enter your phone address.</label>
        <Field 
          name="phone" 
          type="text" 
          className="form__input" 
          placeholder="Phone"  
        />
        <ErrorMessage name="phone" className="form__error" />

        <label htmlFor="message" className="invisible">Provide a message to us(Optional).</label>
        <Field 
          name="message" 
          as="textarea" 
          className="form__message"  
          placeholder="Your Message"  
        />
        <ErrorMessage name="message" className="form__error" />

        <button type="submit" className="btn btn--submit">Submit</button>
      </Form> 
    </Formik>
  );
}