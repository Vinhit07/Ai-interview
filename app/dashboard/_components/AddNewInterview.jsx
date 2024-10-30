'use client'
import React, { useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from  "../../../@/components/ui/dialog.jsx"

import { Input } from "@/components/ui/input"
//import {chatSession} from "../../../utils/Geminiapi.js"
import { chatSession } from '../../../utils/Geminiapi.js'


console.log(chatSession+"abc")

  
function AddNewInterview() {
    const [openDialog,setOpenDialog] =useState(false)
    const [jobPositon,setJobPosition] =useState("Full Stack Developer")
    const [jobDesc,setJobDesc] =useState("React")
    const [jobExperience,setJobExperience] =useState(5)
    const [loading,setLoading]=useState(false)

    const onSubmit=async(e)=>{
      e.preventDefault()
      console.log(jobPositon,jobDesc,jobExperience)
      const InputPrompt = "Job Position: "+jobPositon+", Job Description:"+jobDesc+", Years of Experience:"+jobExperience+", Depends on this information please give me 5 Interview question with Answered in Json Format, Give Question and Answered as field in JSON"
      //const InputPrompt = "Job Position: Full Stack Developer, Job Description: Angular React, Mysql, Years of Experience: 5, Depends on this information please give me 5 Interview question with Answered in Json Format, Give Question and Answered as field in JSON"
      
      
      const result = await chatSession.sendMessage(InputPrompt)
      const mockjsonresp=(result.response.text()).replace('```json','').replace('```','')
      //const ges = await chatSession.sendMessage("Job Position: Full Stack Developer, Job Description: Angular React, Mysql, Years of Experience: 5, Depends on this information please give me 5 Interview question with Answered in Json Format, Give Question and Answered as field in JSON")
      console.log(JSON.parse(mockjsonresp))
    }
  return (
    <div>
    <div className='p-10 border rounded-lg bg-secondary hover:scale-105 
    hover:shadow-md cursor-pointer transition-all' 
    onClick={()=>setOpenDialog(true)}>
        <h2 className='text-lg text-center'>+ Add new</h2>
    </div>
    <Dialog open={openDialog}>

    <DialogContent className="max-w-2xl">
        <DialogHeader>
        <DialogTitle className='text-2xl'>Tell us more about your job interview</DialogTitle>
        <DialogDescription>
          <form onSubmit={onSubmit}>
            <div>
              <h2> Add Details about your job position/role, jos Description and years of experience</h2>
              <div className='mt-7 my-3'>
                  <label>Job Role/job position</label>
                  <Input placeholder="Ex. Full Stack Developer" required
                  onChange={(e)=>setJobPosition(e.target.value)}/>
              </div>
              <div className='my-3'>
                  <label>Job Description/Tech Stack(In short)</label>
                  <Input placeholder="Ex. React, Angular, SQL" required
                  onChange={(e)=>setJobDesc(e.target.value)}/>
              </div>
              <div className='my-3'>
                  <label>Years of experience</label>
                  <Input placeholder="Ex. 5" type="number" max="100" required
                  onChange={(e)=>setJobExperience(e.target.value)}/>
              </div>
            </div>
            <div className='flex gap-5 justify-end'>
                <button type='button' varient ="ghost" onclick={()=>setOpenDialog(false)}>Cancel</button>
                <button type='submit'>Start Interview</button>
            </div>
          </form>
        </DialogDescription>
        </DialogHeader>
    </DialogContent>
    </Dialog>

    </div>
    
  )
}

export default AddNewInterview;
