
import Card from './Card';

function CardService() {

  return (
    <div className='container text-center ml-5'>
      <div className='row mt-5'>
        <div className="col">
          <Card name="Sample"/>
        </div>
        <div className="col">
          <Card/>
        </div>
        <div className="col">
          <Card/>
        </div>
      </div>
    </div>

  )
}

export default CardService;
