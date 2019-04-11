/* Source: https://reactjs.org/docs/add-react-to-a-website.html */
'use strict';

const e = React.createElement;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.defaultText };
  }

  onClickHandler(){
    let text = this.state.text;
    if (this.props.altText && this.state.text === this.props.defaultText) {
        text = this.props.altText ;
    }
    else{
        text = this.props.defaultText ;
    }
    this.setState({ text: text })
    this.props.onClickFunc();
  }

  render() {   

    return e(
      'button',  
      { onClick: () => this.onClickHandler(), className: this.props.className }, this.state.text,
    );
  }
}

