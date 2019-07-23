import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'

// const Index = () => {
//     return (
//         <h1>I am Index Page</h1>
//     )
// }

class Index extends React.Component {
    
    render() {
        return (
            <BaseLayout>
                <h1>I am Index Page</h1>
            </BaseLayout>
        )
    }
}

export default Index;

/* <Header title={'I am Header Component'}>
<h1>I am Header Subtitle</h1>
</Header> */