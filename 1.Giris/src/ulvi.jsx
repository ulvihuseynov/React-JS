function Ulvi() {
  let arr = [4, '6', 7, 'ananas', 11, 23,'alama'];

  return (
    <div>
      <p>{arr.filter((item) => typeof item ==='string')
        .map((item,index)=>(
            <p style={{
                backgroundColor:"green",
                padding:'10px',
                color:"white",
                fontSize:'20px',
                borderRadius:"10px",
                cursor:"pointer"
            }} key={index}>{item}</p>
        ))}</p>
    </div>
  );
}
export default Ulvi;
