import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import SuperComponent from '../components/SuperComponent'


class Index extends SuperComponent {
    
    constructor(props) {
        super(props)

        this.state = {
            title: 'I am Index Page'
        }
    }

    componentDidMount() {
        
    }

    updateTitle() {
        this.setState({title: 'I am Updated Index Page'})
    }

    render() {
        return (
            <BaseLayout>
                <h1>I am Index Page</h1>
                <h2>{this.state.title}</h2>
                <button onClick={ () => this.updateTitle() }> Change Title </button>
            </BaseLayout>
        )
    }
}

export default Index;
