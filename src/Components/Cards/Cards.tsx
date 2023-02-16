import Card from "./Card";

interface Props {
    data: object[]
}

const Cards = ({data}:Props) => {
    const mappedCards = data.map(card=>{
        return <Card></Card>
    })


    return ( 
        <>
        <h2 className="mt-5 font-bold text-[#6449ff] text-xl
        uppercase"></h2>
        {mappedCards}
        </>
     );
}
 
export default Cards;