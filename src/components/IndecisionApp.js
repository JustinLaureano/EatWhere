import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Valid Value to Add Item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    };

    handleCloseModal = () => {
        this.setState(() => ({selectedOption: undefined}));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {
            // Do Nothing
        };
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        };
    };

    componentWillUnmount() {
        console.log('componentWillUnmount');
    };

    render() {
        const subtitle = "Can't Choose? We Will.";
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        handlePick={this.handlePick}
                        hasOptions={this.state.options.length > 0} 
                    />
                    <div className="widget">
                        <Options
                            handleDeleteOptions={this.handleDeleteOptions}
                            options={this.state.options}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        /> 
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        );
    };
};