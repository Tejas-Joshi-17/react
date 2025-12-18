
import Card from './Card';

const sampleObject = [
  {
    name : "sachin tencudule",
    age : 23
  },
    {
    name : "virat kohli",
    age : 234
  },
    {
    name : "dhobi",
    age : 232
  }
]

function CardService() {

  return (
    <div className='container text-center ml-5'>
      <div className='row mt-5'>
        {sampleObject.map((player, index) => (
          <div className="col" key={index}>
            <Card name={player.name} age={player.age} />
          </div>
        ))}
      </div>
    </div>

  )
}

export default CardService;
