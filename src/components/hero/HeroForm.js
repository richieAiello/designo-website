import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup";
import 'yup-phone';
import errorIcon from "../../assets/contact/desktop/icon-error.svg";

export default function HeroForm() {
  return (
    <Formik
      initialValues={{fullName: '', email: '', phone: '', message: ''}}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .matches(
            /^[a-z ,.'-]+$/i,
            'Letters only'
          )
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
        phone: Yup.string()
          .phone("US", null, 'Invalid 10 digit US phone number')
          .required('Required'),
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
        <div className="form__wrapper">
          <label htmlFor="fullName" className="invisible">Please enter your name.</label>
          <Field
            name="fullName"
            type="text"
            className="form__input"
            placeholder="Name"
          />
          <ErrorMessage name="fullName">
            {msg => <div className="form__error">{msg}<img src={errorIcon} alt="" className="form__icon"/></div>}
          </ErrorMessage>
        </div>
        <div className="form__wrapper">
          <label htmlFor="email" className="invisible">Please enter your email address.</label>
          <Field
            name="email"
            type="email"
            className="form__input"
            placeholder="Email Address"
          />
          <ErrorMessage name="email">
            {msg => <div className="form__error">{msg}<img src={errorIcon} alt="" className="form__icon"/></div>}
          </ErrorMessage>
        </div>
        <div className="form__wrapper">
          <label htmlFor="phone" className="invisible">
            Please enter a United States phone number with area code.
          </label>
          <Field
            name="phone"
            type="text"
            className="form__input"
            placeholder="US Phone # XXX-XXX-XXXX"
          />
          <ErrorMessage name="phone">
            {msg => <div className="form__error--secondary">{msg}<img src={errorIcon} alt="" className="form__icon"/></div>}
          </ErrorMessage>
        </div>
        <div className="form__wrapper--secondary">
          <label htmlFor="message" className="invisible">Provide a message to us(Optional).</label>
          <Field
            name="message"
            as="textarea"
            className="form__message"
            placeholder="Your Message"
          />
          <ErrorMessage name="message">
            {msg => <div className="form__error--secondary">{msg}<img src={errorIcon} alt="" className="form__icon"/></div>}
          </ErrorMessage>
        </div>
        <button type="submit" className="btn btn--submit">Submit</button>
      </Form> 
    </Formik>
  );
}