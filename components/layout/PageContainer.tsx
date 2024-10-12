import React from "react"

const PageContainer = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {children}
   
    </div>
  )
}
export default PageContainer