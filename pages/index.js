import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import SuperComponent from '../components/SuperComponent'
import axios from 'axios'

class Index extends SuperComponent {
    

    static getInitialProps() {
        return { initialData: [1,2,3,4] }
    }

    constructor(props) {
        super(props)

        this.state = {
            title: 'I am Index Page'
        }

        //this.updateTitle = this.updateTitle.bind(this)
    }

    componentDidMount() {
        
    }

    updateTitle = () => {
        this.setState({title: 'I am Updated Index Page'})
    }

    render() {
        const { title } = this.state;
        const initialData = this.props.initialData;
        //const title = this.state.title; 

        return (
            <BaseLayout>
                <h1>I am Index Page</h1>
                <h2>{ title }</h2>
                <button onClick={ this.updateTitle }> Change Title </button>
            </BaseLayout>
        )
    }
}

export default Index;
