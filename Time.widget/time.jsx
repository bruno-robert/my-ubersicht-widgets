export const className = `
  left: 260px;
  top: 260px;
  font-size: 48px;
  width: 1160px;
  height: 200px;
  color: #ffffff;
  font-family: "Lucida Grande";
`
export const command = "date +%H:%M:%S";


export const render = ({output, error}) => {
  return error ? (
    <div>Something went wrong: <strong>test {String(error)}test</strong></div>
  ) : (
    <div>
      {String(output)}
    </div>
  );
}