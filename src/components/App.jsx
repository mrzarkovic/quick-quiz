import React, {Component} from 'react';

import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

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

    setCurrent (current) {
        this.setState({
            current: current
        });
    }

    setScore (score) {
        this.setState({
            score: score
        });
    }

    render () {
        if (this.state.current > this.state.questions.length) {
            var scorebox = '';
            var results = <Results {...this.state} />
        } else {
            var scorebox = <Scorebox {...this.state} />;
            var results = '';
        }

        return (
            <div className="container">
                <h1>Quick Quiz</h1>
                <p className="lead">A simple quiz application written in ReactJS</p>
                <hr/>
                {scorebox}
                <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
                {results}
            </div>
        );
    }
}

export default App;