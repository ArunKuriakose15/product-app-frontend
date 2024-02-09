import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const SearchProduct = () => {
    const [input, setInput] = new useState(
        {
            name: ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    const [output, setOutput] = useState([]);

    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3001/api/product/search", input).then((response) => {
            setOutput(response.data)
            console.log(response.data)

        })
    }
    useEffect(() => { readValues() }, [])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-primary" onClick={readValues}>Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                output.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                            <div class="card">
                                                <img src={value.url} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.name}</h5>
                                                    <p class="card-text">{value.price}</p>

                                                </div>
                                            </div>

                                        </div>
                                    }
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchProduct