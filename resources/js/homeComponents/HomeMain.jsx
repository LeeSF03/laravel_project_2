import React, { Component } from 'react';
import HomeContent from './HomeContent';

export class HomeMain extends Component {
    constructor() {
        super()
        this.state = {
            tab: 'me-tab'
        }
    }

    setTab = event => {
        this.setState({
            tab: event.target.id
        }, () => {
            console.log(event.target.id)
        })
    }

    /*Use this.props and map funcion to simplify the code*/


    render() {
        return (
            <div>
                <div className='d-flex justify-content-center my-4 mx-5'>
                    <div className='w-50 border-bottom border-2 border-dark pb-4'>
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <a className={`nav-link ${this.state.tab === 'me-tab' ? "active text-white bg-dark" : "text-dark"}`}
                                    id='me-tab' onClick={this.setTab}
                                    aria-selected={this.state.tab === 'me-tab' ? 'true' : 'false'}
                                    href="#">Posts</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${this.state.tab === 'portfolio-tab' ? "active text-white bg-dark" : "text-dark"}`}
                                    id='portfolio-tab' onClick={this.setTab}
                                    aria-selected={this.state.tab === 'portfolio-tab' ? 'true' : 'false'}
                                    href="#">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${this.state.tab === 'contacts-tab' ? "active text-white bg-dark" : "text-dark"}`}
                                    id='contacts-tab' onClick={this.setTab}
                                    aria-selected={this.state.tab === 'contacts-tab' ? 'true' : 'false'}
                                    href="#">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='mx-5 my-5'>
                    <HomeContent tab={this.state.tab} />
                </div>
            </div>
        )
    }
}

export default HomeMain