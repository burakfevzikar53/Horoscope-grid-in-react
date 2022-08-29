import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      aslan: true,
      koc: true,
      balık: true,
      boga: true,
      ikizler: true,
      yengec: true,
      basak: true,
      terazi: true,
      akrep: true,
      yay: true,
      oglak: true,
      kova: true,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="parent">
          <div onClick={() => this.setState({ aslan: !this.state.aslan })}>
            {this.state.aslan ? (
              <button>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Leo.svg/120px-Leo.svg.png"
                  alt="resim"
                ></img>
              </button>
            ) : (
              <button>
                <h4 className="amg">ASLAN</h4>
              </button>
            )}
          </div>
          <div onClick={() => this.setState({ koc: !this.state.koc })}>
            {this.state.koc ? (
              <button>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Aries.svg/120px-Aries.svg.png"
                  alt="resim"
                ></img>
              </button>
            ) : (
              <button>
                <h4 className="img">KOÇ</h4>
              </button>
            )}
          </div>
          <div onClick={() => this.setState({ boga: !this.state.boga })}>
            {this.state.boga ? (
              <button>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Taurus.svg/120px-Taurus.svg.png"
                  alt="resim"
                ></img>
              </button>
            ) : (
              <button>
                <h4 className="img">BOĞA</h4>
              </button>
            )}
          </div>
          <div onClick={() => this.setState({ ikizler: !this.state.ikizler })}>
            {this.state.ikizler ? (
              <button>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gemini.svg/120px-Gemini.svg.png"
                  alt="resim"
                ></img>
              </button>
            ) : (
              <button>
                <h4 className="img">İKİZLER</h4>
              </button>
            )}
          </div>
          <div onClick={() => this.setState({ yengec: !this.state.yengec })}>
            {this.state.yengec ? (
              <button>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cancer.svg/120px-Cancer.svg.png"
                  alt="resim"
                ></img>
              </button>
            ) : (
              <button>
                <h4 className="img">YENGEÇ</h4>
              </button>
            )}
          </div>
          <div onClick={() => this.setState({ basak: !this.state.basak })}>
            {this.state.basak ? (
              <button>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Virgo.svg/120px-Virgo.svg.png"
                  alt="resim"
                ></img>
              </button>
            ) : (
              <button>
                <h4 className="img">BAŞAK</h4>
              </button>
            )}
          </div>
          <div onClick={() => this.setState({ terazi: !this.state.terazi })}>
            {this.state.terazi ? (
              <button>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Libra.svg/120px-Libra.svg.png"
                  alt="resim"
                ></img>
              </button>
            ) : (
              <button>
                <h4 className="img">TERAZİ</h4>
              </button>
            )}
          </div>
          <div onClick={() => this.setState({ akrep: !this.state.akrep })}>
            {this.state.akrep ? (
              <button>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Scorpio.svg/120px-Scorpio.svg.png"
                  alt="resim"
                ></img>
              </button>
            ) : (
              <button>
                <h4 className="img">AKREP</h4>
              </button>
            )}
          </div>
          <div onClick={() => this.setState({ yay: !this.state.yay })}>
            {this.state.yay ? (
              <button>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sagittarius.svg/120px-Sagittarius.svg.png"
                  alt="resim"
                ></img>
              </button>
            ) : (
              <button>
                <h4 className="img">YAY</h4>
              </button>
            )}
          </div>
          <div onClick={() => this.setState({ oglak: !this.state.oglak })}>
            {this.state.oglak ? (
              <button>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Capricorn.svg/120px-Capricorn.svg.png"
                  alt="resim"
                ></img>
              </button>
            ) : (
              <button>
                <h4 className="img">OĞLAK</h4>
              </button>
            )}
          </div>
          <div onClick={() => this.setState({ kova: !this.state.kova })}>
            {this.state.kova ? (
              <button>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Aquarius.svg/120px-Aquarius.svg.png"
                  alt="resim"
                ></img>
              </button>
            ) : (
              <button>
                <h4 className="img">KOVA</h4>
              </button>
            )}
          </div>
          <div onClick={() => this.setState({ balık: !this.state.balık })}>
            {this.state.balık ? (
              <button>
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pisces.svg/120px-Pisces.svg.png"
                  alt="resim"
                ></img>
              </button>
            ) : (
              <button>
                <h4 className="img">BALIK</h4>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
