import React from "react";
import { useForm } from "react-hook-form";
import { container } from "react-bootstrap";
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
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="first_name">First Name</label>
        <input {...register("first_name")} />

        {/* include validation with required or other standard HTML validation rules */}
        <label htmlFor="last_name">Last Name</label>
        <input {...register("last_name", { required: true })} />
        {/* errors will return when field validation fails  */}
        {/* {/* {errors.last_name && <span>This field is required</span>} */}

        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
