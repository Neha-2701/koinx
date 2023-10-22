import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Checkbox, Typography } from '@mui/material';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState , useEffect} from 'react';


  

export default function Form() {
   const [purchase, setPurchase]=useState();
   const [sale, setSale] = useState();
   const [expense, setExpense] = useState();
   const [capital,setCapital] =useState();
    const [investment, setInvestment] =useState(true);
    const [isFirstFieldColored, setIsFirstFieldColored] = useState(true);
    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
    const toggleColor = () => {
      setIsFirstFieldColored(!isFirstFieldColored);
    };

    const handleCheckboxChange = (checkbox) => {
      if (checkbox === 1) {
        setCheckbox1Checked(true);
        setCheckbox2Checked(false);
      } else if (checkbox === 2) {
        setCheckbox1Checked(false);
        setCheckbox2Checked(true);
      }
    };
    console.log(isFirstFieldColored)
    useEffect(() => {
    const newCapital = parseInt(sale)-parseInt(purchase)-parseInt(expense);
    setCapital(newCapital);
    console.log(newCapital)
  }, [sale, purchase, expense]);

   const textFieldStyle = {
    backgroundColor: '#F0F0F0',
    margin :"2px" // Change the background color here
  };

   
   const handlePurchase = (event) => {
    setPurchase(event.target.value);
  };
  const handleSale = (event) => {
    setSale(event.target.value);
  };
  const handleExpense = (event) => {
    setExpense(event.target.value);
  };

  
  
  return (
    <div className='container'>
      <h1>Free Crypto Tax Calculator Australia</h1>
      <br></br>
    
      <form action="">
        <div className='rowFirst'>
        <div className="first">
        <label > Financial Year &nbsp;</label>
              <TextField style={textFieldStyle} value="FY 2023-23"  id="outlined-size-small"  size="small"/>
           
        </div>
        <div className="first">
        <label > Country &nbsp;</label>
              <TextField style={textFieldStyle} value="AUSTRALIA" id="outlined-size-small"  size="small"/>
           
        </div>
        </div>
        <br/>
        <hr/>
          <div className="form_container">
            <div className="form_control">
              <label > Enter purchase price of Crypto </label>
              <TextField style={textFieldStyle} value={purchase} onChange={handlePurchase} id="outlined-size-small"  size="small"/>
            </div>
            <div className="form_control">
              <label > Enter sale price of Crypto </label>
              <TextField  style={textFieldStyle} value={sale} onChange={handleSale} id="outlined-size-small" size="small"/>
            </div>

            <div className="form_control">
              <label  > Enter your Expenses </label>
              <TextField
              value={expense} 
              onChange={handleExpense}
          id="outlined-size-small"
          style={textFieldStyle}
          size="small"
        />
            </div>
           
            <div>
              <label>Investment type</label>
            <div className="control">
              
              
                
                <Typography> &lt;12 months</Typography>
                <Checkbox    checked={checkbox1Checked}
          onChange={() => handleCheckboxChange(1)}
          />
                <Typography> &gt;12 months</Typography>
                <Checkbox   checked={checkbox2Checked}
          onChange={() => handleCheckboxChange(2)}
          />
            </div>
            </div>
            <div className="form_control">
              <label > Select Your Annual Income </label>
              
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  size='small'
                  style={textFieldStyle}
                  
                  >
                    <MenuItem value={1}>$0 - $18,200</MenuItem>
                    <MenuItem value={2}>$18,201 - $45,000</MenuItem>
                    <MenuItem value={3}>$45,001 - $120,000</MenuItem>
                    <MenuItem value={4}>$120,001 - $180,000</MenuItem>
                    <MenuItem value={5}>$180,001+</MenuItem>
                  </Select>

            </div>
            <div className="taxRate">
              <p>Tax Rate</p>
              <p>$ 5,902 + 32.5% of excess over $45,001</p>
            </div>
            <div className="form_control">
              
              <label > Capital gains amount </label>
              <TextField
          id="outlined-size-small"
          style={textFieldStyle}
          size="small"
          value={capital}
        />
            </div>
            <div className="form_control">
              <label> Discount for long term gains </label>
              <TextField
                id="outlined-size-small"
                style={textFieldStyle}
                size="small"
                value={capital>0 ? capital/2 : 0}
              />
              
            </div>
            <div className="form_control net_capital">
            <h2>Net Capital gains tax amount</h2>
                <h1>{capital? capital:0}</h1>
            </div>
            <div className="form_control tax_pay">
              <h2>The tax you need to pay*</h2>
                <h1>{capital? capital*0.325:0}</h1>
            </div>
            
           
          </div>
          
         
        </form>
    </div>
  )
}
