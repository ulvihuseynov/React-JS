function Ulvi() {
  let arr = [1,2,3,4,5,6,7,8];
let sum=arr.reduce((acc,item)=>acc+=item)
  return (
    <div>
    {sum}
    </div>
  );
}
export default Ulvi;
