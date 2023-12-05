import React from 'react'
import InputField from '../Component/InputField'

function EmploymentType({handleChange}) {
  return (
	<div>
		<h5 className='text-lg font-medium mb-2'>Types of Employment</h5>
		<div>
		<label className='sidebar-label-container'>
			<input type='radio' name='test' id='test' value="" onChange={handleChange}/>
             <span className='checkmark'></span>All
		</label>
        <InputField handleChange={handleChange} value="Full-time" title="Full-time" name="test"/>
		<InputField handleChange={handleChange} value="Temporary" title="Temporary" name="test"/>
		<InputField handleChange={handleChange} value="Part-time" title="Part-time" name="test"/>
		
		</div>
		</div>
  )
}

export default EmploymentType