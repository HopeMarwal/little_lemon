//components
import Customize from './booking/Customize';
import Confirmation from './booking/Confirmation';
import Details from './booking/Details';
//style
import '../assets/scss/form.scss';

export default function BookingForm({step, setStep}) {
  return (
    <form>
      { step === 1 && <Customize step={step} setStep={setStep} /> }
      { step === 2 && <Details step={step} setStep={setStep} /> }
      { step === 3 && <Confirmation step={step} setStep={setStep} /> }
    </form>
  )
}
