export const className = `
  left: 260px;
  top: 345px;
  font-size: 18px;
  width: 1160px;
  height: 200px;
  color: #ffffff;
  font-family: "Andale Mono";
`
export const command = "osascript 'Current-track.widget/current-track.applescript'";

export const refreshFrequency = 3000;


export const render = ({output, error}) => {
  return error ? (
    <div>Something went wrong: <strong>test {String(error)}test</strong></div>
  ) : (
    <div>
      {String(output)}
    </div>
    

  );
}