import React, {useState} from 'react'
import "./Schedule.scss"
import { useForm } from "react-hook-form";

const classSchedule = [
    {
        time: "7am",
        name: "Muay Thai",
        day: "Monday"
    },
    {
        time: "8am",
        name: "Muay Thai",
        day: "Monday"
    },
    {
        time: "9am",
        name: "Muay Thai",
        day: "Monday"
    }
]

const Schedule = () => {
    const [studioSchedule, setStudioSchedule] = useState(classSchedule)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => setStudioSchedule([...studioSchedule, data])
    const displaySchedule = () => 
        studioSchedule.map(schedule => (
           <>
           <p>{schedule.time}</p>
           <p>{schedule.name}</p>
           <p>{schedule.day}</p>
           </>
        ))
    
   
    return (
        <div>
        
         {displaySchedule()}   
         <form onSubmit={handleSubmit(onSubmit)}>
      
      <input {...register("time", { required: true })} />
      <input {...register("name", { required: true })} />
      <input {...register("day", { required: true })} />
      
      <input type="submit" />
    </form>
        </div>
    )
}

export default Schedule


