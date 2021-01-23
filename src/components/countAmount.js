import data from '../names.json'
import '../App.css';

var total = 0;

function CountAmount() {
    return(data.names.map(
        (names, i) => {
            for(i = 0; i <= names.length; i++){
                total = total + names.amount[i];   
            }
            console.log(total);
        }
    )
    )
};
      

export default CountAmount;