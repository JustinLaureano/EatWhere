// console.log('Visilby is running');
// const appRoot = document.getElementById('app');
// const details = 'Hey, These are sweet details.';
// let showDetails = false;

// const toggleDetails = () => {
//     showDetails = !showDetails;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleDetails}>
//                 {showDetails ? 'Hide Details' : 'Show Details'}
//             </button>
//             {showDetails && <p>{details}</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    };
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
        console.log(this.state.visibility);
    };
    render() {
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && <p>These are details</p>}
            </div>
        );
    };
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));