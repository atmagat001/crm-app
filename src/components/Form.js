import React from 'react'
import './Form.css'
import {v4 as uuidv4} from 'uuid'


function Form(
    {listings, setListings, name, setName, owner, setOwner, address, setAddress, city, setCity, lotArea, setLotArea, pricePerSqm, setPricePerSqm, zoning, setZoning, currentUse, setCurrentUse, id, setId, edit, setEdit, input, setInput}   


) {

    const onInputChange = (e) => {
       
        switch(e.target.name){
            case 'name':
                setName(e.target.value)
                setInput({...input, name: ''})
                break
            case 'owner':
                setOwner(e.target.value)
                break
            case 'address':
                setAddress(e.target.value)
                break
            case 'city':
                setCity(e.target.value)
                break
            case 'lot-area':
                setLotArea(e.target.value)
                break
            case 'price-persqm':
                setPricePerSqm(e.target.value)
                break
            case 'zoning':
                setZoning(e.target.value)
                break
            case 'current-use':
                setCurrentUse(e.target.value)
                break
            default:
                break
        }


    }


    const handleSubmit = (e) => {
      
        e.preventDefault()
        if(!name || !owner || !address || !city || !lotArea || !pricePerSqm || !zoning || !currentUse){
            alert('Please fill in all fields')
            return
        }

        const newListing = {
            id: uuidv4(),
            name,
            owner,
            address,
            city,
            lotArea,
            pricePerSqm,
            zoning,
            currentUse
        }

        setListings([...listings, newListing])
        
        
        setInput({
            name: '',
            owner: '',
            address: '',
            city: '',
            lotArea: '',
            pricePerSqm: '',
            zoning: '',
            currentUse: ''
        })



    }


  return (
    <div>
        <form 
            className="form"
            onSubmit={handleSubmit}
        >
            <input type="text" name ="name"  onChange={onInputChange} placeholder="Name" value={name}/>
            <input type="text" name ="owner"  onChange={onInputChange} placeholder="Owner on title" />
            <input type="text" name ="address"  onChange={onInputChange} placeholder="Address" />
            <input type="text" name ="city"  onChange={onInputChange} placeholder="City" />
            <input type="text" name ="lot-area"  onChange={onInputChange} placeholder="Lot Area" />
            <input type="text" name ="price-persqm"  onChange={onInputChange} placeholder="Price per sqm" />
            <input type="text" name ="zoning"  onChange={onInputChange} placeholder="Zoning" />
            <input type="text" name ="current-use"  onChange={onInputChange} placeholder="Current Use" />

            <button type="submit"
                
            
            >Submit</button>
        </form>


    </div>
  )
}

export default Form