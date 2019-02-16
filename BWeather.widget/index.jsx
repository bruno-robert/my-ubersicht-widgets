export const className = `
  left: 230px;
  top: 0px;

  width: 1160px;
  height: 200px;
  color: #ffffff;

`


export const render = ({error}) => {
  $('head').append("<script id='weatherwidget-io-js' src='https://weatherwidget.io/js/widget.min.js'></script>");
  return error ? (
    <div>Something went wrong: <strong>test {String(error)}test</strong></div>
  ) : (
    <div>
      <a class="weatherwidget-io" href="https://forecast7.com/en/45d50n73d57/montreal/" data-label_1="MONTREAL" data-label_2="WEATHER" data-theme="dark" data-basecolor="" >MONTREAL WEATHER</a>
      
    </div>
    

  );
}