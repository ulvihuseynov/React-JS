
const shuffleArray=(array)=>{
return array.sort(()=>Math.random() - 0.5)
}


export const fetchApi= async(difficulty,amount)=>{
const url=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
const data = await (await fetch(url)).json()

return data.results.map(dt=>({
    ...dt,
    answers: shuffleArray([...dt.incorrect_answers , dt.correct_answer])
}

))
}