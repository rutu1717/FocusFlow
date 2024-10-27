import Lottie from 'lottie-react';
import studentAnimation from '../assets/studentanimation.json'; // Replace with the correct path
const StudentAnimation = () => {
  return (
    <div style={{display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '50vh',
      width:'50vw'
     }}>
      <Lottie 
        animationData={studentAnimation} 
        loop={true} 
        style={{ width: '55vw', height: '75vh', margin: -30, padding: 0 }} 
      />
    </div>
  );
};

export default StudentAnimation;
