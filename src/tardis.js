import React from 'react'

class Tardis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tardis: {
                name: 'Time and Relative Dimension in Space',
                caps: false,
            },
            tardis2: {
                name: 'Time and Relative Dimension in Space',
                caps: true,
            }

        };
        this.changeIt = this.changeIt.bind(this);
        this.changeIt2 = this.changeIt2.bind(this);
    }

    changeIt = (text) =>{
        if (this.state.tardis.caps) {
          this.setState({
            tardis: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
      }
    changeIt2 = (text) =>{
        if (this.state.tardis2.caps) {
          this.setState({
            tardis2: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis2: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
      }


    render() {
        return (
            <div id="container">
                <div className="DivOne">
                    <div className="DivTwo">
                        <div className="DivThree">
                            <h3 onClick={()=> this.changeIt2(this.state.tardis2.name)}>{this.state.tardis2.name}</h3>

                            <h3 onClick={()=> this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>
                        </div>                   
                    </div>
                </div>
            </div>
        )
    }    
}


export default Tardis