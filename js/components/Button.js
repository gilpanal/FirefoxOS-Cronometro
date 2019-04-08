/* Source: https://reactjs.org/docs/add-react-to-a-website.html */
'use strict';

const e = React.createElement;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'start' };
  }

  onClickHandler(){
    let text = this.state.text;
    if (this.state.text === 'start') {
        text = 'stop ' ;
    }
    else{
        text = 'start' ;
    }
    this.setState({ text: text })
  }

  render() {   

    return e(
      'button',
      { onClick: () => this.onClickHandler() },
      this.state.text
    );
  }
}

const domContainer = document.querySelector('.button_container');
ReactDOM.render(e(Button), domContainer);
