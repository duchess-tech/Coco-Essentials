// import {Typography } from '@mui/material';
import "../App.css"

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
        {/* <CircularProgress size={50} style={{ marginBottom: 20,color: '#4A0072 ' }} className='absolute '/> */}
        <img src="cocoLogo1.png" alt="CocoLogo" className="animate-spin w-24"  />
    {/* <Typography variant="h4" className='' style={{ textAlign: 'center' }}>
        <img src="cocoLogo1.png" alt="CocoLogo" />
    </Typography> */}
  </div>
  )
 
}

export default LoadingSpinner;