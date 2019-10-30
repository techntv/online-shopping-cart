import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='display-1 font-weight-bold'>Contact</h1>
        <form action="">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" name="" id="" className='form-control' />

              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="" id="" className='form-control' />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="name">Phone:</label>
                <input type="number" name="" id="" className='form-control' />
              </div>
            </div>
          </div>

          <div className="text-right">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
