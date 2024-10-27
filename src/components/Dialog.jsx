import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
Modal.setAppElement("#root");

const Dialog = ({ isOpen, onRequestClose, isButton, title, message }) => {
    const navigate = useNavigate();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.9)", // Dark opaque backdrop
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          position: "relative",
          inset: "unset", // Prevent default inset
          padding: "30px",
          border: "none",
          borderRadius: "16px",
          backgroundColor: "#0b0127", // Match your color scheme
          width: "420px",
          maxWidth: "90vw",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)", // Subtle shadow for elevation
          outline: "none", // Remove the default modal outline
        },
      }}
    >
      <h2
        style={{
          marginBottom: "15px",
          color: "#C2B280",
          fontWeight: 600,
          fontFamily: "monospace",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          marginBottom: "40px",
          color: "#C2B280",
          fontFamily: "monospace",
        }}
      >
        {message}
      </p>
      <div style={{ textAlign: "right" ,display:"flex",gap:"10px",justifyContent:"flex-end"}}>
        {
            !isButton && (
                <button
          onClick={onRequestClose}
          style={{
            padding: "8px 8px",
            backgroundColor: "#1976D2",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#115293")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1976D2")}
        >
          Close
        </button>
            )
        }
        { isButton && (
          <>
          <button
          onClick={()=>{
            sessionStorage.removeItem('taskName');
            sessionStorage.removeItem('completesessions');
            sessionStorage.removeItem('pomos');
            navigate('/services')}}
            style={{
              padding: "8px 8px",
              backgroundColor: "#1976D2",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#115293")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1976D2")}
          >
            Do More tasks
          </button>
           <button
           onClick={()=>{
             sessionStorage.removeItem('taskName');
             sessionStorage.removeItem('completesessions');
             sessionStorage.removeItem('pomos');
             navigate('/')}}
             style={{
               padding: "8px 8px",
               backgroundColor: "#1976D2",
               color: "#fff",
               border: "none",
               borderRadius: "8px",
               cursor: "pointer",
               fontSize: "16px",
               transition: "background-color 0.3s ease",
             }}
             onMouseOver={(e) => (e.target.style.backgroundColor = "#115293")}
             onMouseOut={(e) => (e.target.style.backgroundColor = "#1976D2")}
           >
             Go to Home
           </button>
           </>
        )
        }
      </div>
    </Modal>
  );
};

export default Dialog;
