import { useNavigation } from "react-router-dom";


const SubmitBtn = ({text}) => {
    const navigation = useNavigation();
    
    // We want to check if we are submitting the form
    const isSubmitting = navigation.state === 'submitting'
  return (
    <>
      <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
        {isSubmitting? (
        <>
            <span className="loading loading-ball"></span>
            sending...
        </>):(
            text || 'submit'
        )}
        </button>
    </>
  )
}

export default SubmitBtn;
