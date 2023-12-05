import { useForm } from "react-hook-form"
import CreatableSelect from "react-select/creatable"
import React, { useState } from 'react'

function CreateJob() {
	const [selectedOption,setSelectedOption]=useState(null)
	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm()
	  const onSubmit = (data) => console.log(data)

	  const options=[
		{value:"JavaScript", label:"JavaScript"},
		{value:"C++", label:"C++"},
		{value:"HTML", label:"HTML"},
		{value:"CSS", label:"CSS"},
		{value:"React", label:"React"},
		{value:"Node", label:"Node"},
		{value:"MongoDB", label:"MongoDB"},
	  ]
  return (
	<div className='max-w-screen-2*1 container mx-auto x1:px-24 px-4'>
		{/* form */}
		<div className='bg-white py-10 px-4 lg:px-16'>
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
			{/* first row */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
		<div className="lg:w-1/2 w-full">
			<label className="block mb-2 text-lg">Job Title</label>
			<input type="text" defaultValue={"Web developer"}
			{...register("JobTitle")} className="create-job-input" />

		</div>
		<div className="lg:w-1/2 w-full">
			<label className="block mb-2 text-lg">Company name</label>
			<input type="text" placeholder="Ex: Microsoft"
			{...register("companyName")} className="create-job-input" />

		</div>

	  </div>
	  {/* 2nd row */}
	  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
		<div className="lg:w-1/2 w-full">
			<label className="block mb-2 text-lg">Minimun Salary</label>
			<input type="text" placeholder="$20k"
			{...register("minprice")} className="create-job-input" />

		</div>
		<div className="lg:w-1/2 w-full">
			<label className="block mb-2 text-lg">Maximum Salary</label>
			<input type="text" placeholder="$100k"
			{...register("maxprice")} className="create-job-input" />

		</div>

	  </div>
	  {/* 3rd row */}
	  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
		<div className="lg:w-1/2 w-full">
			<label className="block mb-2 text-lg">Salary types</label>
			<select {...register("salaryType")} className="create-job-input">
        <option value="">Choose your salary</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>

		</div>
		<div className="lg:w-1/2 w-full">
			<label className="block mb-2 text-lg">Job Location</label>
			<input type="text" placeholder="New York"
			{...register("jobLocation")} className="create-job-input" />

		</div>

	  </div>
	  {/* 4th row */}
	  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
	  <div className="lg:w-1/2 w-full">
			<label className="block mb-2 text-lg">Job Posting Date</label>
			<input type="date" placeholder="2023-11-30"
			{...register("postingDate")} className="create-job-input" />

		</div>

		<div className="lg:w-1/2 w-full">
			<label className="block mb-2 text-lg">Experience Level</label>
			<select {...register("salaryType")} className="create-job-input">
        <option value="">Choose your Experience</option>
        <option value="NoExperience">NoExperience</option>
        <option value="Internship">Internship</option>
        <option value="Work remotely">Work remotely</option>
      </select>

		</div>
		
	  </div>
	  {/* 5th row */}
	  <div>
		<label className="block mb-2 text-lg">Required skill sets:</label>
		<CreatableSelect
		defaultValue={selectedOption}
		onChange={setSelectedOption}
		options={options}
		isMulti
		 className="create-job-input py-4"/>
	  </div>

      <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"/>
    </form>
		</div>
	</div>
  )
}

export default CreateJob