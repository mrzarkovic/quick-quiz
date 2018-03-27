import React, {Component} from 'react';

import QuestionList from './quiz/QuestionList.jsx'

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Michael'
                        },
                        {
                            id: 'b',
                            text: 'Milos'
                        },
                        {
                            id: 'c',
                            text: 'Brad'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 2,
                    text: 'What is your last name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Zarkovic'
                        },
                        {
                            id: 'b',
                            text: 'Zek'
                        },
                        {
                            id: 'c',
                            text: 'Monte'
                        }
                    ],
                    correct: 'a'
                },
                {
                    id: 3,
                    text: 'What is your mother\'s name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Lucy'
                        },
                        {
                            id: 'b',
                            text: 'Donna'
                        },
                        {
                            id: 'c',
                            text: 'Mirjana'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 4,
                    text: 'What is your brothers name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Bojan'
                        },
                        {
                            id: 'b',
                            text: 'Zoran'
                        },
                        {
                            id: 'c',
                            text: 'Hose'
                        }
                    ],
                    correct: 'a'
                }
            ],
            score: 0,
            current: 1
        }
    }
    render () {
        return (
            <div className="container">
                <QuestionList {...this.state} />
            </div>
        );
    }
}

export default App;