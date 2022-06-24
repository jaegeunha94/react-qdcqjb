import * as React from 'react';
 
const Test3 = memo(({test, test2, test3}) => {
  const a = test;
  const b = test2;
  const b = test3;

  return (
    <div>
      {a} {b}
    </div>
  );
});
 
export default Test3;