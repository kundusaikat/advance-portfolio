import React from 'react'
import {PDFViewer} from '../../components/PDFViewer'

export const Resume = () => {
  return (
    <div className='bg-background2 text-text1 p-5 '>
      <p className='text-2xl text-center font-serif font-semibold my-5'>Resume</p>

      <PDFViewer />
    </div>
  )
}
