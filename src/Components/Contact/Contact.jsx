import React from "react";
import { useForm } from "react-hook-form";
import { container,Form } from "react-bootstrap";
import "./Contact.scss";
import TopNavbar from "../Shared/Navbar";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <TopNavbar />
      <h1>Contact Information</h1>
      <h3>Phone Number: 603-369-4764</h3>
      <h2>Email: Info@nebjj.com</h2>
      <h2>Address: 30 Henniker St. Unit 9, Concord NH 03301</h2>

 

   {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
          <input placeholder="First Name" {...register("first_name")} />

        {/* include validation with required or other standard HTML validation rules */}
       <input placeholder="Last Name" {...register("last_name", { required: true })} /> 
        {/* errors will return when field validation fails  */}
        { errors.last_name && <span>This field is required</span>}
        <textarea placeholder="How can we help you?" {...register("message")} cols="30" rows="10"/>
        <input type="submit" /> 
      </form> 



      
    </div>
  );
};

export default Contact;







