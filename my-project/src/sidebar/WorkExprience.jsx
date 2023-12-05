import React from 'react'
import InputField from '../Component/InputField'

function WorkExprience({handleChange}) {
  return (
	<div>
		<h5 className='text-lg font-medium mb-2'>Work Exprience</h5>
		<div>
		<label className='sidebar-label-container'>
			<input type='radio' name='test' id='test' value="" onChange={handleChange}/>
             <span className='checkmark'></span>Any Exprience
		</label>
        <InputField handleChange={handleChange} value="Internship" title="Internship" name="test"/>
		<InputField handleChange={handleChange} value="Work remotly" title="Work remotly" name="test"/>
		
		</div>
		</div>
  )
}

export default WorkExprience